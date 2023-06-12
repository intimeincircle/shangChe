import { post } from "./request";
import { ModelRetRecord } from "./model";


export interface ReqUpLoadMarkdown extends FormData {
    "file": File;
}


export const updateMarkdown = async (data: ReqUpLoadMarkdown): Promise<ModelRetRecord<{content: string}>> => post("/api/horse/v1/tool/markdown", data, {
  isFormData: true,
});
