# Location-Reddit-Clone


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
    DB_DATABASE="store_finder_db"
    DB_HOST="localhost"

### Run the Application 

In Bash navigate to your `location-reddit-clone` directory and run `node server`.

In your web browser navigate to `localhost:3000`.
