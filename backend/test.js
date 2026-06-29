const dns = require("node:dns").promises;

dns.resolveSrv("_mongodb._tcp.cluster0.tfvlcx0.mongodb.net")
  .then(console.log)
  .catch(console.error);