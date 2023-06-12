import {ConstantSeriesType} from "kun-shared/built/src_managed/ConstantSeriesType";
import {ismemory} from "kun-shared/built/src_managed/memory";
import {ispractise} from "kun-shared/built/src_managed/practise";


export function getSeriesTypeLabel (seriesType: ConstantSeriesType): string {
    if(ispractise(seriesType)) {
        return '练习'
    }if(ismemory(seriesType)) {
        return '记忆曲线'
    }
        return '阅读'
    
}
