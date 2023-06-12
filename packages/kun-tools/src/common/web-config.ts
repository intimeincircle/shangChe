export const WebConfig = {
    baseUrl: process.env.BACKEND_DOMAIN !== '' ? process.env.BACKEND_DOMAIN :   "",
    cdnUrl: process.env.IMAGE_BACKEND_API,
}
