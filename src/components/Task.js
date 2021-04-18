import React from 'react';
import {useDispatch} from 'react-redux';
import {deleteTaskRequest} from '../actions/createActionTask';


const Task = props => {
  const { body, deathLine, isDone, id } = props;
  const isDoneHandler = ({target:{checked}})=>{};
  const dispatch = useDispatch();
  const deleteHandler = ()=>{
    dispatch(deleteTaskRequest({id}))
  }

  return (
    <div>
      <article>
        <hr />
        {id}
        <p>{body}</p>
        <input type='checkbox' checked={isDone} onChange={isDoneHandler} />
        <div>{deathLine}</div>
        <button  onClick = {deleteHandler}>Delete</button>
      </article>
    </div>
  );
};

export default Task;
