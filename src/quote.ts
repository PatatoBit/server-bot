import axios from "axios";

type Quote = {
  content: string;
  author: string;
};

export default async function getQuote(): Promise<Quote> {
  const res = await axios.get<Quote>(`https://api.quotable.io/random`);

  return await res.data;
}
