import { Post } from "@/type/post";
import { GraphQLClient, gql } from "graphql-request";
import { notFound } from "next/navigation";

const client = new GraphQLClient(
  process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT as string
);

const POST_QUERY = gql`
  query GetPostBySlug($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      id
      title
      excerpt
      slug
      content
      date
      modified
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
          }
        }
      }
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
    }
  }
`;

export async function getPostBySlug(slug: string): Promise<Post> {
  const data = await client.request<{ post: Post }>(POST_QUERY, { slug });
  if (!data.post) {
    notFound();
  }
  return data.post;
}
