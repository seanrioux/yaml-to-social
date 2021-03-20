const B = ({ post }) => {
	return (
		<section>
			<h1>{post.heading}</h1>
			<p>{post.paragraph}</p>
			<img src={post.image} />
		</section>
	);
};

export default B;
