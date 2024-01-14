import logger from "../utils/logger.js";
import helpers from "../utils/helpers.js";
import config from "../utils/config.js";

export default (key, value) => {
  const lang = config.devReferer;
  logger.info(`Starting adding item to ${lang} language`);

  try {
    // Get the file content
    const fileContent = helpers.getFileContent(lang);

    // Verify if the key already exist
    if (key in fileContent) {
      logger.error(`Key ${key} already exist in ${lang} file translations.`);
      return;
    }

    // Add the new key/value
    fileContent[key] = value;

    // Save file
    helpers.replaceFileContent(lang, fileContent);

    logger.success(`ADD ${lang} ${key} => ${value}`);
  } catch (error) {
    logger.critical(
      `Error adding item to ${lang} file translations: ${error.message}`
    );
  }
};
