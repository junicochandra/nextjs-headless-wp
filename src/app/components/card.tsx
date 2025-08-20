import Image from "next/image";
import Link from "next/link";
import timeAgo from "@/lib/timeAgo";
import { getPosts } from "@/lib/getPosts";
import { Post, PostsResponse } from "@/type/post";

export default async function Card() {
  const data: PostsResponse = await getPosts();
  const posts = data.posts.nodes;

  const categoryColors: Record<string, string> = {
    Beginner: "bg-green-100 text-green-800",
    Intermediate: "bg-blue-100 text-blue-800",
    Advanced: "bg-yellow-100 text-yellow-800",
    Expert: "bg-red-100 text-red-800",
    Uncategorized: "bg-gray-200 text-gray-700",
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {posts.map((post: Post) => (
        <div key={post.id} className="h-full">
          <div className="okini-card rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            {/* Image */}
            <Link href={`/tutorial/${post.slug}`}>
              <div className="relative w-full h-56 flex justify-center">
                {post?.featuredImage?.node?.sourceUrl ? (
                  <div className="relative w-full h-56">
                    <Image
                      fill
                      src={post.featuredImage.node.sourceUrl || "/next.svg"}
                      alt={
                        post?.featuredImage?.node?.altText ||
                        post?.title ||
                        "No image"
                      }
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="relative w-full h-56">
                    <Image
                      fill
                      src="/next.svg"
                      alt="Juchan Dev"
                      className="object-cover"
                    />
                  </div>
                )}
              </div>
            </Link>

            {/* Content */}
            <div className="p-5">
              <div className="flex items-center justify-between gap-3 mb-4 border-b border-[var(--border-card-okini)] pb-4">
                {/* Title */}
                <h2 className="font-semibold uppercase">{post.title}</h2>

                {/* Category Badge */}
                <div className="flex flex-wrap gap-2 text-xs font-semibold uppercase">
                  {post.categories.edges.length > 0 ? (
                    post.categories.edges.map((category) => (
                      <span
                        key={category.node.id}
                        className={`px-2 py-0.5 rounded-full ${
                          categoryColors[category.node.name] ||
                          "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {category.node.name}
                      </span>
                    ))
                  ) : (
                    <span className="px-2 py-0.5 rounded-full">Kosong</span>
                  )}
                </div>
              </div>

              {/* Description */}
              <div
                className="text-sm mb-5"
                dangerouslySetInnerHTML={{ __html: post.excerpt }}
              />

              {/* Footer */}
              <div className="flex items-center justify-between py-2 gap-10">
                <div className="capitalize mt-2">
                  <Link
                    href={`/tutorial/${post.slug}`}
                    className="rounded-md bg-[var(--primary)] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 transition-colors duration-200"
                  >
                    Selengkapnya
                  </Link>
                </div>
                <div className="text-xs mt-2">
                  Diperbarui : {timeAgo(post.modified)}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
