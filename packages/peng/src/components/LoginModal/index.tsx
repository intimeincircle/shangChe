import {FunctionComponent, Suspense} from "react";
import {checkIsServer} from "kun-tools/built/common/check-is-server";
import {
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay
} from "@chakra-ui/react";
import {LoginComp} from "../LoginComp/lazy";
import {CONSTANT_ROUTES} from "../../routes/CONST_ROUTES";

export const LoginModal: FunctionComponent<{
    onClose: () => void
}> = ({onClose}) => {
    console.log('')
    const url = !checkIsServer() ? window.location.pathname: CONSTANT_ROUTES.Home
    console.log('url', url);

    return (
        <Modal isOpen onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Modal Title</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Suspense fallback='...'>
                    <LoginComp redirectUrl={url} onClose={() => {
                        window.location.replace(url);
                    }} />
                    </Suspense>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}
