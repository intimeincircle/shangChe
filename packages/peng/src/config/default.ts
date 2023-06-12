import {CONST_BACKEND} from "../react-query/api";

export default {
  HOST: "0.0.0.0",
  PORT: 8000,
  API_URL: CONST_BACKEND,
  APP: {
    htmlAttributes: { lang: "en" },
    title: "",
    titleTemplate: "%s 鲲Live",
    meta: [
      {
        name: "description",
        content: "找到合适的人和人们.",
      },
    ],
  },
};
