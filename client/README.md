# Cert Tracker

# Database data
Install sequelize-cli

npm install --save sequelize-cli

Delete your database, re create it, run yarn start

http://docs.sequelizejs.com/manual/tutorial/migrations.html

# Load Database data
node_modules/.bin/sequelize db:seed:all


CERT Tracker certification tracking software offers a reliable solution that enables companies to assess their risk exposure and certification obligations. Manage, track and report on employee licenses and professional development required by employees in their jobs. CERT Tracker facilitate compliance with regulations and contractual obligations required by core business activities and quickly and accurately provide and verify evidence of certification to vendors, suppliers and government agencies. CERT Tracker communicate status of certifications to all interested parties including employees, managers, legal and human resources.

*ScreenShot*

![Alt text](/public/images/readme.png "CERT Tracker")

* * *

## Prerequisites ##
* In terminal, npm init
* Configure the config.json file with your database details with your own mysql database
* Remove the git repository from this project with rm -rf .git
* Initialize your own git repo with git init
* Connect your local git repo to your remote git repo with git remote add origin your-github-repo-ssh-key-goes-here
* Configure the package.json with your own information
* Run the server with npm start or node server.js
* Navigate to localhost:3000

* * *

## Need to know ##
* The public folder contains all public assets such as client side javascript files, css, and images
* The routes folder contains all server side API and HTML route files
* The views folder contains all the handlebar files necessary for display

* * *

## Usage
CERT Tracker facilitate compliance with regulations and contractual obligations required by core business activities and quickly and accurately provide and verify evidence of certification to vendors, suppliers and government agencies. CERT Tracker communicate status of certifications to all interested parties including employees, managers, legal and human resources.

class AppPage extends React.Component {
  constructor(props) {
    super(props),
    this.state = {
      collapse : false
    }
    this.onClick = this.onClick.bind(this);
    this.handleNavbarClick = this.handleNavbarClick.bind(this);
  }

  onClick(){
    this.setState({
        collapse: !this.state.collapse,
    });
  }

  handleNavbarClick(){
    this.setState({
      collapse: false
    });
  }

* * *

## Technology

* Bootstrap v4.1.0 - [Bootstrap CDN](https://getbootstrap.com/docs/4.1/getting-started/introduction/)
* NodeJS v8.11.3 LTS - [NodeJS](https://nodejs.org/en/)
* JQuery v3.3.1 - [JQuery CDN](https://code.jquery.com/)
* MYSQL v8.0 - [MySQL Database](https://www.mysql.com/)
* Sequelize v4.37.10 - [Sequelize NPM](https://www.npmjs.com/package/sequelize)
* Express v4.16.3 - [Express NPM](https://www.npmjs.com/package/express)
* BCrypt v2.0.1 - [BCrypt NPM](https://www.npmjs.com/package/bcrypt)
* Passport v0.4.0 - [Passport NPM](https://www.npmjs.com/package/passport)
* Multer v1.3.0 - [Multer NPM](https://www.npmjs.com/package/multer)
* Body-Parser v1.18.3 - [Body-Parser NPM](https://www.npmjs.com/package/body-parser)
* Github - [Github](https://pages.github.com/)
* JawsDB - [JawsDB MySQL](https://elements.heroku.com/addons/jawsdb)
* Heroku - [Heroku](https://www.heroku.com/)

* * *

## Authors
* Mike White: Lead full stack developer
* Sophie Obayashi: Full stack developer
* Bryan Albano: Full Stack Developer
* Byron Sosa: Full Stack Developer
* Rishi Mehta: PM/Full stack developer

* * *

## Acknowledgments
Our badass teacher and TA's