//local storage helper

const getLocalstorage = (name) => JSON.parse(localStorage.getItem(name))

const setLocalstorage = (name, data) => localStorage.setItem(name, JSON.stringify(data))

export {getLocalstorage,setLocalstorage}