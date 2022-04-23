import '../App.css'

const Loading = () => {
  return (
    <div className='loading'>
      <svg className='spinner' width='65px' height='65px' viewBox='0 0 66 66' xmlns='http://www.w3.org/2000/svg'>
        <circle class='path' fill='none' stroke-width='6' stroke-linecap='round' cx='33' cy='33' r='30' />
      </svg>
      <h3>Loading...</h3>
    </div>
  )
}
export default Loading
