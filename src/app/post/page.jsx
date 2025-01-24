import React from "react";
import Link from "next/link";

export default async function AllPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();
  
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">All Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div
            key={post.id}
            className="border border-gray-300 rounded-lg p-4 shadow-sm hover:shadow-md transition"
          >
            <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
            <p className="text-gray-600 mb-4">{post.body.slice(0, 100)}...</p>
            <Link href={`/post/post-details/${post.id}`}>
              <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                View Details
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
