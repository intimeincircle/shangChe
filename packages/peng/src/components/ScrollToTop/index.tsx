import {useWindowScroll} from "@mantine/hooks";
import {Affix, Button, Transition} from "@mantine/core";
import {Search} from "@styled-icons/evil/Search";
import { memo } from "react";
import {useTranslation} from "react-i18next";

export const ScrollToTop = memo(() => {

    const [scroll, scrollTo] = useWindowScroll();
    const {t}= useTranslation()

    return (<Affix position={{ bottom: 50, right: 20 }}>
        <Transition transition="slide-up" mounted={scroll.y > 0}>
            {(transitionStyles) => (
                <Button
                    leftIcon={<Search />}
                    style={transitionStyles}
                    onClick={() => scrollTo({ y: 0 })}
                >
                    {
                        t('Scroll to top')
                    }
                </Button>
            )}
        </Transition>
    </Affix>)
})