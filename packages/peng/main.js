// Allows you to pre-compile ES6 syntax

// import any = jasmine.any;


const Sentry = require("@sentry/node");

// Importing @sentry/tracing patches the global hub for tracing to work.
const SentryTracing = require("@sentry/tracing");

Sentry.init({
  dsn: "https://591b90aea84d408085c481a44737ce8e@o283255.ingest.sentry.io/6298610",

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});


// const transaction = Sentry.startTransaction({
//   op: "test",
//   name: "My First Test Transaction",
// });
//
// setTimeout(() => {
//   try {
//     foo();
//   } catch (e) {
//     Sentry.captureException(e);
//   } finally {
//     transaction.finish();
//   }
// }, 99);

require("@babel/register")();


// // Used by react-refresh
// @ts-ignore
global.$RefreshReg$ = () => null;
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
require("./server/main");
