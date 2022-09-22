import React, { useState } from 'react'
import BlogItem from './BlogItem'
import blogContext from '../context/Blogs/blogContext'
import { useContext } from 'react'
import { Link } from 'react-router-dom'


function Personalinfo() {
  const context = useContext(blogContext)
  const getUser = context.getUser
  const userdata = context.userdata
  const Notes = context.Notes
  const fetchallnotes = context.fetchallnotes
  // a()

  const [a, setA] = useState("")
  const aa = () => {
    if (localStorage.authtoken) {
      getUser()
      setA("hello")
      fetchallnotes()
    }
  }
  if (a === "") {
    aa()
  }
  return (
    <>
      {
        localStorage.authtoken ?
          <>
            <div className='h' >
              <h1>{userdata.name}</h1>
              <span >{userdata.email}</span>
              <h1 onClick={fetchallnotes}>My Blogs</h1>
        <div className='Gridale'>
              {Notes.map((note) => {
                return <BlogItem iD={note._id} key={note._id} title={note.title} image={note.image} desc={note.description} tag={note.tag} note={note} />;
              })
              
              
            }
            </div>
            </div>
          </>
          :
          <>
            <div className="mainbox">
              <i className="far fa-question-circle fa-spin"></i>
              <div className="msg">Sorry, Please Login Or Sign Up
                <br />
                <Link className='button-48' to={"/login"}><span>Login</span></Link>
                <br />
                <Link className='button-48' to={"/signup"}><span>signup</span></Link></div>
            </div>

          </>
      }
    </>
  )
}

export default Personalinfo
