import  {FunctionComponent} from "react";
import {Stack, Heading, Container} from "@chakra-ui/react";

// TODO reduce size
// import 'rsuite/dist/rsuite.min.css'
import {Helmet} from "react-helmet";
import {SimpleHeader} from "../SimpleHeader";
import {KunFooter} from "../Footer";

const TimeLine: FunctionComponent = () => (
    <>
        <Helmet title="关于我们"/>
        <SimpleHeader />
        <Container maxW="container.md"
                   py={16}
        >
            <Heading>Change Log</Heading>

        <Stack
            px={8}
            mt={10}
            spacing={{ base: 8, md: 10 }}
            align="center"
            direction="column" />
        </Container>
        <KunFooter/>
    </>
)

export default TimeLine;
