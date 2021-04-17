import React from 'react';
import {useDispatch} from 'react-redux';

const Task = props => {
  const { body, deathLine, isDone, id } = props;
  const isDoneHandler = ({target:{checked}})=>{};

  return (
    <div>
      <article>
        <hr />
        {id}
        <p>{body}</p>
        <input type='checkbox' checked={isDone} onChange={isDoneHandler} />
        <div>{deathLine}</div>
        <button disabled={!isDone} ></button>
      </article>
    </div>
  );
};

export default Task;
