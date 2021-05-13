import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Post } from "../models/Post";

const PostCard = ({ post }: { post: Post }) => {
	const { title, slug, thumbnail } = post.fields;

	return (
		<div className="">
			<div>
				<Image
					src={`https:${thumbnail.fields.file.url}`}
					width={thumbnail.fields.file.details.image.width}
					height={thumbnail.fields.file.details.image.height}
				/>
			</div>
			<Link href={`/posts/${slug}`}>
				<a>{title}</a>
			</Link>
		</div>
	);
};

export default PostCard;
