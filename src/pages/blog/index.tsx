import { GetStaticProps } from "next";
import Head from "next/head";
import Prismic from "@prismicio/client";
import Link from 'next/link';
import { getPrismicClient } from "../../services/prismic";
import { RichText } from "prismic-dom";
// import {server} from '../../config';
import styles from "./styles.module.scss";

type Post = {
  slug: string;
  title: string;
  excerpt: string;
  updatedAt: string;
};

interface PostsProps {
  posts: Post[];
}

export default function Blog({ posts }: PostsProps) {
  return (
    <>
      <Head>
        <title>Blog | JWD</title>
      </Head>
      {/* A DATA DO POST PRECISA SER AJUSTADA PARA DISP MOBILE */}
      <main className={styles.container}>
        <div className={styles.posts}>
          {posts.map(post => (
            <Link href={`/blog/${post.slug}`}>
              <a key={post.slug}>
                <div className={styles.timeCircle}>
                  <time>{post.updatedAt}</time>
                </div>
                <div className={styles.postTextBox}>
                  <strong>{post.title}</strong>
                  <p>{post.excerpt}</p>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {

  const prismic = getPrismicClient();

  const response = await prismic.query(
    [Prismic.predicates.at("document.type", 'post')],
    {
      fetch: ["post.title", "post.content"],
      pageSize: 10,
    }
  );

  const posts = response.results.map(post => {
    return {
      slug: post.uid,
      title: RichText.asText(post.data.title),
      excerpt:
        post.data.content.find(content => content.type === "paragraph")?.text ?? '',
      updatedAt: new Date(post.last_publication_date).toLocaleDateString(
        "pt-BR",
        {
          day: "2-digit",
          month: "long",
          year: "numeric",
        }
      ),
    };
  });

  return {
    props: {
      posts,
    },
  };
};
