import React from 'react';
import {
  Button,
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

export default ({ goods }) => {
  return (
    <Card style={{ margin: '2pt' }}>
      <CardBody style={{ textAlign: 'left' }}>
        <CardTitle style={{ textAlign: 'center', fontSize: '20pt', fontWeight: 'bold' }}>
          {goods.title}
        </CardTitle>
        <CardSubtitle
          style={{ fontSize: '14pt', fontWeight: 'bold' }}>
          {goods.subtitle}
        </CardSubtitle>
        <CardText>
          {goods.text}
        </CardText>
        <Button>Buy</Button>
      </CardBody>
    </Card>
  );
}