import Image from "next/image";
import router from "next/router";
import React from "react";
import { Post } from "../models/Post";

const PostCard = ({ post }: { post: Post }) => {
	const { title, slug, thumbnail } = post.fields;

	return (
		<div
			className="cursor-pointer"
			onClick={() => router.push(`/posts/${slug}`)}
		>
			<Image
				src={`https:${thumbnail.fields.file.url}`}
				width={thumbnail.fields.file.details.image.width}
				height={thumbnail.fields.file.details.image.height}
				layout="responsive"
			/>
			<p className="mt-2 text-2xl font-semibold">{title}</p>
		</div>
	);
};

export default PostCard;
