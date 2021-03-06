import { useEffect, useState } from "react";
import { useLazyQuery, useQuery } from "@apollo/client";
import { AVAILABLE_PRODUCTS } from "./graphql";
export default function BL() {
	const [getAvailableProducts, { loading, error, data }] =
		useLazyQuery(AVAILABLE_PRODUCTS);

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(function (position) {
			getAvailableProducts({
				variables: {
					location: [position.coords.longitude, position.coords.latitude],
					maxDistance: 1.0,
				},
			});
		});
	}, []);

	return { loading, error, data };
}
