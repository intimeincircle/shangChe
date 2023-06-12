import {
    Tab,
    Container,
    Link,
    Tabs,
    Button,
    Box,
    Stack,
    TabList,
    TabPanel,
    TabPanels,
} from "@chakra-ui/react"
import {Grid} from '@mantine/core'

import {useHistory} from "react-router";
import {useMutation} from "react-query";
import {ModelRetRecords} from "kun-shared/built/apis/model";
import {Series} from "kun-shared/built/apis/get-card-by-id-and-version";
// import {getMyCreatedSeries} from "kun-shared/built/apis/series";
import { useTranslation } from "react-i18next";
import {AsyncComponent} from "../../tool";
// @ts-ignore
import {Header} from "../../components/Header";
import {CONSTANT_ROUTES} from "../../routes/CONST_ROUTES";
// import {LoadMoreComp} from "../../components/LoadMoreComp";
import {getNavigateTribe} from "../../navigators";
import {createAuditSubmit} from "../../apis/web";
import {useMyCreatedSeries} from "./useMyCreateSeries";
import {Scaffold} from "../../components/Scaffold";
import {ArticleCardFooter} from "../../components/SeriesCard";

const MyCreated: AsyncComponent<{list ?: ModelRetRecords<Series>}> = ({list}) => {

    // const [items, setItems] = useState<ModelRetRecords<RetGetCreatedList>>(list)
    const history = useHistory();
    // const [loading, setLoading] = useState(false)

    const {data, isLoading} = useMyCreatedSeries()
    const mutation = useMutation((id: string) => createAuditSubmit({
        seriesId: id,
    }));
    // useDidMount(async () => {
    //     const fetchingApi = MyCreated.getInitialProps
    //     if(fetchingApi != null) {
    //          await execSetLoading(setLoading, async () => {
    //             const r: {list: ModelRetRecords<RetGetCreatedList>}  = await fetchingApi()
    //             if(checkIfSuccess(r.list)) {
    //                 setItems(r.list)
    //             }
    //         })
    //     }
    // })

    const {t } = useTranslation()

    return (
            <Scaffold title={t('My Train Plans')}>
                <Box>
                    <Container maxW="container.lg" mt="24px">
                        <Tabs onChange={(v) => {
                            console.log('v', v);
                            if (v === 1) {
                                history.push(CONSTANT_ROUTES.MySubscription)
                            }
                        }}
                        >
                            <TabList>
                                <Tab>{t('My Train Plans')}</Tab>
                                <Tab>{t('My Subscriptions')}</Tab>
                            </TabList>

                            <TabPanels>
                                <TabPanel>
                                    {JSON.stringify}
                                    {list?.toString()}
                                    {list && list.records.map(series => (
                                        series.title
                                    ))}
                                    {list && list.records.map(series => (
                                        series.name ?? 'empty'
                                    ))}
                                    <Stack direction="row" spacing={4} align="center">
                                        <Button variant="outline" onClick={() => {
                                            history.push(CONSTANT_ROUTES.CreateSeries);
                                        }}>
                                            + 添加
                                        </Button>
                                    </Stack>
                                        <Grid>
                                        {
                                            (data?.records ?? []).map(record => (
                                                <Grid.Col span={4}>
                                                    <ArticleCardFooter card={record} />
                                                </Grid.Col>
                                            ))
                                        }
                                        </Grid>
                                        {/* <LoadMoreComp initialParameter={{}} render={record => ( */}
                                        {/* )} api={getMyCreatedSeries} keyGetter={r => r.id}/> */}
                                        {/* { */}
                                        {/*    loading && (<MyContentLoader/>) */}
                                        {/* } */}
                                        {/* { */}
                                        {/*    items?.records != null && ( */}
                                        {/*        <div> */}
                                        {/*            { */}
                                        {/*                (items?.records ?? []).map(record => ( */}
                                        {/*                    <div key={record.id}> */}
                                        {/*                        <Link href={parseUrl(CONSTANT_ROUTES.SeriesDetail, {'id': record.id})} isExternal> */}
                                        {/*                            Chakra Design system <ExternalLinkIcon mx="2px" /> */}
                                        {/*                            <h1 >{record.title}</h1> */}
                                        {/*                        </Link> */}
                                        {/*                    </div> */}
                                        {/*                )) */}
                                        {/*            } */}
                                        {/*        </div> */}
                                        {/*    ) */}
                                        {/* } */}
                                </TabPanel>
                                <TabPanel>
                                    <p>two!</p>
                                </TabPanel>
                            </TabPanels>
                        </Tabs>
                    </Container>
                </Box>
        </Scaffold>
)
}

export default MyCreated;
