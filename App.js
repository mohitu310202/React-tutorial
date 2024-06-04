var parent = React.createElement("div", {id:"parent"},
    [React.createElement("div",{id:"child"},
    [React.createElement("h1",{},"hi i am in h1 tag"),
     React.createElement("h2",{},"hi i am in h2 tag")]
    ),
    React.createElement("div",{id:"child2"},
    [React.createElement("h1",{},"hi i am in h1 tag"),
     React.createElement("h2",{},"hi i am in h2 tag")]
    )]
);




// var heading = React.createElement("h1", 
// { id: "heading", xyz: "abc" }, 
// "Hello World from React!!!");
var root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);