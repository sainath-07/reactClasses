const Formcomponent = () => {
    return(
       
        <form>
            <label for="username">User name : </label>
            <input type="text" id="username"></input><br/>
            <label for="pswd">Password : </label>
            <input type="password" id="pswd"></input><br/>
            <label for="email">Email id : </label>
            <input type="email" id="email"></input>
        </form>

    )
}

export default Formcomponent