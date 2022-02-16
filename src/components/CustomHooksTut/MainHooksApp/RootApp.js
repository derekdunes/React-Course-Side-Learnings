import React, { useEffect, useState, useCallback } from 'react';
import useHttp from './Hooks/use-http';
import Tasks from './Tasks/Tasks';
import NewTask from './NewTask/NewTask';

const RootApp = () => {
    const [tasks, setTasks] = useState([]);
    const transformTasks = useCallback((data, notNeeded) => {
        const loadedTasks = [];

        for (const taskKey in data) {
          loadedTasks.push({ id: taskKey, text: data[taskKey].text });
        }
  
        setTasks(loadedTasks);
    }, []);

    const { isLoading, error, sendRequest: fetchTasks } = useHttp(transformTasks);

    useEffect(() => {
        fetchTasks({url: 'https://react-burger-builder-44a88.firebaseio.com/tasks.json'});
    }, [fetchTasks]);

    const taskAddHandler = (task) => {
        setTasks((prevTasks) => prevTasks.concat(task));
    };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default RootApp;