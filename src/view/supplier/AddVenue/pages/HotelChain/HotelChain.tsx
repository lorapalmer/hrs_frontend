import React, {
  FC,
  useState,
  useEffect,
  ChangeEvent,
} from 'react';
import {Form, Input, Select, Divider, Button} from 'antd';
import {PlusOutlined} from '@ant-design/icons';
import {useDispatch, useSelector} from 'react-redux';
import {handleSupplierFields} from '../../../../../store/supplier/actions';
import {RootState} from '../../../../../store/supplier/types';
import {IChain, ChainType} from './HotelChain.types';
import validateMessages from '../../../../common/validation';
import hcStyles from '../../index.module.css';

const layout = {
    labelCol: {span: 6},
    wrapperCol: {span: 16},
  },
  {Option} = Select;

const HotelChain: FC = () => {
  const [chains, setChains] = useState<ChainType>([]);
  const [name, setName] = useState<string>('');
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const {hotelChain}: {hotelChain: IChain} = useSelector(
    (state: RootState) => state.supplierReducer,
  );

  useEffect((): void => {
    fetch('http://localhost:3001/chains')
      .then((response) => response.json())
      .then((data) => setChains(data));
  }, []);

  const handleFormFields = (value: string = ''): void => {
    dispatch(
      handleSupplierFields('hotelChain', 'name', value),
    );
  };

  const onNewHCNameChange = (
    event: ChangeEvent<HTMLInputElement>,
  ): void => {
    if (event.type === 'click') {
      setName('');
      return;
    }
    setName(event.target.value);
  };

  const addHotelChain = (): void => {
    if (!name) return;
    let _id: number = chains.length;
    _id += 1;
    chains.push({id: _id, name});
    setChains([...chains]);
    setName('');
  };

  return (
    <Form
      {...layout}
      form={form}
      className={hcStyles.form}
      validateMessages={validateMessages}
      initialValues={{
        name: hotelChain.name,
      }}
    >
      <Form.Item
        name='name'
        label='Hotel Chain'
        className={hcStyles.item}
        rules={[{required: true}]}
      >
        <Select
          allowClear
          value={hotelChain.name}
          placeholder='Choose hotel chain'
          filterOption={true}
          onChange={handleFormFields}
          style={{width: '100%'}}
          dropdownRender={(menu) => (
            <>
              {menu}
              <Divider style={{margin: '4px 0'}} />
              <div style={{display: 'flex', padding: 8}}>
                <Input
                  allowClear
                  value={name}
                  onChange={onNewHCNameChange}
                />
                <Button type='link' onClick={addHotelChain}>
                  <PlusOutlined /> Add Chain
                </Button>
              </div>
            </>
          )}
        >
          {chains.length &&
            (chains as IChain[]).map(
              ({id, name}: IChain) => (
                <Option key={id} value={name}>
                  {name}
                </Option>
              ),
            )}
        </Select>
      </Form.Item>
    </Form>
  );
};

export default HotelChain;
