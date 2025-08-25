import { GraphQLClient, gql } from "graphql-request";
import { PostsResponse } from "@/type/post";

const client = new GraphQLClient(
  process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT as string
);

const POSTS_QUERY = gql`
  query GetPosts($first: Int!, $after: String) {
    posts(first: $first, after: $after) {
      pageInfo {
        hasNextPage
        endCursor
      }
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

export async function getPosts(first: 6, after?: string) {
  try {
    const data = await client.request<PostsResponse>(POSTS_QUERY, {
      first,
      after,
    });
    return data;
  } catch (error) {
    throw error;
  }
}
