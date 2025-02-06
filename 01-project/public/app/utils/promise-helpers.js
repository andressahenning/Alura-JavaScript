export const handleStatus = res => 
    res.ok ? res.json() : Promise.reject(res.statusText);

export const log = param => {
    console.log(param);
    return param;
}

export const timeoutPromise = (miliseconds, promise) => {
    const timeout = new Promise((resolve, reject) =>
        setTimeout(() => 
            reject(`Limite da promise excedido (limite: ${miliseconds} ms)`), miliseconds)
    );
    return Promise.race([
        timeout, promise
    ]);
}

export const delay = miliseconds => data => 
    new Promise((resolve, reject) => 
        setTimeout(() => resolve(data), miliseconds)
    );

export const retry = (retries, miliseconds, fn) =>
    fn().catch(err => {
        console.log(retries);
        return delay(miliseconds)().then(() =>
            retries > 1
            ? retry(--retries, miliseconds, fn)
            : Promise.reject(err))
    });