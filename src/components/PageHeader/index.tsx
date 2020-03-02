import React from 'react'
import { Breadcrumb } from 'antd'
import styles from './index.less'
import { BreadcrumbProps } from 'antd/es/breadcrumb';

interface pageHeaderProps {
  title: React.ReactNode
  breadcrumb: BreadcrumbProps
}

const Index: React.FC<pageHeaderProps> = ({title, breadcrumb}) => {
  const { routes, itemRender } = breadcrumb;
  return (
    <div className={styles.pageHeader}>
      <div className={styles.title}>{title}</div>
      <div className={styles.Breadcrumb}>
        <Breadcrumb itemRender={itemRender} routes={routes} />
        </div>
    </div>
  )
};

export default Index;
