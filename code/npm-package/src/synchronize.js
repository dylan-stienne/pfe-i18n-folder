import fs from "fs";
import logger from "../utils/logger.js";
import helpers from "../utils/helpers.js";
import config from "../utils/config.js";

const getRefererKeys = (langsToSync) => {
  if (config.synchronizeReferer) {
    const refererFilePath = helpers.getFilePath(config.synchronizeReferer);
    if (!fs.existsSync(refererFilePath)) {
      logger.error(`Referer not found: ${lang}. Cannot perform translation.`);
      return;
    }
    return helpers.getFileKeys(config.synchronizeReferer);
  } else {
    let refererKeys = [];
    langsToSync.forEach((lang) => {
      const fileKeys = helpers.getFileKeys(lang);
      refererKeys = [...new Set([...refererKeys, ...fileKeys])];
    });
    return refererKeys;
  }
};

export default () => {
  logger.info(`Starting languages synchronization`);

  try {
    // Get all langs to synchronize
    const langsToSync = helpers.getLangs();

    // Get the referer keys if needed
    const refererKeys = getRefererKeys(langsToSync);

    // Synchronize each language file
    langsToSync.forEach((lang) => {
      const fileKeys = helpers.getFileKeys(lang);
      const fileContent = helpers.getFileContent(lang);

      // Retrieve missing keys
      const missingKeys = refererKeys.filter((key) => !fileKeys.includes(key));
      if (missingKeys.length > 0) {
        logger.info(`Missing keys in ${lang}: ${missingKeys.join(", ")}`);
      }

      // Retrieve extra keys
      const extraKeys = fileKeys.filter((key) => !refererKeys.includes(key));
      if (extraKeys.length > 0) {
        logger.info(`Extra keys in ${lang}: ${extraKeys.join(", ")}`);
      }

      // Add missing keys
      missingKeys.forEach((key) => {
        fileContent[key] = null;
      });

      // Remove extra keys
      extraKeys.forEach((key) => {
        delete fileContent[key];
      });

      // Write file
      helpers.replaceFileContent(lang, fileContent);
    });

    logger.success(`Files synchronizations completed successfully.`);
  } catch (error) {
    logger.critical(`Error synchronizing files: ${error.message}`);
  }
};
