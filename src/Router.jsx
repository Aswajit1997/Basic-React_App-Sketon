import { Suspense, lazy } from "react";
import { Outlet, Route, Routes, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./assets/scss/Styles.module.scss";
import { clearCacheData } from "./components/Hooks/clearCacheData";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ScrollToTop from "./components/Hooks/ScrollToTop";
import LoadingIndicator from "./components/LoadingIndicator/LoadingIndicator";
import Support from "./pages/Support/Support";

const Home = lazy(() => import("./pages/Home/Home"));
const Page404 = lazy(() => import("./pages/Page404/Page404"));

const App = () => {
	const location = useLocation();
	clearCacheData();

	return (
		<>
			<ScrollToTop />

			<ToastContainer
				position="top-right"
				autoClose={3000}
				limit={4}
				hideProgressBar={false}
				newestOnTop={false}
				rtl={false}
				pauseOnFocusLoss={false}
				draggable={false}
				pauseOnHover
			/>

			{/* <AnimatePresence> */}
			<Routes location={location} key={location.pathname}>
				<Route path="*" element={<Page404 />} />

				<Route element={<Wrapper />}>
					<Route path="/" element={<Home />} />
					<Route path="/support-chat" element={<Support />} />
				</Route>
			</Routes>
			{/* </AnimatePresence> */}
		</>
	);
};

export default App;

const Wrapper = () => {
	return (
		<div className={styles.Wrapper}>
			<Suspense fallback={<LoadingIndicator />}>
				<Header />

				<div className={styles.InnerWrapper}>
					<div className={styles.Main}>
						<Outlet />
					</div>

					<Footer />
				</div>
			</Suspense>
		</div>
	);
};
