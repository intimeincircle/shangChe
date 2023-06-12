import {HashLong} from "../src_managed/HashLong";
import {ConstantSeriesType} from "../src_managed/ConstantSeriesType";
import {ConstantChargeType} from "../src_managed/ConstantChargeType";
import {DateTime} from "../src_managed/DateTime";

export interface HorseSeriesWithMetaCustom {
    id: HashLong;
    title: string;
    authorId: string;
    seriesType: ConstantSeriesType;
    description?: string;
    learnPerDay?: number;
    cardCount: number;
    tags: ReadonlyArray<string>;
    categoryId?: number;
    subCategoryId?: number;
    price?: number;
    coverImageName?: string;
    chargeType: ConstantChargeType;
    releaseUpdateAt?: DateTime;
    releaseCreateAt?: DateTime;
    createAt: DateTime;
    categoryName?: string;
    descriptionDelta?: string;
    discountPrice?: number;
    appriseScore?: number;
    appriseNum?: number;
    aim?: string;
    manager?: string;
    managerName?: string;
    wechatImageName?: string;
    practiceCount?: number;
    groupId: string;
    visible: boolean;
}
