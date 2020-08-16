# team06
CSC309 Summer 2020 Team Project
==============
Heroku Link: https://cryptic-temple-31591.herokuapp.com/
#Phase 2 Back End:
Server: Express
Database: Mongodb Atlas
'mongodb+srv://mongoUser:dbpassword123@cluster0.mfqpv.mongodb.net/mongoUser?retryWrites=true&w=majority'

### Routes:

Users:
GET '/users/'
Get all user information
 
POST '/users/changephoneEmail'
body: 	{
	email : string,  new backup email
	phone: int, new phone number
} 
Change the email and phone number of the userId
 
GET '/users/get_profile/:id'
Get the the user profile by id
 
### Login:

POST ‘/user’
body: {
username: String (required),
password: Stirng (required), 
level: Int, 
realName: String, 
location: String, 
gender: String, 
age: String, 
phone: String, 
mainmail: String, 
needVerify: Bool, 
Certification1: String, 
Certification2: String
}
sign up with fields above, username and password is required. In level, 1 stands for user, 2 stands for admin), 3 stands for doctor.

POST‘/user/login’
body: {
usernameL String, 
password: String
)
log in with username and password

GET ‘/user/logout’
use this route to remove the session

GET ‘/user/check-session’
check if a use is logged in on the session cookie


 
### Doctors: 

GET /doctors/'
Get all doctors

GET ‘/doctors/doctorlst/:expertise’
Get all doctors with expertise

POST ‘/doctors/expertise/:id’
body: {
expertise: String
}
add expertise to the doctor with id

GET ‘/doctors/:id’
Get the doctor with id 

DELETE ‘/doctors/:id’
delete the doctor with id from the database

PATCH ‘/doctors/:id’
body: {
name: String, 
yearL:  String
}
change the doctor 

POST ‘/doctors/’
body: {
to: Stirng (userId), 
time: String, 
from: String (patientId), 
real: String (realName), 
name: String (username),
dis: String (description)
}

add an appointment to the doctor with userId = to as well as the appointment time, patientId, patients’ real name, patients’ username, and appointment description.

POST ‘/appointment/get’
body : {
id: String
}
get the appointment with id


GET "/appointment/change/:index/:id/:TFN"
change the state of the appointment with the index in the user with id. TFN should be 0 1 or 2, which represents true(approved), false(ending) or null(declined) for appointment status
 
 






'/patients',authenticate, patientsRouter
POST “/patients/:id”
Body :	{
            "firstName": String,
            "lastName":String,
            "DOB": String,
            "maritalStatus": String,
            "problems":[
                {"year":String, "reason":String, "ukey": int }
            ],
            "drugs":[
                {"name":String, "strength":String, "frequency":String, "ukey":int}
            ],
            "allergies":[
                {"drugName":String, "reaction":String, "ukey":int}
            ]
        }
Update the health history of a user.
 
GET “/patients/:id”
Get the health history of a user.
 
POST “/patients/”
Body :	{
id : patient id,
passedNorT : boolean
}
Get the current appointments of the user if passedNorT is true.
Get passed appointments of the user if passedNorT is false.
 
 
### User
'/superusers',authenticate, superusers
GET “/superusers/” 
Get all users
 
PATCH “/superusers/”
body:     { 
userid: string,
	status: string, state to set
}
Change user’s state to the state in body
 
 
GET “/superusers/fish/change/:id/:TFN”
id: user’s objectid
TFN : 0-True 1-False 2-null
set the needVerify state according to TFN 
 
### Ariticles: 
POST "/articles/"  
body: { title:"", content:"", img:""} 
return article document
 
GET "/articles/" 
Get all articles
 
GET "/articles/:id" 
Get article by id
 
 
### Feed:
 
GET "/feed/" 
Get all feedbacks
 
GET "/feed/:id" 
Get feedback by id
 
POST "/feed/" 
Post a feedback by state
 

Feedback structure:
{"_id":object id,"open":boolean,"description":String,"email":String,"__v":0}

User/doctor structure:
{"_id":object id
,"status":"Active",
"img": string url of the avatar
,"expertise":[] list of doctors expertise
,"username":String
,"password" encryption String: ,
"level": int,  1: normal user 2: admin 3:doctor
THE ONLY WAY GETTING A ACCOUNT LEVEL 2 is editing database
"realName":String,
"location":String,
"gender": String
,"age": int,
"phone":int, can be changed in profile page
"mainmail":String, 
"backupemail":String, same as main email on signup, can be changed in profile page
"needVerify":true/false/null, If true then the doctor need to be verified
"Certification1": String , a url of doctor’s first certification, will be “not defined” if the user is level 1
"Certification2":String , a url of doctor’s second certification, will be “not defined” if the user is level1
"patients":[], list of appointments
"chatList":[], list of chat messages
"__v":0}




Article structure
{"_id": Object id,
"likes":[Object id], array of user id who liked it
"title": String,
"content": String, 
"comments": [Comment: {
“_id”: Object id,
“img”: String,
“userName”: “Alex”,
"userProfileLink": String,
"commentTime": String,
"comment": String
}],
"img": String,
"__v":0
}



