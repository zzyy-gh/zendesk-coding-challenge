// API to fetch all tickets from Zendesk
require("dotenv").config();
var express = require("express");
var router = express();
var axios = require("axios");

const key = process.env.KEY;
const subdomain = process.env.SUBDOMAIN;
var config = {
  method: "get",
  headers: {
    Authorization: key,
  },
};

var url = "https://" + subdomain + ".zendesk.com/api/v2/tickets.json";

router.get("/", async (req, res) => {
  var data = await axios.get(url, config).catch(function (error) {
    res.status(500).send(error);
  });
  if (data) {
    var dataJson = [data.data];
    while (data.data.next_page) {
      data = await axios.get(data.data.next_page, config);
      dataJson.push(data.data);
    }
    res.status(200).json(dataJson);
  }
});

module.exports = router;
