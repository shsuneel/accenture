TASK 1
    Task1.js
TASK 2
    Task2.js
Task 3:
 Task3.js
    •	What data do you need and how would you design the APIs?
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


    • How do you structure your UI components?
        Container Components
    	UserWidget
    	UserDetailsWidget
        UserCard

    Presentational Components
    	Image
    	Paragraph
    	Card
    	Loader

 •How would you structure your code?
 src
    Components
    Image
    Paragraph
    Card
    Loader
Assets
    Images
    Icons
    fonts
Pages
    Users
	Userdetails
Containers
    UserWidget
    UserDetailsWidget
    UserCard
Services
	Get
	POST
GlobalStyles
Theme
	APP THEME

Public
 Index.html

 •How might SPA/React affect this?
 Initial page load will be slower 
as it will need multiple API calls to load the list of users.
Lazy loading/ pagination(server side/clint side) can be implement depending on volume of users data based on scrolling etc
We can use SSR




