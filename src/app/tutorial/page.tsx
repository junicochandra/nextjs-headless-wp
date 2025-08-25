import { getPosts } from "@/lib/getPosts";
import { Card } from "@/app/components/card";

export default async function Page() {
  const data = await getPosts();

  return (
    <div className="container mx-auto p-5">
      <div className="container mx-auto mt-5">
        <Card posts={data.posts.nodes} />
      </div>
    </div>
  );
}
