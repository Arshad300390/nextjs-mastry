import React from 'react';

interface PageProps {
  params: {
    id: string;
  };
}

const Page = async ({ params }: PageProps) => {
  const { id } = params; // Correctly destructure `id` from `params`
  return (
    <div>
      <div>User: {id}</div>
    </div>
  );
};

export default Page;
