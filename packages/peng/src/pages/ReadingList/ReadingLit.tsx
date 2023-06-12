import React, {FunctionComponent} from "react";
import {getCurrentLearningList} from "kun-shared/built/apis/series";
import {LoadMoreComp} from "../../components/LoadMoreComp";
import { Scaffold } from "../../components/Scaffold";

const A: FunctionComponent =() => (
        <Scaffold>
            <LoadMoreComp initialParameter={{}} render={item => (
                item.title
            )} api={getCurrentLearningList} keyGetter={r => r.cardId} />
        </Scaffold>
);

export default React.memo(A)