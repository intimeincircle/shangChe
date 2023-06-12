import {HorseSeriesReturn} from "kun-shared/built/src_managed/HorseSeriesReturn";
import {
    Tab,
    Container,
    Tabs,
    TabList,
    TabPanel,
    TabPanels,
} from "@chakra-ui/react"
import {useHistory} from "react-router";
import {ModelRetRecords} from "kun-shared/built/apis/model";
import {AsyncComponent} from "../../tool";
import {CONSTANT_ROUTES} from "../../routes/CONST_ROUTES";
import {useMySubscribedSeries} from "./useMySubscribed";
import {Scaffold} from "../../components/Scaffold";

const MySubscription: AsyncComponent<{list: ModelRetRecords<HorseSeriesReturn>}> = () => {

    const history = useHistory();

    // const [items, setItems] = useState<ModelRetRecords<SubscribedSeries>>(list)
    // const [loading, setLoading] = useState(false)
    const {data, isLoading}  = useMySubscribedSeries()

    // TODO get publish  series
    // useDidMount(async () => {
    //     await execSetLoading(setLoading, async () => {
    //         if(MySubscription.getInitialProps != null) {
    //             const r = (await MySubscription.getInitialProps?.())
    //             if(checkIfSuccess(r.list)) {
    //                 setItems(r.list)
    //             }
    //         }
    //     })
    // })

    return (
        <Scaffold>
                    <Container maxW="container.lg" mt="24px">
                        <Tabs defaultIndex={1} onChange={(v) => {
                                if(v===0) {
                                    history.push(CONSTANT_ROUTES.MySeries)
                                }
                        }}>
                            <TabList >
                                <Tab>我的训练营</Tab>
                                <Tab>我的订阅</Tab>
                            </TabList>

                            <TabPanels>
                                <TabPanel>
                                    <p>two!</p>
                                </TabPanel>
                                <TabPanel>
                                    {
                                        (data?.records ?? []).map(r => `xxxx${r.seriesName} ${r.seriesType}`)
                                    }
                                </TabPanel>
                            </TabPanels>
                        </Tabs>
                    </Container>
</Scaffold>
)
}

// MySubscription.getInitialProps = async  () => {
//     const r = await getSubscribeSeries()
//     return {list: r}
// }

export default MySubscription;
