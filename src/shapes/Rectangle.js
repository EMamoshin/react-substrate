import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const RectShape = styled.div`
  background-color: ${props => props.color};
  width: ${props => props.width};
  height: ${props => props.height};
`;

RectShape.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  color: PropTypes.string,
};

RectShape.defaultProps = {
  width: '50px',
  height: '50px',
  color: '#ced4d6',
};

export default RectShape;