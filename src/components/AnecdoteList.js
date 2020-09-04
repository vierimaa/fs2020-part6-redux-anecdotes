import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { showNotification } from '../reducers/notificationReducer'

const Anecdote = ({ anecdote, handleClick }) => {
  return (
    <div>
        <div>
          {anecdote.content}
        </div>
        <div>
          has {anecdote.votes}
          <button onClick={handleClick}>vote</button>
        </div>
    </div>
  )
} 

const AnecdoteList = () => {
  const anecdotes = useSelector(state => state.anecdotes)
  const activeFilter = useSelector(state => state.filter)
  const dispatch = useDispatch()

  const voteHandler = (id, message) => {
    dispatch(voteAnecdote(id))
    dispatch(showNotification(`You voted on "${message}"`, 5))
  }
  
  
  return(
    <div>
      {anecdotes
      .filter(anecdote => anecdote.content.toUpperCase().includes(activeFilter.toUpperCase()))
      .sort((aneA, aneB) => aneB.votes - aneA.votes)
      .map(anecdote =>
        <Anecdote
          key={anecdote.id}
          anecdote={anecdote}
          handleClick={() => 
            voteHandler(anecdote.id, anecdote.content)
          }
        />
      )}
    </div>
  )
}

export default AnecdoteList