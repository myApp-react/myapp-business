import React, { useState } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { PageHeaderWrapperProps } from '@ant-design/pro-layout/lib/PageHeaderWrapper';
import  { PageHeader } from '@/components'
import { Input, Button, Table, Tag, Modal, Tooltip, Row, Col, Form, Checkbox, Select, DatePicker } from 'antd';
import { PlusOutlined, FormOutlined, DeleteOutlined } from '@ant-design/icons';
import ProTable, { ProColumns } from '@ant-design/pro-table';

import styles from './index.less';

const tailLayout = {
  wrapperCol: { offset: 4, span: 20 },
};
const { MonthPicker, RangePicker } = DatePicker;

const valueEnum = {
  0: 'close',
  1: 'running',
  2: 'online',
  3: 'error',
};

export interface TableListItem {
  key: number;
  name: string;
  title: string;
  status: string;
  updatedAt: number;
  createdAt: number;
  progress: number;
  money: number;
}


const columns = [
  {
    title: '操作',
    key: 'action',
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
    title: '项目',
    dataIndex: 'name',
    render: text => <a>{text}</a>,
  },
  {
    title: '城市名称',
    dataIndex: 'age',
  },
  {
    title: '日期',
    dataIndex: 'address',
  },
  {
    title: '天气情况',
    key: 'tags',
    dataIndex: 'tags',
    render: tags => (
      <span>
        {tags.map(tag => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </span>
    ),
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
  const [form] = Form.useForm();

  const [addModalVisible, setModalVisible] = useState<boolean>(false);

  const handleModalVisible = (flag?: boolean) => {
    setModalVisible(!!flag)
  }

  return (
    <PageHeaderWrapper

      pageHeaderRender={
        (props: PageHeaderWrapperProps) => <PageHeader title={props.title} breadcrumb={props.breadcrumb} />
      }
      className={styles.main}
    >
      <div className={styles.toolbar}>
        <Button type='primary' icon={<PlusOutlined />} onClick={() => handleModalVisible(true)}>新增</Button>
        <Button>导入</Button>
        <Button>导出</Button>
        <Button>打印</Button>
        <Button>手动同步</Button>
        <Button>空值检索</Button>
        <Button>设置</Button>
      </div>
      <Modal
        title="新增"
        width={730}
        mask={false}
        centered
        destroyOnClose
        visible={addModalVisible}
        onCancel={() => handleModalVisible()}
        onOk={() => handleModalVisible()}
      >
        <Form
          form={form}
          initialValues={{
            ['remember']: true,
          }}
        >
          <Row gutter={[16, 8]}>
            <Col span={12}>
              <Form.Item
                name="username"
                label="项目"
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 18 }}
                rules={[
                  {
                    required: true,
                    message: 'Please input your name',
                  },
                ]}
              >
                <Select placeholder="请选择项目" >
                  <Select.Option value="demo">Demo</Select.Option>
                  <Select.Option value="demo1">Demo1</Select.Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="username1"
                label="城市"
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 18 }}
                rules={[
                  {
                    required: true,
                    message: 'Please input your name',
                  },
                ]}
              >
                <Select placeholder="请选择城市">
                  <Select.Option value="demo">Demo</Select.Option>
                  <Select.Option value="demo1">Demo1</Select.Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="date"
                label="日期"
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 18 }}
                rules={[
                  {
                    required: true,
                    message: 'Please input your name',
                  },
                ]}
              >
                <RangePicker />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="date1"
                label="天气状况"
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 18 }}
                rules={[
                  {
                    required: true,
                    message: 'Please input your name',
                  },
                ]}
              >
                <Input placeholder="请输入" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="date11"
                label="最低温度"
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 18 }}
                rules={[
                  {
                    required: true,
                    message: 'Please input your name',
                  },
                ]}
              >
                <Input placeholder="请输入" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="date111"
                label="最高温度"
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 18 }}
                rules={[
                  {
                    required: true,
                    message: 'Please input your name',
                  },
                ]}
              >
                <Input placeholder="请输入" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="date1111"
                label="风"
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 18 }}
                rules={[
                  {
                    required: false,
                    message: 'Please input your name',
                  },
                ]}
              >
                <Input placeholder="请输入" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="date11111"
                label="风"
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 18 }}
                rules={[
                  {
                    required: false,
                    message: '请输入',
                  },
                ]}
              >
                <Input placeholder="请输入" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item {...tailLayout} name="remember" valuePropName="checked" style={{marginLeft: 6, marginBottom: 0}}>
                <Checkbox>保存并新增</Checkbox>
              </Form.Item>
            </Col>
          </Row>
        </Form>

      </Modal>
      <div >
        <Table
          columns={columns}
          dataSource={data}
          size={'small'}
        />
      </div>

    </PageHeaderWrapper>
  );
};
