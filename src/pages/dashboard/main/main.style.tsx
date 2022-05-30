import { createUseStyles } from 'react-jss';
import { ThemeInterface } from 'src/theme/theme.props';

const useStyle = createUseStyles((theme: ThemeInterface) => ({
  PageWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    background: theme.palette.background,
    color: theme.palette.text,
  },
  PageTitle: {
    color: theme.palette.primary,
    fontSize: 18,
    marginBottom: theme.spacing(4),
  },
}));

export { useStyle };
