import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "bd249yuo",
  dataset: "production",
  useCdn: true,
  apiVersion: "2024-02-21",
});

export default client;

// {"imageUrl": image.asset->url, Interview, backgroundColor, headline, launchDate, quotationMarkColor, textTeaser, title}
export async function getPosts() {
  const posts = await client.fetch(
    '*[_type == "interview"]{"imageUrl": image.asset->url, Interview, backgroundColor, headline, launchDate, quotationMarkColor, textTeaser, title}'
  );
  return posts;
}

// {additionalLinkText, additionalLinkURL, sources, term, websiteLink, websiteText, category}
export async function getGlossary() {
  const glossary = await client.fetch(
    '*[_type == "glossary"]{additionalLinkText, additionalLinkURL, sources, term, websiteLink, websiteText, category}'
  );
  return glossary;
}

// {additionalLinkText, additionalLinkURL, sources, term, websiteLink, websiteText, category}
export async function getAnlaufstellen() {
  const glossary = await client.fetch(
    '*[_type == "anlaufstellen"]{category, link, logo, tags, title}'
  );
  return glossary;
}
