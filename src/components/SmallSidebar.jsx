import Wrapper from "../assets/wrappers/SmallSidebar";
import { FaTimes } from "react-icons/fa";

import Logo from "./Logo";
import { NavLink } from "react-router-dom";
import links from "../utils/links";
import { useDashboardContext } from "../pages/DashboardLayout";

const SmallSidebar = () => {
	const { showSidebar, toggleSidebar } = useDashboardContext();

	return <Wrapper>SmallSidebar</Wrapper>;
};
export default SmallSidebar;
