import { useEffect, useState } from "react";
import { useParams, useLocation, Link } from "react-router-dom";

import { config } from "../config.js";

import Post from "./Post";

function useQuery() {
	return new URLSearchParams(useLocation().search);
}

const Set = () => {
	let { setKey } = useParams();
	let query = useQuery();

	// Handle posts

	const [posts, setPosts] = useState();
	const width = query.get("width");
	const height = query.get("height");

	const getPosts = async () => {
		const posts = await fetch(`${config.apiUrl}/posts?key=${setKey}`, {
			method: "GET",
		})
			.then((response) => response.json())
			.then((data) => {
				return data;
			})
			.catch((error) => {
				console.log(error);
			});

		return posts;
	};

	const getRender = (key) => {
		fetch(
			`${config.apiUrl}/render?key=${key}&width=${width}&height=${height}`,
			{
				method: "GET",
			}
		)
			.then((response) => response.json())
			.then((data) => {
				return data;
			})
			.catch((error) => {
				console.log(error);
			});
	};

	useEffect(() => {
		if (setKey) {
			getPosts(setKey).then((data) => setPosts(data));
		}
	}, []);

	return (
		<>
			<h1>{setKey}</h1>
			<ul>
				{config.sizes.map((size, index) => (
					<li key={index}>
						<Link to={`/${setKey}?width=${size.width}&height=${size.height}`}>
							{size.name}
						</Link>
					</li>
				))}
			</ul>
			<button onClick={() => getRender(setKey)}>Render</button>
			<div className="container">
				<div className="grid">
					{posts
						? posts.map((post, index) => (
								<Post key={index} post={post} width={width} height={height} />
						  ))
						: null}
				</div>
			</div>
		</>
	);
};

export default Set;
