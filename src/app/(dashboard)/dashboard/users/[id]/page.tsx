import React from 'react';

// Define PageProps type with awaited params
interface PageProps {
  params: {
    id: string;
  };
  searchParams: {
    page: string;
  };
}

// Define your Page component as async
const Page = async ({ params, searchParams }: PageProps) => {
  // Await params before accessing its properties
  const { id } = await params; // Awaiting params
  const { page } = await searchParams; // Awaiting searchParams

  return (
    <div>
      <div>User: {id}</div>
      <div>Page: {page}</div>
    </div>
  );
};

export default Page;
