import React from 'react'
import { Modal } from 'antd';
import { NavigationConfirm, HistoryListener } from 'react-router-navigation-confirm';
import { ExclamationCircleOutlined } from '@ant-design/icons';

import styles from './index.less';

interface JumpPromptProps {
  title?: string
  Enabled: boolean
  describe?: string
}

export default ({title = '提示', Enabled, describe}: JumpPromptProps) => {

  const children = (
    { onConfirm, onCancel }:
    {
      onConfirm: () => void,
      onCancel: () => void
    }) => (
    <Modal
      title={title}
      visible={true}
      onCancel={onCancel}
      onOk={onConfirm}
      maskClosable={false}
      closable={false}
      mask={false}
      width={460}
    >
      <h3 className={styles.title}>
        <ExclamationCircleOutlined
          style={{
            color: '#FBBB3B',
            fontSize: 28,
            marginRight: 6
          }}
        />
        <span>{describe || '检测到新增内容还未保存，确认离开？'}</span>
      </h3>
    </Modal>
  )

  return (
    <div>
      <HistoryListener>
        <NavigationConfirm when={Enabled}>
          { children }
        </NavigationConfirm>
      </HistoryListener>
    </div>
  )
}
