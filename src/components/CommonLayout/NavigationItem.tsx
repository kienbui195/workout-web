import * as React from 'react';
import {Link} from "react-router-dom";
import {cn} from "../../lib/utils";

export default function NavigationItem({href, label, isSelected = false}: {
		href: string;
		label: string;
		isSelected?: boolean;
}) {

		return (
				<Link to={href}
				      className={cn(["text-lg font-bold p-2 rounded-lg capitalize text-nowrap", isSelected ? "bg-white text-black" : "bg-black text-white"])}>{label}</Link>
		)
}
