/* eslint-disable react/no-children-prop */
import {Input, InputGroup, InputRightElement} from "@chakra-ui/react";
import {Search} from "@styled-icons/evil/Search"
import {useInputState} from "@mantine/hooks";
import {Scaffold} from "../../components/Scaffold";
import {useSearchCardAndSeries, useSearchCardListByEs, useSearchSeries} from "../../components/Search/useSearchSeries";

export default function loadableComponent(): JSX.Element {
    const [stringValue, setStringValue] = useInputState('');
    const {data: d} =useSearchCardListByEs(stringValue)
    const {data: d1} =useSearchCardAndSeries(stringValue)
    const {data} = useSearchSeries(stringValue)

    return (
        <Scaffold>
            <InputGroup>
                <Input placeholder='Basic usage' value={stringValue} onChange={setStringValue}/>

                <InputRightElement
                    pointerEvents='none'
                    children={<Search size="16px" color="red" />}
                />
            </InputGroup>

            <div>search: {stringValue}</div>
            {
                JSON.stringify(data)
            }
            aaabbb
            {
                JSON.stringify(d)
            }
            aaabbb
            {
                JSON.stringify(d1)
            }
        </Scaffold>
    )
};
