import axios from "../../utils/axios";

export const updateSaved = async ({ blogId, isvalue }) => {
  //   console.log(`on svapi ${isvalue}`);
  const res = await axios.get(`/blogs/${blogId}`);
  const { title, description, image, tags, likes, createdAt } = res.data;

  return await axios.put(`/blogs/${blogId}`, {
    title,
    description,
    image,
    tags,
    likes,
    isSaved: isvalue,
    createdAt,
  });

  //   return response.data;
};
