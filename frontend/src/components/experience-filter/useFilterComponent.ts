/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChangeEvent, useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../providers/global.provider";
import { useRequest } from "../../hooks/useRequest";
import { IInputAutoComplete } from "../../interfaces/global.interfaces";

export const useFilterComponent = () => {
	const filterStyle = {
		container: {
			display: "flex",
			flexDirection: "column",
			justifyContent: "center",
			alignItems: "center",
			p: 2,
		},
		experienceField: {
			display: "flex",
			flexDirection: "row",
			gap: 1,
			width: "50%",
			mb: 1,
		},
		otherFiltersContainer: {
			display: "flex",
			flexDirection: "row",
			gap: 1,
			width: "50%",
		},
	};
	const { fetchData, response, error, loading } = useRequest();
	const {
		experienceNameList,
		// experiences,
		allExperiencesForFiltering,
		setExperiences,
		handleExperienceData,
	} = useContext(GlobalContext);
	const [startDate, setStartDate] = useState<string>("");
	const [endDate, setEndDate] = useState<string>("");
	const [experience, setExperience] = useState<IInputAutoComplete | null>(null);
	const [location, setLocation] = useState<IInputAutoComplete | null>({ name: "", id: "" });
	const [locationOption, setLocationOption] = useState<IInputAutoComplete[]>([]);
	const [disableRefreshButton, setDisableRefreshButton] = useState<boolean>(true);

	const handleStartDateChange = (e: ChangeEvent<HTMLInputElement>) => {
		setStartDate(e.target.value);
	};

	const handleEndDateChange = (e: ChangeEvent<HTMLInputElement>): void => {
		setEndDate(e.target.value);
	};

	const handleLocationChange = (_event: unknown, newValue: any): void => {
		setLocation(newValue ? newValue : { name: "", id: "" });
	};

	/**
	 * on selecting experience input. it also updates the locations options in location input field according to selected experience.
	 * @param _event
	 * @param newValue
	 * @returns
	 */
	const handleExperienceChange = (_event: unknown, newValue: any): void => {
		setExperience(newValue ? newValue : { name: "", id: "" });
		if (!newValue) {
			setLocationOption([]);
			return;
		}
		const locationList: IInputAutoComplete[] = [];
		const existingLocationId: string[] = [];
		allExperiencesForFiltering.forEach((experience) => {
			const newLocation = { name: experience.location_name, id: experience.loc_id };
			if (
				experience.experience_id === newValue.id &&
				!existingLocationId.includes(newLocation.id)
			) {
				locationList.push(newLocation);
				existingLocationId.push(newLocation.id);
			}
		});
		setLocationOption(locationList);
	};

	/**
	 * call API to get a specific experience. experience id is required.
	 */
	const handleOnSubmit = (): void => {
		if (!experience?.name) {
			alert("Please select experience");
			return;
		}
		const endPoint = `/experience/${experience.id}/?locationId=${location?.id}&from=${startDate}&to=${endDate}`;

		fetchData({
			url: endPoint,
			method: "GET",
		});
	};

	/**
	 * remove all filters and call API to get all experiences.
	 */
	const handleRefresh = (): void => {
		setExperience({ name: "", id: "" });
		setEndDate("");
		setStartDate("");
		setLocation({ name: "", id: "" });
		setLocationOption([]);
		fetchData({
			url: "/experience",
			method: "GET",
		});
	};

	useEffect(() => {
		if (error) {
			alert("Request fail");
			console.error(error);
		}
	}, [error]);

	useEffect(() => {
		if (!loading && !error && response) {
			if (!response.length) {
				setExperiences([]);
				return;
			}
			const { data } = handleExperienceData(response);
			setExperiences(data);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [response]);

	useEffect(() => {
		setDisableRefreshButton(
			endDate || startDate || experience?.name || location?.name ? false : true
		);
	}, [endDate, startDate, experience, location]);

	return {
		experienceNameList,
		loading,
		startDate,
		endDate,
		locationOption,
		filterStyle,
		disableRefreshButton,
		experience,
		location,

		handleExperienceChange,
		handleOnSubmit,
		handleStartDateChange,
		handleEndDateChange,
		handleLocationChange,
		handleRefresh,
	};
};
