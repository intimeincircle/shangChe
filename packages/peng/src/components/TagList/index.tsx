import {FunctionComponent} from "react";
import {HStack, Link, Tag} from "@chakra-ui/react"
import {getTagUrl} from "../../navigators";


interface Props {
    tags: string[]
}
export const TagList: FunctionComponent<Props> = ({tags}) => (
        <HStack spacing={4}>
            {tags.map((size) => (
                <Link href={getTagUrl(size)} to={getTagUrl(size)}>
                    <Tag>
                        {size}
                    </Tag>
                </Link>
            ))}
        </HStack>
    )