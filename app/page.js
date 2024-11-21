"use client"

import Image from "next/image";
import AddNew from "./components/addnew";
import NotesInput from "./components/DataInput/notesinput";
import { useState } from "react";
import NotesList from "./components/DataInput/noteslist";

export default function Home() {

  const [showNotes, setShowNotes] = useState(false);
  const [notesList, setNotesList] = useState([]);
  const addNewNote = (newNoteObj) => {
      setNotesList([...notesList, newNoteObj])
  }

  const removeNote = (event) => {
    let thisNoteList = noteList.filter(
        (note) => note.id != event.target.getAttribute(data-note-id)
    );
    setNoteList(thisNoteList)
}

  let functionList = setShowNotes

  return (
      <main className="flex flex-col items-center justify-center">
        <AddNew functionsList={functionList}/>
        {showNotes && <NotesInput showNotes={setShowNotes} addNewNoteFunc={addNewNote}/>}
        <NotesList listOfNotes={notesList}/>
      </main>
  );
}
