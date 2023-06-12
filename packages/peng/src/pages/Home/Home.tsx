import {useTranslation} from "react-i18next";

/** @jsxImportSource @emotion/react */
import {FC, memo} from "react";
import {Scaffold} from "../../components/Scaffold";
import {HeroTitle} from "../../components/HeroImageRight";
import {FeaturesImages} from "../../components/A1";

//
// import {Image} from "@chakra-ui/react";
// import {Header} from "../../components/Header";
// import {ExampleFom} from "../../ExampleForm";
// import {SocialProfile} from "../../components/UserProfile";
// import PracticeTable from "../PracticeTable";
// import {Bar} from "../../components/Bar";
// import {defaultNavigations, Navigation} from "../../components/Navigation";
// import {LazyImage} from "../../components/LazyImage";
// import {TagList} from "../../components/TagList";

const Home: FC = (): JSX.Element => {
    const {t } = useTranslation()
    return (
        <>
            <Scaffold title={t('Home')}>
                <HeroTitle/>
                <FeaturesImages supTitle="s" description="description" data ={[]} />
            </Scaffold>
            {/* <Header /> */}
            {/* <TagList tags={['A']} /> */}
            {/* <LazyImage src="https://via.placeholder.com/150" width={100} height={100} /> */}
            {/* <Navigation navigation={defaultNavigations}/> */}
            {/* <Bar/> */}
            {/* <Image src="gibbresh.png" fallbackSrc="https://via.placeholder.com/150" /> */}
            {/* <PracticeTable /> */}
            {/* <Header/> */}

            {/* <ExampleFom/> */}
            {/* <SocialProfile userId="1"/> */}
            {/* <LazyImage src="https://via.placeholder.com/200" width={100} height={100} /> */}
        </>
    )

}



export default memo(Home);
