import {FunctionComponent} from "react";
import {HStack, Tag} from "@chakra-ui/react";

interface Props {
   tags: string[];
}

export const SeriesTags: FunctionComponent<Props> = ({tags}) => (
    <HStack py={4}>
        {
            tags.map(t => (
                <Tag>{t}</Tag>
            ))
        }
    </HStack>
)
