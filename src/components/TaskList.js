import React, { useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import * as createActionTask from '../actions/createActionTask';
import Task from './Task'

const TaskList = props => {
  
  const {tasks,isFetching,error}=useSelector(({ task }) => task);
  const dispatch=useDispatch();

  useEffect(() => {
    dispatch(createActionTask.getTasksRequest())
  }, [dispatch]);

  return (
    <section>
      {isFetching && 'Loading....'}
      {error && JSON.stringify(error)}
      <ul>
        aslkfalsk
        {tasks.map(task => {
          return (
            <Task {...task} key={task.id}/>
          );
        })}
      </ul>
    </section>
  );
};

export default TaskList;
