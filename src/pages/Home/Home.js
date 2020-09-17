import React from 'react';
import {Typography, Form, Input, Button} from 'antd';
// import {useDispatch, useSelector} from 'react-redux';
// import { createSupplier } from '../../redux/supplier/actions';
import './Home.css';
import Layout from '../../components/Layout';

const {Title} = Typography;

const layout = {
  labelCol: {span: 6},
  wrapperCol: {span: 16},
};

function Home() {
  const [form] = Form.useForm();
  // const dispatch = useDispatch();
  // const data = useSelector(state => state.supplier);

  // const check = () => dispatch(createSupplier());

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
            <Input placeholder='Enter Supplier Name' />
          </Form.Item>
          <Form.Item
            name='H-Key'
            label='H-Key'
            className='venue_form_label'
            rules={[{required: true}]}
          >
            <Input placeholder='Enter H-Key Name' />
          </Form.Item>
          <Form.Item
            name='Amenities'
            label='Amenities'
            className='venue_form_label'
            rules={[{required: true}]}
          >
            <Input placeholder='Enter Amenities Name' />
          </Form.Item>
          <Form.Item
            name='Description'
            label='Description'
            className='venue_form_label'
            rules={[{required: true}]}
          >
            <Input.TextArea placeholder='Enter Description Name' />
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
