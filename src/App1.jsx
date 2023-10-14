// import React, { createContext, Component } from "react";
// import CompA from "./CompA";



// const FirstName = createContext();
// const LastName = createContext();

// const App1 = () => {
//     return (
//         <>
//             <FirstName.Provider value={"kaju"}>
//                 <LastName.Provider value={"kumari"}>

//                 <CompA />
//             </LastName.Provider>
//         </FirstName.Provider>
        
//     </>
   
   
//  );
// };
// export default App1;
// export { FirstName,LastName };


//! REACT USE EFFECT

// import React,{useEffect, useState} from "react";

// const App1 =()=>{
//   const [num,setNum]=useState(0);
//   const [nums,setNums]=useState(0);
//   useEffect(()=>{
//    alert("i m Clicked");
//    console.log("i m clicked");
//   },[num]);
//   return(
//     <>
//     <button onClick={()=>{
//       setNum(num+1);
//     }}>Click ME{num}</button>
//     <br/>
//     <button onClick={()=>{
//       setNums(nums+1);
//     }}>Click ME{nums}</button>
//     </>
//   )
  
// };
// export default App1;

//! REACT ROUTER IN REACTJS

// import React from "react";
// import { Route,Routes } from "react-router-dom";
// import About from "./About";
// import Contact from "./Contact";

// const App1=()=>{
//     return(
//         <>
//         <About/>
//         <Contact/>
   
//     </>
//     )
// };
// export default App1;
