/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { useRequest } from "../../hooks/useRequest";
import { GlobalContext } from "../../providers/global.provider";

export const useExperienceBoard = () => {
	const {
		experiences,
		setExperienceNameList,
		setExperiences,
		handleExperienceData,
		setAllExperiencesForFiltering,
	} = useContext(GlobalContext);
	const { fetchData, response, error, loading } = useRequest();
	const [bookedValues, setBookedValue] = useState<{ [key: number]: number }>({});

	const handleIncrement = (idx: number, availability: number): void => {
		if (bookedValues[idx] >= availability) {
			alert("Out of slot.");
			return;
		}
		setBookedValue((previous) => {
			const updatedValue = previous[idx] + 1;
			return {
				...previous,
				[idx]: updatedValue,
			};
		});
	};

	const handleDecrement = (idx: number): void => {
		if (bookedValues[idx] === 0) {
			alert("Can not decrease");
			return;
		}
		setBookedValue((previous) => {
			const updatedValue = previous[idx] - 1;
			return {
				...previous,
				[idx]: updatedValue,
			};
		});
	};

	const experienceDuration = (startDate: string, endDate: string): number => {
		const startDateObject = new Date(startDate);
		const endDateObject = new Date(endDate);

		const diffInMs = endDateObject.getTime() - startDateObject.getTime();

		const diffInMinutes = diffInMs / (1000 * 60);
		return diffInMinutes;
	};

	useEffect(() => {
		if (!loading && !error && Array.isArray(response)) {
			const { experienceName, bookedValues, data } = handleExperienceData(response);
			setExperienceNameList(experienceName);
			setBookedValue(bookedValues);
			setExperiences(data);
			setAllExperiencesForFiltering(data);
		}
	}, [response, loading, error]);

	useEffect(() => {
		// fetch data on mounted
		fetchData({
			url: "/experience",
			method: "GET",
		});
	}, []);
	return {
		loading,
		error,
		experiences,
		bookedValues,

		handleDecrement,
		handleIncrement,
		experienceDuration,
	};
};
