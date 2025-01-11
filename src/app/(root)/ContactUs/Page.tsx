'use client'

import React, { useEffect, useState } from 'react'
//comnet
const Page = () => {
  const [comments, setComments] = useState([]);
  useEffect( ()=>{
    const fetchComments = async()=>{
      try {
        const response =await fetch("https://jsonplaceholder.typicode.com/comments");
        const data = await response.json();
        setComments(data);
      } catch (error) {
        console.error("fect error :", error);
      }
    }
    fetchComments();
  },[]);
  return (
    <>
    <div>contact us page</div>
    <ul>
        {comments.map((comment: {id: number, email: string}) => (
          <li key={comment.id}>{comment.email}</li>
        ))}
      </ul>
      </>
  )
}

export default Page