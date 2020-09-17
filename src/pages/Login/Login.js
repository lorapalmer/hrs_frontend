import React from 'react';
import {Form, Input, Button, Typography} from 'antd';
import {UserOutlined, LockOutlined} from '@ant-design/icons';
import Layout from '../../components/Layout';
import './Login.css';

const {Title} = Typography;

const layout = {
  labelCol: {span: 6},
  wrapperCol: {span: 16},
};

const LoginForm = () => {
  const [form] = Form.useForm();

  return (
    <Layout>
      <section className='login_form__container'>
        <Form
          {...layout}
          form={form}
          name='control-hooks'
          className='login_form'
        >
          <Title>Log In</Title>
          <Form.Item
            name='UserName'
            label='UserName'
            className='login_form_label'
            rules={[{required: true}]}
          >
            <Input
              prefix={<UserOutlined className='site-form-item-icon' />}
              placeholder='Your UserName'
            />
          </Form.Item>
          <Form.Item
            name='Password'
            label='Password'
            className='login_form_label'
            rules={[{required: true}]}
          >
            <Input
              prefix={<LockOutlined className='site-form-item-icon' />}
              type='password'
              placeholder='Your Password'
            />
          </Form.Item>
          <Form.Item>
            <Button type='primary' htmlType='submit'>
              Log In
            </Button>
          </Form.Item>
        </Form>
      </section>
    </Layout>
  );
};

export default LoginForm;
