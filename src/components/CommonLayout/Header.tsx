import * as React from 'react';
import {cn} from "../../lib/utils";
import NavigationItem from "./NavigationItem";
import {useHref, useLocation, useParams} from "react-router-dom";

export default function Header() {
		const pathname = useLocation().pathname
		return (
				<React.Fragment>
						<header className={cn(["bg-black text-white font-bold py-4 fixed top-0 left-0 right-0 z-50"])}>
								<section
										className={cn(["proj-container flex items-center space-x-4 flex-wrap transition-all duration-300"])}>
										<NavigationItem href={'/'} label={'Home'} isSelected={pathname === '/'}/>
										<NavigationItem href={'/kb'} label={'knowledge base'}
										                isSelected={pathname !== '/' && pathname.includes('/kb')}/>
										<NavigationItem href={'/workout'} label={'Workout'}
										                isSelected={pathname !== '/' && pathname.includes('/workout')}/>
								</section>
						</header>
						<header className={"h-[76px]"}></header>
				</React.Fragment>
		)
}
