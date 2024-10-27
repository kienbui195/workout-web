import React from 'react';
import ReactDOM, {Root} from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
		createBrowserRouter,
		RouterProvider,
} from "react-router-dom";
import PageNotFound from "../src/pages/NotFound";
import HomePage from "./pages/HomePage";
import KBPage from "./pages/KBPage";
import WorkOut from "./pages/WorkOut";
import Roadmap from "./pages/Roadmap";

const routers = createBrowserRouter([
		{
				element: <App/>,
				children: [
						{
								path: "/",
								element: <HomePage/>
						},
						{
								path: "/kb",
								element: <KBPage/>
						},
						{
								path: "/roadmap",
								element: <Roadmap/>
						},
						{
								path: "/workout",
								element: <WorkOut/>
						},
				],
		},
		{
				path: "/*",
				element: <PageNotFound/>
		}
])

const container = document.getElementById('root');

if (container) {
		const root: Root = ReactDOM.createRoot(container);

		root.render(
				<RouterProvider router={routers}/>
		);
}
