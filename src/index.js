// import React from 'react'; //to use jsx we use import react
// import ReactDOM from 'react-dom';
// import "./index.css";
// var React= require('react');
// var  ReactDOM=require('react-dom');
// {/* <h1>HELLO WORLD!!</h1> */} //! JSX javascript extension
//! ways to add multiple jsx element
//! ReactDOM.render('1.KYA DIKHANA HAI','2.KAHAN DIKHANA HAI HAI','3.CALLBACK FUNCTION');
// .render only takes one single element (ex.-<h1>)
// here we used div tag because we have three elements here h1, p and h2

// ReactDOM.render(

//     <div>
//     <h1>HELLO WORLD!!</h1>
//     <p>MY NAME IS KAJAL I AM FROM ANOTHER SPACE WHICH DOES NOT EVEN EXIST</p>
//     <h2>Byee</h2>

//     </div>,
// document.getElementById('root'));

//? ################################################################################

//! if your version is above 16 plus then you do not have to use div tag you can use array
// example-
// const arr=['kajal','sharad'];
// ReactDOM.render(

//     [
//     <h1>HELLO WORLD!!</h1>,
//     <p>MY NAME IS KAJAL I AM FROM ANOTHER SPACE WHICH DOES NOT EVEN EXIST</p>,
//     <h2>Byee</h2>

//     ],
//     document.getElementById('root'));

//?####################################################################################################

//! here we are using React.Fragment because it is better then div and arrays it consume less memory it is more faster and does not create any extra node under div and consuming more time.
// ReactDOM.render(

// <React.Fragment>
// in place of fragment we can use <>(syntactic sugar form) this also.
//     <>
//     <h1>HELLO WORLD!!</h1>
//     <p>MY NAME IS KAJAL I AM FROM ANOTHER SPACE WHICH DOES NOT EVEN EXIST</p>
//     <h2>Byee</h2>

//      </>,
//  </React.Fragment>
//     document.getElementById('root'));

//?#####################################################################################################

// !this is from babel in place of jsx we use this ,this is the another way of doinfg the same thing
// ReactDOM.render( /*#__PURE__*/React.createElement("h1", null, "HELLO WORLD!!"),
// document.getElementById('root'));

//?########################################################################################################

// ! THIS IS PURE JAVASCRIPT
// var h1=document.createElement("h1");
// h1.innerHTML= " its kj tutorial";
// document.getElementById("root").appendChild(h1);

//?##########################################################################################################

//! PROJECT {CHALLENGE 1}

// ReactDOM.render(

//         <>

//         <h1>MY NETFLIX PICK</h1><br></br>
//         <p>List Of 5 Best Series</p>
//         <ol>
//         <li>DARK</li>
//         <li>EXTRA CURRICULAM</li>
//         <li>MY HOLO LOVE</li>
//         <li>MY FIRST-2 LOVE</li>
//         <li>MR ROBOT</li>
//         </ol>
//         </>,
//         document.getElementById('root'));

//?#######################################################################################################################################

//! javascript Expression in React(how to use javascript under jsx):-by using {} this(in this curly braces we can only use expressions not statement(ex.-if ,else))

// const f1name="kajal jaiswal";
// ReactDOM.render(

//     <>
//     <h1>My Name Is {f1name} </h1>
//     <p>My Lucky Number Is {5+5}</p>
//     <p>My Lucky Number Is {Math.random()}</p>
//     </>,
//     document.getElementById('root')
// );

//?#########################################################################################################

//! Template literals in React

// const f1name="kajal ";
// const lname="jaiswal";

// ReactDOM.render(

//     <>
//     <h1>My Name Is {f1name} {lname} </h1>
//     {/* {TEMPLATE LITERALS ``(BACKTICK)} */}
//     <h1>{`My Name Is ${f1name} ${lname}` }</h1>
//     <h1>My Name Is {`${f1name} ${lname}`} </h1>
//     <h1>My Name Is {f1name +" "+lname} </h1>
//     <p>{`My Lucky Number Is ${5+5}`}</p>
//     <p>{`My Lucky Number Is ${Math.random()}`}</p>
//     </>,
//     document.getElementById('root')
// );

//?######################################################################################################

//! PROJECT {CHALLENGE 2}

// const name="kajal jaiswal";
// const currentDate=new Date().toLocaleDateString();
// const currentTime=new Date().toLocaleTimeString();

