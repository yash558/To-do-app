import React from 'react'
import './Notes.css'
import deleteIcon from '../../assets/delete.png'

let timer = 500,timeout
const Notes = (props) => {

    const formatDate = (value) => {

        if (!value) return ""
        const date = new Date(value)

        const monthNames = [
            "Jan", "Feb", "Mar", "April", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
        ]
        let hrs = date.getHours()
        let ampm = hrs > 12 ? "PM" : "AM"
        hrs = hrs ? hrs : "12";
        hrs = hrs > 12 ? hrs = 24 - hrs : hrs

        let min = date.getMinutes()
        min = min<10? "0" + min:min

        let day = date.getDate()

        const month=monthNames[date.getMonth()];

        return `${hrs}:${min} ${ampm} ${day} ${month}`

    };

    const debounce = (func) => {
        clearTimeout(timeout)
        timeout = setTimeout(func , timer);
    }

    const updateText = (text, id) => {
        debounce(()=> props.updateText(text, id));
    } 
    return (
        <div className="notes" style={{ backgroundColor: props.notes.color }}>
            <textarea className="notes_text" defaultValue={props.notes.text}
            onChange={(event) => updateText(event.target.value, props.notes.id)} />
            <div className="notes_footer">
                <p>{formatDate(props.notes.time)}</p>
                <img src={deleteIcon} alt="delete" height={30} width={30} onClick={() => props.deleteNote(props.notes.id)} />
            </div>
        </div>
    )
}

export default Notes