import { templates } from "../templates";

const Post = ({ post, width, height, setKey }) => {
	const Template = templates.find((template) => (template.key = post.template));
	const articleClass = [
		setKey,
		"template-" + post.template,
		post.background,
		`width-${width}`,
		`height-${height}`,
	];

	const style = {
		width: `${width}px`,
		height: `${height}px`,
	};

	return Template ? (
		<article className={articleClass.join(" ")} style={style}>
			<Template.Component post={post} />
		</article>
	) : null;
};

export default Post;
