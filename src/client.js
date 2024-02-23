import { createClient } from "@sanity/client";
import {
  SANITY_PROJECT_ID,
  SANITY_DATASET,
  SANITY_API_VERSION,
  SANITY_USE_CDN,
} from "./utils/constants";
import combineQuery from "graphql-combine-query";
import gql from "graphql-tag";

const client = createClient({
  projectId: SANITY_PROJECT_ID,
  dataset: SANITY_DATASET,
  useCdn: SANITY_USE_CDN,
  apiVersion: SANITY_API_VERSION,
});

export default client;

export async function getPosts() {
  const posts = await client.fetch(
    '*[_type == "interview"]{"imageUrl": image.asset->url, Interview, backgroundColor, headline, launchDate, quotationMarkColor, textTeaser, title}'
  );
  return posts;
}

export async function getGlossary() {
  const glossary = await client.fetch(
    '*[_type == "glossary"]{additionalLinkText, additionalLinkURL, sources, term, websiteLink, websiteText, category}'
  );
  return glossary;
}

export async function getAnlaufstellen() {
  const glossary = await client.fetch(
    '*[_type == "anlaufstellen"]{category, link, logo, tags, title}'
  );
  return glossary;
}

export async function getAllData() {
  const glossary = await client.fetch(
    '*[_type == "interview" || _type == "glossary" || _type == "anlaufstellen"]{_type, "imageUrl": image.asset->url, Interview, backgroundColor, headline, launchDate, quotationMarkColor, textTeaser, title, additionalLinkText, additionalLinkURL, sources, term, websiteLink, websiteText, category, link, logo, tags}'
  );
  return glossary;
}
