import { SanityClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = SanityClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  datset: "production",
  apiVersion: "2022-01-26",
  useCdn: true,
  token: process.env.REACT_APP_SANITY_TOKEN,
});
