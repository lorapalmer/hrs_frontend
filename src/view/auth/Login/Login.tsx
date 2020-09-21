import React, {FC} from 'react';
import {Form, Input, Button, Typography} from 'antd';
import {UserOutlined, LockOutlined} from '@ant-design/icons';
import login from './Login.module.css';

const {Title} = Typography;

const layout = {
  labelCol: {span: 6},
  wrapperCol: {span: 16},
};

const LoginForm: FC = () => {
  const [form] = Form.useForm();

  return (
    <section className={login.container}>
      <Form {...layout} form={form} className={login.form}>
        <Title>Log In</Title>
        <Form.Item
          name='UserName'
          label='UserName'
          className={login.item}
          rules={[{required: true}]}
        >
          <Input prefix={<UserOutlined />} placeholder='Your UserName' />
        </Form.Item>
        <Form.Item
          name='Password'
          label='Password'
          className={login.item}
          rules={[{required: true}]}
        >
          <Input
            prefix={<LockOutlined />}
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
  );
};

export default LoginForm;
