import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRelatedPosts } from "../features/relatedPost/relatedPostSlice";
import RelatedPostItem from "./RelatedPostItem";
import Loading from "./ui/Loading";

export default function RelatedPost({ id, tags }) {
  const dispatch = useDispatch();
  const { relatedPosts, isLoading, isError, error } = useSelector(
    (state) => state.relatedPosts
  );

  useEffect(() => {
    dispatch(fetchRelatedPosts({ id, tags }));
  }, [dispatch, id, tags]);

  let content = null;

  if (isLoading) content = <Loading />;

  if (!isLoading && isError)
    content = <div className="space-y-4 related-post-container">{error}</div>;

  if (!isLoading && !isError & (!relatedPosts?.length > 0))
    content = (
      <div className="space-y-4 related-post-container">
        No related post found!
      </div>
    );

  if (!isLoading && !isError & (relatedPosts?.length > 0))
    content = (
      <div className="space-y-4 related-post-container">
        {relatedPosts.map((postItem) => (
          <RelatedPostItem postItem={postItem} key={postItem.id} />
        ))}
      </div>
    );

  return (
    <aside>
      <h4 className="mb-4 text-xl font-medium" id="lws-relatedPosts">
        Related Posts
      </h4>
      {content}
    </aside>
  );
}
