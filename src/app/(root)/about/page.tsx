import React from 'react'

const page = async() => {
  // throw new Error("not implemented");
  const response = await fetch("https://jsonplaceholder.typicode.com/comments");
  if(!response.ok) throw new Error("edrror fetching data");
  const comments = await response.json();
  return (
    <>
    <div>about page!</div>
    <ul>
        {comments.map((comment: {id: number, email: string}) => (
          <li key={comment.id}>{comment.email}</li>
        ))}
      </ul>
      </>
  )
}

export default page