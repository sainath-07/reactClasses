import useCustom from "../Customhook/customerhook"

const Customhookscreen=()=>{

 const [increase,decrease,reset,initialvalue]=useCustom(50,50)
 const [salaryinc,salarydec,salaryreset,salaryinitialvalue]=useCustom(500,500)
    return(
        <>
        <h1>custom hook screen</h1>
        <h4>{initialvalue}</h4>
        <button onClick={increase}>increase</button>
        <button onClick={decrease}>decrease</button>
        <button onClick={reset}>reset</button>


        <hr />

        <h1>salary : {salaryinitialvalue}</h1>
        <button onClick={salaryinc}>incrementsalary</button>
        <button onClick={salarydec}>decrementsalary</button>
        <button onClick={salaryreset}>resetsalary</button>

        

     
        </>
    )
}

export default Customhookscreen