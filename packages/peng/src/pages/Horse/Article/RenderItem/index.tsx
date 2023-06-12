import {FunctionComponent} from "react";
import { Box } from "@chakra-ui/react";
import {HorseCardWithSeries} from "kun-shared/built/src_managed/HorseCardWithSeries";
import {ENUM_POST_VIDEOInhabitant} from "kun-shared/built/src_managed/ENUM_POST_VIDEO";
import NoSSR from "@mpth/react-no-ssr";
import {ENUM_POST_AUDIOInhabitant} from "kun-shared/built/src_managed/ENUM_POST_AUDIO";
import {AudioPlayerComponent} from "../../../AudioPlayer";
import {VideoPlayerComponent} from "../../../../components/VideoComponent";

export const RenderItem: FunctionComponent<{record: HorseCardWithSeries}> = ({record}) => (
        <>
            <Box>
            {
                record?.card?.postType === ENUM_POST_VIDEOInhabitant && (
                    <NoSSR>
                         <VideoPlayerComponent item={record.card}/>
                    </NoSSR>
                )
            }
            </Box>
            <Box>
            {
                record?.card?.postType === ENUM_POST_AUDIOInhabitant && (
                    <NoSSR>
                    <AudioPlayerComponent item={record.card}/>
                    </NoSSR>
                )
            }
        </Box>
        </>
    )