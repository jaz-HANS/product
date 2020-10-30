import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import PropTypes from 'prop-types';
import Col from 'react-bootstrap/Col';
import { v4 as uuidv4 } from 'uuid';

const DetailedInfo = ({ product }) => {
  const slogan = product && product.slogan;
  const description = product && product.description;
  const featureList = product && product.features;
  const featureSet = new Set(featureList);
  const featureArray = [...featureSet];
  return (
    <Container>
      <Card.Header className="details-header">
        <Row>
          <Col xs={8}>
            { slogan }
          </Col>
          <Col xs={4}>
            Features:
          </Col>
        </Row>
      </Card.Header>
      <Card.Body className="details-body">
        <Row>
          <Col xs={8} className="details-body-divider">
            { description }
          </Col>
          <Col xs={4}>
            {
        !!featureArray && featureArray.map((trait) => (
          <div key={uuidv4()}>
            <img
              src="https://icons-for-free.com/iconfiles/png/512/checkmark+circle+icon-1320195547843144574.png"
              className="features-check"
              alt="checkmark"
            />
            {
              trait.value === 'null' ? trait.feature : (trait.value).concat(' ', trait.feature)
              }
          </div>
        ))
        }
          </Col>
        </Row>
      </Card.Body>
    </Container>
  );
};

export default DetailedInfo;
