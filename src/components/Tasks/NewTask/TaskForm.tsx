import { useRef, FormEvent } from 'react';

import classes from './TaskForm.module.css';

const TaskForm = (props: any) => {
  const taskInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    debugger;
    const enteredValue = taskInputRef.current?.value;

    if (enteredValue && enteredValue.trim().length > 0) {
      props.onEnterTask(enteredValue);
    }

  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <input type='text' ref={taskInputRef} />
      <button>{props.loading ? 'Sending...' : 'Add Task'}</button>
    </form>
  );
};

export default TaskForm;
