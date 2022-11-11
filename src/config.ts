import { ConfigExtender } from "hardhat/types";

export const deployConfigExtender: ConfigExtender = (resolvedConfig, config) => {
  const defaultConfig = {
    confirmations: 0,
    verify: false,
    pathToMigrations: "./deploy",
  };

  if (config.migrate !== undefined) {
    const { cloneDeep } = require("lodash");
    const customConfig = cloneDeep(config.migrate);

    resolvedConfig.migrate = { ...defaultConfig, ...customConfig };
  } else {
    resolvedConfig.migrate = defaultConfig;
  }
};
