import { useState } from "react"
import NoteItem from "./note";

export default function NotesList({listOfNotes}){

    const [showNotesList, setShowNotesList] = useState(false);
    return(
        <div 
        style = {{background: "#e9bf69"}}
        className="flex-1 flex-col justify-center max-w-6xl min-w-96">
            {
                    listOfNotes.map( (note) => (
                        <NoteItem noteObj={note} key={note.id}/>
                    ) )
                }
        </div>
    )
    
}