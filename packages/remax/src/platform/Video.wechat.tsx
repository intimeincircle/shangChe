import React, {FC} from "react";
import { Video } from "remax/wechat";

export const VideoComponent: FC<{src: string}> = ({src}) => <Video src={src}/>
