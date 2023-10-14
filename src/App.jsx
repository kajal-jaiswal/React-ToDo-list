// import React from "react";
// import Heading  from "./Heading";
// import Para from "./Para";
// import List from "./List";

// function App(){
//     return  (
//     <>
//        <Heading/>
//       <Para/>
//        <List/>
//     </>
//     );

// }
// export default App;

//?#################################################################################################################

//! 3rd Challenge by using component

// import React from "react";

// function App()
// {
//     let currentDate=new Date(2022,6,26,19);
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
// return(
// <>
// <div>

// <h1>Hello Sir,<span style={cssStyle}>{greeting}</span></h1>

// </div>
// </>

// );

// }
// export default App;

//?##################################################################################################

//! Import export in REACTJS
// const student='kajal';
// const favfood="pasta";
// function myName()
// {
//     let name="kaju";
//     return name;
// }
// function myNames()
// {
// let Fullname="kajal";
//     return 'kajal';
// }
// export default student;

// export{favfood,myName,myNames};

//?##########################################################################

//! CALCULATOR BY USING COMPONENT

// import React from "react";
// import {add,sub,mult,div} from "./Calc";

// function App(){
//     return(
//         <>
//   <h1>HELOO THERE IS IS A CALCULATOR MADE BY KJ</h1>
//   <ul>
//     <li>ADDITION OF TWO NUMBER IS {add(34,5)}</li>
//     <li>SUBSTRACTION OF TWO NUMBERS IS {sub(57,4)}</li>
//     <li>MULTIPLICATION OF TWO NUMBERS IS {mult(45,6)}</li>
//     <li>DIVISION OF TWO  NUMBERS IS {div(10,78)}</li>

//   </ul>

//   </>

//     );

// }
// export default App;
//!#############################################################################
//! NETFLIX PROJECT

// import React from "react";
// import Card from "./Card";
// import Sdata from "./sdata";

// const App =() =>(
//     <>

// <h1 className="heading_style">List of Top 3 Netflix Series of 2020</h1>

// { Sdata.map((val,index)=>{
//   console.log(index);
//   return(
//     <Card
//     key={val.id}
//     imgsrc={val.imgsrc}
//     title={val.title}
//     sname={val.sname}
//     link={val.link}

// />
// );
// }
// )}
// </>
// );
// export default App;

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//! IF ELSE CONDITION and TERNIARY OPERATION IN NETFLIX PROJECT

// import React  from "react";
// import Netflix from "./Netflix"
// import Amazon from "./Amazon";

// const favseries = "amazon";

// const Favs = () => {

// if (favseries === "netflix") {

// return <Netflix />;
//  }
//  else {

// return <Amazon />;
//  }
// };

// const App = () => (

// <>

// <h1 className="heading_style"> List of top 5 Netflix Series in 2020</h1>

// {/* <Favs /> */}
// {favseries === "netflix" ? <Netflix/> : <Amazon/>}

// </>
// );
// export default App;

//! SLOT MACHINE GAME IN RAECTJS

// import React from "react";
// const SlotM=(props)=>{
//     // let x="😉";
//     // let y="😉";
//     // let z="😉";
//     // let z="🤡";

//     let x=props.x;
//     let y=props.y;
//     let z=props.z;

//     if((props.x===props.y)&&(props.y===props.z)){
//     // if((x===y)&&(y===z)){j
//         return(
//             <>
//             <div className="slot_inner">
//             <h1 className="heading_style">

//                 {x} {y} {z}<br/>
//                 THIS IS MATCHING!!

//             </h1>

//             <hr/>

//             </div>

//             </>
//         );
//     }
//     else{
//         return(
//             <>
//             <div className="slot_inner">
//             {/* <h1 className="heading_style"> */}
//               <h1>
//                 {x} {y} {z}<br/>
//                 THIS IS NOT MATCHING!!

//             </h1>

//             <hr/>

//             </div>

