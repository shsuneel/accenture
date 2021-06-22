### TASK 1
    Task1.js
### TASK 2
    Task2.js
### Task 3:
    Task3.js
 What data do you need and how would you design the APIs?

    Api design will be restful
    We can have 2 api
    1) GET: /users
    2) GET: /users:id
    
    contract : /users
        {
            "data": [
                {
                    "id": 1,
                    "name": "John Doe",
                    "imgUrl": "/images/joendoe",
                    "email": "john.doe@accenture.com"
                },
                {
                    "id": 2,
                    "name": "Jane Doe",
                    "imgUrl": "/images/janedoe",
                    "email": "jane.doe@accenture.com"
                },
                {
                    "id": 3,
                    "name": "Adam Doe",
                    "imgUrl": "/images/adamdoe",
                    "email": "adam.doe@accenture.com"
                },
                {
                    "id": 4,
                    "name": "Mountion Doe",
                    "imgUrl": "/images/mountaindoe",
                    "email": "mountain.doe@accenture.com"
                }
            ]
        }

        .contract : /users/1
        {
            "data": {
                "id": 1,
                "name": "John Doe",
                "imgUrl": "/images/joendoe",
                "email": "john.doe@accenture.com",
                "about": "This is just a user description",
                "age": 11,
                "dob": "11/11/2000"
            }
        }
   ##### NOTE: Haven’t considered error handling in case of API failure as the design provided for happy path scenarios


   How do you structure your UI components?

     Container Components
       UserWidget
       UserDetailsWidget
       UserCard

     Presentational Components
       Image
       Paragraph
       Card
       Loader

  How would you structure your code?

    src
      /Components
      /Image
      /Paragraph
      /Card
      /Loader
    Assets
      /Images
      /Icons
      /fonts
    Pages
      /Users
      /Userdetails
    Containers
      /UserWidget
      /UserDetailsWidget
      /UserCard
    Services
      /Get
      /POST
    GlobalStyles
      /Theme
      /APP THEME
    Public
      /Index.html

How might SPA/React affect this?

    Initial page load will be slower as it will need multiple API calls to load the list of users. 
    Lazy loading/ pagination(server-side/client-side) can be implemented depending on the volume 
    of users data based on scrolling etc. 
    We can use SSR
### TASK 4
    Task4.js
### TASK 5
    Task5.js
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


