import { useState,useEffect } from 'react';
import './App.css';
import Main from './main';
import Sidebar from './sidebar';
import uuid from 'react-uuid';

function App() {
  const [notes,setNotes] = useState(localStorage.notes ? JSON.parse(localStorage.notes):[]);
  const [activenote,setActivenode] = useState(false);
  
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = () => {
    const Note = {
      id: uuid(),
      title: "Untitled Notes",
      body: "",
      lastModified: Date.now()
    }
    setNotes([Note,...notes]);
    setActivenode(Note.id);
  };
  const deleteNote = (id) => {
    setNotes(notes.filter((note)=>note.id!==id));
  };
  function getActivenote(){
    console.log(notes);
    return (notes.find((note)=>(note.id===activenote)));
  }
  const updatedNote = (updateNote) => {
    const updatedArray = notes.map((note)=>{
      if(note.id===activenote){
        return updateNote;
      }
      return note;
    })
    setNotes(updatedArray);
  }
  return (
    <div className="App">
       <Sidebar notes = {notes} addNote = {addNote} deleteNote = {deleteNote} activenote={activenote} setActivenode={setActivenode}/>
       <Main activenote={getActivenote()} updatedNote={updatedNote}/>
    </div>  

  );
}

export default App;
