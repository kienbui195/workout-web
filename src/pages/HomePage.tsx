import * as React from 'react';
import {Earth} from "lucide-react";

export default function HomePage() {
		return (
				<section className={"flex flex-col items-center justify-center mt-52"}>
						<div className={'flex flex-row items-center space-x-4 text-xl'}>
								<div>Hello world!</div>
								<Earth className={"animate-spin"}/>
						</div>
				</section>
		)
}
