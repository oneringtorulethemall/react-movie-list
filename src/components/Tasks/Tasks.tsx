import Section from '../UI/Section';
import TaskItem from './TaskItem';
import classes from './Tasks.module.css';

const Tasks = (props: any) => {
  let content;
  const noTasksFoundMessage = <h2>No tasks found. Start adding some!</h2>;

  if (props.tasks.length > 0) {
    content = (
      <ul>
        {props.tasks.map((task: any) => {
          if (task === undefined) return null;
          return (
            <TaskItem key={task.id}>
              {task.text}
            </TaskItem>
          );
        }
        )}
      </ul>);
  }
  else {
    if (props.error) {
      content = <button
        onClick={props.onFetch}>
        {noTasksFoundMessage}
      </button>
    } else {
      if (props.loading) {
        content = 'Loading tasks...please wait.'
      }
    }
  }

  return (
    <Section>
      <div className={classes.container}>{content}</div>
    </Section>
  );
};

export default Tasks;
