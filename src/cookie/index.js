/*
* Cookie is used to store user information and jwt.
*/
import Cookies from 'react-cookies';

// thin wrapper for original cookie functions.
const getCookie = (name) => {
    return Cookies.load(name) ? Cookies.load(name).data : {'data' : ''};
}

const setCookie = (name, data, options) => {
    return Cookies.save(name, {'data': data} , options);
}

const deleteCookie = (name) => {
    return Cookies.remove(name);
}

export default {
    'get' : getCookie,
    'set' : setCookie,
    'delete' : deleteCookie
}