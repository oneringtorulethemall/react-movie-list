import { useState, useCallback } from 'react';
import Section from '../../UI/Section';
import TaskForm from './TaskForm';
import useHttp from '../../../hooks/useHttp';

const addURL = 'https://react-movie-list-fe77b-default-rtdb.firebaseio.com/tasks.json';
const getURL = 'https://react-movie-list-fe77b-default-rtdb.firebaseio.com/tasks';

const NewTask = (props: any) => {
  const { loading, error, sendRequest } = useHttp();


  const createTask = (taskText: string, taskData: any) => {
    const generatedId = taskData.name; // firebase-specific => "name" contains generated id
    const createdTask = { id: generatedId, text: taskText };
    props.onAddTask(createdTask);
  }


  const enterTaskHandler = async (taskText: any) => {
    /*await*/ sendRequest({
    url: addURL,
    method: 'POST',
    body: { text: taskText }
  },
  // bind right here can be used to preconfigure the call back method
  // with additional parameters that will be passed in starting
  // at (n) and continue for each argument passed in.
  // then, the sendRequest method will call it with the
  // guid entry appended as the last argument
    createTask.bind(null, taskText)
  )
  };

  const extractErrorMessage = (error: null | any): string | null => {
    if (error == null) return null;
    return error?.message;
  };


  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={loading} />
      {error && <p>{extractErrorMessage(error)}</p>}
    </Section>
  );
};

export default NewTask;
