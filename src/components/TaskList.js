import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as createActionTask from '../actions/createActionTask';

const TaskList = props => {
  const { tasks, isFetching, error, getTasks } = props;
  useEffect(() => {
    getTasks();
  });
  console.log(isFetching);
  return (
    <section>
      {isFetching && 'Loading....'}
      {error && JSON.stringify(error)}
      <ul>
        aslkfalsk
        {/* {tasks.map(task=>{
          return(<li key={task.id}>
            <hr/>
            {JSON.stringify(task,null,4)}
            <hr/>
          </li>)
        })}  */}
      </ul>
    </section>
  );
};

const mapStateToProps = ({ task }) => ({
  ...task,
});

const mapDispatchToProps = dispatch => ({
  getTasks: () => dispatch(createActionTask.createTaskRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
