import React from "react";
import NoteItem from "./NoteItem";
import PropTypes from 'prop-types'

function NoteList({ notes }) {
   if(!notes.length) {
      return (
         <section className="notes-list-empty">
            <p className="notes-list__empty">Tidak ada catatan</p>
         </section>
      )
   } 

   return (
      <section className="notes-list">
         {notes.map((note) => <NoteItem  key={note.id} id={note.id} title={note.title} createdAt={note.createdAt} body={note.body} />)}
      </section>
   );
}

NoteList.propTypes = {
   notes: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default NoteList;
