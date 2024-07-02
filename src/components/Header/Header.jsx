import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Header.module.scss";

const Header = () => {
	const { pathname } = useLocation();
	return (
		<header className={styles.Header}>
			<nav>
				<Link to="/" className={pathname === "/" ? styles.active : ""}>
					Home
				</Link>
				<Link to="/support-chat" className={pathname === "/support-chat" ? styles.active : ""}>
					Support
				</Link>
			</nav>
		</header>
	);
};

export default Header;
