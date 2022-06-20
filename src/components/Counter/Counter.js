import './Counter.css'

const Counter = ({count, add, subtract}) => {
    return (
        <div className='counter'>
            <button className='qty add' onClick={() => subtract()}>-</button>
            <p className='count'>{count}</p>
            <button className='qty sub' onClick={() => add()}>+</button>
        </div>
    )
}
export default Counter