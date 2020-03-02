import { PageHeaderWrapper } from '@ant-design/pro-layout';
import React, { useState, useEffect } from 'react';
import { PlusOutlined, FormOutlined, DeleteOutlined } from '@ant-design/icons'
import { Spin, Form, Row, Col, Select, Radio, Button, Input, Table, Tooltip, Tag } from 'antd';
import  { PageHeader } from '@/components'
import styles from './index.less';
import { PageHeaderWrapperProps } from '@ant-design/pro-layout/lib/PageHeaderWrapper';

const initFormItem = () => {
  const [form] = Form.useForm();
  return (
    <Form form={form} className={styles.formWarp}>
      <Row gutter={{ md: 8, lg: 24, xl: 48 }}>
        <Col span={8} >
          <Form.Item
            name="username"
            label="项目"
          >
            <Select placeholder="请选择" style={{ width: '100%' }}>
              <Select.Option value="demo">Demo</Select.Option>
              <Select.Option value="demo1">Demo1</Select.Option>
            </Select>
          </Form.Item>
        </Col>
        <Col xl={6} lg={8} md={12} sm={24}>
          <Form.Item
            name="username2"
            label="楼栋"
          >
            <Select placeholder="请选择">
              <Select.Option value="demo">Demo</Select.Option>
              <Select.Option value="demo1">Demo1</Select.Option>
            </Select>
          </Form.Item>
        </Col>
        <Col xl={6} lg={8} md={12} sm={24}>
          <Form.Item
            name="username1"
            label="楼层"
          >
            <Select placeholder="请选择">
              <Select.Option value="demo">Demo</Select.Option>
              <Select.Option value="demo1">Demo1</Select.Option>
            </Select>
          </Form.Item>
        </Col>
        <Col xl={6} lg={8} md={12} sm={24}>
          <Form.Item
            name="username11"
            label="点位"
          >
            <Select placeholder="请选择">
              <Select.Option value="demo">Demo</Select.Option>
              <Select.Option value="demo1">Demo1</Select.Option>
            </Select>
          </Form.Item>
        </Col>
        <Col md={24} sm={24}>
          <Form.Item
            name="username111"
            label="启用"
          >
            <Radio.Group>
              <Radio value={1}>项目客流点位</Radio>
              <Radio value={2}>楼栋客流点位</Radio>
              <Radio value={3}>楼层客流点位</Radio>
              <Radio value={4}>店铺客流点位</Radio>
            </Radio.Group>
          </Form.Item>
        </Col>
      </Row>

    </Form>
  )
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
  // const
  const [form] = Form.useForm();
  const [expandStatus, setStatus] = useState<boolean>(false);

  return (
    <PageHeaderWrapper
      pageHeaderRender={
        (props: PageHeaderWrapperProps) => <PageHeader title={props.title} breadcrumb={props.breadcrumb} />
      }
      className={styles.main}
    >
      <Form form={form} className={styles.tableListForm}>
        <Row gutter={16}>
          <Col lg={6} md={12} sm={24} xs={24}>
            <Form.Item
              name="username"
              label="项目"
            >
              <Select placeholder="请选择" >
                <Select.Option value="demo">Demo121212121212</Select.Option>
                <Select.Option value="demo1">Demo1</Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col lg={6} md={12} sm={24} xs={24}>
            <Form.Item
              name="username2"
              label="楼栋"
            >
              <Select placeholder="请选择" >
                <Select.Option value="demo">Demo</Select.Option>
                <Select.Option value="demo1">Demo1</Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col lg={6} md={12} sm={24} xs={24}>
            <Form.Item
              name="username1"
              label="楼层"
            >
              <Select placeholder="请选择" >
                <Select.Option value="demo">Demo</Select.Option>
                <Select.Option value="demo1">Demo1</Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col lg={6} md={12} sm={24} xs={24}>
            <Form.Item
              name="username11"
              label="点位"
            >
              <Input />
            </Form.Item>
          </Col>
          <Col lg={18} md={24} sm={24} xs={24}>
            <Form.Item
              name="username111"
              label="启用"
            >
              <Radio.Group>
                <Radio value={1}>项目客流点位</Radio>
                <Radio value={2}>楼栋客流点位</Radio>
                <Radio value={3}>楼层客流点位</Radio>
                <Radio value={4}>店铺客流点位</Radio>
              </Radio.Group>
            </Form.Item>
          </Col>
          <Col lg={6} md={24} sm={24} xs={24}>
              <span className={styles.submitButtons}>
                <Button type="primary" htmlType="submit">
                  查询
                </Button>
                <Button style={{ marginLeft: 8 }}>
                  重置
                </Button>
                <a style={{ marginLeft: 8 }} >
                  展开
                </a>
              </span>
          </Col>
        </Row>
      </Form>
      <div className={styles.toolbar}>
        <Button type='primary' icon={<PlusOutlined />} >新增</Button>
        <Button>同步</Button>
        <Button>导出</Button>
        <Button>设置</Button>
      </div>
      <Table
        columns={columns}
        dataSource={data}
        size={'small'}
      />

    </PageHeaderWrapper>
  );
};
