import * as React from 'react';
import Paper from "../components/Paper";
import {Link} from "react-router-dom";

export default function KBPage() {

		function renderIndexItem(text: string, scrollTo: string) {
				return (
						<Link to={`/#${scrollTo}`} className={"line-clamp-1 text-ellipsis font-bold"}>{text}</Link>
				)
		}

		const index = [
				{
						text: "Chế độ ăn 16:8",
						id: "16:8"
				}
		]

		return (
				<section className={"proj-container grid grid-cols-4 pt-10 gap-4"}>
						<Paper
								className={"col-span-3 overflow-y-auto"}
								body={
										<div dangerouslySetInnerHTML={{__html: '<div></div>'}}></div>
								}
						/>
						<Paper
								className={"sticky top-0"}
								body={
										<div className={"flex flex-col space-y-2"}>
												{index.map((item, i) => (
														<div className={"flex flex-row items-center space-x-2"} key={i}>
																<div>{`${i + 1}.`}</div>
																{renderIndexItem(item.text, item.id)}
														</div>
												))}
										</div>
								}
						/>
				</section>
		)
}
