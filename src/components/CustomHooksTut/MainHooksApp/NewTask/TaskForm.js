import { useRef } from 'react';

import classes from './TaskForm.module.css';

const TaskForm = (props) => {
  const taskInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredValue = taskInputRef.current.value;

    if (enteredValue.trim().length > 0) {
      const requestConfig = {
        url: 'https://react-burger-builder-44a88.firebaseio.com/tasks.json',
        method: 'POST',
        body: enteredValue,
        headers: {'Content-Type': 'application/json',}
      };

      props.onEnterTask(requestConfig);
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
