import './UserDisplay.css'
const UserDisplay = (props) => {
  return (
    <div className='user_list'>
      {props.data.map((dp) => {
         return (
           <div className='user__listitem' key={dp.key}>
             <h4>{dp.name}</h4>
             <h5>{dp.age}</h5>
           </div>
         )
       })}
    </div>
  )
}

export default UserDisplay
