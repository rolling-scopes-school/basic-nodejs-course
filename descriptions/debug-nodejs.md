# Debug in Node.js

For this task you will use [this](https://github.com/AlreadyBored/broken-app) template repository. You have to create repository from that repo and send solution into it.

## Prerequisites

1. Install [Postgres](https://www.postgresql.org/download/) (contains **pgAdmin4**)  
2. Postgres should work on **localhost**, on **5433 port**  
3. Create user  
4. Run **pgAdmin4**  
5. Create database with name `gamedb`  
![debug-1_link](../assets/debug-1.PNG "Instruction 1")  
![debug-2_link](../assets/debug-2.PNG "Instruction 2")  
6. In file `db.js` change `username` and `login` strings to yours (**DO NOT COMMIT THIS**)  
![debug-3_link](../assets/debug-3.PNG "Instruction 3")  
7. Install dependencies (`npm i`)  
8. Run application via `npm run start`  

## Alternative way to use Postgres (via ElephantSQL API)

1. Go to [ElephantSQL](https://www.elephantsql.com/) website and register
![debug_alt-1_link](../assets/d-1.jpg "Instruction alt 1")
2. Use any team name, agree with terms of service check that you don't need to follow GDPR  
![debug_alt-2_link](../assets/d-2.jpg "Instruction alt 2")
3. Press button "Create new Instance"  
![debug_alt-3_link](../assets/d-3.jpg "Instruction alt 3")
4. Give instance name & select free plan ("Tiny turtle")  
![debug_alt-4_link](../assets/d-4.jpg "Instruction alt 4")
5. Choose region AWS eu-west-1 (or eu-central-1)  
![debug_alt-5_link](../assets/d-5.jpg "Instruction alt 5")
6. Confirm creation of the instance  
![debug_alt-6_link](../assets/d-6.jpg "Instruction alt 6")
7. Click on the instance to see details  
![debug_alt-7_link](../assets/d-7.jpg "Instruction alt 7")
8. In the details window necessary properties are:
- server (host)
- user & default database
- password  
![debug_alt-8_link](../assets/d-8.jpg "Instruction alt 8")
(alternatively - use URL).  
9. Install `donenv` package ([some info](https://dev.to/numtostr/environment-variables-in-node-js-the-right-way-15ad)) and in `.env` file (should be in root) set following variables:
```bash
DB_HOST=tai.db.elephantsql.com
DB=yourdatabasename
DB_USER=yourusername
DB_PASSWORD=yourpassword
```
10. `db.js` file beginning should look like this:
```js  
const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'postgres'
})
```

---

**DO NOT COMMIT .env file! (add it into .gitignore)**

Your task is to find at least **5 compilation errors** and **5 logic errors** using the debugging tools.

You need fix them and make the broken application workable.

An additional task is to refactor the repository using modern Javascript syntax and fix codestyle issues.