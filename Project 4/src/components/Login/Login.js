import React, { useState, useEffect, useReducer } from 'react'

import Card from '../UI/Card/Card'
import classes from './Login.module.css'
import Button from '../UI/Button/Button'

const emailvalidator = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return {'value': action.val,'isValid': action.val.includes('@')}
  }if (action.type === 'INPUT_BLUR') {
    return {'value': state.value,'isValid': state.value.includes('@')}
  }
  return {'value': '','isValid': false}
}

const passwordvalidator = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return {'value': action.val,'isValid': action.val.trim().length > 6}
  }if (action.type === 'INPUT_BLUR') {
    return {'value': state.value,'isValid': state.value.trim().length > 6}
  }
  return {'value': '','isValid': false}
}

const Login = (props) => {
  const [emailstate, dispatchEmailState] = useReducer(emailvalidator, {'value': '','isValid': null})
  const [passwordstate, dispatchPasswordState] = useReducer(passwordvalidator, {'value': '','isValid': null})
  // const [enteredEmail, setEnteredEmail] = useState('')
  // const [emailIsValid, setEmailIsValid] = useState()
  // const [enteredPassword, setEnteredPassword] = useState('')
  // const [passwordIsValid, setPasswordIsValid] = useState()
  const [formIsValid, setFormIsValid] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setFormIsValid(
        emailstate.value.includes('@') && passwordstate.value.trim().length > 6
      )
    }, 500)

    return () => {
      console.log('clear')
      clearTimeout(timer)
    }
  }, [emailstate, passwordstate])

  const emailChangeHandler = (event) => {
    dispatchEmailState({type: 'USER_INPUT',val: event.target.value})
  // setEnteredEmail(event.target.value)
  }

  const passwordChangeHandler = (event) => {
    dispatchPasswordState({type: 'USER_INPUT',val: event.target.value})
  // setEnteredPassword(event.target.value)
  }

  const validateEmailHandler = () => {
    dispatchEmailState({type: 'INPUT_BLUR'})
  // setEmailIsValid(enteredEmail.includes('@'))
  }

  const validatePasswordHandler = () => {
    dispatchPasswordState({type: 'INPUT_BLUR'})
  // setPasswordIsValid(enteredPassword.trim().length > 6)
  }

  const submitHandler = (event) => {
    event.preventDefault()
    props.onLogin(emailstate.value, passwordstate.value)
  }

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div className={`${classes.control} ${
            emailstate.isValid === false ? classes.invalid : ''
          }`}>
          <label htmlFor='email'>
            E-Mail
          </label>
          <input
            type='email'
            id='email'
            value={emailstate.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler} />
        </div>
        <div className={`${classes.control} ${
            passwordstate.isValid === false ? classes.invalid : ''
          }`}>
          <label htmlFor='password'>
            Password
          </label>
          <input
            type='password'
            id='password'
            value={passwordstate.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler} />
        </div>
        <div className={classes.actions}>
          <Button type='submit' className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  )
}

export default Login
