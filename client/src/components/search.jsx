import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';

const Search = ({ setId }) => {
  const [searchInput, setSearchInput] = useState(1);

  const handleSearchChange = (e) => {
    setSearchInput(Number(e.target.value));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setId(searchInput);
  };

  return (
    <Container>
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Control
          as="textarea"
          placeholder="Product Number"
          rows="1"
          value={searchInput}
          onChange={handleSearchChange}
          className="search-form"
        />
        <input
          className="nav-button-root nav-button-control"
          type="submit"
          value="Submit"
          onClick={(event) => handleSubmit(event)}
        />
      </Form.Group>
      <Form.Label className="search-form-label">Search by Product Numbers</Form.Label>
    </Container>
  );
};

export default Search;
