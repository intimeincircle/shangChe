import React, {FC} from "react";

// eslint-disable-next-line jsx-a11y/media-has-caption
export const VideoComponent: FC<{src: string}> = ({src}) => (<video src={src}/>)
