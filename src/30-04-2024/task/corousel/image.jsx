import Carousel from 'react-bootstrap/Carousel';
import "./image.css"



const Corousel=()=>{
    return(
        
      <>




<Carousel data-bs-theme="dark"  className='m-1'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src='https://images.unsplash.com/photo-1484603738253-e5b73679e8cb?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          alt="First slide"
          style={{height:"60vh"}}
        />
    
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://plus.unsplash.com/premium_photo-1680553492388-78f90482ced0?q=80&w=2052&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dholder.js/800x400?text=Second slide&bg=eee"
          alt="Second slide"
          style={{height:"60vh"}}
          
        />
     
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1605571926314-ae21581e420f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Third slide"
          style={{height:"60vh"}}
        />
     
      </Carousel.Item>
    </Carousel>
  
      
      </>

    )
}

export default Corousel;
