exports.hello =  function(req, res) 
{
  res.render('index', { title: 'Express' });
};

