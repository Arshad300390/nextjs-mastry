import React from 'react';

interface PageProps {
  params: {
    id: string;
  };
}

const Page = ({ params }: PageProps) => {
  const { id } = params;

  return (
    <div>
      <div>User: {id}</div>
    </div>
  );
};

export default Page;
