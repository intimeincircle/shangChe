import {ModelRetRecords} from "kun-shared/built/apis/model";
import {HorseSeriesReturn} from "kun-shared/built/src_managed/HorseSeriesReturn";
import {AsyncComponent} from "../../tool";

const BoardDetail: AsyncComponent<{list: ModelRetRecords<HorseSeriesReturn>}> = ({list}) => {

    console.log('list', list)
    return (
        <div>
            board detail
        </div>
    )
}

export default BoardDetail;
