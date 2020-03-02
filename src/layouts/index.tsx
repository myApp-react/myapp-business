import React, { Component } from 'react';
import { ConfigProvider } from 'antd';

import zhCN from 'antd/es/locale/zh_CN';
import 'moment/locale/zh-cn';

// import BaseLayout from './BaseLayout'


// class MainLayout extends Component<{}, {}>{
//   render() {
//     const { children } = this.props;
//     //判断登录逻辑
//
//     return <ConfigProvider locale={zhCN}>{children}</ConfigProvider>
//   }
// }
// export default MainLayout;


const Layout: React.FC = ({children}) => {
  return (
    <ConfigProvider locale={zhCN}>
      {children}
    </ConfigProvider>
  )
};
export default Layout;
