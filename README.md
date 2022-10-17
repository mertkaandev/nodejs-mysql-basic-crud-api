## Node.js and MySQL Basic Crud Api
Run

To run this project, download it to your computer and open it with a code editor. Open `server/database/mysql/connectMysql.js` file and give it MySQL database connection informations. After you should download the packages that this project depends on from the terminal with the `npm install` command. Dependencies of this project:

+ express
+ mysql
+ dotenv
+ nodemon

And you can run now this project with that command:

`npm run start`

## Routes

+ GET `api/users` 
+ POST `api/users` 
+ PUT `api/users/:id` 
+ DELETE `api/users/:id`

## Controllers

+ GET `api/users` -> `getAllUsers`
+ POST `api/users` -> `createUser`
+ PUT `api/users/:id` -> `updateUser`
+ DELETE `api/users/:id` -> `deleteUser`
