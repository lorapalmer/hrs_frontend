import React from 'react';
import {Typography, Form, Input, Button, Select} from 'antd';
import {useDispatch} from 'react-redux';
import {createSupplierAction} from '../../../store/supplier/actions';
import venue from './Home.module.css';

const {Title} = Typography,
  {Option} = Select,
  layout = {
    labelCol: {span: 6},
    wrapperCol: {span: 16},
  };

const Home = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const submitSupplierData = () => {
    dispatch(createSupplierAction(form.getFieldsValue()));
  };

  const errorsData = () => {
    console.log(form.getFieldsError());
  };

  return (
    <section className={venue.container}>
      <Form
        {...layout}
        form={form}
        className={venue.form}
        onFinish={submitSupplierData}
        onFinishFailed={errorsData}
      >
        <Title>Add Venue Form</Title>
        <Form.Item
          name='Name'
          label='Name'
          className={venue.item}
          rules={[{required: true}]}
        >
          <Input allowClear placeholder='Enter Supplier Name' />
        </Form.Item>
        <Form.Item
          name='H-Key'
          label='H-Key'
          className={venue.item}
          rules={[{required: true}]}
        >
          <Input allowClear placeholder='Enter H-Key Name' />
        </Form.Item>
        <Form.Item
          name='Amenities'
          label='Amenities'
          className={venue.item}
          rules={[{required: true}]}
        >
          <Select mode='multiple' allowClear placeholder='Choose Amenities'>
            <Option value='Restaurant'>Restaurant</Option>
            <Option value='Bar'>Bar</Option>
            <Option value='Bike Parking'>Bike Parking</Option>
            <Option value='Elevator'>Elevator</Option>
            <Option value='Reception/Front Desk'>Reception/Front Desk</Option>
            <Option value='Lounge Area'>Lounge Area</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name='Services'
          label='Services'
          className={venue.item}
          rules={[{required: true}]}
        >
          <Select mode='multiple' allowClear placeholder='Choose Services'>
            <Option value='Wireless LAN'>Wireless LAN</Option>
            <Option value='Desk Cleaning'>Desk Cleaning</Option>
            <Option value='Breakfast'>Breakfast</Option>
            <Option value='News Paper'>News Paper</Option>
            <Option value='Pets'>Pets</Option>
            <Option value='Laundry Service'>Laundry Service</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name='Description'
          label='Description'
          className={venue.item}
          rules={[{required: true}]}
        >
          <Input.TextArea allowClear placeholder='Enter Description Name' />
        </Form.Item>
        <Form.Item>
          <Button type='primary' htmlType='submit'>
            Add Venue
          </Button>
        </Form.Item>
      </Form>
    </section>
  );
};

export default Home;
