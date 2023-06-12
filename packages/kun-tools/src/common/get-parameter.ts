import queryString from 'query-string'

export function getParameter(key: string, url?: string): string | undefined {
    if (url == null && typeof window === undefined) {
        return undefined
    }
    const realUrl = url ?? window.location.href
    const query = queryString.parse(
        realUrl.includes('?') ? realUrl.split('?')[1] : '',
    )
    return query[key] as string | undefined
}
