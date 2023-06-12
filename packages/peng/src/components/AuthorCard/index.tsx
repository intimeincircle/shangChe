import {FunctionComponent, useMemo} from "react";
import {
    Stack,
    Avatar,
    Text,
    Link,
    Flex,

} from '@chakra-ui/react';

interface Props {
    coverImageUrl:  string
    name: string;
    description: string
    authorId: string;
}

export const AuthorCard : FunctionComponent<Props> = (props) => {
    const url = useMemo(() =>`/live/user/${props.authorId}`, [props.authorId]);

    return (
        <Stack direction="row" spacing={4} py={4} px={4}>
            <Link href={url} isExternal>
                <Avatar src={props.coverImageUrl} size="lg" />
            </Link>

            <Flex direction="column" >
                <Link href={url} isExternal>
                    <Text fontSize="xl" fontWeight="bold">
                        {props.name}
                    </Text>
                </Link>
                {props.description}
            </Flex>
        </Stack>

    )
}