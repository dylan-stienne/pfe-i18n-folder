import chalk from "chalk";

const createLog = (message) => {
  console.log(chalk.white(`[i18n-folder]`), message);
};

export default {
  info: (message) => {
    createLog(chalk.blue(`[INFO] ${message}`));
  },
  success: (message) => {
    createLog(chalk.green(`[SUCCESS] ${message}`));
  },
  warning: (message) => {
    createLog(chalk.yellow(`[WARNING] ${message}`));
  },
  error: (message) => {
    createLog(chalk.red(`[ERROR] ${message}`));
  },
  critical: (message) => {
    createLog(chalk.bgRed(`[CRITICAL] ${message}`));
  },
};
