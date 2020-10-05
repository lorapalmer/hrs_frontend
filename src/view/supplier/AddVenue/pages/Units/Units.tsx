import React, {
  FC,
  ChangeEvent,
  useState,
  useRef,
  useEffect,
} from 'react';
import {
  Tag,
  Input,
  Tooltip,
  List,
  Typography,
  message,
} from 'antd';
import {
  PlusOutlined,
  CloseCircleOutlined,
} from '@ant-design/icons';
import {useDispatch, useSelector} from 'react-redux';
import {setUnits} from '../../../../../store/supplier/actions';
import {IUnit} from './Units.types';
import {RootState} from '../../../../../store/supplier/types';
import unitsStyles from './Units.module.css';

const {Text} = Typography;

const Units: FC = () => {
  const [inputVisible, setInputVisible] = useState<boolean>(
    false,
  );
  const [inputValue, setInputValue] = useState<string>('');
  const [editInputIndex, setEditInputIndex] = useState<
    number
  >(-1);
  const [editInputValue, setEditInputValue] = useState<
    string
  >('');
  const dispatch = useDispatch();
  let input = useRef<any>(null);
  let editInput = useRef<any>(null);
  const {units}: {units: IUnit[]} = useSelector(
    (state: RootState) => state.supplierReducer,
  );

  useEffect(() => {
    if (!units.length) {
      const _units: IUnit[] = [
        {
          name: 'Open Space',
          quantity: '1',
          cost: '0',
          pricingTypeUnit: 'ONE_HOUR',
        },
        {
          name: 'Office',
          quantity: '1',
          cost: '0',
          pricingTypeUnit: 'ONE_HOUR',
        },
      ];
      dispatch(setUnits(_units));
    }
    // eslint-disable-next-line
  }, []);

  const handleClose = (removedTag: string): void => {
    const _units: IUnit[] = units.filter(
      (unit: IUnit) => unit.name !== removedTag,
    );
    dispatch(setUnits(_units));
  };

  const showInput = (): void => {
    setInputVisible(true);
    input.current?.focus();
  };

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement>,
  ): void => {
    setInputValue(event.target.value);
  };

  const handleInputConfirm = (): void => {
    const isExist: IUnit | undefined = units.find(
      (unit: IUnit) => unit.name === inputValue,
    );
    if (isExist) {
      message.error('This Unit Type already exist!');
    } else if (inputValue) {
      let _units: (
        | IUnit
        | {
            quantity: number;
            cost: string;
            pricingTypeUnit: string;
            name: string;
          }
      )[] = [
        ...units,
        {
          name: inputValue,
          quantity: 1,
          cost: '0',
          pricingTypeUnit: 'ONE_HOUR',
        },
      ];
      dispatch(setUnits(_units));
    }
    setInputVisible(false);
    setInputValue('');
  };

  const handleEditInputChange = (
    event: ChangeEvent<HTMLInputElement>,
  ): void => {
    setEditInputValue(event.target.value);
  };

  const handleEditInputConfirm = (): void => {
    const newUnits: IUnit[] = [...units];
    newUnits[editInputIndex].name = editInputValue;
    setEditInputValue('');
    setEditInputIndex(-1);
    dispatch(setUnits(newUnits));
  };

  const handleCapacityField = (
    event: ChangeEvent<HTMLInputElement>,
  ): void => {
    const _units: IUnit[] = units.map((unit: IUnit) => {
      if (unit.name === event.target.name) {
        unit.quantity = event.target.value;
      }
      return unit;
    });
    dispatch(setUnits(_units));
  };

  return (
    <div>
      <section className={unitsStyles.container}>
        <span className={unitsStyles.label}>Units:</span>
        {(units as IUnit[]).map(
          (unit: IUnit, index: number) => {
            if (editInputIndex === index) {
              return (
                <Input
                  ref={input}
                  key={index}
                  autoFocus={true}
                  size='small'
                  className='tag-input'
                  value={editInputValue}
                  onChange={handleEditInputChange}
                  onBlur={handleEditInputConfirm}
                  onPressEnter={handleEditInputConfirm}
                />
              );
            }

            const isLongTag = units.length > 20;

            const tagElem = (
              <Tag
                className='edit-tag'
                key={index}
                closable={true}
                onClose={() => handleClose(unit.name)}
              >
                <span
                  onDoubleClick={(event) => {
                    setEditInputIndex(index);
                    setEditInputValue(unit.name);
                    editInput.current?.focus();
                    event.preventDefault();
                  }}
                >
                  {isLongTag
                    ? `${unit.name.slice(0, 20)}...`
                    : unit.name}
                </span>
              </Tag>
            );
            return isLongTag ? (
              <Tooltip title={unit.name} key={index}>
                {tagElem}
              </Tooltip>
            ) : (
              tagElem
            );
          },
        )}
        {inputVisible && (
          <Input
            ref={editInput}
            type='text'
            size='small'
            autoFocus={true}
            value={inputValue}
            onChange={handleInputChange}
            onBlur={handleInputConfirm}
            onPressEnter={handleInputConfirm}
          />
        )}
        {!inputVisible && (
          <Tag
            style={{
              cursor: 'pointer',
              background: '#fff',
              borderStyle: 'dashed',
            }}
            onClick={showInput}
          >
            <PlusOutlined /> Add Unit
          </Tag>
        )}
      </section>
      <section>
        <List
          size='large'
          locale={{emptyText: 'No Units'}}
          bordered
          dataSource={units}
          renderItem={(item: IUnit) => {
            return (
              <List.Item style={{width: 400}}>
                <Text strong>{item.name}</Text>
                <section>
                  <Text style={{marginRight: 10}}>
                    Capacity:{' '}
                  </Text>
                  <Input
                    name={item.name}
                    style={{width: 60, marginRight: 13}}
                    value={item.quantity}
                    onChange={handleCapacityField}
                  />
                  <CloseCircleOutlined
                    style={{cursor: 'pointer'}}
                    onClick={() => handleClose(item.name)}
                  />
                </section>
              </List.Item>
            );
          }}
        />
      </section>
    </div>
  );
};

export default Units;
