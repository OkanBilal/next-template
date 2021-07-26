import { getMdxNode, getMdxPaths } from "next-mdx/server";
import { useHydrate } from "next-mdx/client";
import { mdxComponents } from "../../components/mdx-components";
import Head from "next/head";

export default function PostPage({ post }) {
  const content = useHydrate(post, {
    components: mdxComponents,
  });

  return (
    <>
      <Head>
      <title>{post.frontMatter.title}</title>
      </Head>
      <div >
        <h1 className="text-3xl dark:text-white mb-6 font-semibold">
          {post.frontMatter.title}
        </h1>
        <p className="dark:text-white mb-12">{post.frontMatter.date}</p>
        <img
          className="rounded-xl"
          src={post.frontMatter.image}
          alt={post.frontMatter.title}
        />
      </div>

      <div className="dark:text-white">
        <article className="mt-12">
          <div className="prose dark:text-white">{content}</div>
        </article>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: await getMdxPaths("post"),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const post = await getMdxNode("post", context);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
  };
}
