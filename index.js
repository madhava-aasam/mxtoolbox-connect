const axios = require("axios");
const config = require("./config");

const lookup = async (url, command, apiKey) => {
  try {
    if (
      !url ||
      !apiKey ||
      !command ||
      !config.validCommands.includes(command)
    ) {
      throw new Error("Bad request");
    }

    const options = {
      headers: {
        authorization: apiKey,
        "Content-Type": "application/json",
      },
    };

    let response = {};
    try {
      const result = await axios.get(
        `${config.apiUrl}/${command}/${sanitizeUrl(url)}`,
        options
      );
      response = result && result.data;
    } catch (error) {
      throw new Error("Bad request");
    }

    return response;
  } catch (error) {
  throw error;
  }
};

function sanitizeUrl(url) {
  return url.replace(/^(http|https):\/\/|\/$/g, "");
}

module.exports = { lookup };
