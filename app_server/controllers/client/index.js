/* GET Angular SPA page */
module.exports.home = function(req, res){
  res.render('layout', { title: 'Loc8r' });
};