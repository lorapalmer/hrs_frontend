import React, {FC, ChangeEvent} from 'react';
import {Form, Input, Select, Button} from 'antd';
import {
  MinusCircleOutlined,
  PlusOutlined,
} from '@ant-design/icons';
import {useDispatch, useSelector} from 'react-redux';
import {handleSupplierFields} from '../../../../../store/supplier/actions';
import {IUnit} from './Units.types';
import {RootState} from '../../../../../store/supplier/types';
import validateMessages from '../../../../common/validation';
import venue from './General.module.css';

const {Option} = Select,
  layout = {
    labelCol: {span: 6},
    wrapperCol: {span: 16},
  };

const formItemLayout = {
  labelCol: {
    xs: {span: 24},
    sm: {span: 4},
  },
  wrapperCol: {
    xs: {span: 24},
    sm: {span: 20},
  },
};
const formItemLayoutWithOutLabel = {
  wrapperCol: {
    xs: {span: 24, offset: 0},
    sm: {span: 20, offset: 4},
  },
};

const Units: FC = () => {
  const dispatch = useDispatch();
  const {units}: {units: IUnit[]} = useSelector(
    (state: RootState) => state.supplierReducer,
  );
  const [form] = Form.useForm();

  const handleFormFields = (
    event: ChangeEvent<HTMLInputElement>,
  ): void => {
    dispatch(
      handleSupplierFields(
        'units',
        event.target.name,
        event.target.value,
      ),
    );
  };

  return (
    <Form
      name='dynamic_form_item'
      {...formItemLayoutWithOutLabel}
    >
      <Form.List name='names'>
        {(fields, {add, remove}) => {
          return (
            <div>
              {fields.map((field, index) => (
                <Form.Item
                  {...(index === 0
                    ? formItemLayout
                    : formItemLayoutWithOutLabel)}
                  label={index === 0 ? 'Passengers' : ''}
                  required={false}
                  key={field.key}
                >
                  <Form.Item
                    {...field}
                    validateTrigger={['onChange', 'onBlur']}
                    rules={[
                      {
                        required: true,
                        whitespace: true,
                        message:
                          "Please input passenger's name or delete this field.",
                      },
                    ]}
                    noStyle
                  >
                    <Input
                      placeholder='passenger name'
                      style={{width: '60%'}}
                    />
                  </Form.Item>
                  {fields.length > 1 ? (
                    <MinusCircleOutlined
                      className='dynamic-delete-button'
                      style={{margin: '0 8px'}}
                      onClick={() => {
                        remove(field.name);
                      }}
                    />
                  ) : null}
                </Form.Item>
              ))}
              <Form.Item>
                <Button
                  type='dashed'
                  onClick={() => {
                    add();
                  }}
                  style={{width: '60%'}}
                >
                  <PlusOutlined /> Add Unit
                </Button>
              </Form.Item>
            </div>
          );
        }}
      </Form.List>
    </Form>
  );
};

export default Units;
