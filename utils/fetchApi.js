import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY,
      "X-RapidAPI-Host": "bayut.p.rapidapi.com",
    },
    // headers: {
    //   "x-rapidapi-host": "bayut.p.rapidapi.com",
    //   "x-rapidapi-key":
    //     "1858132b7dmsh2dd9693f887b039p1d412fjsnac4c515efb4f" ||
    //     process.env.NEXT_PUBLIC_RAPID_API_KEY,
    // },
  });

  return data;
};
