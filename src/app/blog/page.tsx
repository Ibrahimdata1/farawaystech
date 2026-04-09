import type { Metadata } from "next";
import { getAllPosts } from "@/lib/blog";
import BlogListClient from "./BlogListClient";

export const metadata: Metadata = {
  title: "บล็อก | RunAway Tech - บทความเทคโนโลยีและการพัฒนาซอฟต์แวร์",
  description:
    "บทความเกี่ยวกับการทำเว็บไซต์ แอปมือถือ เทคโนโลยี และการพัฒนาซอฟต์แวร์ จาก RunAway Tech",
  openGraph: {
    title: "บล็อก | RunAway Tech",
    description: "บทความเกี่ยวกับการทำเว็บไซต์ แอปมือถือ เทคโนโลยี และการพัฒนาซอฟต์แวร์",
    url: "https://runawaytech.co/blog",
    type: "website",
  },
};

export default function BlogPage() {
  const thPosts = getAllPosts("th");
  const enPosts = getAllPosts("en");

  return <BlogListClient thPosts={thPosts} enPosts={enPosts} />;
}
