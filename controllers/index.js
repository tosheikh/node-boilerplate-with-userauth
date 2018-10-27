var cf_app = require( '../config/vcap_application');
var cf_svc = require( '../config/vcap_services');

exports.hello =  function(req, res) 
{
  res.render('index', { title: 'Hi There!', 
  	'dbname':cf_svc.get_service_credential_name(),
  	'hostname': cf_svc.get_service_hostname()
  	});
};