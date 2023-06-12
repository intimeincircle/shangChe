import { post } from "./request";
import { RetItem } from "./login";

export const requestUploadImage = async (data: FormData): Promise<RetItem<string>> => await post("/api/horse/v1/card/image/save", data, {
    isFormData: true
});

