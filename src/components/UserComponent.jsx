
const UserComponent = ({ user }) => {
  return (
    <div>
      <div className='card'>
        <div className='card-header'>
          <img className='avatar' src={user.avatar} alt='Avatar' />
          <h3 className='card-title'>{user.jobTitle}</h3>
        </div>
        <div className='card-body'>
          <p>{user.name}</p>
          <p>{user.lastName}</p>
        </div>
      </div>
    </div>
  )
}

export default UserComponent
