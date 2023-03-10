import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import _ from "lodash";

import BlogCard from "../components/BlogCard";
import SideBar from "../components/SideBar";
import { fetchBlogs } from "../features/blogs/blogsSlice";

export default function Home() {
  const dispatch = useDispatch();
  const { blogs } = useSelector((state) => state.blogs);
  const { saved, selectedValue } = useSelector((state) => state.filtered);

  //   let clnBlogs = _.cloneDeep(blogs);
  const [sortedBlogs, setSortedBlogs] = useState(_.cloneDeep(blogs));

  useEffect(() => {
    dispatch(fetchBlogs(saved));
  }, [dispatch, saved]);

  useEffect(() => {
    if (selectedValue === "newest") {
      setSortedBlogs(
        _.cloneDeep(blogs).sort(
          (a, b) => parseInt(b.createdAt) - parseInt(a.createdAt)
        )
      );
    } else if (selectedValue === "most_liked") {
      setSortedBlogs(
        _.cloneDeep(blogs).sort((a, b) => parseInt(b.likes) - parseInt(a.likes))
      );
    } else {
      setSortedBlogs(_.cloneDeep(blogs));
    }
  }, [selectedValue, blogs]);

  return (
    <section className="wrapper">
      <SideBar />
      <main className="post-container" id="lws-postContainer">
        {sortedBlogs?.length > 0
          ? sortedBlogs.map((blog) => <BlogCard key={blog.id} blog={blog} />)
          : null}
      </main>
    </section>
  );
}
