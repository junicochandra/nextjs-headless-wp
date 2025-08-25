"use client";

import { useEffect, useState, useCallback } from "react";
import { getPosts } from "@/lib/getPosts";
import { Card } from "@/app/components/card";
import { Post } from "@/type/post";

export default function Page() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [cursor, setCursor] = useState<string | null>(null);

  const loadPosts = useCallback(async () => {
    if (loading || !hasNextPage) return;
    setLoading(true);

    const data = await getPosts(6, cursor ?? undefined);

    setPosts((prev) => [...prev, ...data.posts.nodes]);
    setHasNextPage(data.posts.pageInfo.hasNextPage);
    setCursor(data.posts.pageInfo.endCursor);

    setLoading(false);
  }, [cursor, hasNextPage, loading]);

  useEffect(() => {
    loadPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 200
      ) {
        loadPosts();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loadPosts]);

  return (
    <div className="container mx-auto p-5">
      <div className="container mx-auto mt-5">
        <Card posts={posts} />
        {loading && <p className="text-center mt-5">Loading...</p>}
      </div>
    </div>
  );
}
