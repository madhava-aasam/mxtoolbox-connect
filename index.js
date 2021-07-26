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
      return { error_code: 400, message: "Bad request" };
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
      response = {
        error_code: error.response.status,
        message: error.response && error.response.statusText,
      };
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
