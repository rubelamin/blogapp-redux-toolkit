import React from "react";

export default function RelatedPostItem({ postItem }) {
  const { title, image, tags, createdAt } = postItem;

  return (
    <div className="card">
      <a href="post.html">
        <img src={image} className="card-image" alt="" />
      </a>
      <div className="p-4">
        <a href="post.html" className="text-lg post-title lws-RelatedPostTitle">
          {title}
        </a>
        <div className="mb-0 tags">
          {tags?.length > 0 &&
            tags.map((tag) => <span key={tag}> #{tag} </span>)}
        </div>
        <p>{createdAt}</p>
      </div>
    </div>
  );
}
