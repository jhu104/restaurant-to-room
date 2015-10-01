var config = {
  mongoURI: 'mongodb://localhost:27017/rtr',
  cookieMaxAge: 30 * 24 * 60 * 60 * 1000, //30 days expressed in milliseconds

  //dev
  deliveryKey: "YTViMjIyMGVmMTBhYmEzZWU1OGZhM2MzMDc4NDIxYTJj", //secret 4erAQGR0co0t0WwTcwGbbHhm7G883aI15K9EdrHN
  //prod
  //deliveryKey: "MTljYjQyY2YxMDdlODM5NjZlMzJmODI3MjZlZDExNjAy", //secret gdBCZFnjGOs8MOqQ5WLVjcExfmQABrep6aaUDl6N

  address: {
    addr: '288 Coleridge St',
    city: 'San Franciso',
    zip: '94110',
    state: 'CA'
  },
  phone: '415-555-1234'
};

module.exports = config