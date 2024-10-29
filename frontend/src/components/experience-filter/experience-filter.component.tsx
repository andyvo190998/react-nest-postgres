import { Autocomplete, Box, TextField } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { useFilterComponent } from "./useFilterComponent";
const ExperienceFilter = () => {
	const {
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
	} = useFilterComponent();
	return (
		<Box sx={filterStyle.container}>
			<Box
				sx={(theme) => {
					return {
						...filterStyle.experienceField,
						[theme.breakpoints.down("sm")]: {
							width: "100%",
							flexDirection: "column",
						},
					};
				}}
			>
				<Autocomplete
					id="experience"
					freeSolo
					inputValue={experience?.name ? experience.name : ""}
					onChange={handleExperienceChange}
					value={experience}
					options={experienceNameList}
					getOptionLabel={(option) => option["name"]}
					renderInput={(params) => <TextField {...params} label="Find Experiences..." />}
					sx={{ width: "100%" }}
					isOptionEqualToValue={(option, newValue) => {
						return experience?.name ? option.id === newValue.id : false;
					}}
				/>
				<LoadingButton loading={loading} onClick={handleOnSubmit} variant="contained">
					Search
				</LoadingButton>
				<LoadingButton
					disabled={disableRefreshButton}
					loading={loading}
					onClick={handleRefresh}
					variant="outlined"
				>
					Refresh
				</LoadingButton>
			</Box>
			<Box
				sx={(theme) => {
					return {
						...filterStyle.otherFiltersContainer,
						[theme.breakpoints.down("sm")]: {
							width: "100%",
							flexDirection: "column",
						},
					};
				}}
			>
				<TextField
					label="Start Date"
					type="date"
					value={startDate}
					onChange={handleStartDateChange}
					InputLabelProps={{
						shrink: true,
					}}
					fullWidth
				/>
				<TextField
					label="End Date"
					type="date"
					value={endDate}
					onChange={handleEndDateChange}
					InputLabelProps={{
						shrink: true,
					}}
					fullWidth
				/>
				<Autocomplete
					id="location"
					freeSolo
					inputValue={location ? location.name : ""}
					onChange={handleLocationChange}
					options={locationOption}
					value={location}
					getOptionLabel={(option) => option["name"]}
					renderInput={(params) => <TextField {...params} label="Location" />}
					sx={{ width: "100%" }}
					isOptionEqualToValue={(option, newValue) =>
						location?.name ? option.id === newValue.id : false
					}
				/>
			</Box>
		</Box>
	);
};

export default ExperienceFilter;
