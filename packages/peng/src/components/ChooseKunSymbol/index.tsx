import {FunctionComponent, useCallback, useState} from "react";
import {ShareCard} from "kun-shared/built/src_managed/ShareCard";
import {useMutation, useQuery} from "react-query";
import {kunInhabitant} from "kun-shared/built/src_managed/kun";
import {
    Box,
    Button,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay
} from "@chakra-ui/react";
import {searchSymbol, shareKunCard} from "../../apis/web";

export const ChooseKunSymbol: FunctionComponent<{
    isOpen: boolean;
    onClose: () => void;
    seriesId: string
    cardId: string
}> = ({isOpen, onClose, cardId, seriesId }) => {
   const [name, setName] = useState('')
    const [symbol, setSymbol] = useState('');

    const { data } =  useQuery(['date',name], async () => searchSymbol({
            name,
            channelId: kunInhabitant.world
    }), {
        enabled: name.length > 0,
    })

    const mutate = useMutation((data1: ShareCard) => shareKunCard(data1))
   console.log('symbo', symbol);

    const onConfirm = useCallback(
        () => {
            mutate.mutate({
                seriesId,
                cardId,
                symbol
            }, {
                onSuccess: () => {
                    console.log('xxx')
                }
            })
        }, [cardId, mutate, seriesId, symbol])

   return  (

       <Modal isOpen={isOpen} onClose={onClose}>
           <ModalOverlay />
           <ModalContent>
               <ModalHeader>Modal Title</ModalHeader>
               <ModalCloseButton />
               <ModalBody>
                   <Box>
                       <h3>ddd</h3>
                <Input
                    value ={name}
                    onChange={(e) => {
                    setName(e.target.value)
                }}/>

                <>
                    {
                        (data?.records ?? []).map(item => (
                            <Button onClick={() => setSymbol(item.symbol)}>{item.symbol}</Button>
                        ))
                    }
                </>
            </Box>
               </ModalBody>
               <ModalFooter>
                   <Button colorScheme="blue" mr={3} onClick={onClose}>
                       Close
                   </Button>
                   <Button colorScheme="blue" mr={3} onClick={onConfirm}>
                       Confirm
                   </Button>
               </ModalFooter>
           </ModalContent>
       </Modal>
    )
}