// ReactDOM.render(
//     <>
//     <h1>Hello,my name is {name}</h1>
//     <p>Current Date Is= {currentDate}</p>
//     <p>Current Time Is= {currentTime}</p>

//     </>,
//     document.getElementById("root")

// );

//?##############################################################################################################################

//! jsx attributes in React
// const name="kajal jaiswal";
// const img1="https://picsum.photos/210/300";
// const img2="https://picsum.photos/250/300";
// const img3="https://picsum.photos/230/300";
// const img4="https://picsum.photos/290/350";
// const link="https://www.universe.com/";

// ReactDOM.render(
//     <>
//     <h1 contentEditable>Hello,My name is {name}</h1>
//     <img src={img1} alt="randoimages"/>
//     <img src={img2} alt="randoimages"/>
//     <img src={img3} alt="randoimages"/>
//     <a href={link} target="_kajal">
//     <img src={img4} alt="randoimages"/>
//     </a>

//     </>,
//     document.getElementById("root")
// );

//?####################################################################################################################

//! CSS STYLING with inline css

// const name="kajal jaiswal";
// const img1="https://picsum.photos/210/300";
// const img2="https://picsum.photos/250/300";
// const img3="https://picsum.photos/230/300";
// const img4="https://picsum.photos/290/350";
// const link="https://www.universe.com/";

// const heading={
//     color: "black",
//     textTransform:"capitalize",
//     textAlign: 'center',
//     fontWeight: 'bold',
//     textShadow: '0px 2px 4px #ffe9c5',
//     margin: '70px 0',
//     fontFamily:'"Rubik Moonrocks", cursive'

// };
// ReactDOM.render(
//     <>
//     {/* <h1 className="heading">Hello,My name is {name}</h1> */}
//     <h1
//     style={heading}>Hello,My name is {name}</h1>
//     <div className='img_div'>
//     <img src={img1} alt="randoimages"/>
//     <img src={img2} alt="randoimages"/>
//     <img src={img3} alt="randoimages"/>
//     <a href={link} target="_kajal">
//     <img src={img4} alt="randoimages"/>
//     </a>
//     </div>

//     </>,
//     document.getElementById("root")
// );

//?##################################################################################################################################################

//! PROJECT (CHALLENGE 3)
// import React from 'react'; //to use jsx we use import react
// import ReactDOM from 'react-dom';
// import "./index.css";

// let currentDate=new Date(2022,6,26,19);
// currentDate=currentDate.getHours();
// let greeting="";
// const cssStyle={};

// if(currentDate>=1 && currentDate<12)
// {
//     greeting="Good Morning";
//     cssStyle.color="lightgreen";

// }
// else if(currentDate>=12 && currentDate<19)
// {
//     greeting="Good Afternoon";
//     cssStyle.color="skyblue";

// }
// else
// {
//     greeting="Good Night";
//     cssStyle.color="black";
// }

// ReactDOM.render(

//     <>
//     <div>

//     <h1>Hello Sir,<span style={cssStyle}>{greeting}</span></h1>

//     </div>
//     </>,
//     document.getElementById("root")
// );

//?##########################################################################################################################################

//! React COMPONENT USE

// import React from 'react'; //to use jsx we use import react
// import ReactDOM from 'react-dom';
// import App from './App';
// import "./index.css";
// import Heading from './Heading';
// import Para from './Para';
// import List from './List';

// ReactDOM.render(
//     <>

//     <App/>

//     </>,
//     document.getElementById("root")
// );

//?######################################################################################################################################################

// ! challenge 3 Project by using COMPONENT

// import React from 'react'; //to use jsx we use import react
// import ReactDOM from 'react-dom';
// import App from "./App";
// import "./index.css";

// ReactDOM.render(<App/>, document.getElementById("root"));

//?######################################################################################################################################

//! IMPORT EXPORT IN REACT JS

// import React from "react";
// import  ReactDOM  from "react-dom";
// import student, { favfood, myName,myNames } from "./App";
// import * as ques from "./App";

//   ReactDOM.render(
//     <>

//     <ol>
//         <li>KAJAL</li>
//         <li>{student}   </li>
//         <li>{favfood}</li>
//         <li>{myName()}</li>
//         <li>{myNames()}</li>quedefault  </ol>

//! Another way using * but prefer first one

