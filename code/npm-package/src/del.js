import logger from "../utils/logger.js";
import helpers from "../utils/helpers.js";
import config from "../utils/config.js";

export default (key) => {
  const lang = config.devReferer;
  logger.info(`Starting deleting item to ${lang} language`);

  try {
    // Get the file content
    const fileContent = helpers.getFileContent(lang);

    // Del the new key/value
    delete fileContent[key];

    // Save file
    helpers.replaceFileContent(lang, fileContent);

    logger.success(`DEL ${lang} ${key}`);
  } catch (error) {
    logger.critical(
      `Error deleting item from ${lang} file translations: ${error.message}`
    );
  }
};
