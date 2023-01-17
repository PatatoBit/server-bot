import dotenv from "dotenv";
import axios from "axios";

import getQuote from "./quote.js";

dotenv.config();

const webhookURL = process.env.WEBHOOK_URL;

const { content, author } = await getQuote();

axios(webhookURL, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  data: {
    username: "Random Quote",
    content: `"**${content}**"\n- *${author}*`,
  },
});
