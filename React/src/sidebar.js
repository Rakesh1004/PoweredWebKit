const Sidebar = ({notes , addNote, deleteNote, activenote, setActivenode}) => {
    const sortednotes = notes.sort((a,b)=>(b.lastModified - a.lastModified))
    return <div className="app-sidebar">
        <div className="app-sidebar-header">
            <h1>Notes</h1>
            <button onClick={addNote}>Add</button>
        </div>
        <div className="app-sidebar-notes">
        {sortednotes.map((note)=>{
            return <div className= {`app-sidebar-note ${note.id===activenote && "active"}`} onClick={()=>setActivenode(note.id)} >
                <div className="sidebar-note-title">
                    <strong>{note.title}</strong>
                    <button onClick={()=>deleteNote(note.id)}>Delete</button>
                </div>
                <p>
                    {note.body && note.body.substr(0,100)+"....."}
                </p>
                <small>Last Modified {new Date(note.lastModified).toLocaleString('en-GB',{})}</small>
            </div>
        })} 
        </div>
    </div>
}
export default Sidebar;