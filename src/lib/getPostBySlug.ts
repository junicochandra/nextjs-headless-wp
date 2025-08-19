import { GraphQLClient } from "graphql-request";

const client = new GraphQLClient(
  process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT as string
);

const POST_QUERY = `
  query GetPostBySlug($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      id
      title
      excerpt
      slug
      content
      date
      modified
      author { node { name } }
      categories { edges { node { id name } } }
      featuredImage { node { sourceUrl altText } }
    }
  }
`;

export async function getPostBySlug(slug: string) {
  const localKey = `post_${slug}`;

  try {
    const { post } = await client.request(POST_QUERY, { slug });
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem(
          localKey,
          JSON.stringify({ data: post, time: Date.now() })
        );
      } catch {}
    }
    return post;
  } catch (err) {
    console.error(err);
    return null;
  }
}
