import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { createClient } from 'contentful';
import { nanoid } from 'nanoid';
import { InferGetStaticPropsType } from 'next';
import Image from 'next/image';
import React from 'react';

import { Asset } from '../../models/Asset';
import { Header } from '../../models/Header';
import { Post } from '../../models/Post';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

const options = {
  renderMark: {
    [MARKS.BOLD]: (text) => <p className="font-semibold">{text}</p>,
  },
  renderNode: {
    [BLOCKS.HEADING_1]: (node: Header) => {
      return node.content.map((content) => (
        <p className="text-4xl font-bold" key={nanoid()}>
          {content.value}
        </p>
      ));
    },
    [BLOCKS.HEADING_2]: (node: Header) => {
      return node.content.map((content) => (
        <p className="text-3xl font-bold" key={nanoid()}>
          {content.value}
        </p>
      ));
    },
    [BLOCKS.HEADING_3]: (node: Header) => {
      return node.content.map((content) => (
        <p className="text-2xl font-semibold" key={nanoid()}>
          {content.value}
        </p>
      ));
    },
    [BLOCKS.HEADING_4]: (node: Header) => {
      return node.content.map((content) => (
        <p className="text-xl font-semibold" key={nanoid()}>
          {content.value}
        </p>
      ));
    },
    [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
    [BLOCKS.EMBEDDED_ASSET]: (node: Asset) => {
      const { url, details } = node.data.target.fields.file;
      return (
        <Image
          src={`https:${url}`}
          height={details.image.height}
          width={details.image.width}
        />
      );
    },
  },
  renderText: (text) => <span>text</span>,
};

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
  console.log(content);
  return (
    <div className="bg-red-200 mx-auto font-serif" style={{ width: "60%" }}>
      <div className="flex flex-row justify-center">
        <Image
          src={`https:${thumbnail.fields.file.url}`}
          width={thumbnail.fields.file.details.image.width}
          height={thumbnail.fields.file.details.image.height}
        />
      </div>
      <p className="mt-1 text-5xl text-center font-semibold">{title}</p>
      <p className="mt-1 text-xl">{description}</p>
      <div className="mt-4">
        {/* @ts-ignore */}
        {documentToReactComponents(content, options)}
      </div>
    </div>
  );
};

export default PostSite;
