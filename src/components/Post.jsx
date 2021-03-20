import { templates } from "../templates";

const Post = ({ post, width, height }) => {
	const Template = templates.find((template) => (template.key = post.template));
	const articleClass = [post.background, "template-" + post.template];

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
