import {post} from "kun-tools/built/common/req";
import {ReqParseMarkdown} from "../src_managed/ReqParseMarkdown";
import {RetItem} from "./item";

export const reqParseMarkdownContent = async (data: ReqParseMarkdown): Promise<RetItem<string>> => post("/api/horse/v1/tool/parseMarkdown", {...data });
