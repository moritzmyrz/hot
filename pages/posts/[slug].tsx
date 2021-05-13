import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { createClient } from "contentful";
import { InferGetStaticPropsType } from "next";
import Image from "next/image";
import React from "react";
import { Post } from "../../models/Post";

const client = createClient({
	space: process.env.CONTENTFUL_SPACE_ID,
	accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export const getStaticPaths = async () => {
	const res = await client.getEntries({
		content_type: "post",
	});

	const posts = (res.items as unknown) as Post[];

	const paths = posts.map((item) => {
		return { params: { slug: item.fields.slug } };
	});

	return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
	const { items } = await client.getEntries({
		content_type: "post",
		"fields.slug": params.slug,
	});

	return { props: { post: (items[0] as unknown) as Post } };
};
const PostSite = ({ post }: InferGetStaticPropsType<typeof getStaticProps>) => {
	const { title, slug, thumbnail, content } = post.fields;
	return (
		<div>
			<Image
				src={`https:${thumbnail.fields.file.url}`}
				width={thumbnail.fields.file.details.image.width}
				height={thumbnail.fields.file.details.image.height}
			/>
			<p className="text-3xl font-semibold">{title}</p>
			{documentToReactComponents(content)}
		</div>
	);
};

export default PostSite;
