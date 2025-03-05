// app/hooks/useContacts.ts
"use client";

import { fetchProduct, fetchSingleProduct } from "@/actions/fetch-category";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

export function useProducts() {
	const queryClient = useQueryClient();

	// Query for fetching all products
	const productsQuery = useQuery({
		queryKey: ["products"],
		queryFn: fetchProduct,
	});

	// Create contact mutation
	//   const createContactMutation = useMutation({
	//     mutationFn: createContact,
	//     onSuccess: () => {
	//       queryClient.invalidateQueries({ queryKey: ["contacts"] });
	//     },
	//   });

	// Update contact mutation
	//   const updateContactMutation = useMutation({
	//     mutationFn: ({ id, data }: { id: string; data: Partial<Contact> }) =>
	//       updateContact(id, data),
	//     onSuccess: () => {
	//       queryClient.invalidateQueries({ queryKey: ["contacts"] });
	//     },
	//   });

	// Delete contact mutation
	//   const deleteContactMutation = useMutation({
	//     mutationFn: deleteContact,
	//     onSuccess: () => {
	//       queryClient.invalidateQueries({ queryKey: ["contacts"] });
	//     },
	//   });

	return {
		// Queries
		allProducts: productsQuery.data ?? [],
		isLoading: productsQuery.isLoading,
		error: productsQuery.error,

		// Mutations
		// createContact: createContactMutation.mutate,
		// updateContact: updateContactMutation.mutate,
		// deleteContact: deleteContactMutation.mutate,

		// Mutation states
		// isCreating: createContactMutation.isPending,
		// isUpdating: updateContactMutation.isPending,
		// isDeleting: deleteContactMutation.isPending,
	};
}

// Hook for fetching a single contact
export function useProduct(id: string) {
	const queryClient = useQueryClient();
	const productQuery = useQuery({
		queryKey: ["product", id],
		queryFn: () => fetchSingleProduct(id),
		select: (response) => ({
			product: response,
			error: "",
		}),
	});
	return {
		product: productQuery.data,
		error: productQuery.error,
		isLoading: productQuery.isLoading,
	};
}
