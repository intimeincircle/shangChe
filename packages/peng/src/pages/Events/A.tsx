import {Container, Spinner} from "@chakra-ui/react";
import {ConstKunTheme} from "../../app/theme";

export default function loadableComponent(): JSX.Element {
  return <Container width="100%" height="100vh" display='flex' alignItems="center" justifyContent='center'>
        <Spinner color={ConstKunTheme.primaryColor} />
    </Container>
};
