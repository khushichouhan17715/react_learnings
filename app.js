const heading = React.createElement('h1',{ id:"heading"}," hello world again ❤️");
                             //tag name  ,attribute (objects), children(if multiple this make it a list or array)

const root = ReactDOM.createRoot(document.getElementById("root"));          
 console.log(heading);   //will give object
//   root.render(heading);     //will render the html (by converting object in html) 




// -------------------- 1)
// <div id="parent">
// <div id="child">
//        <h1>i am an h1 tag</h1>
//     </div>
// </div> 
//    react.createlement creates object not html  
// reactElement(object)=> HTML (brower understands)

const parent = React.createElement(
    "div",
    {id:"parent"},
     React.createElement(
        "div",
        {id:"child"},
         React.createElement("h1",{},"i am an h1 tag")
         )
         )
// root.render(parent);    // reactElement(object)=> HTML (brower understands)
// console.log(parent);   //will give object at console



// ------------------  2)
// <div id="p">
// <div id="c">
//        <h1>i am an h1 tag</h1>
//  <h1>i am an h1 tag</h1> 
//  <h1>i am an h1 tag</h1>
//     </div>
// </div> 
//    react.createlement creates object not html  
// reactElement(object)=> HTML (brower understands)

const p = React.createElement(
"div",
{ id:"p"  },
 React.createElement(
 "div",
 {id:"c"},
 [ React.createElement("h1",{},"i am an h1 tag"), 
 React.createElement("h1",{},"i am an h1 tag"),
  React.createElement("h1",{},"i am an h1 tag"), 
] )
     )
// root.render(p);   // reactElement(object)=> HTML (brower understands)
// console.log(p);   //will give object at console





// ------------------  3)
// <div id="pp">
// <div id="cc">
//        <h1>i am an h1 tag</h1>
//        <h1>i am an h1 tag</h1> 
//        
//     </div>
// </div>
// <div id="cc"> 
//        <h1>i am an h1 tag</h1>
//        <h1>i am an h1 tag</h1> 
//        
//     </div>
// </div> 
//    react.createlement creates object not html  


const pp = React.createElement(
    "div",
    { id:"pp"  },
    [ React.createElement("div", {id:"cc"},
    [ 
        React.createElement("h1",{},"i am an h1 tag"), 
        React.createElement("h1",{},"i am an h1 tag"), 
    ]
      ),
     React.createElement("div", {id:"cc"},
     [ 
        React.createElement("h1",{},"i am an h1 tag"), 
        React.createElement("h1",{},"i am an h1 tag"),
     ] )
    ]
         )
    root.render(pp);  // reactElement(object)=> HTML (brower understands)
    console.log(pp);   //will give object at console
     