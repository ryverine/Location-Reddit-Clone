# Route 420

Front-End Deploy:  https://jdwuxui.github.io/route420CBD/

Back-End Deploy:  https://route420.herokuapp.com/
 * Use "user@email.com” and “welcome1” to sign in under test user account.

Note: Repo name is relic of inital project idea. 

## Team

__Jared__ | https://github.com/jdwuxui | Primary front-end dev. Working with Bulma and Sass.

__Ryan__ | https://github.com/ryverine | Primary back-end dev. Working with Node, MySQL, Sequelize, and Handlebars.

__Isabella__ | https://github.com/merendinoir | Secondary back-end dev and tester.

__Matt__ | https://github.com/JustMrMatt | Secondary front-end dev and tester.

## Technologies

 * HTML
 * CSS
 * [Sass](https://sass-lang.com/)
 * [Bulma](https://bulma.io/)
 * Javascript
 * Node.js
 * MySQL
 * [Sequelize](https://www.npmjs.com/package/sequelize)
 * Express
 * [Handlebars](https://www.npmjs.com/package/express-handlebars)


## Running Application from Node Command Line

### Create the Database

The CREATE code is in `Schema.sql`, run that and then our Sequelize ORM will create the tables.

Once the tables have been created you can run the code in `Seeds.sql`, but this will be after you run `node server` in Node later.

### Install Packages from Package.JSON

In Bash navigate to your `location-reddit-clone` directory and run `npm i`.

### Add Sensitive Data To Environment File.

Right now we only care about the connection to our local database, but we will also put API keys and JAWS info in here later.

    # MYSQL
    DB_USERNAME="root"
    DB_PASSWORD="your_mysql_password"
    DB_DATABASE="database_name"
    DB_HOST="localhost"

Change `your_mysql_password` to your password, and change `database_name` to the name of the database.

### Run the Application 

In Bash navigate to your `location-reddit-clone` directory and run `node server`.

In your web browser navigate to `localhost:3000`.
