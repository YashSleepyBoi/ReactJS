import React, { useState } from 'react'
import './FormControl.css'
import Popup from '../PopUp/PopUp'
import ReactDOM  from 'react-dom'

const FormControl = (props) => {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [validity,setValidity]=useState(true)
  const [validityreason,setValidityReason]=useState('')
  const valid_submission=()=>{
    if(name!=='' && age!==''){
        try{
            const age_int=parseInt(age)
            
            if(!age_int){
                throw Error
            }
            if(age_int<0){
                setValidity(false)
                setValidityReason('Enter a value greater than 0')
            }else{
                return true
            }
        }
        catch{
            setValidity(false)
            setValidityReason('Enter a number')
        }
    }
    else{
        setValidity(false)
        setValidityReason('Enter content in age and name')
    }

  }
  const popupstate=()=>{
    setValidity(true)
}
  const formSubmitter = (e) => {
    e.preventDefault()
    if(valid_submission()){

   
    
    const new_uesr = {name,age,key: Math.random()}
    setAge('')
    setName('')
    props.onFormSubmit(new_uesr)
    }
  }

  const nameChangeHandler = (e) => {
    setName(e.target.value)
  }

  const ageChangeHandler = (e) => {
    setAge(e.target.value)
  }

  return (
    <div>
      <form className='formcontrol' onSubmit={formSubmitter}>
        <div className='formcontrol__field'>
          <label className='formcontrol__title'>
            Username
          </label>
          <input
            type='text'
            value={name}
            onChange={nameChangeHandler}
            className='formcontrol__inputbox'></input>
        </div>
        <div className='formcontrol__field'>
          <label className='formcontrol__title'>
            Age(Years)
          </label>
          <input
            type='text'
            value={age}
            onChange={ageChangeHandler}
            className='formcontrol__inputbox'></input>
        </div>
        <button type='submit' className='formcontrol__button'>
          Add User
        </button>
      </form>
      {!validity?
        ReactDOM.createPortal(<Popup onClose={popupstate} msg={validityreason}></Popup>,document.getElementById('test')):<p></p>
    }
      
    </div>
  )
}

export default FormControl
