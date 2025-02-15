import { Outlet } from "react-router-dom";

const HomeLayout = () => {
	return (
		<>
			{/* navbar */}
			{/* <h1>home layout</h1> */}
			<Outlet />
		</>
	);
};
export default HomeLayout;
