'use client';

import { useRouter } from 'next/navigation';
import React from 'react'
const DeleteButton = ({bookId}:{bookId:number}) => {
    const router = useRouter();

    const handleDelete = async() => {
        try {
            const response = await fetch(`/api/books/${bookId}`,{
                method: 'DELETE',
            });
            if(response.ok){
                router.refresh();
            }
        } catch (error) {
            console.log('error is', error);
        }
    }
  return (
   <button className='text-red-800 border-2 border-red-800 px-[15px] py-[4px] rounded-md' onClick={handleDelete}>Delete</button>
  )
}

export default DeleteButton