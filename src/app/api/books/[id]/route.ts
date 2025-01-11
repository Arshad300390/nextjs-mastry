import books from "@/app/api/db";
export async function DELETE(req: Request, {params}:{params: {id: string}}){
    const {id} =await params;
    const bookId = parseInt(id, 10);
    console.log("id:", id, "Type of id:", typeof id);
    const bookIndex = books.findIndex((book)=>book.id===bookId)
    console.log("index is",bookIndex);

    if (bookIndex === -1) {
        return Response.json({ error: "Book not found" }, { status: 404 });
      }
      
    books.splice(bookIndex, 1);
    console.log("Updated books array:", books);
    return Response.json({ message: "Book deleted successfully" });
  }


// export async function POST(request: Request){
//     const book = await request.json()
//     book.push(book);
//     return Response.json(books); 
// }