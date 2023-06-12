import {FunctionComponent} from "react";
import {Helmet} from "react-helmet";
import { Center, Container } from "@chakra-ui/react";
import { Header } from "../Header"
import {KunFooter} from "../Footer";


export const Scaffold: FunctionComponent<{title?: string, footerDisabled?: boolean}> = ({title, children, footerDisabled = false}) => (
        <>
            {
                title && (
                    <Helmet title={title?? ''} />
                )
            }
            <Header />
                <Center>
                    <Container  maxW='container.xl' minH="80vh">
                        {
                            children
                        }
                    </Container>
                </Center>
            {

                !footerDisabled && (
                    <KunFooter/>
                )
            }
        </>
    )