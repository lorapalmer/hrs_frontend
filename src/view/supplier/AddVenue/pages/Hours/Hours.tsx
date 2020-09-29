import React, {FC} from 'react';
import {TimePicker} from 'antd';
import hoursStyles from './Hours.module.css';

const Hours: FC = () => {
  const days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];

  return (
    <section className={hoursStyles.container}>
      {days.map((day: string, index: number) => {
        return (
          <div key={index} className={hoursStyles.dayBlock}>
            <span>{day}:</span>
            <section className={hoursStyles.pickers}>
              <TimePicker placeholder='From' />
              <TimePicker placeholder='To' />
            </section>
          </div>
        );
      })}
    </section>
  );
};

export default Hours;
