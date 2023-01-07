import React, { useState, useEffect } from 'react';
import ListItem from '../components/ListItem';
import AddButton from '../components/AddButton';



const NotesListPage = () => {
    //add a state to handle our notes data with initial state as an empty array
    let [notes, setNotes] = useState([])

    
    //add a use effect to pass our get notes function and pass empty array dependancy
    useEffect(() => {
        getNotes()
    },[])

    let getNotes = async () => {
        //fetch data from desired django url endpoint and await for the response
        let response = await fetch('/api/notes/')
        //ensure the response is in json format
        let data = await response.json()
        //set the state of notes and pass data to it
        setNotes(data)
    }
  return (
      <>
        <AddButton/>
        <div className='notes-list'>
            {
                // iterate through the notes from the api
                notes.map((note, index) => (
                    //pass the ListItem component
                    <ListItem key={index} note={note} />
                ))
            }
        </div>
        
      
      </>

  )
}

export default NotesListPage