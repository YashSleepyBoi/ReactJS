import './PopUp.css'

const PopUp = (props) => {
  const closepopup = () => {
    props.onClose()
  }

  return (

    <div className='popup'>
      <div className='popup__header'>
        <button className='popup__cross' onClick={closepopup}>
          X
        </button>
      </div>
      <div className='popup__msg'>
        {props.msg}
      </div>
    </div>
  )
}

export default PopUp
