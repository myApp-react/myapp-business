import { PageHeaderWrapper } from '@ant-design/pro-layout';
import React, { useState, useEffect } from 'react';
import { Spin } from 'antd';
import styles from './index.less';

export default () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <div>
      1212
    </div>
    // <PageHeaderWrapper
    //   title={' '}
    //   content="这是一个新页面，从这里进行开发！"
    // >
    //   sjdsjd
    // </PageHeaderWrapper>
  );
};
