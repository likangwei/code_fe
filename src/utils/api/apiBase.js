/*
* author: the.one
*
* time: 2021-03-18
*
* desc: api接口工具
*
* */
import Vue from 'vue';
import { apiStatus, httpStatus, timeout } from "@/config/api/status";
import { base_url }  from '@/config/local/local';

const _ = new Vue();

class ApiBase {

    constructor() {
       this.timeout = timeout;
    }

    validateStatus (){
        return true;
    }

    requestFun (config) {
        _.$loading.show();
        if(config.method === 'post' || config.method === 'put') config.headers['Content-Type'] = 'application/json;charset=UTF-8';
        return config;
    }

    responseFun (response) {
        _.$loading.hide();
        if(response.status === 200){
            const res = response.data;
            if (res.status === apiStatus.SUCCESS) {
                return res;
            } else {
                _.$message.error('服务器错误！！！');
            }
        } else {
            _.$message.error(httpStatus(response.status));
            throw new Error(httpStatus(response.status));
        }
    }

    getOptions ({ method, url, data, headers }) {
        let $options = {}, uri = '', time = new Date().valueOf();

        if(typeof url !== 'string') throw new Error('url must be string !');
        if(!url) throw new Error('url must be required !');
        if(typeof method !== 'string') throw new Error('method must be string !');

        if(typeof data !== 'object') data = {};

        $options['baseURL'] = base_url;
        $options['url'] = `${url}?t=${time}`;
        $options['headers'] = headers;

        switch (method.toUpperCase()) {
            case 'GET':
                $options['method'] = 'GET';
                $options['params'] = data;
                break;
            case 'GETQUERY':
                $options['method'] = 'GET';
                for (const params in data) {
                    uri += `/${data[params]}`;
                }
                $options['url'] = `${url}${uri}?t=${time}`
                break;
            case 'POST':
                $options['method'] = 'POST'
                $options['data'] = data;
                break;
            case 'DELETE':
                $options['method'] = 'DELETE'
                $options['params'] = data;
                break;
            case 'PUT':
                $options['method'] = 'PUT'
                $options['data'] = data;
                break;
            default:
                $options['method'] = 'GET';
                $options['params'] = data;
                break;
        }
        return $options;
    }

}

export default new ApiBase();
