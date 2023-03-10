import axios from "../../utils/axios";

export const getPost = async (id) => {
  const response = await axios.get(`/blogs/${id}`);

  return response.data;
};
