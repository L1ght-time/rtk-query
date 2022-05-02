import { IconButton, ListItem, Typography } from '@mui/material';
import { Delete } from '@mui/icons-material';

import { IToDoItemProps } from './types';
import { useStyles } from './styles';

export function ToDoItem({ title }: IToDoItemProps): JSX.Element {
  const classes = useStyles();
  return (
    <ListItem className={classes.item}>
      <Typography component='span'>{title}</Typography>

      <IconButton>
        <Delete />
      </IconButton>
    </ListItem>
  );
}
