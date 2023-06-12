type Obj = {
    [key: string]: string | number|undefined,
}

export function parseUrl(url: string, queries: Obj): string {
    const keys = Object.keys(queries);
    if (
        keys.length === 0
    ) {
        return url;
    }
    const lastFix = Object.keys(queries).map((r) => `${r}=${queries[r]}`).join("&")
    return `${url}?${lastFix}`
}
