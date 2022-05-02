import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
  item: {
    borderRadius: 14,
    display: 'flex',
    border: '1px solid #000',

    '&.MuiListItem-root': {
      justifyContent: 'space-between',
    },
  },
}));
