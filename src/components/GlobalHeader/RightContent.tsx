import React from 'react';

import { SettingOutlined, CalendarOutlined } from '@ant-design/icons';
import Avatar from './AvatarDropdown'
// import { connect } from 'dva';
// import { ConnectProps, ConnectState } from '@/models/connect';
import styles from './index.less';

export type SiderTheme = 'light' | 'dark';
export interface GlobalHeaderRightProps  {
  theme?: SiderTheme;
  layout: 'sidemenu' | 'topmenu';
}

const GlobalHeaderRight: React.SFC<GlobalHeaderRightProps> = props => {

  return (
    <div className={styles.right}>
      <a
        className={styles.action}
      >
        <SettingOutlined style={{fontSize: 18}}/>
        <span className={styles.divider}>设置</span>
      </a>
      <a
        className={styles.action}
      >
        <CalendarOutlined style={{fontSize: 18}}/>
        <span className={styles.divider}>日程表</span>
      </a>
      <Avatar />
    </div>
  );
};

export default GlobalHeaderRight;
