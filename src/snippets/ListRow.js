import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Rectangle from '../shapes/Rectangle';

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 32px;
  padding-top: 6px;
  padding-bottom: 6px;
`;

function ListRow(props) {
  const {
    hasCheckboxes,
    hasActionBar
  } = props;
  return (
    <Row>
      {hasCheckboxes && <Rectangle width="5%" height="24px" />}
      <Rectangle width="75%" height="24px" />
      {hasActionBar && <Rectangle width="15%" height="24px" />}
    </Row>
  );
}

ListRow.propTypes = {
  hasCheckboxes: PropTypes.boolean,
  hasActionBar: PropTypes.boolean,
};

ListRow.defaultProps = {};

export default ListRow;