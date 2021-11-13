import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';

import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

<<<<<<< HEAD
import Header from '../../components/common/Header';
import LoginForm from '../../components/auth/Login/LoginForm';
import LoginFooter from '../../components/auth/Login/LoginFooter';
import LoginButtons from '../../components/auth/Login/LoginButtons';
=======
import LoginHeader from '../../components/common/Header';
import LoginForm from '../../components/auth/LoginForm';
import LoginFooter from '../../components/auth/LoginFooter';
import LoginButtons from '../../components/auth/LoginButtons';
>>>>>>> 3926549643ecf5d5807bc378f202a1e6fe6f7d8a

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      textAlign: 'center',
    },
    card: {
      marginTop: theme.spacing(10),
      border: 'none',
      boxShadow: 'none',
    },
  })
);
const LoginPage = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Card className={classes.card}>
        <Header />
        <LoginForm />
        <LoginFooter />
        <LoginButtons />
      </Card>
    </Container>
  );
};

export default LoginPage;