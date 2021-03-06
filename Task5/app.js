import React, { useEffect, useState } from 'react';

const css = {
  fontSize: "12px" //PR Comments:  Use rem  instead of px
}

function CarsFuuel(props){ //PR Comments:  Use ES6 arrow function and return JSX directly
  return <h1 style={css}>Car's fuel consumed: {props.children}</h1>
}

function Alert(props){ //PR Comments:  Use ES6 arrow function and return JSX directly
  const fuel = props.fuel; //PR Comments:  Destruct in function arguments  {{fuel}}. Add JS docs
  const [state, setState] = useState(0);

  useEffect(() => {
    if (fuel > 1200){ //PR Comments:  do not use hardcoded values
      setState(1);
    }
  },[fuel]);

  if (state){
    return <h2 style={{color:"red"}}>Alert</h2>;
  } else { //PR Comments:  No need use else here, directly return 
    return <h2>All is fine</h2>;
  }
}
//PR Comments:  Add JSdocs convert to functional components
class App extends React.Component {
  constructor(props) {
    super(props);
    
    //PR Comments:  We declare the state
    this.state = {                       
      x: 1,  //PR Comments:  do use  proper  variable naming  more descriptive
      f: 0
    }
  }

  updateCoordinates() {
    setInterval(()=> {this.setState(prevState => ({x: prevState.x + 1, f: 1 + prevState.f + prevState.x * 10}))}, 1000)
  }

  componentDidMount(){
    this.updateCoordinates();
  }

  render() {
    var x1 = this.state.x; //PR Comments:  Use const instead of var and destruct
    var fuel = this.state.f;

    return (
      <div>
        <h1>Position - {x1}</h1> // PR Comments:  Use literals
        <CarsFuuel>{fuel}</CarsFuuel> // PR Comments:  CasFuuel typo 
        <Alert fuel={fuel}/> 
      </div>
    );
  }
}

export default App;
