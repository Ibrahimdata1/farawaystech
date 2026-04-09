import type { Metadata } from "next";
import { getPostBySlug, getAllSlugs } from "@/lib/blog";
import BlogPostClient from "./BlogPostClient";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = (await getPostBySlug(slug, "th")) || (await getPostBySlug(slug, "en"));

  if (!post) {
    return { title: "Post Not Found | RunAway Tech" };
  }

  return {
    title: `${post.title} | RunAway Tech Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      locale: post.lang === "th" ? "th_TH" : "en_US",
      url: `https://runawaytech.co/blog/${slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
    alternates: {
      canonical: `https://runawaytech.co/blog/${slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;

  const thPost = await getPostBySlug(slug, "th");
  const enPost = await getPostBySlug(slug, "en");

  // If slug is a pairedSlug, try to find the other version
  let thVersion = thPost;
  let enVersion = enPost;

  if (thPost && !enPost && thPost.pairedSlug) {
    enVersion = await getPostBySlug(thPost.pairedSlug, "en");
  }
  if (enPost && !thPost && enPost.pairedSlug) {
    thVersion = await getPostBySlug(enPost.pairedSlug, "th");
  }

  const post = thVersion || enVersion;
  const jsonLd = post ? JSON.stringify([
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      datePublished: post.date,
      author: { "@type": "Organization", name: "RunAway Tech" },
      publisher: { "@type": "Organization", name: "RunAway Tech", url: "https://runawaytech.co" },
      description: post.excerpt,
      mainEntityOfPage: `https://runawaytech.co/blog/${slug}`,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://runawaytech.co" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://runawaytech.co/blog" },
        { "@type": "ListItem", position: 3, name: post.title },
      ],
    },
  ]) : null;

  return (
    <>
      {jsonLd && <script type="application/ld+json">{jsonLd}</script>}
      <BlogPostClient thPost={thVersion} enPost={enVersion} />
    </>
  );
}
