import React, {
  FC,
  ChangeEvent,
  useState,
  useRef,
} from 'react';
import {Tag, Input, Tooltip} from 'antd';
import {PlusOutlined} from '@ant-design/icons';
import {useDispatch, useSelector} from 'react-redux';
import {setUnits} from '../../../../../store/supplier/actions';
import {IUnit} from './Units.types';
import {RootState} from '../../../../../store/supplier/types';
import unitsStyles from './Units.module.css';

const Units: FC = () => {
  const [inputVisible, setInputVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [editInputIndex, setEditInputIndex] = useState(-1);
  const [editInputValue, setEditInputValue] = useState('');
  const dispatch = useDispatch();
  let input = useRef<any>(null);
  let editInput = useRef<any>(null);
  const {units}: {units: any} = useSelector(
    (state: RootState) => state.supplierReducer,
  );

  const handleClose = (removedTag: any) => {
    const _units = units.filter(
      (unit: any) => unit.name !== removedTag,
    );
    dispatch(setUnits(_units));
  };

  const showInput = () => {
    setInputVisible(true);
    input.current?.focus();
  };

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    setInputValue(event.target.value);
  };

  const handleInputConfirm = () => {
    let _units;
    if (inputValue) {
      _units = [
        ...units,
        {
          unitTypeId: Math.random(),
          name: inputValue,
          quantity: 1,
        },
      ];
      dispatch(setUnits(_units));
    }
    setInputVisible(false);
    setInputValue('');
  };

  const handleEditInputChange = (
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    setEditInputValue(event.target.value);
  };

  const handleEditInputConfirm = () => {
    const newUnits = [...units];
    newUnits[editInputIndex].name = editInputValue;
    setEditInputValue('');
    setEditInputIndex(-1);
    dispatch(setUnits(newUnits));
  };

  return (
    <section className={unitsStyles.form}>
      <span className={unitsStyles.label}>Units:</span>
      {(units as IUnit[]).map(
        (unit: IUnit, index: number) => {
          if (editInputIndex === index) {
            return (
              <Input
                ref={input}
                key={unit.unitTypeId}
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
              key={unit.unitTypeId}
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
            <Tooltip
              title={unit.name}
              key={unit.unitTypeId}
            >
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
          className='tag-input'
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleInputConfirm}
          onPressEnter={handleInputConfirm}
        />
      )}
      {!inputVisible && (
        <Tag
          className={unitsStyles.unitPlus}
          onClick={showInput}
        >
          <PlusOutlined /> Add Unit
        </Tag>
      )}
    </section>
  );
};

export default Units;
