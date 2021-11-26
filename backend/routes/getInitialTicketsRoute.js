// *** API to fetch all tickets from Zendesk ***

import dotenv from "dotenv";
import express from "express";
import axios from "axios";

dotenv.config();

var router = express();
const key = process.env.KEY; // get the Zendesk credentials from .env file
const subdomain = process.env.SUBDOMAIN; // get Zendesk subdomain from .env file
const config = {
  method: "get",
  headers: {
    Authorization: key,
  },
}; // config for axios request to Zendesk API
var url = "https://" + subdomain + ".zendesk.com/api/v2/tickets.json"; // url for Zendesk API

router.get("/", async (req, res) => {
  // fetch all tickets from Zendesk API
  var data = await axios.get(url, config).catch(function (error) {
    res.status(500).send(error);
  });

  // if response status is ok, send the data
  if (data && data.status === 200) {
    var dataJson = [data.data];
    while (data.data.next_page) {
      data = await axios.get(data.data.next_page, config);
      dataJson.push(data.data);
    }
    res.status(200).json(dataJson);
  }
});

export default router;
