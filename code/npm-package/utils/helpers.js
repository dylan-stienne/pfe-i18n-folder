import fs from "fs";
import path from "path";
import config from "./config.js";
import logger from "./logger.js";

export default {
  getLangs() {
    const filesType = config.folderFilesType;
    return fs
      .readdirSync(config.folderPath)
      .filter((f) => path.extname(f).toLowerCase().substring(1) == filesType)
      .map((file) => path.basename(file, `.${filesType}`));
  },
  getFilePath(lang) {
    return path.resolve(config.folderPath, `${lang}.${config.folderFilesType}`);
  },
  getFileContent(lang) {
    const filePath = this.getFilePath(lang);
    const fileContent = fs.readFileSync(filePath, "utf8");
    const fileType = path.extname(filePath).toLowerCase().substring(1);

    try {
      if (fileContent === "") {
        return {};
      } else if (fileType === "json") {
        return this.toInlineDict(JSON.parse(fileContent));
      } else {
        return {};
      }
    } catch (error) {
      logger.critical(
        `Error reading ${filePath} file translations: ${error.message}`
      );
    }
  },
  getFileKeys(lang) {
    const fileContent = this.getFileContent(lang);
    return Object.keys(fileContent);
  },
  replaceFileContent(lang, fileContent) {
    const filePath = this.getFilePath(lang);
    const fileType = path.extname(filePath).toLowerCase().substring(1);
    fileContent = this.toFullDict(fileContent);

    try {
      if (fileType === "json") {
        fs.writeFileSync(filePath, JSON.stringify(fileContent, null, 2));
      } else {
      }
    } catch (error) {
      logger.critical(
        `Error writing ${filePath} file translations: ${error.message}`
      );
    }
  },
  toInlineDict(dict, separator = ".") {
    const output = {};
    for (const [key, value] of Object.entries(dict)) {
      if (typeof value === "object" && value !== null) {
        const nestedDict = this.toInlineDict(value, separator);
        for (const [k, v] of Object.entries(nestedDict)) {
          output[`${key}${separator}${k}`] = v;
        }
      } else {
        output[key] = value;
      }
    }
    return output;
  },
  toFullDict(dict, separator = ".") {
    const output = {};
    for (const [key, value] of Object.entries(dict)) {
      const path = key.split(separator);
      if (path.length > 1) {
        const [mainKey, ...restPath] = path;
        if (!(mainKey in output)) {
          const item_tmp = {};
          for (const [k, v] of Object.entries(dict)) {
            const parts = k.split(separator);
            if (parts[0] === mainKey) {
              item_tmp[parts.slice(1).join(separator)] = v;
            }
          }
          output[mainKey] = this.toFullDict(item_tmp, separator);
        }
      } else {
        output[path[0]] = value;
      }
    }
    return output;
  },
};
