import axios from "../../utils/axios";

export const getRelatedPosts = async ({ id, tags }) => {
  let limit = 5;
  let queryString =
    tags?.length > 0
      ? tags.map((tag) => `tags_like=${tag}`).join("&") +
        `&id_ne=${id}&_limit=${limit}`
      : `id_ne=${id}&_limit=${limit}`;
  const response = await axios.get(`/blogs?${queryString}`);

  return response.data;
};
