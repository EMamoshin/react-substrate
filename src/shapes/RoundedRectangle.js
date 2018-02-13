import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const RoundedRectShape = styled.div`
  background-color: ${props => props.color};
  border-radius: 6px;
  width: ${props => props.width};
  height: ${props => props.height};
  overflow: hidden;
`;

RoundedRectShape.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  color: PropTypes.string,
};

RoundedRectShape.defaultProps = {
  width: '50px',
  height: '50px',
  color: '#ced4d6',
};

export default RoundedRectShape;