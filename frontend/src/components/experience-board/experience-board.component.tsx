import {
	Box,
	Button,
	ButtonGroup,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Grid2,
	Typography,
} from "@mui/material";
import { images } from "../../assets";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import moment from "moment";
import { useExperienceBoard } from "./useExperienceBoard";

const ExperienceBoard = () => {
	const {
		loading,
		error,
		experiences,
		bookedValues,

		handleDecrement,
		handleIncrement,
		experienceDuration,
	} = useExperienceBoard();

	if (loading) {
		return <Typography sx={{ textAlign: "center" }}>Loading...</Typography>;
	}

	if (error) {
		return <Typography sx={{ textAlign: "center" }}>Fetch Error</Typography>;
	}

	if (!experiences.length) {
		return <Typography sx={{ textAlign: "center" }}>No Experience Found</Typography>;
	}

	return (
		<Grid2
			container
			spacing={2}
			sx={{
				p: 2,
				justifyContent: "center",
			}}
		>
			{experiences.map((experience, idx: number) => (
				<Grid2 key={idx}>
					<Card variant="outlined" sx={{ maxWidth: 345, minWidth: 300 }}>
						<CardMedia
							sx={{ height: 140 }}
							image={images[experience.image]}
							title="green iguana"
						/>
						<CardContent>
							<Box
								sx={{
									display: "flex",
									justifyContent: "space-between",
									alignItems: "center",
								}}
							>
								<Typography sx={{ m: 0 }} variant="h5">
									{experience.name}
								</Typography>
								<Typography sx={{ display: "flex" }}>
									<LocationOnIcon /> {experience.location_name}
								</Typography>
							</Box>
							<Typography variant="body2" sx={{ color: "text.secondary", mb: 2 }}>
								{experience.description}
							</Typography>
							<Typography variant="body2">
								Start Date:{" "}
								{moment(experience.start_date).format("YYYY-M-D H:mm:ss")}
							</Typography>
							<Typography variant="body2">
								End Date: {moment(experience.end_date).format("YYYY-M-D H:mm:ss")}
							</Typography>
							<Typography variant="body2">
								Availability:{" "}
								{experience.available_slot === 0
									? "Sold out"
									: experience.available_slot === 1
									? `1 slot`
									: `${experience.available_slot} slots`}
							</Typography>
							<Typography variant="body2">Price: {experience.price} EUR</Typography>
							<Typography variant="body2">
								Duration:{" "}
								{experienceDuration(experience.start_date, experience.end_date)}{" "}
								minutes
							</Typography>
						</CardContent>
						<CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
							<ButtonGroup size="small" aria-label="small outlined button group">
								<Button
									disabled={experience.available_slot === 0}
									onClick={() => handleDecrement(idx)}
								>
									-
								</Button>
								<Button disabled>{bookedValues[idx]}</Button>
								<Button
									disabled={experience.available_slot === 0}
									onClick={() => handleIncrement(idx, experience.available_slot)}
								>
									+
								</Button>
							</ButtonGroup>
							<Button
								disabled={experience.available_slot === 0}
								color="secondary"
								variant="contained"
								size="small"
								onClick={() => alert("Feature is not implemented")}
							>
								buy
							</Button>
						</CardActions>
					</Card>
				</Grid2>
			))}
		</Grid2>
	);
};

export default ExperienceBoard;
