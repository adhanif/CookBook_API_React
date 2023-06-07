import { createClient } from "contentful";

export const client = createClient({
  space: import.meta.env.VITE_SPACE_ID,
  environment: import.meta.env.VITE_ENVIRONMENT_ID,
  accessToken: import.meta.env.VITE_ACCESS_TOKEN,
});

// const contentful = require("contentful");
// export const client = createClient({
//   space: process.env.VITE_SPACE_ID,
//   environment: process.env.VITE_ENVIRONMENT_ID, // defaults to 'master' if not set
//   accessToken: process.env.VITE_ACCESS_TOKEN,
// });

// client
//   .getEntry("<entry_id>")
//   .then((entry) => console.log(entry))
//   .catch(console.error);
