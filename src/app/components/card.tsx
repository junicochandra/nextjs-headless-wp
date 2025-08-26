"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import timeAgo from "@/lib/helpers/timeAgo";
import { Post } from "@/type/post";
import { categoryColors } from "@/lib/helpers/categoryColors";

type CardProps = {
  posts: Post[];
};

function CardComponent({ posts }: CardProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {posts.map((post) => (
        <div key={post.id} className="h-full">
          <div className="okini-card rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            {/* Image */}
            <Link href={`/tutorial/${post.slug}`}>
              <div className="relative w-full h-56 flex justify-center">
                {post?.featuredImage?.node?.sourceUrl ? (
                  <div className="relative w-full h-56">
                    <Image
                      fill
                      src={post.featuredImage.node.sourceUrl}
                      alt={
                        post?.featuredImage?.node?.altText ||
                        post?.title ||
                        "No image"
                      }
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority
                    />
                  </div>
                ) : (
                  <div className="relative w-full h-56">
                    <Image
                      fill
                      src="/no-image.jpg"
                      alt="Juchan Dev"
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                )}
              </div>
            </Link>

            {/* Content */}
            <div className="p-5">
              <div className="flex items-center justify-between gap-3 mb-4 border-b border-[var(--border-card-okini)] pb-4">
                <h1 className="font-semibold uppercase">{post.title}</h1>

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

export const Card = React.memo(CardComponent);
