const apiUrl = "https://api.mxtoolbox.com/api/v1/Lookup";

const validCommands = [
  "mx",
  "a",
  "dns",
  "spf",
  "txt",
  "soa",
  "ptr",
  "blacklist",
  "smtp",
  "tcp",
  "http",
  "https",
  "ping",
  "trace",
  "dmarc",
];

module.exports = { apiUrl, validCommands };
