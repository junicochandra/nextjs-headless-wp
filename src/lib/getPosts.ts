import { GraphQLClient } from "graphql-request";

const TEN_MINUTES = 10 * 60 * 1000;

// Use global to make this cache persist as long as the server is alive.
globalThis.getPosts = globalThis.getPosts || { data: null, time: 0 };

export async function getPosts() {
  const now = Date.now();

  if (
    globalThis.getPosts.data &&
    now - globalThis.getPosts.time < TEN_MINUTES
  ) {
    console.log("Ambil dari cache");
    return globalThis.getPosts.data;
  }

  console.log("Fetch ke GraphQL");
  const client = new GraphQLClient(
    process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT as string
  );
  const query = `
    {
      posts {
        nodes {
          id
          title
          excerpt
          slug
          content
          author {
            node {
              id
              name
            }
          }
          categories {
            edges {
              node {
                id
                name
                slug
                link
              }
            }
          }
          featuredImage {
            node {
              sourceUrl
              altText
            }
          }
          date
          modified
        }
      }
    }
  `;

  try {
    const data = await client.request(query);
    globalThis.getPosts = { data, time: now };
    return data;
  } catch (error) {
    console.error("Error fetch GraphQL:", error);
    // fallback: use old cache if available
    if (globalThis.getPosts.data) {
      console.warn("Using old cache because fetch failed");
      return globalThis.getPosts.data;
    }
    throw error;
    // if cache is empty, still throw error
  }
}
