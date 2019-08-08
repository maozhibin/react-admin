/**
 * Created by 叶子 on 2017/7/30.
 * http通用工具函数
 */
import axios from 'axios';
import { message } from 'antd';
import * as config from './config';


/**
 * 公用get请求
 * @param url       接口地址
 * @param msg       接口异常提示
 * @param headers   接口所需header配置
 */
export const get = ({ url, msg = '接口异常', headers }) =>
    axios
        .get(config.API_URL+url, headers)
        .then(res => res.data)
        .catch(err => {
            console.log(err);
            message.warn(msg);
        });

/**
 * 公用post请求
 * @param url       接口地址
 * @param data      接口参数
 * @param msg       接口异常提示
 * @param headers   接口所需header配置
 */
export const post = ({ url, data, msg = '接口异常', headers }) =>
    axios
        .post(config.API_URL+url, data, headers)
        .then(res => res.data)
        .catch(err => {
            console.log(err);
            message.warn(msg);
        });
