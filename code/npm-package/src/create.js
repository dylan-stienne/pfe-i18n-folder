import fs from "fs";
import logger from "../utils/logger.js";
import helpers from "../utils/helpers.js";

export default (lang) => {
  lang = lang.toLowerCase().replaceAll("_", "-");
  logger.info(`Starting create command for ${lang} language`);

  try {
    const filePath = helpers.getFilePath(lang);

    if (fs.existsSync(filePath)) {
      logger.warning(
        `${filePath} file translations already exist. Aborting creation.`
      );
    } else {
      fs.writeFileSync(filePath, "");
      logger.success(`${filePath} file translations created successfully.`);
    }
  } catch (error) {
    logger.critical(
      `Error creating ${lang} file translations: ${error.message}`
    );
  }
};
