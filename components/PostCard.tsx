import Image from 'next/image';
import React from 'react';

import { Post } from '../models/Post';

interface Props {
  post: Post;
}

const PostCard: React.FC<Props> = ({ post }) => {
  return (
    <div className="flex-col bg-gray-300 rounded-lg p-2 w-80">
      <Image
        src={"http:" + post.fields.headerImage.fields.file.url}
        height={200}
        width="full"
      />
      <p className="text-xl font-semibold">{post.fields.title}</p>
    </div>
  );
};

export default PostCard;
