import {
    Image,
    Text,
    HStack, Popover, PopoverTrigger, PopoverContent, Portal, PopoverArrow, PopoverBody,
} from '@chakra-ui/react';
import {SocialProfile} from "../UserProfile";

interface BlogAuthorProps {
    date: Date;
    name: string;
    avatarUrl: string;
    userId: string
}

export function BlogAuthor({name, avatarUrl, date, userId}: BlogAuthorProps): React.ReactElement {
  return <HStack marginTop="2" spacing="2" display="flex" alignItems="center" >
            <Image
                borderRadius="full"
                boxSize="40px"
                src={avatarUrl}
                alt={`Avatar of ${name}`}
            />

            <Popover trigger="hover" isLazy placement="top">
                <PopoverTrigger>
                    <Text cursor="pointer"  fontWeight="medium">{name}</Text>
                </PopoverTrigger>
                <Portal>
                    <PopoverContent>
                        <PopoverArrow />
                        <PopoverBody>
                        <SocialProfile userId={userId}/>
                        </PopoverBody>
                    </PopoverContent>
                </Portal>
            </Popover>
            <Text>—</Text>
             <Text>{(date).toLocaleDateString()}</Text>
        </HStack>
}

