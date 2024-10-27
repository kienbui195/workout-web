import * as React from 'react';
import {cn} from "../../lib/utils";
import {Outlet} from "react-router-dom";

export default function Paper({className, body}: { className?: string; body: React.ReactNode }) {
		return (
				<div className={cn(["rounded-lg shadow-lg p-4", className])}>
						{body}
				</div>
		)
}
