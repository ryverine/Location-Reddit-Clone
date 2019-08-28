# Route 420

Note: Repo name is relic of inital project idea.

## Team

Isabella https://github.com/merendinoir

Matt https://github.com/JustMrMatt

Jared (https://github.com/jdwuxui)[https://github.com/jdwuxui]

Ryan [https://github.com/ryverine](https://github.com/ryverine)

## Technologies

 * HTML
 * CSS
 * Javascript
 * Node.js
 * MySQL
 * Sequelize
 * Express
 * Handlebars


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
