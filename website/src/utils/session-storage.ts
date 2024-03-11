const load = (id: string) => {
    return sessionStorage.getItem(id);
}

const store = (id: string, data: any) => {
    return sessionStorage.setItem(id, data)
}

export {
    load,
    store
}