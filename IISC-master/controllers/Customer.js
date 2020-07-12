var _ = require("underscore");

var Customer = require("../models/Customer");

const setupCutsomer = (req, res) => {
  var newCustomer = new Customer(req.body);
  newCustomer.email = req.profile;
  newCustomer
    .save()
    .then(user => {
      res.send(user);
    })
    .catch(err => {
      console.log("Error is ", err.message);
    });
  res.send(newCustomer);
};

var updateCustomer = (req, res) => {
  var customer = req.customer;
  customer = _.extend(customer, req.body);
  customer
    .save()
    .then(user => {
      res.send({ message: "User updated Successfully", user: user });
    })
    .catch(err => {
      console.log("Error is ", err.message);
    });
};

const customerById = (req, res, next, id) => {
  Customer.findById(id).exec((err, user) => {
    if (err || !user) {
      res.status(404).json({
        error: "User not found"
      });
    }
    user.password = undefined;
    req.customer = user; // adds profile object in req with user info
    next();
  });
};

const getall = (req, res) => {
  Customer.find()
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      console.log("Error is ", err.message);
    });
};

const getactive = async (req, res) => {
  var allactive = [];
  await Customer.find()
    .then(async result => {
      await result.map(async cus => {
        if (cus.emergency == true) {
          await allactive.push(cus);
        }
      });
      return allactive;
    })
    .catch(err => {
      console.log("Error is ", err.message);
    });
};

const toactive = (req, res) => {
  var customer = req.customer;
  customer = _.extend(customer, req.body);
  customer
    .save()
    .then(user => {
      res.send({ message: "User Emergency Successfully", user: user });
    })
    .catch(err => {
      console.log("Error is ", err.message);
    });
};

module.exports = {
  setupCutsomer,
  updateCustomer,
  customerById,
  getall,
  getactive,
  toactive
};
