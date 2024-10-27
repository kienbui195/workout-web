import './App.css';
import Header from "./components/CommonLayout/Header";
import {Outlet} from "react-router-dom";

function App() {
		return (
				<main>
						<Header/>
						<Outlet/>
				</main>
		);
}

export default App;
