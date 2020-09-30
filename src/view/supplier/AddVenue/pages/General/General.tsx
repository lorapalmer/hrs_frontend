import React, {
  FC,
  useState,
  useEffect,
  ChangeEvent,
} from 'react';
import {Form, Input, Select} from 'antd';
import {useDispatch, useSelector} from 'react-redux';
import {handleSupplierFields} from '../../../../../store/supplier/actions';
import {
  IAmenity,
  IGeneral,
  IService,
} from './General.types';
import {RootState} from '../../../../../store/supplier/types';
import validateMessages from '../../../../common/validation';
import generalStyles from '../../index.module.css';

const {Option} = Select,
  layout = {
    labelCol: {span: 6},
    wrapperCol: {span: 16},
  };

const General: FC = () => {
  const [amenities, setAmenities] = useState<IAmenity[]>(
    [],
  );
  const [services, setServices] = useState<IService[]>([]);
  const dispatch = useDispatch();
  const {general}: {general: IGeneral} = useSelector(
    (state: RootState) => state.supplierReducer,
  );
  const [form] = Form.useForm();

  useEffect(() => {
    fetch('http://localhost:3001/amenities')
      .then((response) => response.json())
      .then((data) => setAmenities(data));

    fetch('http://localhost:3001/services')
      .then((response) => response.json())
      .then((data) => setServices(data));
  }, []);

  const handleFormFields = (
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >,
  ): void => {
    dispatch(
      handleSupplierFields(
        'general',
        event.target.name,
        event.target.value,
      ),
    );
  };

  const handleSelectFormFields = (
    name: string,
    ids: number[],
  ): void => {
    dispatch(handleSupplierFields('general', name, ids));
  };

  return (
    <Form
      {...layout}
      form={form}
      className={generalStyles.form}
      validateMessages={validateMessages}
      initialValues={{
        name: general.name,
        hkey: general.hkey,
        amenitiesIds: general.amenities,
        servicesIds: general.services,
        description: general.description,
      }}
    >
      <Form.Item
        name='name'
        label='Name'
        className={generalStyles.item}
        rules={[{required: true}]}
      >
        <Input
          allowClear
          name='name'
          placeholder='Enter Supplier Name'
          onChange={handleFormFields}
        />
      </Form.Item>
      <Form.Item
        name='hkey'
        label='H-Key'
        className={generalStyles.item}
        rules={[{required: true}]}
      >
        <Input
          name='hkey'
          allowClear
          placeholder='Enter H-Key Name'
          onChange={handleFormFields}
        />
      </Form.Item>
      <Form.Item
        name='amenitiesIds'
        label='Amenities'
        className={generalStyles.item}
        rules={[{required: true}]}
      >
        <Select
          mode='multiple'
          allowClear
          placeholder='Choose Amenities'
          onChange={(ids: number[]) =>
            handleSelectFormFields('amenities', ids)
          }
        >
          {amenities.length &&
            (amenities as IAmenity[]).map(
              ({id, name}: IAmenity) => (
                <Option key={id} value={id}>
                  {name}
                </Option>
              ),
            )}
        </Select>
      </Form.Item>
      <Form.Item
        name='servicesIds'
        label='Services'
        className={generalStyles.item}
        rules={[{required: true}]}
      >
        <Select
          mode='multiple'
          allowClear
          placeholder='Choose Services'
          onChange={(ids: number[]) =>
            handleSelectFormFields('services', ids)
          }
        >
          {services.length &&
            (services as IService[]).map(
              ({id, name}: IService) => (
                <Option key={id} value={id}>
                  {name}
                </Option>
              ),
            )}
        </Select>
      </Form.Item>
      <Form.Item
        name='description'
        label='Description'
        className={generalStyles.item}
        rules={[
          {required: true},
          {
            min: 150,
            message: 'Minimum number of symbols 150',
          },
          {
            max: 500,
            message: 'Maximum number of symbols 500',
          },
        ]}
      >
        <Input.TextArea
          allowClear
          name='description'
          maxLength={500}
          minLength={150}
          placeholder='Enter Description Name'
          onChange={handleFormFields}
        />
      </Form.Item>
    </Form>
  );
};

export default General;
