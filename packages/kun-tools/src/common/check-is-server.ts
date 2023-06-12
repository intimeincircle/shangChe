
export function checkIsServer() {
    return typeof(window) === 'undefined';
}

export function checkIsBrowser() {
    return typeof(window) !== 'undefined';
}
