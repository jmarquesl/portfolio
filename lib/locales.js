import { languages, namespaces } from "next-i18next-static-site";

const locales = {};
languages.map((language) => {
  locales[language] = {};

  namespaces.map((namespace) => {
    locales[language][namespace] = require("./../locales/" +
      language +
      "/" +
      namespace +
      ".json");
  });
});

export default locales;