//             </>)

//     }

// };

// const App=()=>{
//     return (
//         <>
//         <h1 className="heading_style">
//         🎰 Welcome To <span style={{fontWeight:'bold'}}> Slot Machine Game</span>🎰

//         </h1>
//         <div className="heading_style">
//         <SlotM x="😉" y="😉" z="😉"/>
//         <SlotM x="😗" y="😗" z="😗"/>
//         <SlotM x="😁" y="🤕" z="😁"/>
//         <SlotM x="🤣" y="😇" z="😶‍🌫️"/>
//         </div>

//         </>
//     );
// };
// export default App;

//?#########################################################################################################################################

//! HOOKS IN REACTJS

//1: Hooks are the new feature introduced in the React 16.8 version.

//2: It allows you to use state and other React features without writing a class. Hooks are the functions which "hook into" React state and lifecycle features from function components.

//3: It does not work inside classes.

//4: Hooks should always be used at the top level of the React functions.

//5:Node version 6 or above. NPM version 5.2 or above

//! USESTATE IS FUNCTION WHICH RETURN AN ARRAY WITH TWO ITEMS.(CURRENTDATA,UPDATEDDATA)

// import React, { useState } from "react";

// const App =() => {
//     const state=useState();
// console.log(state);

// const[count,setCount]=useState(0);

// const IncNum =()=>{
//     setCount(count+1);
// setCount(count-1);
// setCount(count*2);

// console.log("clicked" +  count++);
// };
//     return (

//         <>
//             <h1>{count}</h1>
//             <button onClick={IncNum}>Click Me</button>
//         </>
//     );

// };
// export default App;

//! HOOKS CHALLLENGE NUMBER 6

// import React, { useState } from "react";

// const App =() => {
//     let newTime=new Date().toLocaleTimeString();

//     const[ctime,setCtime]=useState(newTime);

//     const UpdateTime=()=>{
//         newTime=new Date().toLocaleTimeString();
//         setCtime(newTime);

//     }

//     return (

//         <>
//             <h1>{ctime}</h1>
//             <button onClick={UpdateTime}>GET TIME</button>
//         </>
//     );

// };
// export default App;

//! MINI PROJECT DIGITAL CLOCK
// import React, { useState } from "react";

// const App=() =>{
//     let time=new Date().toLocaleTimeString();
//     const[ctime,setCtime]=useState(time);

//     const UpdateTime=()=>{
//         time=new Date().toLocaleTimeString();
//         setCtime(time);
//     };
//     setInterval(UpdateTime,1000)

//     return (
//         <>
//             <h1>{ctime}</h1>

//         </>
//     );

// };

// export default App;

//! HANDling EVENTS IN REACTJS

// import React, { useState } from "react";

// const App=()=>{
//     const purple="#8e44ad";
//     // const purple="yellow";
//     const[bg,setBg]=useState(purple);
//     const[name,setName]=useState("click Me");
//     const bgChange=()=>{
//         // console.log("clicked");
//         let newBg="#34495e";
//         setBg(newBg);
//         setName("AWW!!😊")

//     };
//     const bgBack=()=>{
//         setBg(purple);
//         setName("Hii👋")
//     }
//     const bgHack=()=>{
//         setBg("red");
//         setName("BYE👋")
//     }
//     const bgTack=()=>{
//         setBg("green");
//         setName("LEAVE👋")
//     }
//     return(
//         <>
//         <div style={{backgroundColor:bg}} >
//             <button onClick={bgChange} onDoubleClick={bgBack} onMouseEnter={bgHack} onMouseLeave={bgTack} >{name}</button>

//             </div>
//         </>

//     )
// }
// export default App;

//! REACT FORMS PROJECT

// import React, { useState } from "react";
// const App = () => {
//     const[name,setName]=useState("");
//     const[fullName,setFullName]=useState();
//     const inputEvent=(event)=>{
//         console.log(event.target.value);
//         setName(event.target.value);
//     }
//     const onSubmit=()=>{
//         setFullName(name);
//     }
//     return(
//         <>

