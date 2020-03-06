import React, { useState } from 'react'
import { Modal, Table, Tooltip, Switch } from 'antd'
import { AlignLeftOutlined, AlignCenterOutlined, AlignRightOutlined, ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons'
import {
  sortableContainer,
  sortableElement,
  sortableHandle,
} from 'react-sortable-hoc';
import arrayMove from 'array-move';

import styles from './index.less'

interface TableModalSetProps {
  visible: boolean
  handleUpdateTableModalVisible: (flag?: boolean, value?: string[]) => void
}


const DragHandle = sortableHandle(() => (
  <Tooltip title='拖拽移动'>
    <a >
      <AlignRightOutlined style={{fontSize: 16}}/>
    </a>
  </Tooltip>
));

const SortableItem = sortableElement((props) => {
  const {value} = props;
  // console.log(props)
  return (
    <tr className='ant-table-row ant-table-row-level-0' >
      <td className={styles.isShow} style={{width: 100}}>
        <Switch checkedChildren="开" unCheckedChildren="关" size={'small'} defaultChecked />
      </td>
      <td className='ant-table-cell' style={{width: 70}}>
        <Switch checkedChildren="开" unCheckedChildren="关" size={'small'} defaultChecked />
      </td>
      <td className='ant-table-cell' style={{width: 144}}>
        <div className={styles.aligned}>
          <Tooltip title='上移'>
            <a style={{marginRight: 12}}>
              <ArrowUpOutlined  style={{fontSize: 16}}/>
            </a>
          </Tooltip>
          <Tooltip title='下移'>
            <a style={{marginRight: 12}}>
              <ArrowDownOutlined style={{fontSize: 16}}/>
            </a>
          </Tooltip>
          <DragHandle />
        </div>
      </td>
      <td className='ant-table-cell' style={{width: 228}}>
        New York No. 1 Lake Park
      </td>
      <td className='ant-table-cell' style={{width: 114}}>
        {value}
      </td>
      <td className='ant-table-cell' style={{width: 112}}>122</td>
      <td className='ant-table-cell' style={{width: 112}}>
        <div className={styles.aligned}>
          <Tooltip title='左对齐'>
            <a style={{marginRight: 12}}>
              <AlignLeftOutlined style={{fontSize: 16}}/>
            </a>
          </Tooltip>
          <Tooltip title='居中对齐'>
            <a style={{marginRight: 12}}>
              <AlignCenterOutlined style={{fontSize: 16}}/>
            </a>
          </Tooltip>
          <Tooltip title='右对齐'>
            <a >
              <AlignRightOutlined style={{fontSize: 16}}/>
            </a>
          </Tooltip>
        </div>
      </td>
    </tr>
  )
});

const SortableContainer = sortableContainer((props) => {
  // console.log(props)
  const { children } = props
  return <tbody style={{position: 'relative'}}>{children}</tbody>;
});



const columns = [
  {
    title: '显示',
    key: 'action',
    width: 100,
    className: styles.isShow,
    render: (text, record) => {
      return <Switch checkedChildren="开" unCheckedChildren="关" size={'small'} defaultChecked />
    }
  },
  {
    title: '固定列',
    dataIndex: 'name',
    render: (text, record) => {
      return <Switch checkedChildren="开" unCheckedChildren="关" size={'small'} defaultChecked />
    }
  },
  {
    title: '排序',
    dataIndex: 'age',
    width: 144,
    render: (text, record) => (
      <div className={styles.aligned}>
        <Tooltip title='左对齐'>
          <a style={{marginRight: 12}}>
            <ArrowUpOutlined  style={{fontSize: 16}}/>
          </a>
        </Tooltip>
        <Tooltip title='居中对齐'>
          <a style={{marginRight: 12}}>
            <ArrowDownOutlined style={{fontSize: 16}}/>
          </a>
        </Tooltip>
        <Tooltip title='右对齐'>
          <a >
            <AlignRightOutlined style={{fontSize: 16}}/>
          </a>
        </Tooltip>
      </div>
    )
  },
  {
    title: '默认表头',
    dataIndex: 'address',
  },
  {
    title: '自定义表头',
    dataIndex: 'tags',
  },
  {
    title: '宽度',
    dataIndex: 'tags1',
    width: 112,
    render: (text, record) => {
      return 133
    }
  },
  {
    title: '对齐方式',
    dataIndex: 'tags2',
    width: 112,
    render: (text, record) => (
      <div className={styles.aligned}>
        <Tooltip title='左对齐'>
          <a style={{marginRight: 12}}>
            <AlignLeftOutlined style={{fontSize: 16}}/>
          </a>
        </Tooltip>
        <Tooltip title='居中对齐'>
          <a style={{marginRight: 12}}>
            <AlignCenterOutlined style={{fontSize: 16}}/>
          </a>
        </Tooltip>
        <Tooltip title='右对齐'>
          <a >
            <AlignRightOutlined style={{fontSize: 16}}/>
          </a>
        </Tooltip>
      </div>
    )
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

const TableModalSet: React.FC<TableModalSetProps> = ({visible, handleUpdateTableModalVisible}) => {

  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6'])


  const onSortEnd = ({oldIndex, newIndex}) => {
    setItems(arrayMove(items, oldIndex, newIndex))
  };

  return (
    <Modal
      title='列设置'
      className={styles.modalwarp}
      visible={visible}
      mask={false}
      maskClosable={false}
      onCancel={() => handleUpdateTableModalVisible(false)}
      onOk={() => handleUpdateTableModalVisible(false)}
      centered
      width={880}
      bodyStyle={{
        padding: 0,
        height: 408
      }}
    >
      {/*<Table*/}
        {/*columns={columns}*/}
        {/*dataSource={data}*/}
        {/*size={'small'}*/}
        {/*pagination={false}*/}
      {/*/>*/}
      <div className='ant-table ant-table-small'>
        <table className={styles.tableList}>
          <colgroup>
            <col style={{width: 100, minWidth: 100}} />
            <col />
            <col style={{width: 144, minWidth: 144}} />
            <col/>
            <col/>
            <col style={{width: 112, minWidth: 112}} />
            <col style={{width: 112, minWidth: 112}} />
          </colgroup>
          <thead>
            <tr>
              <th className={styles.isShow}>显示</th>
              <th className='ant-table-cell'>固定列</th>
              <th className='ant-table-cell'>排序</th>
              <th className='ant-table-cell'>默认表头</th>
              <th className='ant-table-cell'>自定义表头</th>
              <th className='ant-table-cell'>宽度</th>
              <th className='ant-table-cell'>对齐方式</th>
            </tr>
          </thead>
          <SortableContainer
            onSortEnd={onSortEnd}
            hideSortableGhost={false}
            useDragHandle
            // lockAxis='y'
            helperClass={'list-active'}
          >
            {items.map((value, index) => (
              <SortableItem key={`item-${value}`} index={index} value={value} />
            ))}
          </SortableContainer>
        </table>
      </div>
    </Modal>
  )
}

export default TableModalSet;
