import logger from "../utils/logger.js";
import helpers from "../utils/helpers.js";
import config from "../utils/config.js";

export default (key, value) => {
  const lang = config.devReferer;
  logger.info(`Starting setting item to ${lang} language`);

  try {
    // Get the file content
    const fileContent = helpers.getFileContent(lang);

    // Set the new key/value
    fileContent[key] = value;

    // Save file
    helpers.replaceFileContent(lang, fileContent);

    logger.success(`SET ${lang} ${key} => ${value}`);
  } catch (error) {
    logger.critical(
      `Error setting item to ${lang} file translations: ${error.message}`
    );
  }
};
