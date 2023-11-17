import { useState } from "react";

// import React, { useState } from "react";
export default function About(props) {
  // const [cssStyle, setCssStyle] = useState({
  //   color: "black",
  //   backgroundColor: "white",
  // })
  // const [btntext, setBtnText] = useState('Enable dark mode')

  
  // const toggleStyle = () => {
  //   if (cssStyle.color === "black"){
  //     setCssStyle({
  //       color: "white",
  //       backgroundColor: "black",
  //     })
  //   setBtnText("Enable light mode")
  //   }
  //   else{
  //       setCssStyle({
  //           color: "black",
  //           backgroundColor: "white",
  //         })
  //       setBtnText("Enable dark mode")

  //     }
  // }
  const [btn, setBtn] = useState('');
  const handleOnClick=(event)=>{
    console.log("Change is click");
    setBtn(event.target.value);
  }
  return (
    <div className="container m-4" >
      <h1>About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              onClick={handleOnClick}
              style={{
                backgroundColor: props.mode === 'dark' ? 'black' : (props.mode === 'success' ? 'green' : (props.mode === 'primary' ? 'blue' : 'white')),
                color: props.mode === 'dark' ? 'white' : (props.mode === 'success' ? 'white' : (props.mode === 'primary' ?' white' : 'black')),
                
              }}
            >
              My Self
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" onClick={handleOnClick}
              style={{
                backgroundColor: props.mode === 'dark' ? 'black' : (props.mode === 'success' ? 'green' : (props.mode === 'primary' ? 'blue' : 'white')),
                color: props.mode === 'dark' ? 'white' : (props.mode === 'success' ? 'white' : (props.mode === 'primary' ?' white' : 'black')),
                textAlign:'center'
              }}>
              <strong>My name is Bilal Ahmad.</strong> I'm student of software engineenring at Islamia universty Bahawalpur. I am best in develping front-ent websites.So if you want some creative site then contect me.
            </div>
          </div>
        </div>
        <div className="accordion-item" onClick={handleOnClick}
              style={{
                backgroundColor: props.mode === 'dark' ? 'black' : (props.mode === 'success' ? 'green' : (props.mode === 'primary' ? 'blue' : 'white')),
                color: props.mode === 'dark' ? 'white' : (props.mode === 'success' ? 'white' : (props.mode === 'primary' ?' white' : 'black'))
              }}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              onClick={handleOnClick}
              style={{
                backgroundColor: props.mode === 'dark' ? 'black' : (props.mode === 'success' ? 'green' : (props.mode === 'primary' ? 'blue' : 'white')),
                color: props.mode === 'dark' ? 'white' : (props.mode === 'success' ? 'white' : (props.mode === 'primary' ?' white' : 'black'))
              }}
              
            >
             Contact Me
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" onClick={handleOnClick}
              style={{
                backgroundColor: props.mode === 'dark' ? 'black' : (props.mode === 'success' ? 'green' : (props.mode === 'primary' ? 'blue' : 'white')),
                color: props.mode === 'dark' ? 'white' : (props.mode === 'success' ? 'white' : (props.mode === 'primary' ?' white' : 'black'))
              }}>
              <strong>This is the second item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classNamees that we use to style each element. These classNamees control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item" >
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              onClick={handleOnClick}
              style={{
                backgroundColor: props.mode === 'dark' ? 'black' : (props.mode === 'success' ? 'green' : (props.mode === 'primary' ? 'blue' : 'white')),
                color: props.mode === 'dark' ? 'white' : (props.mode === 'success' ? 'white' : (props.mode === 'primary' ?' white' : 'black'))
              }}
              
            >
              Accordion Item #3
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" onClick={handleOnClick}
              style={{
                backgroundColor: props.mode === 'dark' ? 'black' : (props.mode === 'success' ? 'green' : (props.mode === 'primary' ? 'blue' : 'white')),
                color: props.mode === 'dark' ? 'white' : (props.mode === 'success' ? 'white' : (props.mode === 'primary' ?' white' : 'black'))
              }}>
              <strong>This is the third item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classNamees that we use to style each element. These classNamees control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
      {/* <div className="continer">
        <button
          onClick={toggleStyle}
          type="button"
          className="btn btn-outline-primary my-3"
        >
          {btntext}
        </button> */}
      {/* </div> */}
    </div>
  );
}
