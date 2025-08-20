import { GraphQLClient, gql } from "graphql-request";
import { PostsResponse } from "@/type/post";

const TEN_MINUTES = 10 * 60 * 1000;

let cache: { data: PostsResponse | null; time: number } = {
  data: null,
  time: 0,
};

const client = new GraphQLClient(
  process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT as string
);

const POSTS_QUERY = gql`
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

export async function getPosts() {
  const now = Date.now();

  if (cache.data && now - cache.time < TEN_MINUTES) {
    // console.log("Retrieve from cache (server)");
    return cache.data;
  }

  // console.log("Fetch to GraphQL API");
  try {
    const data = await client.request<PostsResponse>(POSTS_QUERY);
    cache = { data, time: now }; // update cache
    return data;
  } catch (error) {
    // console.error("Error fetch GraphQL:", error);
    if (cache.data) {
      // console.warn("Use old cache because fetch failed");
      return cache.data;
    }
    throw error;
  }
}
