import React, {ChangeEvent, FC} from 'react';
import {Input, List, Typography, Select} from 'antd';
import {useDispatch, useSelector} from 'react-redux';
import {setUnits} from '../../../../../store/supplier/actions';
import {IUnit} from '../Units/Units.types';
import {RootState} from '../../../../../store/supplier/types';

const {Text} = Typography;
const {Option} = Select;

const Prices: FC = () => {
  const dispatch = useDispatch();
  const {units}: {units: any} = useSelector(
    (state: RootState) => state.supplierReducer,
  );

  const handlePrice = (
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    const _units = units.map((unit: IUnit) => {
      if (unit.name === event.target.name) {
        unit.cost = event.target.value;
      }
      return unit;
    });
    dispatch(setUnits(_units));
  };

  const handlePriceOptions = (
    name: string,
    value: string,
  ) => {
    const _units = units.map((unit: IUnit) => {
      if (unit.name === name) {
        unit.pricingTypeUnit = value;
      }
      return unit;
    });
    dispatch(setUnits(_units));
  };

  return (
    <section>
      <List
        size='large'
        bordered
        dataSource={units}
        renderItem={(item: IUnit) => {
          return (
            <List.Item style={{width: 450}}>
              <Text strong>{item.name}</Text>
              <section>
                <Text style={{marginRight: 2}}>
                  Price:{' '}
                </Text>
                <Input
                  prefix='$'
                  type='number'
                  name={item.name}
                  style={{width: 90, marginRight: 15}}
                  value={item.cost}
                  onChange={handlePrice}
                />
                <Text style={{marginRight: 2}}>Per: </Text>
                <Select
                  defaultValue={item.pricingTypeUnit}
                  style={{width: 100}}
                  onChange={(value: string) =>
                    handlePriceOptions(item.name, value)
                  }
                >
                  <Option value='ONE_HOUR'>1 Hour</Option>
                  <Option value='ONE_DAY'>1 Day</Option>
                  <Option value='ONE_WEEK'>1 Week</Option>
                  <Option value='ONE_MONTH'>1 Month</Option>
                </Select>
              </section>
            </List.Item>
          );
        }}
      />
    </section>
  );
};

export default Prices;
