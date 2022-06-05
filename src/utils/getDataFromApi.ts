import axios from "axios";

export const getDataFromApi = async (city: string) => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;
  const { data } = await axios.get(
    `${apiBaseUrl}?q=${city}&units=metric&lang=fr&appid=${apiKey}`
  );
  return data;
};
