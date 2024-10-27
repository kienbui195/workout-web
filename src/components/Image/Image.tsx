import * as React from "react";
import {forwardRef} from "react";

interface ImageProps extends React.HTMLProps<HTMLImageElement> {
}

const Image = forwardRef<HTMLImageElement, ImageProps>(function Image(props, ref) {
    return (
        <img ref={ref} alt={props.alt} {...props} loading='lazy'/>
    )
})

export default Image
