import { useId, useState } from "react";

export default function NotesInput({showNotes, addNewNoteFunc}) {

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        if (title=="" || content==""){
            alert(`Cannot make an empty note.`)
            return;
        }
        let newNote = {
            id: Date.now(),
            title: title,
            content: content
        }
        alert(`
            Id: ${newNote.id}
            Title: ${newNote.title}
            Content: ${newNote.content}
            `)
        addNewNoteFunc(newNote);
        showNotes(false)
    }

    return(
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-1 w-full h-full bg-black/60 flex items-center justify-center" onClick={() => showNotes(false)}>
        <form onClick={(event) => event.stopPropagation()}
        onSubmit={handleSubmit}
        style={{background: "#F4CE88", borderColor: "#e9bf69"}} 
        className="flex flex-col p-5 rounded-xl border-2 justify-center max-w-96">
            <input type = "text" 
            placeholder="Title" 
            value = {title} 
            onChange={()=>setTitle(event.target.value)}
            className="mb-3 text-xl rounded-lg border-1 px-2 py-1"
            style={{background:"#feddab", borderColor:"#e9bf69", color:"#193E19", placeholder:"#105b10"}}/>
            <input type = "textarea" 
            placeholder="Epic lore stuff"
            value = {content}
            onChange={()=>setContent(event.target.value)} 
            className="text-xl rounded-lg border-1 px-2 py-1 mb-3 max-h-96"/>
            <div>
                <button type="submit">Finish</button>
                <button type="button" onClick={()=>showNotes(false)}>Cancel</button>
            </div>
        </form>      
    </div>
    )

}