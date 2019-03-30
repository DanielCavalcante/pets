module.exports = (app) => {
  let controller = require('./pet.controller')
    app.route('/pets')
      .get(controller.findAll)
      .post(controller.create)
};
  
  