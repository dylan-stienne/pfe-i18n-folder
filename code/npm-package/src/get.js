import logger from "../utils/logger.js";
import helpers from "../utils/helpers.js";
import config from "../utils/config.js";

export default (key) => {
  const lang = config.devReferer;
  logger.info(`Starting getting item to ${lang} language`);

  try {
    const fileContent = helpers.getFileContent(lang);
    if (!fileContent[key]) {
      logger.warning(`GET ${lang} ${key} => Key not found or empty value.`);
    } else {
      logger.success(`GET ${lang} ${key} => ${fileContent[key]}`);
    }
  } catch (error) {
    logger.critical(
      `Error getting item from ${lang} file translations: ${error.message}`
    );
  }
};
