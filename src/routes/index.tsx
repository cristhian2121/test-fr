import {
  Routes,
  Route,
} from "react-router-dom";
import NotFound from "../Components/commons/NotFound/NotFound";
import EmployerView from "../views/Employer/EmployerView";
// Components
import LoginView from "../views/Login/LoginView";
// import your route components too

export const RouterFunction = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginView />} />
      {/* <Route path="teams" element={<Teams />}> */}
      {/* <Route path=":teamId" element={<Team />} /> */}
      {/* <Route path="new" element={<NewTeamForm />} /> */}
      {/* <Route index element={<LeagueStandings />} /> */}
      {/* </Route> */}
      <Route path="/home" element={<EmployerView />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
