exports.post = function(req, res) {
  req.session.destroy();
  res.redirect('/');
};


//НЕ РАБОЧИЙ КОД
// exports.post = function(req, res, next) {
//   var sid = req.session.id;

//   var io = req.app.get('io');
//   req.session.destroy(function(err) {
//     io.sockets.$emit("session:reload", sid);
//     if (err) return next(err);

//     res.redirect('/');
//   });
// };


// exports.post = function(req, res, next) {
//   var sid = req.session.id;
//   var io = req.app.get('io'); //ЗАБИРАЕМ ИЗ ГЛАВНОЙ СТРАНИЦЫ index.js
//   var events = io.sockets._events['session:reload'];
//   var funcsToCall = (Array.isArray(events)) ? events : [events];
//   req.session.destroy(function(err) {
//     funcsToCall.map(Boolean).forEach((func) => func(sid));
//     if (err) return next(err);
//     res.redirect('/');
//   });
// };