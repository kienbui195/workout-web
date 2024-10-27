import * as React from "react";
import {Link} from "react-router-dom";

export default function PageNotFound() {
		return (
				<section className={"mt-52 w-full flex justify-center items-center select-none"}>
						<div className={"flex flex-col justify-center items-center space-y-2"}>
								<div className={"text-5xl text-red-500 font-bold"}>404</div>
								<div className={"text-3xl font-bold uppercase"}>Page not found.</div>
								<div className={"text-lg font-bold"}>The page you are looking for does not exist.</div>
								<Link className={"underline hover:text-blue-500"} to={'/'}>Go Back</Link>
						</div>
				</section>
		)
}