Authentication process:
### Login
*  Frontend send login request ---> Server matches the username and encrypted password ---> Server sends back login status ---> Frontend finishes the login process or alerts the error.
* When frontend page refresh, it will send a request to the server that checks it’s login status. So it will not lose login status when page refresh.

### Signup
* User fill out the signup page and submit ---> Server verify the request ---> If success, then the user will auto login to the web app, else web app will alert the user.

### Backend authenticate middleware
* Server will verify the user permission when it received any protected API requests.
* There are 3 levels of security. 
** The routes for the Guest users, they can access routes for the article and log in. Those routes do not need to authenticate.
** Routes for Normal users like Doctors or Patients. For example, \doctors and \patients routes. Only logged-in users can access.
** Routes for Admin. For example, \superusers route. Only admin users can access it.

##Comment and Like
* The logged-in users can leave comments and likes on the home page. The guest user can view comments.


#Front End:
## Introduction
Our Project is an online clinic, where patients can chat with doctors about their symptoms and get a prescription sent to them through the app. This is aimed at more common ailments (colds, headaches, behind counter supplements like iron pills, UTIs, etc) and not used for more complex cases.

Living in a pandemic, it’s getting increasingly difficult to get out of the house, especially to see a doctor for non-COVID-19 issues. The goal of this app is to provide a safe alternative to a traditional walk-in clinic, from the comfort of one’s home. It will serve those who have simple issues for a doctor, without crowding a walk-in clinic. There will be views for both doctors and pharmacists as well, to increase their comfort as  ell. We also provide free educational videos on health on our webpage as an alternative for  those who cannot afford the traditional doctor. We see this application as useful around the globe, both in wealthy and in developing countries.
## Username and Password
#### Patient
* Username: user 
* Password: user
#### Doctor 
* Username: user2 
* Password: user2
#### Admin
* Username: admin 
* Password: admin
### Navigation Bar
* provide entries for user
* entires is depends on user's permission

## Features
### Guest/Non-register user
* Read educational articles directly at home page without the need to login
* Read "About" page by clicking "About" button on navigation bar 
* Provide feedback in the "FEEDBACK" page on the navigation bar
* Login with existed username and password by clicking on "Login" button at the right-top corner of the page
* Sign up a new account by clicking "Don't have an account yet? Sign up" in the login page 

### Normal Logged-in User (Potential Patient)
* Read educational articles in the home page 
* Read "About" page by clicking "About" button on navigation bar 
* Provide feedback in the "FEEDBACK" page on the navigation bar
* Browse doctors by clicking "TALK TO A DOCTOR" on the navigation bar, or by clicking "Common Topics" at the right side of the home page and choose a sub category (Right now we feel there is no need to provide complete structure on different departments, so we showed how our page will present)
* Browse own appointments and have treatment with doctors by clicking in “MY APPOINTMENTS”
* Make appointments to doctors in the doctor list page
* Chat with doctors before by clicking the chat button in appointment, enter the chat dialog by clicking any of the talk button
* Check personal profile by clicking the profile button at the top-right corner, and click "DETAILS" in the popover to enter the profile page
* Change personal email or phone number in the profile page, by clicking "change" buttons
* View personal medical history in the profile page. 
* Edit personal medical history by clicking "EDIT HEALTH HISTORY" button in the profile page
* Log out by clicking the profile button at the top-right corner, and click "LOG OUT" in the popover
### Doctor
* Read educational articles in the home page 
* Read "About" page by clicking "About" button on navigation bar 
* Provide feedback in the "FEEDBACK" page on the navigation bar
* Chat with patients before by clicking the chat button on the navigation bar, enter the chat dialog by clicking any of the chat
* Check personal profile by hovering the profile button at the top-right corner, and click "DETAILS" in the popover to enter the profile page
* Change personal email or phone number in the profile page, by clicking "change" buttons
* Show the basic information and certifications at the left side bar, click certifications to download. These are resources for patients to view
* Manage the patient list, click the "ACCEPT" or "DECLINE" button to accept or decline patients' appointments; click "CHAT" button to have a chat with the patient; click "TREAT" button to prescribe medicines and diagnose, and then click "ASK PATIENT TO COME NEXT TIME" to make the patient's status "Subsequent", or click "COMPLETE TREATMENT" to complete the treatment
* Log out by hovering the profile button at the top-right corner, and click "LOG OUT" in the popover
### Admin
* Read educational articles in the home page 
* Read "About" page by clicking "About" button on navigation bar 
* Enter Admin system by clicking "ADMIN" button on the navigation bar
* Approve or decline users' applications to become doctors in the admin system
* Ban or restore specific user in the admin system, search for username starts with input in the search bar 
* View feedback submitted by users

## Team Members
* Bo Liu
* Chenhao Jiang
* Shizhen Cui
* ~~Jennifer Alexandra Thompson~~

## Project Management
### Trello board
* https://trello.com/b/iGt59yK9/csc309-team-project





