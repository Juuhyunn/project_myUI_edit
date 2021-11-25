import { yupResolver } from '@hookform/resolvers/yup';
import {useDispatch} from 'react-redux'
import { styled, darken } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { Controller, useForm } from 'react-hook-form';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import _ from '@lodash';
import { LayOut } from 'features/common';
import "features/common/font/font.scss"
import 'features/common/style/image.scss'
import 'features/user/style/UserLayout.scss'
import { loginRequest } from '../reducer/userSlice';

const Root = styled('div')(({ theme }) => ({
  '& .Login3-leftSection': {},

  '& .Login3-rightSection': {
    background: `linear-gradient(to right, ${theme.palette.primary.dark} 0%, ${darken(
      theme.palette.primary.dark,
      0.5
    )} 100%)`,
    color: theme.palette.primary.contrastText,
  },
}));

/**
 * Form Validation Schema
 */
const schema = yup.object().shape({
  email: yup.string().email('You must enter a valid email').required('You must enter a email'),
  password: yup
    .string()
    .required('Please enter your password.')
    .min(8, 'Password is too short - should be 8 chars minimum.'),
});

const defaultValues = {
  email: '',
  password: '',
  username: '',
  birth: '',
  address: '',
};

export default function Login3Page() {
  const dispatch = useDispatch()
  const { control, formState, handleSubmit, reset } = useForm({
    mode: 'onChange',
    defaultValues,
    resolver: yupResolver(schema),
  });

  const { isValid, dirtyFields, errors } = formState;
  
  function onSubmit() {
    reset(defaultValues);
  
  }

  return (
    <LayOut>
     
    <Root style={{width:"60vh",marginLeft:" 471px",marginTop:"147px"}} >
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <Card 
          square
        >
          <CardContent style={{marginBottom: "151px"}}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.2 } }}
            >
              <div >
                <img className='login-img'src={require("features/user/images/pencil.png").default}  />
                <div/>
                <div>
                  <Typography
                  >
                    로그인
                  </Typography>
                </div>
              </div>
            </motion.div>

            <form
            
              name="loginForm"
              noValidate
              onSubmit={handleSubmit(async (data) => {await dispatch(loginRequest(data))})}
            >
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    className="mb-16"
                    label="Email"
                    autoFocus
                    type="email"
                    error={!!errors.email}
                    helperText={errors?.email?.message}
                    variant="outlined"
                    required
                    fullWidth
                  />
                )}
              />

              <Controller
                name="password"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    className="mb-16"
                    label="Password"
                    type="password"
                    error={!!errors.password}
                    helperText={errors?.password?.message}
                    variant="outlined"
                    required
                    fullWidth
                  />
                )}
              />

              <div>
                <Link className="font-normal" to="/users/removePwd">
                  Forgot Password?
                </Link>
              </div>

              <Button
                variant="contained"
                color="primary"
                aria-label="LOGIN"
                disabled={_.isEmpty(dirtyFields) || !isValid}
                type="submit"
              >
                Login
              </Button>
            </form>

            <div>
              <Divider className="w-32" />
              <span style={{font:"bolder"}}>OR</span>
              <Divider className="w-32" />
            </div>

            <Button variant="outlined" color="primary" size="small" className="w-192 mb-8">
              Log in with KaKao
            </Button>

          </CardContent>

          <div className="flex flex-col items-center justify-center pb-32">
            <span className="font-normal">Don't have an account?</span>
            <Link className="font-normal" to="/users/Register">
              Create an account
            </Link>
          </div>
        </Card>

        <div className="Login3-rightSection flex hidden md:flex flex-1 items-center justify-center p-64">
          <div className="max-w-320">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
            >
              <Typography
                color="inherit"
                className="text-32 sm:text-44 font-semibold leading-tight"
              >
              
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.3 } }}
            >
              <Typography variant="subtitle1" color="inherit" className="mt-32 font-medium">
              </Typography>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </Root>
   
    </LayOut>
  );
}

