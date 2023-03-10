import { Link } from "react-router-dom";

export default function BlogCard({ blog }) {
  const { id, title, image, tags, likes, isSaved, createdAt } = blog;

  return (
    <div className="lws-card">
      <Link to={`/blog/${id}`}>
        <img src={image} className="lws-card-image" alt="" />
      </Link>
      <div className="p-4">
        <div className="lws-card-header">
          <p className="lws-publishedDate">{createdAt}</p>
          <p className="lws-likeCount">
            <i className="fa-regular fa-thumbs-up"></i>
            {likes}
          </p>
        </div>
        <Link to={`/blog/${id}`} className="lws-postTitle">
          {title}
        </Link>
        <div className="lws-tags">
          {tags?.map((tag) => (
            <span key={tag}>#{tag} </span>
          ))}
        </div>
        <div className="flex gap-2 mt-4">
          <span className={isSaved ? "lws-badge" : ""}>
            {" "}
            {isSaved ? "Saved" : "Save"}{" "}
          </span>
        </div>
      </div>
    </div>
  );
}
