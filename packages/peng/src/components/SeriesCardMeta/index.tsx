import {FunctionComponent, useMemo} from "react";
import {parseUrl} from "kun-tools/built/common/parse-url";
import {Link as LLink} from "react-router-dom";
import {Image, Heading, Text, Flex, Box, Link} from "@chakra-ui/react";
import {HorseSeriesFull} from "kun-shared/built/src_managed/HorseSeriesFull";
import {getKunImageUrl} from "kun-shared/built/apis/get-kun-image";
import {ConstDefaultMockConfig} from "../../app/config";
import {CONSTANT_ROUTES} from "../../routes/CONST_ROUTES";


export const SeriesCardMeta: FunctionComponent<{ series: HorseSeriesFull }> = (props) => {
    const {series: { series, authorProfile}} = props;

    const authorLink = useMemo(() => parseUrl(CONSTANT_ROUTES.Author,
            {
                id: authorProfile.userId
            }), [authorProfile.userId])
        return (

        <Flex direction="row" justifyContent="space-between">
            <Box>
                <Image
                    w={200}
                    h={299}
                    src={props.series.series.coverImageName != null ? getKunImageUrl(props.series.series.coverImageName) : ConstDefaultMockConfig.defaultAvatarUrl}
                    alt="Segun Adebayo"/>
            </Box>

            <Flex w={480} direction="column">
                <Box p="2">
                    <Heading size="lg">{props.series.series.title}</Heading>
                </Box>
                <Flex p="2" direction="row" align="center">
                    <Image
                        borderRadius="full"
                        boxSize="36px"
                        src={getKunImageUrl(props.series.series.coverImageName ?? ConstDefaultMockConfig.defaultChatAvatar)}
                    />
                    <Link as={LLink} to={authorLink}>
                        <Text fontSize="sm" ml={3}>{props.series.authorProfile.brandName}</Text>
                    </Link>
                </Flex>

                <Flex direction="row" p={2}>
                    <Text fontSize="sm">订阅:{series.appriseNum ?? 0}</Text>
                    <Text fontSize="sm" ml={1}>练习:{series.practiceCount ?? 0}</Text>
                </Flex>

                <Box>
                    <Text fontSize="md" ml={3}>{props.series.series.description ?? '还未填写描述'}</Text>
                </Box>
            </Flex>
        </Flex>
    )
}

