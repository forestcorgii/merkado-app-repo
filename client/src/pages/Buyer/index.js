import {
	Link,
	BrowserRouter as Router,
	Route,
	useRouteMatch,
	Redirect,
	Switch,
} from "react-router-dom";
import "../../assets/css/buyer.css";
import React, { lazy, useEffect, Suspense, useContext } from "react";
import { AuthContext } from "../../contexts/Auth";
import Products from "./Products/Products";
import Order from "./Order";
// import Profile from "./Profile/index";

import CognitoBL from "../../components/CognitoComponents/Signin/bl";

function HomePage() {
	const {} = CognitoBL();

	let { path, url } = useRouteMatch();
	return (
		<div className="buyer-homepage">
			{/* <Suspense fallback={<div>Loading</div>}>
				<Router> */}
					<div className="navigation">
						<div className="nav-btn">
							<Link to={`${url}/products`}>
							<span class="material-icons">home</span> Home</Link>
						</div>
						<div className="nav-btn">
							<Link to={`${url}/orders`}>
								<span class="material-icons">shopping_cart</span>Orders
							</Link>
						</div>
						<div className="nav-btn">
							<Link to={`${url}/profile`}>
							<span class="material-icons">person</span>Profile</Link>
						</div>
					</div>
						
				{/* </Router>
			</Suspense> */}
	
				<Switch>
					<Route path={`${path}/`} exact>
						<Redirect to={`${url}/products`} />
					</Route>
					<Route path={`${path}/products`}>
						<Products />
					</Route>
					<PrivateRoute path={`${path}/orders`}>
						Orders
						<Order/>
					</PrivateRoute>
					<PrivateRoute path={`${path}/profile`}>
						Profile
						{/* <Profile /> */}
					</PrivateRoute>
				</Switch>
			</div>
		
	);
}

function PrivateRoute({ children, ...props }) {
	const { user } = useContext(AuthContext);
	console.log("private route " + JSON.stringify(user));
	return (
		<Route {...props}>
			{user && user.Username && user.email_verified ? (
				children
			) : (
				<Redirect to="/cognito" />
			)}
		</Route>
	);
}
export default HomePage;