//     <ol>
//         <li>KAJAL</li>
//         <li>{ques.default}   </li>
//         <li>{ques.favfood}</li>
//         <li>{ques.myName()}</li>
//         <li>{ques.myNames()}</li>

//     </ol>

//     </>,
//     document.getElementById("root")
//   );

//?##########################################################################################################

// import React from "react";
// import  ReactDOM  from "react-dom";
// import  App from "./App";
// ReactDOM.render(<App/>,document.getElementById('root'));

//?##########################################################################################################

//! PROPS IN REACT JS IMPLEMENTING ON NETFLIX PROJECT
//! PROJECT 4

// import React from "react";
// import  ReactDOM  from "react-dom";
// import Card from "./Card";
// import "./index.css";
// import Sdata from "./sdata";
//?#########################################################################################################
//?Another Method for doing the same thing

//! bY ARRAY MAP BEST AND EASIEST WAY here dont have txo write same thing again and again
// function ncard(val){
//   console.log(val);
//   return(

// <Card
// imgsrc={val.imgsrc}
// title={val.title}
// sname={val.sname}
// link={val.link}

// />
//   );
// }
// ReactDOM.render(
//   <>
//   <h1 className="heading_style">List of Top 3 Netflix Series of 2020</h1>

//   { Sdata.map(ncard)}
//       </>,

//     document.getElementById('root')

// );

// ReactDOM.render(
//     <>
//     <h1 className="heading_style">List of Top 3 Netflix Series of 2020</h1>
/* <Card
      imgsrc="https://wallpapercave.com/wp/wp4056410.jpg"
      title="A Netflix Orignal Series"
      sname="DARK"
      link="https://www.netflix.com/in/title/80100172"
     />
    <Card
     imgsrc="https://m.media-amazon.com/images/M/MV5BNGQxMDcyOTEtZWZkNi00NzgwLWEzNjQtZmFhMGY5ZGRlMTdiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
     sname="extra curricular"
     title="Netflix Original Series"
     link="https://www.netflix.com/in/title/80990668?source-35"
      />
    <Card
      imgsrc="https://wallpapercave.com/wp/wp1917154.jpg"
      sname="stranger Things"
      title="Netflix Original Series"
      link="https://www.netflix.com/in/title/80990668?source-35" */

/* //####################################################################################### */
/* //Another method for doing the same thing */
//! bY ARRAY METHOD

/* <Card
        imgsrc={Sdata[0].imgsrc}
        title={Sdata[0].title}
        sname={Sdata[0].sname}
        link={Sdata[0].link}


      /> */

/* <Card
        imgsrc={Sdata[1].imgsrc}
        title={Sdata[1].title}
        sname={Sdata[1].sname}
        link={Sdata[1].link}


      />
        <Card
        imgsrc={Sdata[2].imgsrc}
        title={Sdata[2].title}
        sname={Sdata[2].sname}
        link={Sdata[2].link}


      />
        <Card
        imgsrc={Sdata[3].imgsrc}
        title={Sdata[3].title}
        sname={Sdata[3].sname}
        link={Sdata[3].link}


      />
       <Card
        imgsrc={Sdata[4].imgsrc}
        title={Sdata[4].title}
        sname={Sdata[4].sname}
        link={Sdata[4].link}


      /> */

//       </>,

//     document.getElementById('root')

// );

//!FAT ARROW FUNCTION (=>)

// const myname=(a,b)=>a+b;

//Noramal Function(BOTH ARE SAME BUT IN FAT ARROW FUNCTION WE DONT HAVE RETURN ANYTHING AND IT IS MUCH BETTER THEN NORMAL FUNCTION)

// function myname(a,b){
//   return a+b;
// }

//!############################################################################################################

// import React from "react";
// import  ReactDOM  from "react-dom";
// import Card from "./Card";
// import "./index.css";
// import Sdata from "./sdata";

// WHY KEY?
// Keys help React to identify
// which items have changed
// (added/removed/re-ordered).
// To give a unique identity to
// every element inside the
// array,a key is required.

// ReactDOM.render(
//   <>
//   <h1 className="heading_style">List of Top 3 Netflix Series of 2020</h1>

//   { Sdata.map((val,index)=>{
//     console.log(index);
//     return(
//       <Card
//       key={val.id}
//       imgsrc={val.imgsrc}
//       title={val.title}
//       sname={val.sname}
//       link={val.link}

