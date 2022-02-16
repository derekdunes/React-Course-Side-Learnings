import { useCallback } from 'react';
import useHttp from '../Hooks/use-http';

import Section from '../UI/Section';
import TaskForm from './TaskForm';

const NewTask = (props) => {

  const transformTasks = useCallback( (data, taskText) => {

    const generatedId = data.name; // firebase-specific => "name" contains generated id
    const createdTask = { id: generatedId, text: taskText };

    props.onAddTask(createdTask);
  }, [props]);

  const { isLoading, error, sendRequest: enterTaskHandler } = useHttp(transformTasks);

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
