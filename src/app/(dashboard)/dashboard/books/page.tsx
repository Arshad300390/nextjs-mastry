import DeleteButton from "@/app/components/DeleteButton";
import Link from "next/link";
import React from "react";
interface Book {
  id: number;
  title: string;
  author: string;
  publishedDate: string;
  genre: string;
  price: number;
}
const books = async () => {
  const response = await fetch("http://localhost:3000/api/books/", {
    cache: "no-store",
  });
  if (!response.ok) throw new Error("Error during fetch books");
  const books: Book[] = await response.json();

  return (
    <>
      <h1 className="ml-2 text-[30px] w-full bg-slate-500">
        Books
        <div className="inline float-end mr-[20px]  hover:bg-slate-200 hover:border-2 hover:border-gray-600 hover:text-[28px] hover:rounded-md">
          <Link href="/dashboard/BookForm">Add Book</Link>
        </div>
      </h1>
      <div className="ml-[10px] pt-[20px]">
        <div className="grid grid-cols-3 gap-4">
          {books.map((book) => (
            <div className="pt-[10px]" key={book.id}>
              <h2>{book.title}</h2>
              <p>Author: {book.author}</p>
              <p>Published: {book.publishedDate}</p>
              <p>Genre: {book.genre}</p>
              <p>Price: ${book.price}</p>
              <DeleteButton bookId={book.id} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default books;
