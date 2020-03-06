import React from 'react';
import { Drawer } from 'antd';


interface SetDrawerProps {
  title: string
  visible: boolean
  handleUpdateDrawerVisible: (flag?: boolean) => void
}

const SetDrawer: React.FC<SetDrawerProps> = ({ title, visible, handleUpdateDrawerVisible }) => {


  return (
    <Drawer
      title={title}
      visible={visible}
      getContainer={false}
      closable={false}
      maskStyle={{
        backgroundColor: 'rgba(255, 255, 255, 0.05)'
      }}
      onClose={() => handleUpdateDrawerVisible(false)}
      style={{ position: 'absolute' }}
    >
      我是
    </Drawer>
  )
};

export default SetDrawer;
