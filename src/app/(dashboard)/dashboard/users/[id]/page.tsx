import React from 'react'

const page =async ({params}:{params: {id: string}}) => {
    const {id} =await params;
  return (
    <div>
        <div>user {id}</div>
    </div>
  )
}

export default page