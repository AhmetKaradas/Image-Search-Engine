import axios from "axios";

const searchImages = async (name) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID aio23AW8wAT-HaxLf4HM8m9k2RysMerJt-mzXmlhGKg",
    },
    params: {
      query: name,
    },
  });
  return response.data.results;
};

export default searchImages;
