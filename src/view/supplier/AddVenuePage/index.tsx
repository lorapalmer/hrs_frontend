import React, {FC, useState} from 'react';
import {Steps, Card, Button, Row, Col} from 'antd';
import {stepsList} from './statics';
import steps from './index.module.css';

const {Step} = Steps;

const AddVenuePage: FC = () => {
  const [current, setCurrent] = useState<number>(0);

  const changeStep = (current: number) => setCurrent(current);
  const next = () => setCurrent(current + 1);
  const prev = () => setCurrent(current - 1);

  return (
    <Card className={steps.card}>
      <Steps current={current} onChange={changeStep} direction='horizontal'>
        {stepsList.map((step, index) => (
          <Step key={index} title={step.title} />
        ))}
      </Steps>
      <Col span={4}>
        <Row gutter={6}>{stepsList[current].content}</Row>
        <Row gutter={6}>
          {current < stepsList.length - 1 && (
            <Button type='primary' onClick={next}>
              Next
            </Button>
          )}
          {current === stepsList.length - 1 && (
            <Button type='primary' onClick={() => {}}>
              Add Venue
            </Button>
          )}
          {current > 0 && (
            <Button style={{margin: '0 8px'}} onClick={prev}>
              Previous
            </Button>
          )}
        </Row>
      </Col>
    </Card>
  );
};

export default AddVenuePage;
