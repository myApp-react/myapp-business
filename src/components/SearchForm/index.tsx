import React, { useState, useEffect } from 'react';

import { Spin, Form, Row, Col, Select, Radio, Button, Input, Table, Tooltip, Tag } from 'antd';
import { SettingOutlined, DownOutlined } from '@ant-design/icons'

import styles from './index.less'

const FormItem = Form.Item;

const SearchForm: React.FC = () => {
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
              <Select placeholder="请选择">
                <Select.Option value="demo">Demo</Select.Option>
                <Select.Option value="demo1">Demo1</Select.Option>
              </Select>
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
              <Select placeholder="请选择">
                <Select.Option value="demo">Demo</Select.Option>
                <Select.Option value="demo1">Demo1</Select.Option>
              </Select>
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
                 <Button type='link' style={{display: 'none'}}>
                  展开<DownOutlined style={{marginLeft: 4}}/>
                </Button>
                <Tooltip title='搜索条件筛选'>
                  <Button type='link'>
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

export default SearchForm;
