import * as React from 'react';
import YouTube from "react-youtube";
import {Button} from "../ui/button";
import {Pause, Play} from "lucide-react";

export default function YoutubePlayer({videoId}: { videoId: string }) {
		const [open, setOpen] = React.useState(false);
		const [width, setWidth] = React.useState(window.innerWidth);

		React.useEffect(() => {
				window.addEventListener("resize", () => setWidth(window.innerWidth));

				return () => window.removeEventListener("resize", () => setWidth(window.innerWidth));
		}, []);

		return (
				<div className={"flex flex-col justify-center items-center"}>
						<Button size={'icon'} variant={'outline'} className={"p-0"} onClick={() => setOpen(!open)}>
								{open ? <Pause/> : <Play/>}
						</Button>
						{open && <YouTube
                videoId={videoId}
                opts={{
										height: '390',
										width: width > 640 ? '640' : '100%',
										playerVars: {
												// https://developers.google.com/youtube/player_parameters
												autoplay: 1,
										},
								}}
								// onReady={(e: any) => e.target.pauseVideo()}
            />}
				</div>
		)
}
