import React from 'react'

export default function About(props) {

    // const [myStyle, setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor:'white'
    // })
    let myStyle ={
        color: props.mode ==='dark'?'white':'black',
        backgroundColor: props.mode ==='dark'?'rgb(53 53 53)':'white'
    }


    return ( 
        <>
        <div className= "container" style={{color: props.mode ==='dark'?'white':'black'}}>
            <h1 className= "my-3" style={myStyle}>About Us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                        <strong><h5>Analyze your text.</h5></strong>
                        TextUtils gives you a way to analyze your text quickly and efficiently. Be it word count or character count
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
