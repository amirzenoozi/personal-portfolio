import { createUseStyles } from 'react-jss';

const useStyle = createUseStyles({
  'content': {},
  '@global': {
    body: {
      padding: 0,
      margin: 0,
    },
    p: {
      margin: 0,
      padding: 0,
    },
    ul: {
      listStyleType: 'none',
    },
  },
});

export { useStyle };
