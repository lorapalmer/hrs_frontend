import React, {FC} from 'react';
import {useLocation, useHistory} from 'react-router-dom';
import {Steps, Card, Button, Row, Col} from 'antd';
import {stepsList} from './statics';
import steps from './index.module.css';

const {Step} = Steps;

const AddVenuePage: FC = () => {
  const location = useLocation();
  const history = useHistory();
  const stepID = +location.search.substr(-1);

  const changeStep = (current: number): void => {
    history.push(`create-venue?step=${current}`);
  };
  const next = (): void => {};
  // setCurrent(current + 1);
  const prev = (): void => {};
  // setCurrent(current - 1);

  return (
    <Card className={steps.card}>
      <Steps current={stepID} onChange={changeStep} direction='horizontal'>
        {stepsList.map((step, index) => (
          <Step key={index} title={step.title} />
        ))}
      </Steps>
      <Col span={4}>
        <Row gutter={6}>{stepsList[stepID].content}</Row>
        <Row gutter={6}>
          {stepID < stepsList.length - 1 && (
            <Button type='primary' onClick={next}>
              Next
            </Button>
          )}
          {stepID === stepsList.length - 1 && (
            <Button type='primary' onClick={() => {}}>
              Add Venue
            </Button>
          )}
          {stepID > 0 && (
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
