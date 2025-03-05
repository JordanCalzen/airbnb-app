import { Product } from "@prisma/client";

export interface ICategoriesProps {
	id: string;
	name: string;
	image: string;
	createdAt: string;
	updatedAt: string;
}

// types.ts

// Server action return types
export type QueriesResponse = {
	message: string;
	data: Product[] | null;
	error?: string | null;
};

// For single contact queries
export type SingleQueryResponse = {
	message: string;
	data: Product | null;
	error?: string | null;
};

//   For mutation operations
//   export type MutationResponse = {
// 	success: boolean;
// 	data?: Contact;
// 	error?: string;
//   };
