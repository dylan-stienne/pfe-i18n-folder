import fs from "fs";
import fetch from "node-fetch";
import logger from "../utils/logger.js";
import helpers from "../utils/helpers.js";
import config from "../utils/config.js";

const transtateElement = async (element, targetedLang) => {
  const response = await fetch(config.deeplApiEndpoint, {
    method: "POST",
    headers: {
      Authorization: `DeepL-Auth-Key ${config.deeplApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      text: [element],
      source_lang: config.translateReferer,
      target_lang: targetedLang,
    }),
  });

  if (!response.ok) {
    throw new Error(`Translation error (Deepl api): ${response.status}`);
  }

  const data = await response.json();
  logger.info(`Translate "${element}" to "${data.translations[0].text}"`);
  return data.translations[0].text;
};

export default async (lang) => {
  lang = lang.toLowerCase().replaceAll("_", "-");
  logger.info(`Starting translate command for ${lang} language`);

  try {
    // Verify config
    if (!config.translateReferer) {
      logger.error(
        `Reference not define in the config. Cannot perform translation.`
      );
      return;
    }
    const referenceFilePath = helpers.getFilePath(config.translateReferer);
    if (!fs.existsSync(referenceFilePath)) {
      logger.error(`Reference not found: ${lang}. Cannot perform translation.`);
      return;
    }

    // Get reference lang content
    const refererContent = helpers.getFileContent(config.translateReferer);

    // Get target lang content
    const targetContent = helpers.getFileContent(lang);

    // Translate each null targeted values with the reference value
    for (const key of Object.keys(targetContent)) {
      if (targetContent[key] === null && refererContent[key]) {
        targetContent[key] = await transtateElement(refererContent[key], lang);
      }
    }

    // Write the file
    helpers.replaceFileContent(lang, targetContent);
  } catch (error) {
    logger.critical(
      `Error translating ${lang} file translations: ${error.message}`
    );
  }
};
