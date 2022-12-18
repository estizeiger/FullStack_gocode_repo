const Btn = React.createElement('button', {onClick: ()=> console.log("clicked")}, "button")
const Div = React.createElement('div', {onClick: ()=> alert("clicked")}, "my div")
const Input = React.createElement('input', {placeholder: "write here"})
const H1 = React.createElement('h1',{} , "h1")

ReactDOM.render(Btn, document.getElementById('app'));
// ReactDOM.render(Div, document.getElementById('app'));
// ReactDOM.render(Input, document.getElementById('app'));
//ReactDOM.render(H1, document.getElementById('app'));