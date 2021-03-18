/*
* author: the.one
*
* time: 2021-03-18
*
* desc: axios
*
* */
import $axios from 'axios';
import apiBase from './apiBase';
const { timeout, requestFun, responseFun, getOptions, validateStatus } = apiBase;

const service = $axios.create({
    timeout,
    validateStatus,
});

service.interceptors.request.use(requestFun);
service.interceptors.response.use(responseFun);

const ajax = ({ method, url, data, headers }) => {
    let $options = getOptions({
        method,
        url,
        data,
        headers,
    });

    try {

        return service($options);

    }catch (ex) {
        throw new Error(`network exception ! \n ex:${ex.message} \n method:${method} \n url:${url} \n params:${JSON.stringify(data)}`)
    }
}

export default ajax;
