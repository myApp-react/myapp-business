import { PageHeaderWrapper } from '@ant-design/pro-layout';
import React, { useState, useEffect } from 'react';
import { Spin } from 'antd';
import  PageHeader from '@/components/PageHeader/index'
import styles from './index.less';

export default () => {
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <PageHeaderWrapper
      pageHeaderRender={(props) => <PageHeader {...props}/>}
      className={styles.main}
    >
      <div style={{ paddingTop: 100, textAlign: 'center' }}>
        1212
      </div>
    </PageHeaderWrapper>
  );
};
