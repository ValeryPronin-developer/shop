export const getInitialStateFromLs = (key) => {
    const storedItem = localStorage.getItem(key)
    return storedItem ? JSON.parse(storedItem) : []
}