export default function (playLoad) {
    // request error
    if (typeof (playLoad) === 'string') {
        return {
            error: playLoad,
        };
    }
    // server error
    if (typeof (playLoad.message) === 'string') {
        return {
            error: playLoad.message,
            errorCode: playLoad.code,
        };
    }
    if (Object.prototype.toString.call(playLoad.message) === '[object Array]') {
        let errorMsg = '';
        if (playLoad.message.length > 0) {
            errorMsg = playLoad.message[0];
        }
        return {
            error: errorMsg
        };
    }
    return null;
}

export function getErrorField(error) {
    if (error) {
        return error.toString();
    }
    return null;
}