//             <div>
//                 <h1>HELLO DEAR{fullName}</h1>
//                 <input type="text" placeholder="Enter your name"
//                    value={name}  onChange={inputEvent} />
//                 <button onClick={onSubmit}>Click Me👍</button>
//             </div>

//         </>
//     );
// };
// export default App;

//! REACT FORM PART 2
// import React, { useState } from "react";
// const App = () => {
//     const[name,setName]=useState("");
//     const[lastName,setLastName]=useState('');
//     const[fullName,setFullName]=useState("");
//     const[lastNamenew,setLastNameNew]=useState("");

//     const onSubmit=(event)=>{
//         event.preventDefault();
//         setFullName(name);
//         setLastNameNew(lastName);
//     }
//     const inputEvent=(event)=>{
//         console.log(event.target.value);
//         setName(event.target.value);
//     }

//     const inputEventTwo=(event)=>{
//         setLastName(event.target.value);
//     }
//     return(
//         <>
//         <form onSubmit={onSubmit}>

//             <div>
//                 <h1>HELLO {fullName} {lastNamenew}</h1>
//                 <input
//                  type="text"
//                  placeholder="First name"
//                  onChange={inputEvent}
//                  value={name}
//                  />
//                 <input
//                  type="text"
//                  placeholder="Last name"
//                  onChange={inputEventTwo}
//                  value={lastName}
//                  />
//                 <button type="submit">Submit Me👍</button>
//                  {/* <button type="submit" onClick={onSubmit}>Submit Me👍</button>  */}
//             </div>
//             </form>

//         </>
//     );
// };
// export default App;

//! HANDLING COMPLEX MULTIPLE INPUT FORM STATES IN REACT JS
//! form PART 3
// import React, { useState } from "react";
// const App = () => {
//   const [fullName, setfullName] = useState({
//     fname: "",
//     lname: ""

//   });
//   const inputEvent = (event) => {
//     console.log(event.target.value);
//     console.log(event.target.name);           // by doing this name we are getting all things related to name like:-fname here

//     const value = event.target.value;
//     const name = event.target.name;

//     setfullName((preValue) => {
//       console.log(preValue)                       // prevalue can also get the previous value here,due to prevalue setfullname can also get fnam and lname
//       if (name === 'fname') {
//         return {
//           fname: value,
//           lname: preValue.lname
//         }
//       } else if (name === 'lname') {
//         return {
//           fname: preValue.fname,
//           lname: value
//         }
//       }

//     })
//   };

//   const onSubmit = (event) => {
//     event.preventDefault();          // because of this fucntion, default behaviour form tag is prevented i,e:refreshing every time while submitting
// alert("FORM SUBMITTED");
//   }
//   return (
//     <>

//         <form onSubmit={onSubmit}>

//           <h1>Hello {fullName.fname} {fullName.lname}</h1>

//           <input type='text'
//             placeholder="Enter Your Name"
//             onChange={inputEvent}
//             name='fname'
//             value={fullName.fname}
//           ></input>

//           <input type='text'
//             placeholder="Enter Your LastName"
//             name="lname"
//             onChange={inputEvent}
//             value={fullName.lname}
//           ></input>

//           <button type="submit" >Submit</button>
//         </form>

//     </>
//   )
// }
// export default App;

//! REACTJS CHALLENGE NUMBER 7 FORM

// import React, { useState } from "react";
// const App = () => {
//   const [fullName, setfullName] = useState({
//     fname: "",
//     lname: "",
//     email: "",
//     phone: "",

//   });
//   const inputEvent = (event) => {
//     console.log(event.target.value);
//     console.log(event.target.name);           // by doing this name we are getting all things related to name like:-fname here

// const value = event.target.value;
// const name = event.target.name;

