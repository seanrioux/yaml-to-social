const A = ({ post }) => {
	return (
		<section>
			<small>{post.keyword}</small>
			<h1>{post.goal}</h1>
			{post.summary ? <p>{post.summary}</p> : null}
		</section>
	);
};

export default A;
