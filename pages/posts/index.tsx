import { createClient } from "contentful";
import Link from "next/link";
import { Post } from "../../models/Post";

const client = createClient({
	space: "6fql8it9e25a",
	accessToken: "B_gSJKIX2w3rX6RKxQgM8AHM4HppsDerb4InIJeCNgc",
});

export async function getStaticProps() {
	let data = await client.getEntries({
		content_type: "post",
	});

	return {
		props: {
			posts: data.items,
		},
	};
}

interface Props {
	posts: Post[];
}

const Posts: React.FC<Props> = ({ posts }: Props) => {
	console.log(posts);

	return (
		<>
			<ul>
				{posts.map((post) => (
					<Link href={`/posts/${post.fields.slug}`}>
						<a>{post.fields.title}</a>
					</Link>
				))}
			</ul>
		</>
	);
};

export default Posts;
