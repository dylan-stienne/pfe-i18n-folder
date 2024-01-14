import fs from "fs";
import logger from "./utils/logger.js";

const packagePath = process.cwd().replace("node_modules/i18n-folder", "package.json");
const customScripts = { i18n: "i18n" };

const packageJson = JSON.parse(await fs.readFileSync(packagePath, "utf-8"));
packageJson.scripts = { ...packageJson.scripts, ...customScripts };

await fs.writeFileSync(packagePath, JSON.stringify(packageJson, null, 2));

logger.info("Custom script added to package.json");
logger.success("i18n package is ready to be used !");
