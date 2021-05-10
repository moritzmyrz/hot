import { createClient } from "contentful";
import React from "react";
import { Post } from "../../models/Post";

const client = createClient({
	space: "6fql8it9e25a",
	accessToken: "B_gSJKIX2w3rX6RKxQgM8AHM4HppsDerb4InIJeCNgc",
});

export async function getStaticPaths() {
	let data = await client.getEntries<Post[]>({
		content: "post",
	});

	let posts = (data.items as unknown) as Post[];

	return {
		paths: posts.map((post) => ({
			params: { slug: post.fields.slug },
		})),
	};
}
export async function getStaticProps({ parms }) {
	let data = await client.getEntries<Post[]>({
		content_type: "post",
		"fields.slug": parms.slug,
	});

	return {
		props: {
			post: data.items[0],
		},
	};
}
interface Props {
	post: Post;
}

const PostSite: React.FC<Props> = ({ post }) => {
	console.log(post);

	return <div>e</div>;
};

export default PostSite;
