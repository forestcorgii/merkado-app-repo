import { gql } from "@apollo/client";

export const CREATE_USER = gql`
	mutation CreateUser {
		createProduct{
			id
		}
	}
`;
