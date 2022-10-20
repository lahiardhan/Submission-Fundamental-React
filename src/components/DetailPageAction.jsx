import React from 'react';
import { MdOutlineDelete } from 'react-icons/md';
import ButtonAction from './ButtonAction';
import PropTypes from 'prop-types';

function DetailPageAction({ id, archived, isArchived, onDelete }) {
  return (
      <div className="detail-page__action">
         <ButtonAction id={id} archived={archived} isArchived={isArchived} />
         <button className="action" type='button' title='Hapus' onClick={() => onDelete(id)}><MdOutlineDelete /></button>
      </div>
  )
}

DetailPageAction.propTypes = {
  id: PropTypes.string.isRequired,
  archived: PropTypes.bool.isRequired,
  isArchived: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
}

export default DetailPageAction;