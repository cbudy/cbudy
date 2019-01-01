
export const isLogin = (data) => {
    return (
        dispatch({
            type: 'LOGED',
            payload: data
        })
    )
}
export const username = (data) => (dispatch) => {
    return (dispatch({
        type: 'USERNAME',
        payload: data.target.value
    })
    )
}