import { List } from '@mui/material';

import { ToDosApi } from '../../api/ToDosApi/instance';

import { ToDoItem } from './ToDoItem';
import { useStyles } from './styles';

export function ToDoList(): JSX.Element {
  const classes = useStyles();
  const { data: todos } = ToDosApi.useGetToDoQuery(5);
  console.log(todos);
  return (
    <List className={classes.list}>
      {todos?.map((todo) => (
        <ToDoItem key={todo.id} {...todo} />
      ))}
    </List>
  );
}
