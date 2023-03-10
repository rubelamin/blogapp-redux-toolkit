import axios from "../../utils/axios";

export const getBlogs = async (rdo) => {
  let queryString = "";
  if (rdo === "savedChecked") queryString += `isSaved=true`;

  const response = await axios.get(`/blogs?${queryString}`);

  return response.data;
};
