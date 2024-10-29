/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useCallback } from "react";
import axios, { AxiosRequestConfig } from "axios";
const BASE_URL = import.meta.env.VITE_BASE_URL;

interface UseRequestOptions {
	url: string;
	method?: "GET" | "POST" | "PUT" | "DELETE";
	data?: any;
	config?: AxiosRequestConfig;
}

// custom hook for calling REST API. Can be reusable
export const useRequest = () => {
	const [response, setResponse] = useState<any>(null);
	const [error, setError] = useState<string | null>(null);
	const [loading, setLoading] = useState<boolean>(false);

	const fetchData = useCallback(async (options: UseRequestOptions) => {
		const { url, method = "GET", data, config } = options;
		setLoading(true);
		setError(null);
		try {
			const result = await axios({
				url: `${BASE_URL}${url}`,
				method,
				data,
				...config,
			});
			setResponse(result.data);
		} catch (err) {
			setError(err instanceof Error ? err.message : "An error occurred");
		} finally {
			setLoading(false);
		}
	}, []);

	return {
		fetchData,
		response,
		error,
		loading,
	};
};
