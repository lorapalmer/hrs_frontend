import React, {useState, FC} from 'react';
import {Link} from 'react-router-dom';
import {
  Form,
  Input,
  Tooltip,
  Select,
  Checkbox,
  Button,
  AutoComplete,
  Typography,
} from 'antd';
import {QuestionCircleOutlined} from '@ant-design/icons';
import register from './Register.module.css';

const {Option} = Select;
const {Title} = Typography;

const formItemLayout = {
  labelCol: {
    xs: {span: 24},
    sm: {span: 6},
  },
  wrapperCol: {
    xs: {span: 24},
    sm: {span: 16},
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const RegistrationForm: FC = () => {
  const [form] = Form.useForm();

  const onFinish = () => {
    console.log('Received values of form: ');
  };

  const prefixSelector = (
    <Form.Item name='prefix' noStyle>
      <Select style={{width: 70}}>
        <Option value='86'>+86</Option>
        <Option value='87'>+87</Option>
      </Select>
    </Form.Item>
  );

  const [autoCompleteResult, setAutoCompleteResult] = useState([]);

  const onWebsiteChange = () => {
    // if (!value) {
    //   setAutoCompleteResult([]);
    // } else {
    //   setAutoCompleteResult(
    //     // ['.com', '.org', '.net'].map((domain) => `${value}${domain}`),
    //   );
    // }
  };

  const websiteOptions = autoCompleteResult.map((website) => ({
    label: website,
    value: website,
  }));

  return (
    <section className={register.container}>
      <Form
        {...formItemLayout}
        form={form}
        name='register'
        onFinish={onFinish}
        initialValues={{
          residence: ['zhejiang', 'hangzhou', 'xihu'],
          prefix: '86',
        }}
        className={register.form}
        scrollToFirstError
      >
        <Title>Sign Up</Title>
        <Form.Item
          className={register.item}
          name='email'
          label='E-mail'
          rules={[
            {
              type: 'email',
              message: 'The input is not valid E-mail!',
            },
            {
              required: true,
              message: 'Please input your E-mail!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          className={register.item}
          name='password'
          label='Password'
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          className={register.item}
          name='confirm'
          label='Confirm'
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Please confirm your password!',
            },
            ({getFieldValue}) => ({
              validator(rule, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  'The two passwords that you entered do not match!',
                );
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          className={register.item}
          name='nickname'
          label={
            <span>
              Nickname&nbsp;
              <Tooltip title='What do you want others to call you?'>
                <QuestionCircleOutlined />
              </Tooltip>
            </span>
          }
          rules={[
            {
              required: true,
              message: 'Please input your nickname!',
              whitespace: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          className={register.item}
          name='phone'
          label='Phone Number'
          rules={[{required: true, message: 'Please input your phone number!'}]}
        >
          <Input addonBefore={prefixSelector} style={{width: '100%'}} />
        </Form.Item>

        <Form.Item
          className={register.item}
          name='website'
          label='Website'
          rules={[{required: true, message: 'Please input website!'}]}
        >
          <AutoComplete
            options={websiteOptions}
            onChange={onWebsiteChange}
            placeholder='website'
          >
            <Input />
          </AutoComplete>
        </Form.Item>

        <Form.Item
          className={register.item}
          name='agreement'
          valuePropName='checked'
          rules={[
            {
              validator: (_, value) =>
                value
                  ? Promise.resolve()
                  : Promise.reject('Should accept agreement'),
            },
          ]}
          {...tailFormItemLayout}
        >
          <Checkbox>
            I have read the <Link to='/'>agreement</Link>
          </Checkbox>
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type='primary' htmlType='submit'>
            Register
          </Button>
        </Form.Item>
      </Form>
    </section>
  );
};

export default RegistrationForm;
