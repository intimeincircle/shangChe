import  {FunctionComponent, useRef} from 'react';
// import TagGroup from 'rsuite/es/TagGroup/TagGroup';
import {useImmer} from "use-immer";
// import { Input, Tag} from "rsuite";
import {IconButton, Flex} from "@chakra-ui/react";

interface Props {
    tags ?: string[];
    onChange: (v: string[]) => void;
}
export const DynamicTag: FunctionComponent<Props>= (props) => {

    const inputRef =useRef<HTMLInputElement>();
    const [person, updatePerson] = useImmer({
            typing: false,
            inputValue: '',
            tags: props.tags ?? []
    });

    const {tags} = person

    const handleTagRemove = (item: string) => {
        const nextTags = tags.filter(r => r !== item);
        updatePerson(drat => {
            drat.tags = nextTags;
        })
    }

    const handleInputConfirm = () => {
        const value = (inputRef.current as any).value as string;
        const nextTags = value.length ===0 ? tags: tags.concat(value);
        updatePerson(drat => {
            drat.tags = nextTags;
            drat.inputValue = '';
            drat.typing = false
        })
        props.onChange(nextTags)
    }

        return (
            <Flex alignItems="center" />
        );
}
