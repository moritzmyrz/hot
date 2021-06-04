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
				<p className=" font-semibold text-lg">{title}</p>
			</div>
			<style jsx>{`
				s .article:nth-child(31n + 1) {
					grid-column: 1 / -1;
				}
				.article:nth-child(16n + 2) {
					grid-column: -3 / -1;
				}
				.article:nth-child(16n + 10) {
					grid-column: 1 / -2;
				}
			`}</style>
		</React.Fragment>
	);
};

export default PostCard;
