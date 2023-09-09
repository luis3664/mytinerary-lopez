const LocalStorage = {
    get: (key) => {
        return localStorage.getItem(key);
    },
    set: (key, value) => {
        localStorage.setItem(key, value);
    },
    remove: (key) => {
        localStorage.removeItem(key);
    },
    clear: () => {
        localStorage.clear();
    }
}

export default LocalStorage