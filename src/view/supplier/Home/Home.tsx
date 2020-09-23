import React, {FC, useState, useEffect} from 'react';
import {Form, Input, Select} from 'antd';
// import {useDispatch} from 'react-redux';
// import {createSupplierAction} from '../../../store/supplier/actions';
import {AmenitiesType, IAmenity, ServicesType, IService} from './Home.types';
import validate from '../../common/validation';
import venue from './Home.module.css';

const {Option} = Select,
  layout = {
    labelCol: {span: 6},
    wrapperCol: {span: 16},
  };

const Home: FC = () => {
  const [amenities, setAmenities] = useState<AmenitiesType>(null);
  const [services, setServices] = useState<ServicesType>(null);
  const [form] = Form.useForm();
  // const dispatch = useDispatch();

  useEffect(() => {
    fetch('http://localhost:3001/amenities')
      .then((response) => response.json())
      .then((data) => setAmenities(data));

    fetch('http://localhost:3001/services')
      .then((response) => response.json())
      .then((data) => setServices(data));
  }, []);

  const submitSupplierData = (): void => {
    fetch('http://localhost:3001/venue', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form.getFieldsValue()),
    })
      .then((response) => response.json())
      .then((data) => form.resetFields());
    // dispatch(createSupplierAction(form.getFieldsValue()));
  };

  const errorsData = (): void => {
    console.log(form.getFieldsError());
  };

  // className={venue.container}
  return (
    <Form
      {...layout}
      form={form}
      className={venue.form}
      onFinish={submitSupplierData}
      onFinishFailed={errorsData}
    >
      <Form.Item
        name='name'
        label='Name'
        className={venue.item}
        rules={[validate.isRequired]}
      >
        <Input allowClear placeholder='Enter Supplier Name' />
      </Form.Item>
      <Form.Item
        name='hkey'
        label='H-Key'
        className={venue.item}
        rules={[validate.isRequired]}
      >
        <Input allowClear placeholder='Enter H-Key Name' />
      </Form.Item>
      <Form.Item
        name='amenitiesIds'
        label='Amenities'
        className={venue.item}
        rules={[validate.isRequired]}
      >
        <Select mode='multiple' allowClear placeholder='Choose Amenities'>
          {amenities &&
            (amenities as IAmenity[]).map(({id, name}: IAmenity) => (
              <Option key={id} value={id}>
                {name}
              </Option>
            ))}
        </Select>
      </Form.Item>
      <Form.Item
        name='servicesIds'
        label='Services'
        className={venue.item}
        rules={[validate.isRequired]}
      >
        <Select mode='multiple' allowClear placeholder='Choose Services'>
          {services &&
            (services as IService[]).map(({id, name}: IService) => (
              <Option key={id} value={id}>
                {name}
              </Option>
            ))}
        </Select>
      </Form.Item>
      <Form.Item
        name='description'
        label='Description'
        className={venue.item}
        rules={[
          validate.isRequired,
          {min: 3, message: 'Minimum number of symbols 150'},
          {max: 500, message: 'Maximum number of symbols 500'},
        ]}
      >
        <Input.TextArea
          allowClear
          maxLength={500}
          minLength={3}
          placeholder='Enter Description Name'
        />
      </Form.Item>
    </Form>
  );
};

export default Home;
