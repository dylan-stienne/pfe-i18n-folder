import fs from "fs";
import logger from "./logger.js";

const DEFAULT_CONFIG = {
  folderPath: "./i18n",
  folderFilesType: "json",
  devReferer: "en",
  synchronizeReferer: "en",
  translateReferer: "en",
  deeplApiEndpoint: "", // https://api-free.deepl.com/v2/translate
  deeplApiKey: "",
};

const CONFIG_NAMES = [
  "i18n_folder.config.json",
  "i18n_folder.config.js",
  "i18n_folder.config.ts",
  "i18n.config.json",
  "i18n.config.js",
  "i18n.config.ts",
];

const findConfigPath = () => {
  for (let i = 0; i < CONFIG_NAMES.length; i++) {
    const configPath = `${process.cwd()}/${CONFIG_NAMES[i]}`;
    if (fs.existsSync(configPath)) {
      return configPath;
    }
  }
  return null;
};

const getCustomConfig = () => {
  const configPath = findConfigPath();
  if (!configPath) return {};
  const configType = configPath.split(".").pop();
  const configContent = fs.readFileSync(configPath, "utf-8");

  try {
    switch (configType) {
      case "json":
        return JSON.parse(configContent);
      case "js":
        return require(configPath);
      case "ts":
        return require(configPath);
      default:
        logger.error("Type of configuration file not supported");
        process.exit(-1);
    }
  } catch (error) {
    logger.error("Error while parsing configuration file");
    process.exit(-1);
  }
};

const getConfig = () => {
  const customConfig = getCustomConfig();
  return { ...DEFAULT_CONFIG, ...customConfig };
};

export default getConfig();
