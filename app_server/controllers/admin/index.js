/* GET Angular SPA page */
module.exports.angularApp = function(req, res){
  res.render('layout', { title: 'Loc8r' });
};