
let Counter = () =>{
let [count, setCount] = useState('0');
let Increment = () =>{
   return( setCount(count+1))
}
let Decrement = () => {
return (setCount(count -1))
}
let Reset = () => {
    return(setCount(0))
}
return(
    <form>
        <p>Counter</p>
        <input type = "button" value = "+" onClick={Increment}/>
        <input type = "button" value = "-" onClick={Decrement}/>
        <input type = "button" value = "Reset" onClick={Reset}/>
    </form>
)}
export default Counter;