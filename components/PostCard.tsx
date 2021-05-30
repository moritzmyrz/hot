import Image from "next/image";
import router from "next/router";
import React from "react";
import { Post } from "../models/Post";
const PostCard = ({ post }: { post: Post }) => {
	const { title, slug, thumbnail, date } = post.fields;

	return (
		<div
			onClick={() => router.push(`/posts/${slug}`)}
			className="cursor-pointer rounded-b-lg bg-gray-100"
		>
			<Image
				src={`https:${thumbnail.fields.file.url}`}
				width={thumbnail.fields.file.details.image.width}
				height={thumbnail.fields.file.details.image.height}
			/>
			<p className="mx-2 font-semibold text-lg">{title}</p>
		</div>
	);
};

export default PostCard;