//  />
// );
// }
// )}
//  </>,

// document.getElementById('root')

// );
//?######################################################################################

// The map()method creates anew array with the results of calling a
// function for every array element.

// The map() method calls the provided function once for each element
// in an array,in order.

// Syntax
// array.map(function(currentValue,index,arr),thisValue)

// Argument
// currentValue
// index Optional.
// arr Optional.

//Description
// Required.The value of the current element
//The array index of the current element
//The array object the current element belongs to.
//! JAVASCRIPT CODE FOR ARRAY MAP (POWER OF MAP IMPORTANT)

/* <p id="showdata"></p>
<script>
const studentdata=[
{id:1,name:"vinod",degree:"MCS"},
{id:2,name:"Thapa",degree:"BCS"},
{id:3,name:"ThapaTechnical",degree:"CS"},
];
console.log(studentdata[2].name); 
const newdata=studentdata.map((cvalue)=> {
    return `My name is${cvalue.name}.My highest degree is${cvalue.degree}
`;
})
console.log(newdata);
document.getElementById('showdata').innerHTML=newdata;
</script> */

//?NETFLIX PROJECT FINAL FROM APP JSX THROUGH TOOLS AND COMPoNENTS
//? PROJECT 4 NETFLIX

// import React from "react";
// import  ReactDOM  from "react-dom";
// import "./index.css";
// import App from "./App";

// ReactDOM.render(<App/>,document.getElementById('root'));

//!  IF ELSE CONDITION IN NETFLIX PROJECT

// import React from "react";
// import  ReactDOM  from "react-dom";
// import "./index.css";
// import App from "./App";

//  ReactDOM.render(<App/>,document.getElementById("root"));

// //!SLOT MACHINE GAME
//?PROJECT 5 SLOT MACHINE

// import React from "react";
// import  ReactDOM  from "react-dom";
// import "./index.css";
// import App from "./App";

// ReactDOM.render(<App/>,document.getElementById("root"));

//! HOOKS IN REACTJS

//1: Hooks are the new feature introduced in the React 16.8 version.

//2: It allows you to use state and other React features without writing a class. Hooks are the functions which "hook into" React state and lifecycle features from function components.

//3: It does not work inside classes.

//4: Hooks should always be used at the top level of the React functions.

//5:Node version 6 or above. NPM version 5.2 or above

// import React from "react";
// import  ReactDOM  from "react-dom";
// import "./index.css";
// import App from "./App";

// ReactDOM.render(<App/>,document.getElementById("root"));

//! HOOKS PROJECT 6

// import React from "react";
// import  ReactDOM  from "react-dom";
// import "./index.css";
// import App from "./App";

// ReactDOM.render(<App/>,document.getElementById("root"));

//! SPREAD OPERATOR

// import React from "react";
// import  ReactDOM  from "react-dom";
// import "./index.css";
// import App from "./App";

// ReactDOM.render(<App/>,document.getElementById("root"));

// const fullName={
//   fname:"kajal",
//   lname:"kumari",

// };
// const biodata={
//   id:1,
//   ...fullName,
//   age:20,
//   gender: "female",
// };
// console.log(biodata);

//! LOGIN FORM COMPLETEING BY SPREAD OPERATOR

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));

//! KEEP NOTES PROJECT
// import React from 'react';
// import ReactDOM from 'react-dom';
// import KeepNote from './KeepNote';
// import './index.css';

// ReactDOM.render(
//     <KeepNote />, document.getElementById('root')
// );

//! CONTEXT API
// import React from "react";

// import ReactDOM  from "react-dom";
// // import CompA from "./CompA";
// import App1 from "./App1";

// ReactDOM.render(
//   <App1/>,document.getElementById("root")

// );

//! USE EFFECT HOOK IN REACT JS

// import React from "react";
// import ReactDom from "react-dom";
// import App1 from "./App1";

// ReactDom.render(
//   <App1/>,document.getElementById("root")
// );

//! REACT ROUTER IN REACTJS it is best because it provides cliet side rendering instead of server side rendering

// import React from "react";
// import ReactDom from "react-dom";
// import App1 from "./App1";
// import {BrowserRouter} from "react-router-dom";
// import "./index.css";

// ReactDom.render(

//   <App1/>
//   /* </BrowserRouter> */

//   ,document.getElementById("root")
// );
