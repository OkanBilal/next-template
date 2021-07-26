import { getAllNodes } from "next-mdx/server";
import NextLink from "next/link";
import Head from "next/head";

function Blog({ posts }) {
  return (
    <div>
      <Head>
        <title>Blog</title>
      </Head>
      <h1 className=" text-black dark:text-white font-semibold text-2xl mb-8 ">
        Blog
      </h1>

      <div>
        {posts.length ? (
          posts.map((post) => (
            <NextLink href={post.url} passHref>
              <article
                key={post.slug}
                className="cursor-pointer space-y-2 dark:text-white "
              >
                <p className="font-semibold text-xl">
                  {post.frontMatter.title}
                </p>
                <p className=" ">{post.frontMatter.excerpt}</p>
              </article>
            </NextLink>
          ))
        ) : (
          <p></p>
        )}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      posts: await getAllNodes("post"),
    },
  };
}

export default Blog;
