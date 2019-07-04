var db = require("../models");
var seq = require("sequelize");

module.exports = function(app) {

  // Load index page
  app.get("/", function(req, res) 
  {
      res.render("index", {
        msg: "Welcome!"
      });
  });

  // load locations page
  // lists all locations
  app.get("/locations", function(req, res) 
  {
    db.Location.findAll({
      include: [db.Store]
    }).then(function(dbLocations) 
    {
      res.render("locations", {
        locations: dbLocations
      });
    });
  });

  // load location page
  // page for specific location 
  app.get("/locations/:id", function(req, res) 
  {
    db.Location.findOne(
    {
      include: [db.Store], 
      where: { id: req.params.id }
    }).then(function(dbLocation) 
    {
      res.render("location", {
        location: dbLocation
      });
    });
  });


  // load store page
  // page for specific store
  app.get("/store/:id", function(req, res) 
  {
    db.Store.findOne(
    { 
      include: [{model: db.Product},
        {model: db.Store_Comment, 
        order: ['updatedAt', 'DESC'],
        include: [db.User]
      }],
      where: { id: req.params.id }
    }).then(function(dbStore) 
    {
      res.render("store", {
        store: dbStore
      });
    });
  });


    // load store page
  // page for specific store
  app.get("/product/:id", function(req, res) 
  {
    db.Product.findOne(
    { 
      where: { id: req.params.id }
    }).then(function(dbProduct) 
    {
      res.render("product", {
        product: dbProduct
      });
    });
  });


  /* Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) 
  {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });*/

  app.get('/signin', function(req, res) {
    res.render("signin", {});
  });

  app.get('/user/signin/:cred', function(req, res) {
    var cred = req.params.cred.split("+");
    var email_input = cred[0];
    var password_input = cred[1];
    
  db.User.findAll({
    include: [{model: db.Store_Comment,
              include: [db.Store]}],
      where: {
        email: email_input,
        [seq.Op.and]: {password: password_input}    
      }
    }).then(function(dbUser) 
    {
      if(dbUser.length > 0)
      {
        res.json(dbUser[0].dataValues);
      }
      else{
        var emptyUser = {
          id: 0,
          first_name: "",
          last_name: "",
          email: ""
        }

        res.json(emptyUser);
      }

      // this was used when form 
      // res.render("user", {user: dbUser[0]});

      // redirect to /user/id of user
      // res.redirect("/user/" + userID);


      //res.json(dbProducts);
    }).catch(function(error){
      console.log("------------------------------");
      console.log(error);
      console.log("------------------------------");
    });
    
  });




  app.get('/user/:id', function(req, res) {
    db.User.findOne({
        include: [{model: db.Store_Comment,
                  include: [db.Store]}],
          where: {
            id: req.params.id
          }
    }).then(function(dbUser){
      res.render("user", {user: dbUser});
    });
  });

  app.get("/user", function(req, res) 
  {
      res.render("user", {});
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });








};
