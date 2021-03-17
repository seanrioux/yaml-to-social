const B = ({ post }) => {
	console.log(post.image);
	return (
		<article>
			<section>
				<h1>{post.heading}</h1>
				<p>{post.paragraph}</p>
				<img src={post.image} />
			</section>
		</article>
	);
};

export default B;
