import React from 'react';
const Page = async ({ params }: { params: { id: string } }) => {
  // Await params before accessing its properties
  const { id } = await params; // Awaiting params

  return (
    <div>
      <div>User: {id}</div>
    </div>
  );
};

export default Page;
