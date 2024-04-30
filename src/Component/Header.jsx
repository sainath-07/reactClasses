import React from 'react'

function Header() {
    return (
        <div>
            headingone
            <Header1/>
        </div>
    )
}




function Header1() {
    return (
        <div className='text-danger'>
            Heading one...
        </div>
    )
}



export default Header