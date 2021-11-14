const entryRouter = require('./entry.routes');
const affirmationRouter = require('./affirmation');

const Routes = (app) => {
   app.use('/api/entry', entryRouter);
   app.use('/api/affirmation', affirmationRouter);
};

module.exports = Routes;
