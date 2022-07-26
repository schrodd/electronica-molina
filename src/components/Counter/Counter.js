import './Counter.css'

const Counter = ({ count, setCount }) => {

    function add(){
        setCount(count + 1)
    } 
    function subtract(){
        count > 0 && setCount(count - 1)
    }

    return (
        <div className='counter'>
            <button className='qty add' onClick={() => subtract()}>-</button>
            <p className='count'>{count}</p>
            <button className='qty sub' onClick={() => add()}>+</button>
        </div>
    )
}
export default Counter