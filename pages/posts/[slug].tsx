import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import { createClient } from "contentful";
import { nanoid } from "nanoid";
import { InferGetStaticPropsType } from "next";
import Image from "next/image";
import React from "react";
import { Asset } from "../../models/Asset";
import { Header } from "../../models/Header";
import { Post } from "../../models/Post";

const website_url = "http://localhost:3000";

const client = createClient({
	space: process.env.CONTENTFUL_SPACE_ID,
	accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

const options = {
	renderNode: {
		[BLOCKS.HEADING_2]: (node: Header) => {
			return node.content.map((content) => (
				<span className="text-2xl font-bold my-4" key={nanoid()}>
					{content.value}
				</span>
			));
		},
		[BLOCKS.PARAGRAPH]: (node, children) => (
			<p className="text-lg">{children}</p>
		),
		[INLINES.HYPERLINK]: ({ data }, children) => (
			<a
				href={data.uri}
				target={`${data.uri.startsWith(website_url) ? "_self" : "_blank"}`}
				rel={`${data.uri.startsWith(website_url) ? "" : "noopener noreferrer"}`}
				className="text-orange-500 underline"
			>
				{children}
			</a>
		),
		[BLOCKS.EMBEDDED_ASSET]: (node: Asset) => {
			const { url, details } = node.data.target.fields.file;
			const { description } = node.data.target.fields;
			return (
				<div className="flex flex-col my-4">
					<Image
						id="img"
						src={`https:${url}`}
						height={details.image.height}
						width={details.image.width}
						alt={description}
					/>
					{description && (
						<p className="text-gray-700 leading-relaxed">{description}</p>
					)}
				</div>
			);
		},
	},
	renderText: (text) => <span className="leading-relaxed">{text}</span>,
};

export const getStaticPaths = async () => {
	const res = await client.getEntries({
		content_type: "post",
	});

	const posts = res.items as unknown as Post[];

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

	return { props: { post: items[0] as unknown as Post }, revalidate: 10 };
};
const PostSite = ({ post }: InferGetStaticPropsType<typeof getStaticProps>) => {
	const { title, slug, thumbnail, content, description, date, author } =
		post.fields;
	const postDate = new Date(date);
	console.log(post);
	return (
		<div className=" mx-auto font-sans w-4/5 sm:w-3/5 md:w-2/5">
			<p className="mt-1 text-5xl font-semibold my-2">{title}</p>
			<p className="mt-1 text-xl leading-relaxed">{description}</p>
			<div className="flex flex-col my-2">
				<Image
					src={`https:${thumbnail.fields.file.url}`}
					width={thumbnail.fields.file.details.image.width}
					height={thumbnail.fields.file.details.image.height}
					alt={thumbnail.fields.description}
				/>
				{thumbnail.fields.description && (
					<p className="text-gray-700">{thumbnail.fields.description}</p>
				)}
			</div>
			<div className="mt-4 space-y-5">
				{/* @ts-ignore */}
				{documentToReactComponents(content, options)}
			</div>
			<div className="text-xl mt-4">
				Publisert
				<span className="font-semibold">
					{" " + postDate.toLocaleDateString("no-NB")}
				</span>{" "}
				– av <span className="font-semibold">{author}</span>
			</div>
		</div>
	);
};

export default PostSite;
