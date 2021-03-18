/*
* author: the.one
*
* time: 2021-03-18
*
* desc: api接口工厂
*
* */
import $axios from './axios';

const ApiFactory = module => {
    let apiObject = {};

    module.forEach( item => {
       apiObject[item.name] = params => {

           return $axios({
               method: item.method,
               url: item.url,
               data: params,
               headers: item.headers,
           });

       }
    });

    return apiObject;
}

export default ApiFactory;
