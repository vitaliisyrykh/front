import { connect } from 'react-redux';
import { Formik, Field, Form } from 'formik';
import {createTaskRequest} from '../actions/createActionTask';

const TaskForm = props => {
  const { createTask } = props;

  const onSubmit = (values, formikBag) => {
    createTask(values);
    formikBag.resetForm();
  };
  return (
    <Formik
      initialValues={{
        body: '',
        isDone: false,
      }}
      onSubmit={onSubmit}
    >
      <Form>
        <Field name='body' placeholder='Введите текст для задания' />
        <button type='submit'>Потвердить</button>
      </Form>
    </Formik>
  );
};

const mapDispatchToProps = dispatch => ({
  createTask: values => dispatch(createTaskRequest(values)),
  
});

export default connect(null, mapDispatchToProps)(TaskForm);
