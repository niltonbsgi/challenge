import { axios_fetch, http_verbs } from '../../../config/services//service-request';
import { cases } from './reducer-user';

export function  _Get_User_List (url) {
    return (
        axios_fetch('', url)
        .then(
            (resp) => ({
                type: cases.USER_LIST,
                payload: resp
            }),
            (err)=> ({
                type: cases.error,
                payload: err
            }))
        .catch( (err) => ({
            type: cases.error,
            payload: err
        }) )
    );
};

export const  _Get_Post_By_User_List = (url) => {
    return (
        axios_fetch('', url)
        .then(
            (resp) => ({
                type: cases.POST_LIST,
                payload: resp
            }),
            (err)=> ({
                type: cases.error,
                payload: err
            }))
        .catch( (err) => ({
            type: cases.error,
            payload: err
        }) )
    );
};

export const  _Get_Album_By_User_List = (url) => {
    return (
        axios_fetch('', url)
        .then(
            (resp) => ({
                type: cases.ALBUM_LIST,
                payload: resp
            }),
            (err)=> ({
                type: cases.error,
                payload: err
            }))
        .catch( (err) => ({
            type: cases.error,
            payload: err
        }) )
    );
};

export const  _Get_Photo_By_Album_List = (url) => {
    return (
        axios_fetch('', url)
        .then(
            (resp) => ({
                type: cases.PHOTO_LIST,
                payload: resp
            }),
            (err)=> ({
                type: cases.error,
                payload: err
            }))
        .catch( (err) => ({
            type: cases.error,
            payload: err
        }) )
    );
};

export function _Get_Ride_in_Group_List (url) {
    return (
        axios_fetch('', url)
        .then(
            (resp) => ({
                type: cases.RIDE_IN_GROUP_LIST,
                payload: resp
            }),
            (err)=> ({
                type: cases.error,
                payload: err
            }))
        .catch( (err) => ({
            type: cases.error,
            payload: err
        }) )
    );
};

export function _Get_Days_of_Week_List (url) {
    return (
        axios_fetch('', url)
        .then(
            (resp) => ({
                type: cases.DAYS_WEEK_LIST,
                payload: resp
            }),
            (err)=> ({
                type: cases.error,
                payload: err
            }))
        .catch( (err) => ({
            type: cases.error,
            payload: err
        }) )
    );
};


export function _Post_User (url, body) {
    return (
        axios_fetch(http_verbs.POST, url, body)
        .then(
            (resp) => ({
                type: cases.PHOTO_LIST,
                payload: resp
            }),
            (err)=> ({
                type: cases.error,
                payload: err
            }))
        .catch( (err) => ({
            type: cases.error,
            payload: err
        }) )
    );
};

export function _Post_Ride_in_Group (url, body) {
    debugger
    return (
        axios_fetch(http_verbs.POST, url, body)
        .then(
            (resp) => ({
                type: cases.PHOTO_LIST,
                payload: resp
            }),
            (err)=> ({
                type: cases.error,
                payload: err
            }))
        .catch( (err) => ({
            type: cases.error,
            payload: err
        }) )
    );
};
