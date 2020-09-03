import anecdoteService from '../services/anecdotes'

const anecdoteReducer = (state = [], action) => {

  switch (action.type) {
    case 'VOTE':
      const updatedAnecdote = action.data
      const id = action.data.id
      return state.map(anecdote => anecdote.id !== id ? anecdote : updatedAnecdote)
    case 'NEW_ANECDOTE':
      return [...state, action.data]
    case 'INIT_ANECDOTES':
      return action.data
    default:
      return state
  }
}

export const voteAnecdote = (id) => {
  return async dispatch => {
    const anecdoteToVote = await anecdoteService.getSingle(id)
    const votedAnecdote = {
      ...anecdoteToVote,
      votes: anecdoteToVote.votes + 1
    }
    const updatedAnecdote = await anecdoteService.update(id, votedAnecdote)
    dispatch({
      type: 'VOTE',
      data: updatedAnecdote
    })
  }
  
}

export const createAnecdote = (content) => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch({
      type: 'NEW_ANECDOTE',
      data: newAnecdote
    })
  }
}

export const initAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes
    })
  }
}

export default anecdoteReducer