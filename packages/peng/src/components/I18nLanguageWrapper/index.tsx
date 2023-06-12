import {useMemo, FunctionComponent, memo, ReactNode} from "react";
import {useCookies } from "react-cookie";
import i18n from "i18next";
import {I18nextProvider, initReactI18next} from "react-i18next";
import {english} from "../../i18n/en_US";
import {chinese} from "../../i18n/zh_CN";

const getI18n = (a: string) => {
    i18n
        .use(initReactI18next) // passes i18n down to react-i18next
        .init({
            // the translations
            // (tip move them in a JSON file and import them,
            // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
            resources: {
                en: {
                    translation: english
                },
                zh: {
                    translation: chinese
                }
            },
            lng: a, // if you're using a language detector, do not define the lng option
            // fallbackLng: "zh",
            interpolation: {
                escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
            }
        });
    return i18n
}
const I18nLanguage: FunctionComponent<{children: ReactNode}> = (props) => {
    const [cookies] = useCookies(['lang']);

    const language = useMemo(() => cookies?.lang === 'zh_CN' ? 'zh' : 'en', [cookies?.lang])
    const i18n1 = useMemo(() => getI18n(language), [language])

    // eslint-disable-next-line react/jsx-no-useless-fragment
    return (
        <I18nextProvider i18n={i18n1}>
             {props.children}
        </I18nextProvider>
    )
}

export const I18nLanguageWrapper = memo(I18nLanguage)