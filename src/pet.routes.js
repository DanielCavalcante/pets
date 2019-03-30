module.exports = (app) => {
  let controller = require('./pet.controller')
    app.route('/pets')
      .get(controller.findAll)
      .post(controller.create)
    app.route('/pets/:id')
      .get(controller.findOne)
      .put(controller.update)
      .delete(controller.delete)
};
  
  