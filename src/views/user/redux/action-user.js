import { axios_fetch } from '../../../config/services//service-request';
import { cases } from './reducer-user';

export const  _Get_User_List = (url) => {
    return (
        axios_fetch('', url)
        .then(
            (resp) => ({
                type: cases.user_list,
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
