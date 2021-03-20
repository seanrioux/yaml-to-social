import "./App.scss";
import { useEffect, useState } from "react";
import { Switch, Route, Link } from "react-router-dom";

import { config } from "./config.js";

import Set from "./components/Set";

function App() {
	// Handle sets

	const [sets, setSets] = useState();

	const getSets = async () => {
		const sets = await fetch(config.apiUrl, {
			method: "GET",
		})
			.then((response) => response.json())
			.then((data) => {
				return data;
			});
		return sets;
	};

	useEffect(() => {
		getSets().then((data) => setSets(data));
	}, []);

	return (
		<div className="app">
			<Link to="/">Home</Link>
			<Switch>
				<Route exact path="/">
					<h1>sets</h1>
					<ul>
						{sets
							? sets.map((set, index) => (
									<li key={index}>
										<Link to={`/${set.key}`}>{set.key}</Link>
									</li>
							  ))
							: null}
					</ul>
				</Route>
				<Route path="/:setKey">
					<Set />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
