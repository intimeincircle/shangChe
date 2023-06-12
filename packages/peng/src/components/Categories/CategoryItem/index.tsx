
import {HorseCategoryWithChild} from "kun-shared/built/src_managed/HorseCategoryWithChild";
import React, {FunctionComponent} from "react";
import {
    Portal,
    PopoverBody,
    PopoverContent,
    Popover,
    PopoverTrigger,
    useColorModeValue,
    Box, PopoverArrow, Flex
} from "@chakra-ui/react";
import {HorseSecondCategory} from "kun-shared/built/src_managed/HorseSecondCategory";
import {CONST_EMPTY_ARRAY} from "../../../util/default-empty";

const  CategoryItem: FunctionComponent<{
    item: HorseCategoryWithChild, onChange: (cat: HorseSecondCategory) => void
}> = ({item, onChange}) => {
    const initRef: React.MutableRefObject<any> = React.useRef()

    return (
        <Popover closeOnBlur placement="bottom" initialFocusRef={initRef} trigger="hover">
                    <PopoverTrigger >
                        <Box
                            key={item.id}
                            p={2}
                            cursor="pointer"
                            fontSize="sm"
                            fontWeight={500}
                            color={useColorModeValue('gray.600', 'gray.200')}
                            _hover={{
                                textDecoration: 'none',
                                color: useColorModeValue('gray.800', 'white'),
                            }}>
                            {item.name}
                        </Box>
                    </PopoverTrigger>
                    <Portal>
                        <PopoverContent>
                            <PopoverArrow />
                            <PopoverBody>
                                <Flex>
                                    {
                                        (item.children ?? CONST_EMPTY_ARRAY).map(r => (
                                                <Box
                                                    onClick={() => onChange(r)}
                                                    key={item.id}
                                                    p={2}
                                                    fontSize="sm"
                                                    _hover={{
                                                        textDecoration: 'none',
                                                        color: useColorModeValue('gray.800', 'white'),
                                                    }}
                                                    fontWeight={500}>
                                                    {r.name}
                                                </Box>
                                            )
                                        )
                                    }
                                </Flex>
                            </PopoverBody>
                        </PopoverContent>
                    </Portal>
        </Popover>
    )
}

export const CategoryItemComp = React.memo(CategoryItem)