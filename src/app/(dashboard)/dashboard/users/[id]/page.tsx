import React from 'react';

// Define PageProps type with an awaited params
interface PageProps {
  params: {
    id: string;
  };
}

const Page = async ({ params }: PageProps) => {
  // Await params before accessing its properties
  const { id } = await params; // Awaiting params

  return (
    <div>
      <div>User: {id}</div>
    </div>
  );
};

export default Page;