//     const { value, name } = event.target;           // object destructuring similar to above (value = event.target.value) and (name = event.target.name;)

//     setfullName((preValue) => {
// consol-sme.log(preValue)                       // prevalue can also get the previous value here,due to prevalue setfullname can also get fnam and lname
//       if (name === 'fname') {
//         return {
//           fname: value,
//           lname: preValue.lname,
//           email: preValue.email,
//           phone: preValue.phone
//         }
//       } else if (name === 'lname') {
//         return {
//           fname: preValue.fname,
//           lname: value,
//           email: preValue.email,
//           phone: preValue.phone
//         }
//       }
//       else if (name === 'email') {
//         return {
//           fname: preValue.fname,
//           lname: preValue.lname,
//           email: value,
//           phone: preValue.phone
//         }
//       }
//       else if (name === 'phone') {
//         return {
//           fname: preValue.fname,
//           lname: preValue.lname,
//           email: preValue.email,
//           phone: value
//         }
//       }

//     });
//   };

//   const onSubmit = (event) => {
//     event.preventDefault();          // because of this fucntion, default behaviour form tag is prevented i,e:refreshing every time while submitting
//     alert("FORM SUBMITTED");
//   }
//   return (
//     <>

//       <form onSubmit={onSubmit}>

//         <h1>Hello {fullName.fname} {fullName.lname}</h1>
//         <p>{fullName.email}</p>
//         <p>{fullName.phone}</p>

//         <input type='text'
//           placeholder="Enter Your Name"
//           onChange={inputEvent}
//           name='fname'
//           value={fullName.fname}
//         ></input>

//         <input type='text'
//           placeholder="Enter Your LastName"
//           name="lname"
//           onChange={inputEvent}
//           value={fullName.lname}
//         ></input>

//         <input type='email'
//           placeholder="Enter Your Email"
//           name="email"
//           onChange={inputEvent}
//           value={fullName.email}
//         ></input>

//         <input type='number'
//           placeholder="Enter Your Phone Number"
//           name="phone"
//           onChange={inputEvent}
//           value={fullName.phone}
//         ></input>

//         <button type="submit" >Submit</button>
//       </form>

//     </>
//   )
// }
// export default App;

//! SPREAD OPERAtOR "..."(THREE DOTS)

//! THE SYNTAX IS THREE DOTS FOLLOWED BY THE ARRAY (OR ITERABLE*).
//!IT EXPANDS THE ARRAY INTO INDIVIDUALS ELEMENTS.
//!SO< IT CAN BE USED TO EXPAND THE ARRAY IN A PLACES WHERE ZERO OR MORE ELEMENTS ARE EXPECTED.

//! FINAL SIMPLIFIED LOGIN FORM

// import React, { useState } from "react";
// const App = () => {
//   const [fullName, setfullName] = useState({
//     fname: "",
//     lname: "",
//     email: "",
//     phone: "",
//     course: "",
//   });
//   const inputEvent = (event) => {
//     console.log(event.target.value);
//     console.log(event.target.name); // by doing this name we are getting all things related to name like:-fname here
//     const { value, name } = event.target; // object destructuring similar to above (value = event.target.value) and (name = event.target.name;)
//     setfullName((preValue) => {
//       console.log(preValue); // prevalue can also get the previous value here,due to prevalue setfullname can also get fnam and lname
//       return {
//         ...preValue,
//         [name]: value,
//       };
//     });
//   };

//   const onSubmit = (event) => {
//     event.preventDefault(); // because of this fucntion, default behaviour form tag is prevented i,e:refreshing every time while submitting
//     alert("FORM SUBMITTED");
//   };
//   return (
//     <>
//       <form onSubmit={onSubmit}>
//         <h1>
//           Hello {fullName.fname} {fullName.lname}
//         </h1>
//         <p>{fullName.email}</p>
//         <p>{fullName.phone}</p>
//         <p>{fullName.course}</p>

