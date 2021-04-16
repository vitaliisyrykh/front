import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import * as createActionTask from '../actions/createActionTask';



const TaskList = (props) => {
  const{tasks,isFetching,error}=props;
  console.log(tasks);
  return (
    <section>
      {isFetching && 'Loading....'}
      {error && JSON.stringify(error)}
      <ul>
        {tasks.map(task=>{
          <li key={task.id}>
            <hr/>
            {JSON.stringify(task,null,4)}
            <hr/>
          </li>
        })}
      </ul>
    </section>
  );
}

const mapStateToProps = ({tasks})=>({
...tasks
});



export default connect(mapStateToProps,null)(TaskList);
