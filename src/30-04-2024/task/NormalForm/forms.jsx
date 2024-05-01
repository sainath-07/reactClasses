import "./forms.css"

const Forms=()=>{
    return(
        <>
        <h2 style={{
            textAlign:"center"
        }}>Login Form</h2>
        <form className="forms">
            <input type="text" className="input" placeholder="FirstName"/>
            <input type="text" className="input" placeholder="SecondName"/>
            <input type="email"  className="input" placeholder="EmailAddress"/>
            <input type="password"  className="input" placeholder="Password"/>
            <input type="Submit"  className="Submit" placeholder="Password"/>

        </form>
        
        </>
    )
}

export default Forms;