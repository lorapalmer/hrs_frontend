import React, {FC} from 'react';
import {TimePicker, Checkbox} from 'antd';
import {setDays} from '../../../../../store/supplier/actions';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../../../store/supplier/types';
import moment from 'moment';
import {IDay} from './Hours.types';
import hoursStyles from './Hours.module.css';

const Hours: FC = () => {
  const dispatch = useDispatch();
  const {days}: {days: any} = useSelector(
    (state: RootState) => state.supplierReducer,
  );

  const set24Hours = (event: any, index: number): void => {
    days[index].status = event.target.checked;
    dispatch(setDays([...days]));
  };

  // const setTime = (date: any, dateString: string, index: number, status: string) => {
  //   days[index][status] = dateString;
  //   dispatch(setDays([...days]));
  //   console.log(date, dateString);
  // }

  const dateFormat = 'hh:mm A';
  return (
    <section className={hoursStyles.container}>
      {(days as IDay[]).map((day: IDay, index: number) => {
        return (
          <div key={index} className={hoursStyles.dayBlock}>
            <span>{day.name}:</span>
            <section className={hoursStyles.pickers}>
              <TimePicker
                placeholder='From'
                format='hh:mm A'
                defaultValue={moment('09:00', dateFormat)}
                disabled={day.status}
                // value={moment(day.from)}
                // onChange={(date: any, dateString: string) => setTime(date, dateString, index, 'from')}
              />
              <TimePicker
                placeholder='To'
                format='hh:mm A'
                defaultValue={moment('18:00', dateFormat)}
                disabled={day.status}
                // value={day.to}
                // onChange={(date: any, dateString: string) => setTime(date, dateString, index, 'to')}
              />
              <Checkbox
                checked={day.status}
                onChange={(event: any) =>
                  set24Hours(event, index)
                }
              >
                24 hours
              </Checkbox>
            </section>
          </div>
        );
      })}
    </section>
  );
};

export default Hours;
