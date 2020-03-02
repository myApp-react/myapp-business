import { PageHeaderWrapper } from '@ant-design/pro-layout';
import React, { useState, useEffect } from 'react';
import { Spin } from 'antd';
import styles from './index.less';
import { PageHeaderWrapperProps } from '@ant-design/pro-layout/lib/PageHeaderWrapper';
import  { PageHeader } from '@/components'

export default () => {
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <PageHeaderWrapper
      pageHeaderRender={
        (props: PageHeaderWrapperProps) => <PageHeader title={props.title} breadcrumb={props.breadcrumb} />
      }
      className={styles.main}>
      <div style={{ paddingTop: 100, textAlign: 'center' }}>
        <Spin spinning={loading} size="large"></Spin>
      </div>
    </PageHeaderWrapper>
  );
};
