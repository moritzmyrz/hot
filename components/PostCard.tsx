import Image from "next/image";
import router from "next/router";
import React from "react";
import { Post } from "../models/Post";
const PostCard = ({ post }: { post: Post }) => {
	const { title, slug, thumbnail, date } = post.fields;

	return (
		<React.Fragment>
			<div
				onClick={() => router.push(`/posts/${slug}`)}
				className="cursor-pointer hover:underline article"
			>
				<Image
					src={`https:${thumbnail.fields.file.url}`}
					width={thumbnail.fields.file.details.image.width}
					height={thumbnail.fields.file.details.image.height}
				/>
				<p className=" font-semibold text-3xl">{title}</p>
			</div>
			<style jsx>{`
				.article:nth-child(31n + 1) {
					grid-column: 1 / 4;
					margin: 0 auto;
				}
				.article:nth-child(16n + 3) {
					grid-column: 2/4;
				}
				.article:nth-child(16n + 11) {
					grid-column: 1 / 3;
				}
			`}</style>
		</React.Fragment>
	);
};

export default PostCard;
