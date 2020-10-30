import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import DetailedInfo from './detailedInfo';

const ProductDetails = ({ product, productId }) => (
  <Container>
    <Row>
      <DetailedInfo product={product} productId={productId} />
    </Row>
  </Container>
);

export default ProductDetails;
