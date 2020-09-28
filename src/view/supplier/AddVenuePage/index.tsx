import React, {FC, useState} from 'react';
import {Steps, Card, Button, message} from 'antd';
import {useSelector} from 'react-redux';
import {stepsList} from './statics';
import steps from './index.module.css';
import {RootState} from '../../../store/supplier/types';

const {Step} = Steps;

const AddVenuePage: FC = () => {
  const [current, setCurrent] = useState<number>(4);
  const selector = useSelector(
    (state: RootState) =>
      state.supplierReducer[stepsList[current].key],
  );

  const next = (): void => {
    const isValid: boolean = Object.values(selector).every(
      (v: any): boolean => !!v.length,
    );
    if (!isValid) {
      message.error(
        'Check all form fields in the current step',
      );
      return;
    }

    setCurrent(current + 1);
  };
  const prev = (): void => setCurrent(current - 1);

  return (
    <Card className={steps.card}>
      <Steps current={current} direction='horizontal'>
        {stepsList.map((step, index) => (
          <Step key={index} title={step.title} />
        ))}
      </Steps>
      <section className={steps.content}>
        {stepsList[current].content}
      </section>
      <section className={steps.actions}>
        {current > 0 && (
          <Button style={{margin: '0 8px'}} onClick={prev}>
            Previous
          </Button>
        )}
        {current === stepsList.length - 1 && (
          <Button type='primary' onClick={() => {}}>
            Add Venue
          </Button>
        )}
        {current < stepsList.length - 1 && (
          <Button type='primary' onClick={next}>
            Next
          </Button>
        )}
      </section>
    </Card>
  );
};

export default AddVenuePage;
