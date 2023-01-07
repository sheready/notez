import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'antd';


let getUpdatedTime = (note) => {
  return new Date(note.updated_at).toLocaleDateString()
}

let getCreatedTime = (note) => {
  return new Date(note.created_at).toLocaleDateString()
}

// get title from body
let getTitle = (note) =>{
  let title = note.body.split('\n')[0]
  if(title.length > 45){
    return title.slice(0,45)
  }
  return title
}

// get the content and remove title from the body
let getContent = (note) => {
  let title = getTitle(note)
  let content = note.body.replaceAll('\n', ' ')
  content = content.replaceAll(title, '')

  if(content.length > 45){
    return content.slice(0,45) + '...'
  }else{
    return content
  }
}
// pass notes as a prop
const ListItem = ({ note }) => {
  
const card = (

  <Card
  id="card-note"
  title= {getTitle(note)}
>
  <p>{getContent(note)}</p>
  <p><span>Created at: {getCreatedTime(note)}</span></p>
  <p><span>Updated at: {getUpdatedTime(note)}</span></p>
  <Link to={`/note/${note.id}`}>{/* display notes body */}
    
    <h3>Edit Note</h3>
        
  </Link>
</Card>

);

  return (
    <div id="card-div">
      <Card variant="outlined">{card}</Card>
    </div>
  )
}

export default ListItem