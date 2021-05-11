import { createClient } from 'contentful';
import React from 'react';

import { Post } from '../../models/Post';

const client = createClient({
  space: "6fql8it9e25a",
  accessToken: "dDXIpioCEg2z9_LLwbVLUoWWzu864YNqbTLj5TccULo",
});

export async function getStaticPaths() {
  let data = await client.getEntries<Post[]>({
    content: "post",
  });

  let posts = (data.items as unknown) as Post[];

  return {
    paths: posts.map((post) => ({
      params: { id: post.sys.id },
    })),
  };
}
export async function getStaticProps({ params }) {
  let data = await client.getEntries({
    content_type: "post",
    "sys.id": params.id,
  });

  return {
    props: {
      post: data.items[0],
    },
  };
}
interface Props {
  post: Post;
}

const PostSite: React.FC<Props> = ({ post }) => {
  console.log(post);

  return <div>e</div>;
};

export default PostSite;
