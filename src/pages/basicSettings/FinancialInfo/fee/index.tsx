import { PageHeaderWrapper } from '@ant-design/pro-layout';
import React, { useState, useEffect } from 'react';

import { Tree, Input, Menu, Dropdown, message } from 'antd';
import {
  PlusSquareOutlined,
  FrownOutlined,
  SmileOutlined,
  MehOutlined,
  FrownFilled,
  DeleteOutlined,
  PlusCircleOutlined,
  MinusCircleOutlined,
  FormOutlined
} from '@ant-design/icons';

//<MinusSquareOutlined />


import  { PageHeader } from '@/components'

import styles from './index.less';
import { PageHeaderWrapperProps } from '@ant-design/pro-layout/lib/PageHeaderWrapper';

const { Search } = Input;
const { TreeNode } = Tree;

const menu = (
  <Menu>
    <Menu.Item key="1"><FormOutlined style={{fontSize: 15}}/>编辑</Menu.Item>
    <Menu.Divider />
    <Menu.Item key="2"> <PlusCircleOutlined style={{fontSize: 15}}/>新增</Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3" style={{color: '#f50'}}><DeleteOutlined style={{fontSize: 15, color: '#f50'}}/>删除</Menu.Item>
  </Menu>
);

const RenderTitle = (title: string) => {
  return (
    <Dropdown overlay={menu} trigger={['contextMenu']}>
      <div>{title}</div>
    </Dropdown>
  )
}

const treeData = [
  {
    title: '全部费用',
    key: '1-0',
    children: [
      {
        title: <div className={styles.treeNode}>
          <span>收入类</span>
          <span>
            <FormOutlined style={{marginRight: 10, fontSize: 15}}/>
            <PlusCircleOutlined style={{marginRight: 10, fontSize: 15}}/>
            <MinusCircleOutlined style={{fontSize: 15}}/>
          </span>
        </div>,
        key: '0-0',
        children: [
          {
            title: <div className={styles.treeNode}>
              <span>租金</span>
              <span>
            <FormOutlined style={{marginRight: 6, fontSize: 15}}/>
            <PlusCircleOutlined style={{marginRight: 6, fontSize: 15}}/>
            <MinusCircleOutlined style={{fontSize: 15}}/>
          </span>
            </div>,
            key: '0-0-0',
          },
          {
            title: RenderTitle('管理费用'),
            key: '0-0-2',
            children: [
              {
                title: RenderTitle('物业费'),
                key: '0-0-2-0',
              },
              {
                title: '物业费1',
                key: '0-0-2-1',
              },
            ]
          },
          {
            title: '固定费用',
            key: '0-0-1',
          },

        ],
      },
      {
        title: '支出类',
        key: '0-1',
        children: [
          {
            title: 'leaf',
            key: '0-1-0',
          },
          {
            title: 'leaf',
            key: '0-1-1',
          },
        ],
      },
      {
        title: '保证金',
        key: '0-2',
        children: [
          {
            title: 'leaf',
            key: '0-2-0',
          },
          {
            title: 'leaf',
            key: '0-2-1',
          },
        ],
      },
      {
        title: '维护费用',
        key: '0-3',
        children: [
          {
            title: 'leaf',
            key: '0-3-0',
          },
          {
            title: 'leaf',
            key: '0-3-1',
          },
        ],
      },
      {
        title: '运营费用',
        key: '0-4',
        children: [
          {
            title: 'leaf',
            key: '0-4-0',
          },
          {
            title: 'leaf',
            key: '0-4-1',
          },
        ],
      },
    ]
  },

];


export default () => {

  return (
    <PageHeaderWrapper
      pageHeaderRender={
        (props: PageHeaderWrapperProps) => <PageHeader title={props.title} breadcrumb={props.breadcrumb} />
      }
      className={styles.main}
    >
      <div className={styles.feeWarp}>
        <div className={styles.treeLeft}>
          <Search style={{ marginBottom: 20 }} placeholder="搜索" />
          <Tree
            showIcon={false}
            showLine={true}
            treeData={treeData}
            autoExpandParent={true}
            defaultExpandedKeys={['1-0']}
            blockNode
          />
        </div>
        <div className={styles.tableMain}>


        </div>
      </div>
    </PageHeaderWrapper>
  );
};