//         <input
//           type="text"
//           placeholder="Enter Your Name"
//           onChange={inputEvent}
//           name="fname"
//           value={fullName.fname}
//         ></input>

//         <input
//           type="text"
//           placeholder="Enter Your LastName"
//           name="lname"
//           onChange={inputEvent}
//           value={fullName.lname}
//         ></input>

//         <input
//           type="email"
//           placeholder="Enter Your Email"
//           name="email"
//           onChange={inputEvent}
//           value={fullName.email}
//         ></input>

//         <input
//           type="number"
//           placeholder="Enter Your Phone Number"
//           name="phone"
//           onChange={inputEvent}
//           value={fullName.phone}
//         ></input>
//         <input
//           type="text"
//           placeholder="Enter Your course"
//           name="course"
//           onChange={inputEvent}
//           value={fullName.course}
//         ></input>

//         <button type="submit">Submit</button>
//       </form>
//     </>
//   );
// };
// export default App;

//! COMPLETE TODO LIST PROJECT BY ME USING REACTJS

import React, { useState } from "react";
import ToDoList from "./ToDoList";

const App = () =>{
  const [inputList,setInputList]=useState("");

  const [items,setItems]=useState([]);                       //! so here we have the problem that how another item a item will be stored so we created a useState array

  const eventItem = (event) =>{
    setInputList(event.target.value);
  }

  const listOfItems = () =>{

    setItems( (oldItems)=>{
      return[...oldItems,inputList];

    });
    setInputList('');
//! here we are emptying the placeholder after clicked and item added
  }

  const deleteItem = (id) =>{
    console.log('deleted');

    setItems( (oldItems) =>{
      return oldItems.filter((arrElem,index) =>{
        return index !== id;
      });
    });

  };

  return(
    <>
    <div className="main_div">
      <div className="center_div">
        <br/>
        <h1>Kjl's ToDo List</h1>
        <br/>
        <input type='text' placeholder="Add an Item" value={inputList} onChange={eventItem}></input>
        <button onClick={listOfItems}> + </button>
        <ol>
           {/* <li>{inputList}</li>  */}

         { items.map( (itemVal,index)=> {
            return <ToDoList                        // A component here
            text={itemVal}
            key={index}
            id={index}
            onSelect={deleteItem}
            />
          })}
          </ol>
      </div>
    </div>

    </>
  )
}

export default App;

//! INCREAMENT DECREAMENT PROJECT WITH MATERIAL UI ICONS

// import React, { useState } from "react";

// const App = () => {
//     const [val, setVal]=useState(0);

//     const increVal = () =>{
//         console.log('clicked');
//         setVal(val+1);

//       }
//       const decreVal = () =>{
//           console.log('clicked');
//           if( val>0)
//           {
//             setVal(val-1);
//             }
//             else {
//                 alert(" Zero limit reached");
//               }
//             }

//             return (
//                 <>
//                   <div className="main_div">
//                     <div className="center_div">

//                       <h1>{val}</h1>
//                       <button className="button1" onClick={increVal}> Increm</button>
//                       <button className="button2" onClick={decreVal}> Decrem</button>
//                     </div>

//                   </div>
//                 </>
//               )
//             }

//             export default App;

//! NPM ( Node Package Manager)
//1.npm is the world's largest Software Registry.
//2.The registry contains over 800,000 code packages.
//3.Open-source developers use npm to share software.
//4.It's full form is Node Package Manager

//! SPM(SOFTWARE PACKAGE MANAGER
//1.all npm packages are defined in files called package.json.
// ex. npm init
//2.the content of package.json must be written in JSON.
//3.At leastbtwo fields must be present in the definition file: name and version.

//! CLI(command line client)

// 1.npm includes a CLI that can be used to download and install software.
// 2.npm can manage dependencies

// import React from "react";
// import Clock from "react-digital-clock";

// const ToDoLists=()=>{
// <Clock />;
// };
// export default ToDoLists;
