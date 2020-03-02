import { PageHeaderWrapper } from '@ant-design/pro-layout';
import React, { useState, useEffect } from 'react';
import { useRequest } from '@umijs/hooks';

import { PageHeaderWrapperProps } from '@ant-design/pro-layout/lib/PageHeaderWrapper';
import  { PageHeader } from '@/components'



import styles from './index.less';

function getUsername() {
  return Promise.resolve('jack');
}

export default () => {
  const { data, error, loading } = useRequest(getUsername);
  console.log(loading)
  if (error) return <div>failed to load</div>
  if (loading) return <div>loading...</div>

  return (
    <PageHeaderWrapper
      pageHeaderRender={
        (props: PageHeaderWrapperProps) => <PageHeader title={props.title} breadcrumb={props.breadcrumb} />
      }
      className={styles.main}
    >
      <div>Username: {data}</div>
    </PageHeaderWrapper>
  );
};
