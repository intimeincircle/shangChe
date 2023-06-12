// Allows you to pre-compile ES6 syntax

// import any = jasmine.any;

require("@babel/register")();


// // Used by react-refresh
// @ts-ignore
global.$RefreshReg$ = function() {
  return null
};

// @ts-ignore
global.objectToJSON = JSON.stringify
// @ts-ignore
global.objectFromJSONTyped = JSON.parse

//     declare var objectToJSON: any
// declare var objectFromJSONTyped: any
//
// // Global variables for server-side
// @ts-ignore
global.__CLIENT__ = false;
// @ts-ignore
global.__SERVER__ = true;
// @ts-ignore
global.__DEV__ = process.env.NODE_ENV === "development";

// Run assets require hooks
require("./tools/webpack/hooks")();
// Run server
require("./src/server");
