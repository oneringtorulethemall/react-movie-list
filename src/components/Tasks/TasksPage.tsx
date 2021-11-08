import React, { useEffect, useState, useCallback } from 'react';
import Tasks from './Tasks';
import TaskItem from './TaskItem';
import NewTask from './NewTask/NewTask';
import useHttp from '../../hooks/useHttp';

const taskURL = 'https://react-movie-list-fe77b-default-rtdb.firebaseio.com/tasks.json';

const TasksPage = (props: any) => {
    const [tasks, setTaskList] = useState(new Array<any>());
    const { loading, error, sendRequest } = useHttp();

    const transformData = useCallback((data: any) => {
        debugger;
        const loadedTasks = new Array();
        for (const key in data) {
            loadedTasks.push({ id: key, text: data[key].text });
        }
        setTaskList(loadedTasks);
    }, []);


    useEffect(() => {
        sendRequest(
            {
                url: taskURL
            }, transformData)
    }, [sendRequest, transformData]);


    const onAddTask = (props: any) => {
        // these will be batched up and run together
        debugger;
        setTaskList([...tasks, props]);
        console.log(tasks)
    }

    return (
        <>
            <NewTask onAddTask={onAddTask} />
            <Tasks
                tasks={tasks}
                loading={loading}
                error={error}
                onFetch={() => sendRequest(
                    {
                        url: taskURL
                    }, transformData)}
            />
        </>
    );
};

export default TasksPage;