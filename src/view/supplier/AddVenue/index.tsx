import React, {FC, useState} from 'react';
import {useHistory} from 'react-router-dom';
import {Steps, Card, Button, message} from 'antd';
import {useSelector} from 'react-redux';
import {stepsList} from './statics';
import steps from './index.module.css';
import {RootState} from '../../../store/supplier/types';
import {IGeneral} from './pages/General/General.types';
import {IChain} from './pages/HotelChain/HotelChain.types';
import {IAddress} from './pages/Address/Address.types';
import {IDetails} from './pages/Details/Details.types';
import {IUnit} from './pages/Units/Units.types';
import {IDay} from './pages/Hours/Hours.types';
const {Step} = Steps;

const AddVenuePage: FC = () => {
  const [current, setCurrent] = useState<number>(0);
  const history = useHistory();
  const selector:
    | IGeneral
    | IChain
    | IAddress
    | IDay
    | IDetails
    | IUnit = useSelector(
    (state: RootState) =>
      state.supplierReducer[stepsList[current].key],
  );

  const supplier: any = useSelector(
    (state: RootState) => state.supplierReducer,
  );

  const next = (): void => {
    if ((selector as IDetails).type === 'details') {
      let _selector: {email: string; phone: string} = {
        email: '',
        phone: '',
      };
      _selector.email = (selector as IDetails).email;
      _selector.phone = (selector as IDetails).phone;
      const isValid: boolean = Object.values(
        _selector,
      ).every((v: any): boolean => !!v.length);
      if (!isValid) {
        message.error(
          'Check all form fields in the current step',
        );
        return;
      }
    } else if ((selector as IUnit[]) instanceof Array) {
      if (!(selector as IUnit[]).length) {
        message.error('Add at least one unit type');
        return;
      }
    } else {
      const isValid: boolean = Object.values(
        selector,
      ).every((v: any): boolean => !!v.length);
      if (!isValid) {
        message.error(
          'Check all form fields in the current step',
        );
        return;
      }
    }

    setCurrent(current + 1);
  };
  const prev = (): void => setCurrent(current - 1);
  const addVenue = async () => {
    let data: any = {};
    data = supplier.general;
    data.units = supplier.units;
    data.location = supplier.address;
    data.chain = supplier.hotelChain;
    data.contacts = [supplier.details];

    const response = await fetch(
      'http://localhost:3001/venue',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      },
    );

    if (response.ok) {
      await response.json();
      history.push('/venues');
    }
  };

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
          <Button type='primary' onClick={addVenue}>
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
