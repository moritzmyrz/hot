import { createClient } from "contentful";
import { InferGetStaticPropsType } from "next";
import React from "react";
import PostCard from "../components/PostCard";
import { Post } from "../models/Post";

export const getStaticProps = async () => {
	const client = createClient({
		space: process.env.CONTENTFUL_SPACE_ID,
		accessToken: process.env.CONTENTFUL_ACCESS_KEY,
	});

	const res = await client.getEntries({
		content_type: "post",
	});

	return { props: { posts: res.items }, revalidate: 10 };
};

const index = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
	const posts = props.posts as unknown as Post[];
	return (
		<React.Fragment>
			<div
				className="w-4/5 sm:w-3/5 mx-auto archive"
				// style={{
				// 	display: "grid",
				// 	gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
				// 	gridGap: 32,
				// 	gridAutoFlow: "dense",
				// }}
			>
				{posts.map((post) => (
					<PostCard key={post.sys.id} post={post} />
				))}
			</div>
			<style jsx>{`
				.archive {
					display: grid;
					grid-auto-flow: dense;
					grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
					grid-gap: 32px;
					grid-auto-flow: dense;
				}
				@media (max-width: 459px) {
					.archive {
						display: flex;
						flex-direction: column;
					}
				}
			`}</style>
		</React.Fragment>
	);
};

export default index;
