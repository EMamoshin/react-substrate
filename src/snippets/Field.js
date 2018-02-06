import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Rectangle from '../shapes/Rectangle';
import RoundedRectangle from '../shapes/RoundedRectangle';

const FieldVertical = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  width: 100%;
  height: 62px;
  padding-top: 6px;
  padding-bottom: 6px;
`;

const FieldHorizontal = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 32px;
  padding-top: 6px;
  padding-bottom: 6px;
`;

function Field(props) {
  return (props.labelPosition === 'top') ?
      <FieldVertical>
        <Rectangle width="35%" height="24px" />
        <RoundedRectangle width="100%" height="32px" />
      </FieldVertical>
    :
      <FieldHorizontal>
        <Rectangle width="35%" height="24px" />
        <RoundedRectangle width="62.5%" height="32px" />
      </FieldHorizontal>
}

Field.propTypes = {
  labelPosition: PropTypes.oneOf(['top', 'left']),
};

Field.defaultProps = {
  labelPosition: 'top',
};

export default Field;