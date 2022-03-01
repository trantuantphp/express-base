import { HMAC_SHA_256_KEY, AES_ENCRYPT_KEY } from 'configs/app.config';
import { MD5, HmacSHA256, AES } from 'crypto-js';

export const hashHmacSHA256 = (value, key = HMAC_SHA_256_KEY) => HmacSHA256(value, key).toString();

export const hashMd5 = (value) => MD5(value).toString();

export const encryptDataByAES = (data, key = AES_ENCRYPT_KEY) => {
    try {
        const _data = JSON.stringify({ ...data });
        const _encrypt = AES.encrypt(_data, key);
        return _encrypt.toString();
    } catch (error) {
        console.error(error);
        return false;
    }
};

export const decryptAESToken = (token, key = AES_ENCRYPT_KEY) => {
    try {
        const _decrypt = AES.decrypt(token, key);
        return JSON.parse(_decrypt.toString(CryptoJS.enc.Utf8));
    } catch (error) {
        console.error(error);
        return false;
    }
};
