import dotenv from "dotenv";
import axios from "axios";

import getPadoru from "./padoru.js";

dotenv.config();

const webhookURL = process.env.WEBHOOK_URL;

const { data } = await getPadoru();

axios(webhookURL, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  data: {
    username: "Padoru",
    content: data.results[0].media[0].gif.url,
  },
});
