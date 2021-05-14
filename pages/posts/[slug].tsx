import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { createClient } from 'contentful';
import { InferGetStaticPropsType } from 'next';
import Image from 'next/image';
import React from 'react';

import { Post } from '../../models/Post';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: "post",
  });

  const posts = res.items as unknown as Post[];

  const paths = posts.map((item) => {
    return { params: { slug: item.fields.slug } };
  });

  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  const { items } = await client.getEntries({
    content_type: "post",
    "fields.slug": params.slug,
  });

  return { props: { post: items[0] as unknown as Post }, revalidate: 10 };
};
const PostSite = ({ post }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { title, slug, thumbnail, content, description, date } = post.fields;
  return (
    <div className="bg-red-200 mx-auto font-serif" style={{ width: "60%" }}>
      <div className="flex flex-row justify-center">
        <Image
          src={`https:${thumbnail.fields.file.url}`}
          width={thumbnail.fields.file.details.image.width}
          height={thumbnail.fields.file.details.image.height}
        />
      </div>
      <p className="mt-1 text-6xl text-center font-semibold">{title}</p>
      <p className="mt-1 text-2xl">{description}</p>
      <div className="mt-4">
        {/* @ts-ignore */}
        {documentToReactComponents(content)}
      </div>
    </div>
  );
};

export default PostSite;
