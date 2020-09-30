import React, {FC, ChangeEvent} from 'react';
import {Form, Input} from 'antd';
import {useDispatch, useSelector} from 'react-redux';
import {handleSupplierFields} from '../../../../../store/supplier/actions';
import {IDetails} from './Details.types';
import {RootState} from '../../../../../store/supplier/types';
import validateMessages from '../../../../common/validation';
import detailsStyles from '../../index.module.css';

const layout = {
  labelCol: {span: 6},
  wrapperCol: {span: 16},
};

const Details: FC = () => {
  const dispatch = useDispatch();
  const {details}: {details: IDetails} = useSelector(
    (state: RootState) => state.supplierReducer,
  );
  const [form] = Form.useForm();

  const handleFormFields = (
    event: ChangeEvent<HTMLInputElement>,
  ): void => {
    dispatch(
      handleSupplierFields(
        'details',
        event.target.name,
        event.target.value,
      ),
    );
  };

  return (
    <Form
      {...layout}
      form={form}
      className={detailsStyles.form}
      validateMessages={validateMessages}
      initialValues={{
        email: details.email,
        phone: details.phone,
        fax: details.fax,
        websiteURL: details.websiteURL,
        facebookURL: details.facebookURL,
        instagramURL: details.instagramURL,
        twitterURL: details.twitterURL,
      }}
    >
      <Form.Item
        name='email'
        label='Email'
        className={detailsStyles.item}
        rules={[{required: true}, {type: 'email'}]}
      >
        <Input
          allowClear
          name='email'
          placeholder='Enter email'
          onChange={handleFormFields}
        />
      </Form.Item>
      <Form.Item
        name='phone'
        label='Phone'
        className={detailsStyles.item}
        rules={[{required: true}]}
      >
        <Input
          type='number'
          name='phone'
          allowClear
          placeholder='Enter phone number'
          onChange={handleFormFields}
        />
      </Form.Item>
      <Form.Item
        name='fax'
        label='Fax'
        className={detailsStyles.item}
        rules={[]}
      >
        <Input
          type='number'
          name='fax'
          allowClear
          placeholder='Enter fax number'
          onChange={handleFormFields}
        />
      </Form.Item>
      <Form.Item
        name='websiteURL'
        label='Website'
        className={detailsStyles.item}
        rules={[{type: 'url'}]}
      >
        <Input
          name='websiteURL'
          allowClear
          placeholder='Enter Website URL'
          onChange={handleFormFields}
        />
      </Form.Item>
      <Form.Item
        name='facebookURL'
        label='Facebook'
        className={detailsStyles.item}
        rules={[{type: 'url'}]}
      >
        <Input
          name='facebookURL'
          allowClear
          placeholder='Enter Facebook URL'
          onChange={handleFormFields}
        />
      </Form.Item>
      <Form.Item
        name='instagramURL'
        label='Instagram'
        className={detailsStyles.item}
        rules={[{type: 'url'}]}
      >
        <Input
          name='instagramURL'
          allowClear
          placeholder='Enter Instagram URL'
          onChange={handleFormFields}
        />
      </Form.Item>
      <Form.Item
        name='twitterURL'
        label='Twitter'
        className={detailsStyles.item}
        rules={[{type: 'url'}]}
      >
        <Input
          name='twitterURL'
          allowClear
          placeholder='Enter Twitter URL'
          onChange={handleFormFields}
        />
      </Form.Item>
    </Form>
  );
};

export default Details;
