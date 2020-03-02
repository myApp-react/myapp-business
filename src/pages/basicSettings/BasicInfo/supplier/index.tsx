import { PageHeaderWrapper } from '@ant-design/pro-layout';
import React, { useState, useEffect } from 'react';
import { Spin } from 'antd';
import  { PageHeader } from '@/components'
import styles from './index.less';
import { PageHeaderWrapperProps } from '@ant-design/pro-layout/lib/PageHeaderWrapper';

export default ({children, location}) => {

  console.log(location)
  return (
    <PageHeaderWrapper
      pageHeaderRender={
        (props: PageHeaderWrapperProps) => <PageHeader title={props.title} breadcrumb={props.breadcrumb} />
      }
      className={styles.main}
    >
      <div style={{ paddingTop: 100, textAlign: 'center' }}>
        我是供应商管理
        {children}
      </div>
    </PageHeaderWrapper>
  );
};
