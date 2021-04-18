import React from 'react';
import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { updateTaskRequest } from '../actions/createActionTask';

const UpdateForm = props => {
  const {
    body: updateBody,
    id,
    
  } = props;
  const dispatch = useDispatch();
  const onSubmit = (values, formikBag) => {
    dispatch(updateTaskRequest(id, values));
    
    
  };
  return (
    <div>
      <Formik
        initialValues={{
          body: updateBody,
          
        }}
        onSubmit={onSubmit}
      >
        <Form>
          <Field name='body' />
         
          <button type='submit'> Потвердить</button>
        </Form>
      </Formik>
    </div>
  );
};

export default UpdateForm;
