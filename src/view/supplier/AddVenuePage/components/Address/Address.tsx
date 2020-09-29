import React, {FC, ChangeEvent} from 'react';
import {Form, Input} from 'antd';
import {useDispatch, useSelector} from 'react-redux';
import {handleSupplierFields} from '../../../../../store/supplier/actions';
import {IAddress} from './Address.types';
import {RootState} from '../../../../../store/supplier/types';
import validateMessages from '../../../../common/validation';
import venue from './Address.module.css';

const layout = {
  labelCol: {span: 6},
  wrapperCol: {span: 16},
};

const Address: FC = () => {
  const dispatch = useDispatch();
  const {address}: {address: IAddress} = useSelector(
    (state: RootState) => state.supplierReducer,
  );
  const [form] = Form.useForm();

  const handleFormFields = (
    event: ChangeEvent<HTMLInputElement>,
  ): void => {
    dispatch(
      handleSupplierFields(
        'address',
        event.target.name,
        event.target.value,
      ),
    );
  };

  return (
    <Form
      {...layout}
      form={form}
      className={venue.form}
      validateMessages={validateMessages}
      initialValues={{
        country: address.country,
        city: address.city,
        streetName: address.streetName,
        buildingNumber: address.buildingNumber,
        floorNumber: address.floorNumber,
        postalCode: address.postalCode,
      }}
    >
      <Form.Item
        name='country'
        label='Country'
        className={venue.item}
        rules={[{required: true}]}
      >
        <Input
          allowClear
          name='country'
          placeholder='Enter country'
          onChange={handleFormFields}
        />
      </Form.Item>
      <Form.Item
        name='city'
        label='City'
        className={venue.item}
        rules={[{required: true}]}
      >
        <Input
          name='city'
          allowClear
          placeholder='Enter city'
          onChange={handleFormFields}
        />
      </Form.Item>
      <Form.Item
        name='streetName'
        label='Street'
        className={venue.item}
        rules={[{required: true}]}
      >
        <Input
          name='streetName'
          allowClear
          placeholder='Enter street name'
          onChange={handleFormFields}
        />
      </Form.Item>
      <Form.Item
        name='buildingNumber'
        label='Building Number'
        className={venue.item}
        rules={[{required: true}]}
      >
        <Input
          name='buildingNumber'
          allowClear
          placeholder='Enter building number'
          onChange={handleFormFields}
        />
      </Form.Item>
      <Form.Item
        name='postalCode'
        label='Postal Code'
        className={venue.item}
        rules={[{required: true}]}
      >
        <Input
          name='postalCode'
          allowClear
          placeholder='Enter postal code'
          onChange={handleFormFields}
        />
      </Form.Item>
      <Form.Item
        name='floorNumber'
        label='Floor Number'
        className={venue.item}
      >
        <Input
          type='number'
          name='floorNumber'
          allowClear
          placeholder='Enter floor number'
          onChange={handleFormFields}
        />
      </Form.Item>
    </Form>
  );
};

export default Address;
