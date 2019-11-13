const nineteenFiftyFiveController = require('../controllers/1955');

module.exports = function(app) {
  app.get('/1955/', nineteenFiftyFiveController.index);
  app.get('/1955/new/:name', nineteenFiftyFiveController.create);
  app.get('/1955/remove/:name', nineteenFiftyFiveController.destroy);
  app.get('/1955/:name', nineteenFiftyFiveController.show);
};