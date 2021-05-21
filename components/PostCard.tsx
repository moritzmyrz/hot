import Image from "next/image";
import React from "react";
import { Post } from "../models/Post";
const PostCard = ({ post }: { post: Post }) => {
	const { title, slug, thumbnail, date } = post.fields;

	return (
		<div>
			<Image
				src={`https:${thumbnail.fields.file.url}`}
				width={thumbnail.fields.file.details.image.width}
				height={thumbnail.fields.file.details.image.height}
			/>
			<p>{title}</p>
		</div>
	);
};

export default PostCard;
