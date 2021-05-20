import { createClient } from 'contentful';
import { InferGetStaticPropsType } from 'next';
import React from 'react';

import PostCard from '../../components/PostCard';
import { Post } from '../../models/Post';

export const getStaticProps = async () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({
    content_type: "post",
  });

  return { props: { posts: res.items }, revalidate: 10 };
};

const index = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const posts = props.posts as unknown as Post[];
  return (
    <div
      style={{ width: "80%" }}
      className="h-full mx-auto grid grid-cols-2 gap-3"
    >
      {posts.map((post) => (
        <PostCard key={post.sys.id} post={post} />
      ))}
    </div>
  );
};

export default index;
