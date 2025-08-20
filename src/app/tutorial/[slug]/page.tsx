import { getPostBySlug } from "@/lib/getPostBySlug";
import { Clock, User, BicepsFlexed } from "lucide-react";
import timeAgo from "@/lib/timeAgo";
import Image from "next/image";
import { Post } from "@/type/post";

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const post: Post = await getPostBySlug(slug);

  const categoryColors: Record<string, string> = {
    Beginner: "bg-green-100 text-green-800",
    Intermediate: "bg-blue-100 text-blue-800",
    Advanced: "bg-yellow-100 text-yellow-800",
    Expert: "bg-red-100 text-red-800",
    Uncategorized: "bg-gray-200 text-gray-700",
  };

  return (
    <div className="container mx-auto p-5">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 content-wrapper">
          <h1 className="text-4xl font-bold mb-3 leading-snug">{post.title}</h1>

          {/* Meta info */}
          <div className="flex items-center text-sm text-gray-500 space-x-4 mb-5">
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {timeAgo(post.modified)}
            </span>
            <span className="flex items-center gap-1 capitalize">
              <User className="w-4 h-4" />
              {post.author?.node?.name}
            </span>
          </div>

          {/* Featured image */}
          <div className="mb-6 mt-3">
            {post?.featuredImage?.node?.sourceUrl ? (
              <div className="relative w-full h-80 rounded-2xl overflow-hidden shadow-lg bg-white">
                <div className="w-full h-full flex items-center justify-center p-6">
                  <Image
                    src={post?.featuredImage?.node?.sourceUrl || "/next.svg"}
                    alt={
                      post?.featuredImage?.node?.altText ||
                      post?.title ||
                      "Juchan Dev"
                    }
                    width={500}
                    height={300}
                    className="object-contain"
                    priority
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
              </div>
            ) : (
              <div className="relative w-full h-80 rounded-2xl overflow-hidden shadow-lg bg-white">
                <div className="w-full h-full flex items-center justify-center p-6">
                  <Image
                    width={500}
                    height={300}
                    src="/next.svg"
                    alt="Juchan Dev"
                    className="object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
              </div>
            )}
          </div>

          {/* Article */}
          <div
            className="prose max-w-none prose-lg prose-headings:mb-4 prose-p:leading-relaxed prose-a:text-blue-600 hover:prose-a:underline"
            dangerouslySetInnerHTML={{ __html: post.content }}
          ></div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-5 space-y-6">
            {/* Category */}
            <div className="okini-card p-5 rounded-xl shadow-md">
              <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <BicepsFlexed className="w-4 h-4" />{" "}
                <span>Tingkat Kesulitan</span>
              </h2>
              <div className="flex flex-wrap gap-2">
                {post.categories?.edges?.map((cat) => (
                  <span
                    key={cat.node.id}
                    className={`px-3 py-1 text-sm rounded-full font-medium transition-colors duration-200 cursor-pointer uppercase ${
                      categoryColors[cat.node.name] ||
                      "bg-gray-200 text-gray-800 hover:bg-gray-300"
                    }`}
                  >
                    {cat.node.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Author */}
            <div className="okini-card p-5 rounded-xl shadow-md">
              <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <User className="w-4 h-4 text-2xl" />{" "}
                <span>Tentang Penulis</span>
              </h2>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-indigo-400 to-cyan-500 flex items-center justify-center text-white font-bold">
                  {post.author?.node?.name?.[0]}
                </div>
                <div>
                  <p className="font-medium">{post.author?.node?.name}</p>
                  <p className="text-xs">Penulis Artikel</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
