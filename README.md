# Employee_Management

# Required technologies :
 * For BackEnd : Spring-Boot, MySQL,POSTMAN;
 * For FrontEnd: React.Js.

# To create Back-End first:
Step 1: create a project name , Group, and dependencies by Spring-boot/ eclipse.
step 2: check the .POM file to see all dependencies.
step3: In src\main\java\net\javaguides\springboot define different packages and classes according to module requirements.
step 4: To connect MySQL DB put the url and user_name, pass_word in Application.propertis.
step 5: After create module package and class for Employee_create, Employee_View_ALL,Employee_View_SingleEmployee, Employee_Update, Employee_Delete 
        
        step 1: make structure of each package 
        step 2: after create controller model make a Database in MySQL and put the database_name in Application.properties url ,like "http://localhost:3306/{database_name}
        
step 6: after successfully create all, run  Spring-boot, it will directly fetch MySQL database and it will automatically create table for the assigned Database.
Step 7: take a note for the spring-boot local-server where we will get the database details later.
step 8 : You can access the Methods like GET, PUT, DELETE and create database in POSTMAN application by providing the http_url
          
         step 1: To create database put the url- http://localhost:8080/api/amployees and use POST method. and set the body structure as JSON 
                 and insert the body as same format only.
         step2: To View the DB put the url-http http://localhost:8080/api/amployees  use GET method
         step3: To View the single_Employee put the url-http http://localhost:8080/api/amployees/:id  use GET method 
         step3: To Update the single_Employee put the url-http http://localhost:8080/api/amployees/:id use PUT method set the body structure as JSON 
                 and insert the body as same format only.
         step4: To Delete the single_Employee put the url-http http://localhost:8080/api/amployees/:id use DELETE method.
         
         
    ***** After successfully create the Backend , moving forward with Frontend part below:
     
step 1: create a react app by using npm create-react-app {APP_Name}
step 2: install required dependencies accordingly.
step 3: create necessary folder structure to build UI.
step 4: use Axios and set url: http://localhost:8080/api/employees to fetch data of DB.
step 5: ADD css according suitable design, use bootstrap for betterment.
step 6: create API_url for individual functions.
step 7: run the react APP by npm start. 

*** then an Error is be shown that after put details no functionlity will happen so set and " @CrossOrigin(origins = "http://localhost:3000") " in the controller 
    so that the data can be send for database successfully. ***
    
    For further process: 
     Now you can easily access each and every functionilty and use the application for Employee_Management_System.
     
     
                                                             **********************  THANk YOU ***********************
         
         
        
