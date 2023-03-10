import axios from "../../utils/axios";

export const updateLike = async (blogId) => {
  const res = await axios.get(`/blogs/${blogId}`);
  const { title, description, image, tags, likes, isSaved, createdAt } =
    res.data;

  return await axios.put(`/blogs/${blogId}`, {
    title,
    description,
    image,
    tags,
    likes: likes + 1,
    isSaved,
    createdAt,
  });
};
