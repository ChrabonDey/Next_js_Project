import React from 'react';

const Page = async ({ params }) => {
  console.log(params.post_id);
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.post_id}`);
  const data = await response.json();
 
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-5">
      <div className="bg-white w-full max-w-3xl p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold text-gray-800 mb-4">{data.title}</h1>
        <p className="text-lg text-gray-600 leading-relaxed">{data.body}</p>
      </div>
    </div>
  );
};

export default Page;
