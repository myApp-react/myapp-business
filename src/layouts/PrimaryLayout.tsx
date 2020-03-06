import React, { useState, useEffect } from 'react';
import ProLayout, {
  MenuDataItem,
  BasicLayoutProps as ProLayoutProps,
  Settings,
  DefaultFooter,
} from '@ant-design/pro-layout';
import Link from 'umi/link';
import router from 'umi/router';
import { Dispatch } from 'redux';
import { Tabs, Menu, Dropdown } from 'antd';

import RightContent from '@/components/GlobalHeader/RightContent';
import defaultSettings from '../../config/defaultSettings';
import { ClickParam } from 'antd/lib/menu';

import styles from './index.less'


const { TabPane } = Tabs;
const MenuItem = Menu.Item

const footerRender = () => {
  return (
    <DefaultFooter
      links={[
        { key: 'test', title: 'layout', href: 'www.alipay.com' },
      ]}
      copyright="这是一条测试文案"
    />
  )
}

const menuDataRender = (menuList: MenuDataItem[]): MenuDataItem[] => {
  return menuList.map(item => {
    const localItem = { ...item, children: item.children ? menuDataRender(item.children) : [] };
    // console.log(Authorized.check(item.authority, localItem, null) as MenuDataItem)
    return localItem
  });
}

export interface BasicLayoutProps extends ProLayoutProps {
  breadcrumbNameMap: {
    [path: string]: MenuDataItem;
  };
  route: ProLayoutProps['route'] & {
    authority: string[];
  };
  settings: Settings;
  dispatch: Dispatch;
  location: {
    pathname: string
  }
}


const updateTree = (data: any[]) => {
  const treeData: any[] = data;
  const treeList: any[] = [];
  // 递归获取树列表
  const getTreeList = (data: any[]) => {
    data.forEach((node: any) => {
      if(!node.level && node.name){
        const currClosable = node.path !== '/welcome';
        treeList.push({ tab: node.name, key: node.path, closable: currClosable, content: node.component });
      }
      if (node.routes && node.routes.length > 0 && !node.hideInMenu) {
        getTreeList(node.routes);
      }
    });
  };
  getTreeList(treeData);
  return treeList;
};

const PrimaryLayout: React.FC<BasicLayoutProps> = props => {

  const { children, location, route } = props;
  const { routes } = route;
  const { pathname } = location;

  const tabLists = updateTree(routes);
  const homePage = Object.assign(tabLists[0]);
  const initKey = homePage.key;

  const [fullPathList, setPathList] = useState<any[]>([initKey]);
  const [pages, setPages] = useState<any[]>([homePage]);
  const [activeKey, setActiveKey] = useState<string>(initKey);


  useEffect(() => {
    if(activeKey !== pathname) setActiveKey(pathname);

    const currPages = tabLists.filter(_ => _.key === pathname);
    if(fullPathList.indexOf(pathname) < 0){
      setPages([...pages, ...currPages]);
      setPathList([...fullPathList, pathname]);
    }
  }, [activeKey, fullPathList, location, pages, pathname, tabLists]);

  /**删除*/
  const removeHandle = (targetKey: string | React.MouseEvent<HTMLElement>) => {
    const currPages = pages.filter(page => page.key !== targetKey);
    const currFullPathList = fullPathList.filter(path => path !== targetKey);

    setPages(currPages);
    setPathList(currFullPathList);
    // 判断当前标签是否关闭，若关闭则跳转到最后一个还存在的标签页
    if (!currFullPathList.includes(activeKey)) {
      const currActiveKey = currFullPathList[currFullPathList.length - 1];
      setActiveKey(currActiveKey)
      router.push(currActiveKey)
    }
  }

  const removeCurrentTabs = (e: string) => removeHandle(e);

  /**删除其他*/
  const closeExtraTabs = (e: string) => {
    if(e === initKey){
      setPages([homePage]);
      setPathList([initKey]);
      setActiveKey(e);
      router.push(e);
      return;
    }

    const currPages = pages.filter(page => page.key === e);
    const currFullPathList = fullPathList.filter(path => path === e);
    setPages([homePage, ...currPages]);
    setPathList([initKey, ...currFullPathList]);
    setActiveKey(e);
    router.push(e);
  }

  /**删除全部*/
  const closeAll = () => {
    setPages([homePage]);
    setPathList([initKey]);
    router.push(initKey);
  }

  const RightClickMenuHandle = ({ key, item, domEvent }: ClickParam) => {
    const vkey = domEvent.target.getAttribute('data-vkey');
    switch (key) {
      case '1':
        removeCurrentTabs(vkey);
        break;
      case '2':
        closeExtraTabs(vkey);
        break;
      case '3':
        closeAll();
        break
    }
  }

  const renderTabPaneMenu = (e: string) => (
    <Menu onClick={RightClickMenuHandle}>
      <MenuItem key='1' data-vkey={e} disabled={e === initKey}>关闭当前标签页</MenuItem>
      <MenuItem key='2' data-vkey={e} disabled={fullPathList.length === 1}>关闭其他标签页</MenuItem>
      <MenuItem key='3' data-vkey={e} disabled={fullPathList.length === 1}>关闭全部标签页</MenuItem>
    </Menu>
  );

  const renderTitle = (title: string, key: string) => {
    const menu = renderTabPaneMenu(key);
    return (
      <Dropdown overlay={menu} trigger={['contextMenu']}>
        <Link className='tabsLink' to={key} >{title}</Link>
      </Dropdown>
    )
  };

  return (
    <ProLayout
      loading={false}
      style={{
        height: '100vh',
      }}
      menuDataRender={menuDataRender}
      menuItemRender={(menuItemProps, defaultDom) => {
        if (menuItemProps.isUrl || menuItemProps.children || !menuItemProps.path) {
          return defaultDom;
        }
        return <Link to={menuItemProps.path}>{defaultDom}</Link>;
      }}
      breadcrumbRender={(routers = []) => [
        ...routers,
      ]}
      itemRender={(route, params, routes, paths) => {
        return (
          <span>{route.breadcrumbName}</span>
        );
      }}
      footerRender={footerRender}
      fixedHeader={true}
      rightContentRender={() => <RightContent />}
      {...props}
      {...defaultSettings}
    >
      <div className={styles.tabsWarp}>
        {
          pages && pages.length > 0 ? (
            <Tabs
              type="editable-card"
              activeKey={activeKey}
              hideAdd
              animated={false}
              tabBarGutter={-2}
              onEdit={removeHandle}
              tabBarStyle={{background: '#fff'}}
            >
              {
                pages.map(_ => (
                  <TabPane tab={renderTitle(_.tab, _.key)} key={_.key} closable={_.closable} />
                ))
              }
            </Tabs>
          ) : null
        }
      </div>
      <div style={{margin: '0 16px'}}>
        {children}
      </div>
    </ProLayout>
  )

}

export default PrimaryLayout;
