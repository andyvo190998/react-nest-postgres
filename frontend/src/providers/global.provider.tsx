/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { createContext, useState, ReactNode } from "react";
import {
	IExperience,
	IHandleExperienceDataReturnType,
	IInputAutoComplete,
} from "../interfaces/global.interfaces";

export interface GlobalContextType {
	experiences: IExperience[];
	locationList: IInputAutoComplete[];
	experienceNameList: IInputAutoComplete[];
	allExperiencesForFiltering: IExperience[];

	setExperiences: (prop: IExperience[]) => void;
	setExperienceNameList: (prop: IInputAutoComplete[]) => void;
	setLocationList: (prop: IInputAutoComplete[]) => void;
	handleExperienceData: (prop: any[]) => IHandleExperienceDataReturnType;
	setAllExperiencesForFiltering: (prop: any[]) => void;
}

export const GlobalContext = createContext<GlobalContextType>({
	experiences: [],
	locationList: [],
	experienceNameList: [],
	allExperiencesForFiltering: [],
	setExperiences: function (): void {
		throw new Error("Function not implemented.");
	},
	setExperienceNameList: function (): void {
		throw new Error("Function not implemented.");
	},
	setLocationList: function (): void {
		throw new Error("Function not implemented.");
	},
	handleExperienceData: function (): IHandleExperienceDataReturnType {
		throw new Error("Function not implemented.");
	},
	setAllExperiencesForFiltering: function (): void {
		throw new Error("Function not implemented.");
	},
});

interface GlobalProviderProps {
	children: ReactNode;
}

export const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
	const [experiences, setExperiences] = useState<IExperience[]>([]);
	const [locationList, setLocationList] = useState<IInputAutoComplete[]>([]);
	const [experienceNameList, setExperienceNameList] = useState<IInputAutoComplete[]>([]);
	const [allExperiencesForFiltering, setAllExperiencesForFiltering] = useState<IExperience[]>([]);
	/**
	 * Get data from api and then modify it as an array and render it. this function can be reusable
	 * @param data data from http request
	 * @returns
	 */
	const handleExperienceData = (data: any[]): IHandleExperienceDataReturnType => {
		// booked values for users to increase or decrease the number of vouchers they want
		let bookedValues: { [key: number]: number } = {};
		// this is for drop down input to select a specific experience
		const experienceName: IInputAutoComplete[] = [];

		for (let i = 0; i < data.length; i++) {
			const experience = data[i];

			// make sure no duplicated experience for drop down menu
			if (experienceName.filter((name) => name.name === experience.name).length === 0) {
				experienceName.push({ name: experience.name, id: experience.exp_id });
			}

			bookedValues = {
				...bookedValues,
				[i]: 0,
			};
		}
		return { experienceName, bookedValues, data };
	};

	return (
		<GlobalContext.Provider
			value={{
				experiences,
				experienceNameList,
				locationList,
				allExperiencesForFiltering,

				setExperiences,
				setLocationList,
				setExperienceNameList,
				handleExperienceData,
				setAllExperiencesForFiltering,
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};
