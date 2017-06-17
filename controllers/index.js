module.exports = (app) => {
  require('./user')(app);
  require('./auth')(app);
  require('./hoard')(app);
  require('./item')(app);
};
