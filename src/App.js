import logo from "./logo.svg";
import "./App.scss";
import { useEffect, useState } from "react";

import A from "./templates/A";
import B from "./templates/B";

function App() {
	const config = {
		url: "http://localhost:3000/posts?name=spring-2021",
	};

	const [posts, setPosts] = useState();

	const getPosts = async () => {
		const posts = await fetch(config.url, {
			method: "GET",
		})
			.then((response) => response.json())
			.then((data) => {
				return data;
			});

		return posts;
	};

	useEffect(() => {
		getPosts().then((data) => setPosts(data));
	}, [setPosts]);

	return (
		<div className="container">
			<div className="grid">
				{posts
					? posts.map((post, index) =>
							post.template === "A" ? (
								<A key={index} post={post} />
							) : post.template === "B" ? (
								<B key={index} post={post} />
							) : null
					  )
					: null}
			</div>
		</div>
	);
}

export default App;
