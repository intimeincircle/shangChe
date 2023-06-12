import {FunctionComponent} from "react";
import {
    Container, useColorModeValue,
} from '@chakra-ui/react';
import {HorseSecondCategory} from "kun-shared/built/src_managed/HorseSecondCategory";
import {HorseCategoryWithChild} from "kun-shared/built/src_managed/HorseCategoryWithChild";
import {CategoryItemComp} from "./CategoryItem";

interface Props {
    list: readonly HorseCategoryWithChild[],
    onChange: (cat: HorseSecondCategory) => void
}

export const Categories: FunctionComponent<Props> = ({list, onChange}) => (
            <Container
                display="flex"
                align="center"
                alignItems="center"
                minH="60px"
                py={{base: 2}}
                px={{base: 4}}
                maxW="container.xl"
                borderBottom={1}
                borderStyle="solid"
                borderColor={useColorModeValue('gray.200', 'gray.900')}
            >
                {
                    list.map(item => (
                        <CategoryItemComp key={item.id} item={item} onChange={onChange} />
                ))
            }
            </Container>
    )

