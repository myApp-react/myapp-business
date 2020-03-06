import React, { useState } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import  { PageHeader, SearchFilter, TableModalSet } from '@/components'
import { PageHeaderWrapperProps } from '@ant-design/pro-layout/lib/PageHeaderWrapper';
import { SettingOutlined, PlusOutlined, FormOutlined, DeleteOutlined } from '@ant-design/icons'
import { Form, Row, Col, Select, Button, Tooltip, Input, Table} from 'antd';

import styles from './index.less';
import { TransferDirection, TransferItem } from 'antd/lib/transfer';

const FormItem = Form.Item;

const searchData = [
  {
    key: "gys",
    title: "供应商名称",
  },
  {
    key: "gyslx",
    title: "供应商类型"
  },
  {
    key: "lxr",
    title: "联系人"
  },
]

const initKey = ["gys", "gyslx", "lxr"];

const columns = [
  {
    title: '操作',
    key: 'action',
    width: 122,
    render: (text, record) => (
      <span>
        <Tooltip title='编辑'>
          <a style={{ marginRight: 26 }}><FormOutlined style={{fontSize: 16}}/></a>
        </Tooltip>
        <Tooltip title='删除'>
          <a><DeleteOutlined style={{fontSize: 16}}/></a>
        </Tooltip>
      </span>
    ),
  },
  {
    title: '供应商编码',
    dataIndex: 'name',
  },
  {
    title: '供应商名称',
    dataIndex: 'age',
  },
  {
    title: '供应商类型',
    dataIndex: 'address',
  },
  {
    title: '主要联系人',
    dataIndex: 'tags',
  },
  {
    title: '联系人电话',
    dataIndex: 'tags1',
  },
  {
    title: '服务内容说明',
    dataIndex: 'tags2',
  },
  {
    title: '创建人',
    dataIndex: 'tags2',
  },
  {
    title: '创建时间',
    dataIndex: 'tags21',
  },
  {
    title: '最后修改人 ',
    dataIndex: 'tags211',
  },
  {
    title: '最后修改时间 ',
    dataIndex: 'tag1s211',
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

export default () => {
  const [ConditionVisible, handleConditionVisible] = useState<boolean>(false);
  const [TableModalVisible, handleTableModalVisible] = useState<boolean>(false);
  const [mockData] = useState<TransferItem[]>(searchData);
  const [targetKeys, handleTargetKeys] = useState<string[]>([]);

  const handleUpdateModalVisible = (flag?: boolean, InitVal?: string[]) => {
    handleConditionVisible(!!flag)
    handleTargetKeys(InitVal || [])
  }

  const handleUpdateTableModalVisible = (flag?: boolean, value?: string[]) => {
    handleTableModalVisible(!!flag)
  }

  const filterOption = (inputValue: string, item: TransferItem) => item.title.indexOf(inputValue) > -1;

  const handleFilterSearch = (direction: TransferDirection, value: string) => {
    console.log('search:', direction, value);
  };

  const handleFilterChange = (targetKeys: string[], direction: string, moveKeys: string[]) => {
    handleTargetKeys(targetKeys)
  };

  const searchForm = () => {
    const [form] = Form.useForm();
    return (
      <div className={styles.formwarp}>
        <Form form={form}>
          <Row gutter={[8, 8]}>
            <Col xs={24} sm={12} md={12} lg={8} xl={6}>
              <FormItem
                name='hahahs'
                label={'供应商名称'}
              >
                <Input placeholder="请输入"/>
              </FormItem>
            </Col>
            <Col xs={24} sm={12} md={12} lg={8} xl={6}>
              <FormItem
                name='hahahs1'
                label={'供应商类型'}
              >
                <Select placeholder="请选择">
                  <Select.Option value="demo">Demo</Select.Option>
                  <Select.Option value="demo1">Demo1</Select.Option>
                </Select>
              </FormItem>
            </Col>
            <Col xs={24} sm={12} md={12} lg={8} xl={6}>
              <FormItem
                name='hahahs2'
                label={'联系人'}
              >
                <Input placeholder="请输入"/>
              </FormItem>
            </Col>
            <Col xs={24} sm={12} md={12} lg={8} xl={6}>
              <span className={styles.submitButtons}>
                <Button type="primary" htmlType="submit">
                  查询
                </Button>
                <Button style={{ marginLeft: 8 }}>
                  重置
                </Button>
                <Tooltip title='搜索条件筛选'>
                  <Button type='link' onClick={() => handleUpdateModalVisible(true, initKey)}>
                    <SettingOutlined style={{fontSize: 16}}/>
                  </Button>
                </Tooltip>
              </span>
            </Col>
          </Row>
        </Form>
      </div>
    )

  }

  const SearchFilterMethods = {
    handleUpdateModalVisible,
    filterOption,
    handleFilterChange,
    handleFilterSearch
  }

  const TableModalSetMethods = {
    handleUpdateTableModalVisible
  }

  return (
    <PageHeaderWrapper
      pageHeaderRender={
        (props: PageHeaderWrapperProps) => <PageHeader title={props.title} breadcrumb={props.breadcrumb} />
      }
      className={styles.main}
    >
      <div>
        {searchForm()}
        <div className={styles.BtnToolBar}>
          <Button type='primary' icon={<PlusOutlined />} >新增</Button>
          <Button>导入</Button>
          <Button>导出</Button>
          <Button>打印</Button>
          <Button>手动同步</Button>
          <Button>空置检索</Button>
          <Button onClick={() => handleUpdateTableModalVisible(true)}>设置</Button>
        </div>
        <Table
          columns={columns}
          dataSource={data}
          size={'small'}

        />

        <TableModalSet
          visible={TableModalVisible}
          {...TableModalSetMethods}
        />


        {
          targetKeys && targetKeys.length > 0 ? (
            <SearchFilter
              visible={ConditionVisible}
              dataSource={mockData}
              targetKeys={targetKeys}
              initKeys={initKey}
              {...SearchFilterMethods}
            />
          ) : null
        }
      </div>
    </PageHeaderWrapper>
  );
};
