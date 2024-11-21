import { useState } from "react";

export default function NoteItem({noteObj}) {
    const {
        title,
        content
    } = noteObj;

    const [showContent, setShowContent] = useState(false);
    const toggleContent = () =>{
        if (showContent == false) {
            setShowContent(true)
        } else {
            setShowContent(false)
        }
    }

    return (
        <div style={{color:"#193E19"}}
        className="justify-center items-center flex flex-col">
            <div className="flex flex-row">
               <h3>{title}</h3> 
               <button onClick={toggleContent}>o</button>
            </div>
            {showContent && <p>{content}</p>}
        </div>
    )
    
}