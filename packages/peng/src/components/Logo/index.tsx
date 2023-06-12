import {FunctionComponent, memo} from "react";
// import fish  from "svg-inline-loader?classPrefix!../../assets/fish.svg"
import {Link as RouteLink} from "react-router-dom";
import {Text, Image, Flex } from "@chakra-ui/react";
import {useTranslation} from "react-i18next";
import fish  from "../../assets/fish.svg"
import {CONSTANT_ROUTES} from "../../routes/CONST_ROUTES";

// eslint-disable-next-line import/no-webpack-loader-syntax
// const  logoTwo = require('svg-inline-loader?classPrefix!../../assets/fish.svg');

export const Logo: FunctionComponent = memo(() => {

    const {t}= useTranslation();
    return (
        <RouteLink to={CONSTANT_ROUTES.Home}>
            <Flex direction="row" align="center">
                <Image src={fish}  boxSize='40px' borderRadius="sm"/>
                <Text
                    pl="2px"
                    fontWeight="bold"
                    fontFamily="heading">
                    {t('_BrandName')}
                </Text>
            </Flex>
        </RouteLink>
    )
});
