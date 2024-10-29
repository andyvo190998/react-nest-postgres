import React from "react";
import NavBar from "./components/navbar/navbar.component";
import { GlobalProvider } from "./providers/global.provider";
import ExperienceFilter from "./components/experience-filter/experience-filter.component";
import ExperienceBoard from "./components/experience-board/experience-board.component";

function App() {
	return (
		<React.Fragment>
			<GlobalProvider>
				<NavBar />
				<ExperienceFilter />
				<ExperienceBoard />
			</GlobalProvider>
		</React.Fragment>
	);
}

export default App;
