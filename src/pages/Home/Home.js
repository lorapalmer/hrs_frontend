import React from 'react';
import {Typography, Form, Input, Button, Select} from 'antd';
// import {useDispatch, useSelector} from 'react-redux';
// import { createSupplier } from '../../redux/supplier/actions';
import './Home.css';
import Layout from '../../components/Layout';

const {Title} = Typography;
const {Option} = Select;

const layout = {
  labelCol: {span: 6},
  wrapperCol: {span: 16},
};

function Home() {
  const [form] = Form.useForm();
  // const dispatch = useDispatch();
  // const data = useSelector(state => state.supplier);

  // const check = () => dispatch(createSupplier());

  const onAmenitiesChange = (value) => {
    // switch (value) {
    //   case "male":
    //     form.setFieldsValue({ note: "Hi, man!" });
    //     return;
    //   case "female":
    //     form.setFieldsValue({ note: "Hi, lady!" });
    //     return;
    //   case "other":
    //     form.setFieldsValue({ note: "Hi there!" });
    //     return;
    // }
  };

  const onServicesChange = (value) => {};

  return (
    <Layout>
      <section className='venue_form__container'>
        <Form
          {...layout}
          form={form}
          name='control-hooks'
          className='venue_form'
        >
          <Title>Add Venue Form</Title>
          <Form.Item
            name='Name'
            label='Name'
            className='venue_form_label'
            rules={[{required: true}]}
          >
            <Input allowClear placeholder='Enter Supplier Name' />
          </Form.Item>
          <Form.Item
            name='H-Key'
            label='H-Key'
            className='venue_form_label'
            rules={[{required: true}]}
          >
            <Input allowClear placeholder='Enter H-Key Name' />
          </Form.Item>
          <Form.Item
            name='Amenities'
            label='Amenities'
            className='venue_form_label'
            rules={[{required: true}]}
          >
            <Select
              mode='multiple'
              allowClear
              placeholder='Choose Amenities'
              onChange={onAmenitiesChange}
            >
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
            className='venue_form_label'
            rules={[{required: true}]}
          >
            <Select
              mode='multiple'
              allowClear
              placeholder='Choose Services'
              onChange={onServicesChange}
            >
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
            className='venue_form_label'
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
    </Layout>
  );
}

export default Home;
