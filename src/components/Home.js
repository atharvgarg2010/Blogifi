import React, { useEffect } from 'react'
import blogContext from '../context/Blogs/blogContext'
import { useContext } from 'react'
import BlogItem from './BlogItem'
import HomeBlogItem from './HomeBlogItem'
import { useNavigate } from 'react-router-dom'
import Neat from './Neat.png'

export default function Home() {
    const context = useContext(blogContext)
    const Notesss = context.Notesss
    const fetchallblogs = context.fetchallblogs
    // const GetUserById = context.GetUserById
    const Name = context.Name
    const Navigate = useNavigate()
    const d = new Date();
    const days = {
        1: "Monday",
        2: "Tuesday",
        3: "Wednesday",
        4: "Thursday",
        5: "Friday",
        6: "Saturday",
        7: "Sunday"
    }
useEffect(()=>{
    fetchallblogs()
},[])

    const day = days[d.getDay()]
    // console.log(day);
    return (
        <>
        {localStorage.authtoken ?
        <>
        <div className='HomeBg'>
            <img src={Neat}/>
        </div>
            <div className="Gridale">
                {Notesss.map((note) => {
                    // GetUserById(note.user)
                    
                    return <HomeBlogItem  iD={note._id} key={note._id} title={note.title} image={note.image} desc={note.description} tag={note.tag} note={note} />;
                })}


        </div></>
        :
        useEffect(()=>{
            Navigate("/login")
        },[])
    }
    </>
    )
}
