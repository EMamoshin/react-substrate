import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CircleShape = styled.div`
  background-color: ${props => props.color};
  border-radius: 50%;
  width: ${props => props.radius};
  height: ${props => props.radius};
`;

CircleShape.propTypes = {
  radius: PropTypes.string,
  color: PropTypes.string,
};

CircleShape.defaultProps = {
  radius: '50px',
  color: '#ced4d6',
};

export default CircleShape;