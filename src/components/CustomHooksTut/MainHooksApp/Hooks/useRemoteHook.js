import { useState, useEffect } from 'react';

//isGetRequest
//taskTest

const useRemoteHoot = (props) => {

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    
    const postReq = {
        method: 'POST',
        body: JSON.stringify({ text: props.taskText }),
        headers: {
          'Content-Type': 'application/json',
        }
    };

    const fetchTasks = async () => {
        setIsLoading(true);
        setError(null);
        try {
          const response = props.isGetRequest ? await fetch(
            'https://react-burger-builder-44a88.firebaseio.com/tasks.json'
          ) : await fetch(
            'https://react-burger-builder-44a88.firebaseio.com/tasks.json',
            postReq
          );
    
          if (!response.ok) {
            throw new Error('Request failed!');
          }
    
          const data = await response.json();
          
          return {data: data, isLoading: isLoading, error: error };

        } catch (err) {
          setError(err.message || 'Something went wrong!');
          return {data: null, isLoading: isLoading, error: error };
        }
        setIsLoading(false);
    };

    useEffect(() => {
        fetchTasks();
      }, []);
    


}