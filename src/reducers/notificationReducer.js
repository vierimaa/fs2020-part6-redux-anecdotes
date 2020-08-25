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

export const showNotification = (message) => {
  return {
      type: 'SET_NOTIFICATION',
      message: message
    }
}

export const hideNotification = () => {
  return {
      type: 'CLEAR_NOTIFICATION'
    }
}

export default notificationReducer