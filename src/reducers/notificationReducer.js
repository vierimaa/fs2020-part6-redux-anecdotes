const notificationReducer = (state = null, action) => {
  switch (action.type) {
    case 'SET_NOTIFICATION':
      return action.message
    case 'CLEAR_NOTIFICATION':
      return null
    default:
      return state
  }
}

export const showNotification = (message, time) => {
  return async dispatch => {
    dispatch({
      type: 'SET_NOTIFICATION',
      message: message
    })
    setTimeout(() => {
      dispatch({
        type: 'CLEAR_NOTIFICATION'
      })
    }, time * 1000)
  }
}

export const hideNotification = () => {
  return {
      type: 'CLEAR_NOTIFICATION'
    }
}

export default notificationReducer