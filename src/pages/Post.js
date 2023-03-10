import RelatedPost from "../components/RelatedPost";
import GoHome from "../components/ui/GoHome";

import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchPost } from "../features/post/postSlice";
import PostItem from "../components/PostItem";
import Loading from "../components/ui/Loading";

export default function Post() {
  const params = useParams();
  const { blogId } = params;
  const dispatch = useDispatch();
  const { post, isLoading, isError, error } = useSelector(
    (state) => state.post
  );
  const { id, tags } = post;

  useEffect(() => {
    dispatch(fetchPost(blogId));
  }, [dispatch, blogId]);

  // decide to render
  let content = null;
  if (isLoading) content = <Loading />;

  if (!isLoading && isError)
    content = <section className="post-page-container">{error}</section>;

  if (!isLoading && !isError && !post?.id)
    content = <section className="post-page-container">No post found!</section>;

  if (!isLoading && !isError && post?.id) {
    content = (
      <section className="post-page-container">
        <PostItem postData={post} />
        <RelatedPost id={id} tags={tags} />
      </section>
    );
  }

  return (
    <>
      <GoHome />
      {content}
    </>
  );
}
