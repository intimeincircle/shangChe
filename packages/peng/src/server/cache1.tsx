import createCache from "@emotion/cache";
import {mantine} from "../client/chakraKey";

export const mantinCache = createCache({
        key: mantine,
        stylisPlugins: []
    }
)
