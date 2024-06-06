import React,{useState} from 'react'

export default function Aboutus(props) {
    // const[myStyle,setStyle]=useState({
    //     color:'black',
    //     backgroundColor:'white'
    // })
    let myStyle={
        color: props.mode === 'dark'?'white':'#042743',
        backgroundColor: props.mode === 'dark'?'rgb(36 74 104)':'white'
    }
    // const[btn,setbtn]=useState('Enable light mode')
    // const toggleClick = () =>{
    //     if(myStyle.color==='white'){
    //         setStyle({
    //             color:'black',
    //             backgroundColor:'white'
    //         })
    //         setbtn('Enable dark mode')
    //     }else{
    //         setStyle({
    //             color:'white',
    //             backgroundColor:'black'
    //         })
    //         setbtn('Enable light mode') 
    //     }
    // }
  return (
    <div className="container my-3 " style={myStyle}>
        <h2 className='my-2'>About Us</h2>
        <div className="accordion" id="accordionExample" style={myStyle}>
            <div className="accordion-item " style={myStyle} >
            <h2 className="accordion-header" style={myStyle}>
                <button style={myStyle} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <strong>Analyze Your Text</strong>
                </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                Our Text Utils app offers a comprehensive suite of tools designed to help you analyze and manipulate your text with ease. Whether you need to convert text to lower case, upper case, or remove extra spaces, our app provides a user-friendly interface that makes text processing simple and efficient. Empower your writing with our versatile text analysis features.
                </div>
            </div>
            </div>
            <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header">
                <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <strong>Free To Use</strong>
                </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                We believe that everyone should have access to powerful text manipulation tools without any cost. That's why our Text Utils app is completely free to use. Enjoy all the functionalities without worrying about subscriptions or hidden charges. Enhance your productivity with our no-cost, ad-free text utility services.
                </div>
            </div>
            </div>
            <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header">
                <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <strong>Browser Compatible</strong>
                </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                Our Text Utils app is fully compatible with all modern web browsers. Whether you're using Chrome, Firefox, Safari, or Edge, our app is designed to work seamlessly across different platforms. Enjoy a consistent and responsive user experience, no matter which browser you prefer. Access our tools anytime, anywhere, on any device with internet access.
                </div>
            </div>
            </div>
        </div>
        {/* <div className="container my-2">
            <button type="button" onClick={toggleClick  } className="btn btn-primary">{btn}</button>
        </div> */}
    </div>
  )
}
