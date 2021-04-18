import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteTaskRequest,
  updateComponRender,
} from '../actions/createActionTask';
import UpdateForm from './UpdateForm';

const Task = props => {
  const { body, deathLine, isDone, id } = props;
  const { isUpdate } = useSelector(({ task }) => task);
  const isDoneHandler = ({ target: { checked } }) => {};
  const dispatch = useDispatch();
  const deleteHandler = () => {
    dispatch(deleteTaskRequest({ id }));
  };
  const updateHandler = () => {
    dispatch(updateComponRender());
  };
  return (
    <div>
      <article>
        <hr />
        {id}
        <p>{body}</p>
        {isUpdate && <UpdateForm {...props} />}
        <input type='checkbox' checked={isDone} onChange={isDoneHandler} />
        <div>{deathLine}</div>
        <button onClick={updateHandler}>Edit</button>
        <button onClick={deleteHandler}>Delete</button>
      </article>
    </div>
  );
};

export default Task;
