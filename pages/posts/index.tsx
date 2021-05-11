import { createClient } from 'contentful';
import React from 'react';

import PostCard from '../../components/PostCard';
import { Post } from '../../models/Post';

const client = createClient({
  space: "6fql8it9e25a",
  accessToken: "dDXIpioCEg2z9_LLwbVLUoWWzu864YNqbTLj5TccULo",
});

export async function getStaticProps() {
  let data = await client.getEntries({
    content_type: "post",
  });

  return {
    props: {
      posts: data.items,
    },
  };
}

interface Props {
  posts: Post[];
}

const Posts: React.FC<Props> = ({ posts }: Props) => {
  console.log(posts);

  return (
    <div className="flex justify-center">
      <div className="my-4 grid grid-flow-row grid-cols-3 gap-4">
        {posts.map((post) => (
          <PostCard post={post} />
        ))}
      </div>
    </div>
  );
};

export default Posts;
