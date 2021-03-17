const A = ({ post }) => {
	const postKeys = Object.keys(post);

	return (
		<article className="template-a">
			<section>
				<blockquote>{post.blockquote}</blockquote>
				<small>{post.small}</small>
			</section>
		</article>
	);
};

export default A;
