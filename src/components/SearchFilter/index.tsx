import React from 'react'
import { TransferDirection, TransferItem } from 'antd/lib/transfer';
import { Modal, Button, Transfer } from 'antd'

import styles from './index.less'

interface SearchFilterProps {
  visible: boolean
  dataSource: TransferItem[]
  targetKeys: string[]
  initKeys: string[]
  handleUpdateModalVisible: (flag?: boolean, InitVal?: string[]) => void
  filterOption: (inputValue: string, item: TransferItem) => void
  handleFilterChange: (targetKeys: string[], direction: string, moveKeys: string[]) => void
  handleFilterSearch: (direction: TransferDirection, value: string) => void
}

const SearchFilter: React.FC<SearchFilterProps> =
  ({
     visible,
     dataSource,
     filterOption,
     targetKeys,
     initKeys,
     handleFilterChange,
     handleFilterSearch,
     handleUpdateModalVisible
  }) => {

  return (
    <Modal
      title="筛选设置"
      visible={visible}
      mask={false}
      maskClosable={false}
      width={808}
      onCancel={() => handleUpdateModalVisible(false, targetKeys)}
      centered
      afterClose={() => handleUpdateModalVisible()}
      footer={[
        <div key='footer' className={styles.modalFooter}>
          <div >
            <Button type="primary" onClick={() => handleUpdateModalVisible(true, initKeys)}>还原默认设置</Button>
          </div>
          <div>
            <Button onClick={() => handleUpdateModalVisible(false, targetKeys)}>取消</Button>
            <Button type="primary">确定</Button>
          </div>
        </div>
      ]}
    >
      <Transfer
        titles={['隐藏条件', '显示条件']}
        listStyle={{
          width: 360,
          height: 390,
        }}
        dataSource={dataSource}
        showSearch={true}
        filterOption={filterOption}
        targetKeys={targetKeys}
        onChange={handleFilterChange}
        onSearch={handleFilterSearch}
        render={(item: TransferItem) => item.title}
      />
    </Modal>
  )
}

export default SearchFilter;
