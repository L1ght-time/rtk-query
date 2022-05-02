import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
  list: {
    width: 400,
    gap: 5,
    display: 'flex',
    flexDirection: 'column',

    '&.MuiList-root': {
      margin: '0px auto',
    },
  },
}));
