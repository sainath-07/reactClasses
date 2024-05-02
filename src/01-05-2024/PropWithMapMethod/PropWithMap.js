const ButtonProp=(Prop)=>{
    console.log(Prop,"prop")


    
    const {text,bgcolor,buttonProperties:{width,height}} =Prop
     return(
        <div>
            <button style={{
                backgroundColor:bgcolor,
                height:height,
                width:width
            }}>{text}</button>
        </div>

     )
}



export default ButtonProp  