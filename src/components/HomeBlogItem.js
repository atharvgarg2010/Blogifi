import React from 'react'
import blogContext from '../context/Blogs/blogContext'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
function HomeBlogItem(props) {
    const {title,tag,desc,note,image} = props
    const Navigate = useNavigate()
          const context = useContext(blogContext)
          const GetNoteById = context.GetNoteById
          const Gets = context.GetUserById
          const Note = context.Note
          const GetNote = ()=>{
            console.log(Note);
            GetNoteById(note._id)
            console.log(Note);
            console.log(Gets);
           Gets(note.user) 
            if (Note!==[]) {
                Navigate("/Blog")
            }
        }

  return (
    <div className='BlogBox'>
        <div className='imager'>
      <img src={`${image}`}/>
      </div>
      <div className='context'>
      <h1>{title}</h1>
      <p>{desc.slice(0,150)}            <span style={{color:"red", cursor:"pointer"}} onClick={()=>{
                GetNote() 
                console.log(Note);
                }}>{desc.length>150 ? "Read More":"Thank You For Reading"}</span></p>
      <span>{tag}</span>
      <h3>{note.date.slice(0,10)}</h3>
      </div>
    </div>
  )
}

export default HomeBlogItem
