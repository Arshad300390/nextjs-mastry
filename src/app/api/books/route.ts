import books from "@/app/api/db";
export async function GET(){
    return  Response.json(books);
}

export async function POST(request: Request){
    const book = await request.json();
    const updatedBook = {
        id: books.length +1,
        ...book,
    };
    //console.log(updatedBook);

    books.push(updatedBook);
    return Response.json(updatedBook); 
}