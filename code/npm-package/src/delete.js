import fs from "fs";
import logger from "../utils/logger.js";
import helpers from "../utils/helpers.js";

export default (lang) => {
  lang = lang.toLowerCase().replaceAll("_", "-");
  logger.info(`Starting delete command for ${lang} language`);

  try {
    const filePath = helpers.getFilePath(lang);

    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
      logger.success(`${filePath} file translations deleted successfully.`);
    } else {
      logger.error(
        `${filePath} file translations does not exist. Aborting deletion.`
      );
    }
  } catch (error) {
    logger.critical(
      `Error deleting ${lang} file translations: ${error.message}`
    );
  }
};
