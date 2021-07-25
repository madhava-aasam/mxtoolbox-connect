const { default: axios } = require("axios");
const config = require("./config");

const lookup = async (url, command, apiKey) => {
  try {
    if (
      !url ||
      !apiKey ||
      !command ||
      !config.validCommands.includes(command)
    ) {
      return new Error("invalid input parameters");
    }

    const options = {
      headers: {
        authorization: apiKey,
        "Content-Type": "application/json",
      },
    };
    const result = await axios.get(
      `${config.apiUrl}/${command}/${sanitizeUrl(url)}`,
      options
    );
    return result.data;
  } catch (error) {
    throw error;
  }
};

function sanitizeUrl(url) {
  return url.replace(/^(http|https):\/\/|\/$/g, "");
}

module.exports = lookup;
