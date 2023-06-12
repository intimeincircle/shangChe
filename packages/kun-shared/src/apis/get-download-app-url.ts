
export enum Platform {
    MAC= "MAC",
    WINDOWS= "WINDOWS",
    LINUX= "LINUX",
    ANDROID= "ANDROID",
    IPHONE= "IPHONE",
}
export const getDownloadAppUrl = async (): Promise<string> => new Promise((r) => r("https://file.wintercoming.xyz/1.apk"));
