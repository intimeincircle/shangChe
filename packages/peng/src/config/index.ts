import defaultConfig from "./default";
import prodConfig from "./prod";

// @ts-ignore
export default __DEV__ ? defaultConfig : { ...defaultConfig, ...prodConfig };
