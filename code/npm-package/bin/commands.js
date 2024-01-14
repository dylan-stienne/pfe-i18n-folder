#!/usr/bin/env node
import logger from "../utils/logger.js";
import lib from "../index.js";

// Helpers
const verifyArgs = (args, count) => {
  if (args.length !== count) {
    logger.error("Please specify valid arguments");
    process.exit(1);
  }
};

// Run action
const args = process.argv.slice(3);
const action = process.argv[2];

switch (action) {
  case "create":
    verifyArgs(args, 1);
    lib.createCommand(args[0]);
    process.exit(0);
    break;
  case "delete":
    verifyArgs(args, 1);
    lib.deleteCommand(args[0]);
    process.exit(0);
    break;
  case "synchronize":
    verifyArgs(args, 0);
    lib.synchronizeCommand();
    process.exit(0);
    break;
  case "translate":
    verifyArgs(args, 1);
    await lib.translateCommand(args[0]);
    process.exit(0);
    break;
  case "add":
    verifyArgs(args, 2);
    lib.addCommand(args[0], args[1]);
    process.exit(0);
    break;
  case "get":
    verifyArgs(args, 1);
    lib.getCommand(args[0]);
    process.exit(0);
    break;
  case "set":
    verifyArgs(args, 2);
    lib.setCommand(args[0], args[1]);
    process.exit(0);
    break;
  case "del":
    verifyArgs(args, 1);
    lib.delCommand(args[0]);
    process.exit(0);
    break;
  default:
    logger.error("Please specify valid action");
    process.exit(1);
    break;
}
