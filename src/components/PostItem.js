import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { savedAct } from "../features/favourites/savedSlice";
import { likeAct } from "../features/favourites/likeSlice";

export default function PostItem({ postData }) {
  const dispatch = useDispatch();

  const { title, description, image, tags, likes, isSaved } = postData;
  const { blogId } = useParams();

  const [mangeLike, setManageLike] = useState(likes);
  const [isvalue, setManageSaved] = useState(isSaved);

  useEffect(() => {
    dispatch(savedAct({ blogId, isvalue }));
  }, [dispatch, blogId, isvalue]);

  const savedHandler = () => {
    setManageSaved((prev) => !prev);
    // const isvalue = !isSaved;
  };

  const likeHandler = () => {
    setManageLike((prev) => prev + 1);
    dispatch(likeAct(blogId));
  };

  return (
    <main className="post">
      <img
        src={image}
        alt={title}
        className="w-full rounded-md"
        id="lws-megaThumb"
      />
      <div>
        <h1 className="mt-6 text-2xl post-title" id="lws-singleTitle">
          {title}
        </h1>
        <div className="tags" id="lws-singleTags">
          {tags?.map((tag) => (
            <span key={tag}>#{tag} </span>
          ))}
        </div>
        <div className="btn-group">
          <button
            className="like-btn"
            id="lws-singleLinks"
            onClick={likeHandler}
          >
            <i className="fa-regular fa-thumbs-up"></i> {mangeLike}
          </button>
          <button
            className={isvalue ? "active save-btn" : "save-btn"}
            id="lws-singleSavedBtn"
            onClick={savedHandler}
          >
            <i className="fa-regular fa-bookmark"></i>{" "}
            {isvalue ? "Saved" : "Save"}
          </button>
        </div>
        <div className="mt-6">
          <p>{description}</p>
        </div>
      </div>
    </main>
  );
}
