export interface IHandleExperienceDataReturnType {
	experienceName: IInputAutoComplete[];
	bookedValues: { [key: number]: number };
	data: IExperience[];
}
export interface IExperience {
	slot_id: string;
	loc_id: string;
	available_slot: number;
	max_slot: number;
	price: number;
	start_date: string;
	end_date: string;
	id: string;
	exp_id: string;
	name: string;
	experience_id: string;
	description: string;
	image: string;
	location_name: string;
}

export interface IFilter {
	experience?: string;
	startDate?: string;
	endDate?: string;
	location?: string;
}

export interface IInputAutoComplete {
	name: string;
	id: string;
}
