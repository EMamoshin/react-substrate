import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Rectangle from '../shapes/Rectangle';
import RoundedRectangle from '../shapes/RoundedRectangle';
import Image from '../snippets/Image';
import ListRow from '../snippets/ListRow';

const CardElement = styled.div`
  max-width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 290px;
  min-height: 360px;
  background: #fff;
  padding: 0;
  border: 1px solid;
  border-radius: 6px;
  z-index: '';
`;

const CardBodyElement = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1 0 auto;
`;

const CardFooterElement = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex: 1 0 auto;
`;

function Card(props) {
  return <CardElement>
    <Image width="100%" height="100px" />
    <CardBodyElement>
      <Rectangle width="55%" height="24px" />
      <Rectangle width="30%" height="16px" />
      <Rectangle width="90%" height="20px" />
    </CardBodyElement>
    <CardFooterElement>
      <RoundedRectangle width="25%" height="24px" />
      <RoundedRectangle width="25%" height="24px" />
    </CardFooterElement>
  </CardElement>
}

Card.propTypes = {
  labelPosition: PropTypes.oneOf(['top', 'left']),
};

Card.defaultProps = {
  labelPosition: 'top',
};

export default Card;