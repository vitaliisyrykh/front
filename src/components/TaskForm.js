import { useDispatch } from 'react-redux';
import { Formik, Field, Form } from 'formik';
import { createTaskRequest } from '../actions/createActionTask';

const TaskForm = props => {
  const dispatch = useDispatch();
  const onSubmit = (values, formikBag) => {
    dispatch(createTaskRequest(values));
    formikBag.resetForm();
  };
  return (
    <Formik
      initialValues={{
        body: '',
        deathLine: '',
        isDone: false,
      }}
      onSubmit={onSubmit}
    >
      <Form>
        <Field name='body' placeholder='Введите текст для задания' />
        <Field name='deathLine' type='date' />
        <button type='submit'>Потвердить</button>
      </Form>
    </Formik>
  );
};

export default TaskForm;
