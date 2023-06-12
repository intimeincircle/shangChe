import {FunctionComponent, useState} from "react";
import {AppConfig} from "kun-shared/built/src_managed/AppConfig";
import {Flex, Radio, Stack, RadioGroup, useToast, Box} from "@chakra-ui/react"
import {updateAppConfig} from "kun-shared/built/apis/appconfig/req-get-appconfig";
// eslint-disable-next-line camelcase
import {EnumLqChannel_KUN_HorseInhabitant} from "kun-shared/built/src_managed/EnumLqChannel_KUN_Horse";
import toast from "react-hot-toast";
import {execLoading} from "../../../util/exec-loading";

const SettingWechatNotice: FunctionComponent<{config: AppConfig, onRefresh: () => void}> = 
    (props) => {

    const [loading, setLoading] = useState(false);
    const [appConfig] = useState<AppConfig>(props.config);

    const updateShouldNoticeWechat = async (shouldNoticeWechat: boolean): Promise<void> => {
            if(loading) {
                return;
            }
            await execLoading(async () =>
                 updateAppConfig(EnumLqChannel_KUN_HorseInhabitant, {...props.config,
                    shouldNoticeWechat,
                })
            , setLoading)
        toast.success('ok')
    }

    if(appConfig == null){
        return null;
    }


    return (
        <Flex alignItems="center" >
            <Box d="inline-block" mr={3}>
                <RadioGroup defaultValue={ appConfig.shouldNoticeWechat ===true ? "1": "2"} onChange={async (v) => {
                const shouldNoticeWechat = parseInt(v, 10) === 1;
                await updateShouldNoticeWechat(shouldNoticeWechat);
                props.onRefresh();
            }}>
                <Stack spacing={5} direction="row" >
                    <Radio  value="1">
                        提醒
                    </Radio>
                    <Radio value="2">
                        不提醒
                    </Radio>
                </Stack>
            </RadioGroup>
            </Box>
        </Flex>
        )
  }

    
export default SettingWechatNotice;