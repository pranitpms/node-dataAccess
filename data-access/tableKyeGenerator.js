'use-strict';

var Q = require("q");

var getNextId = function(modelObj,field){

	var query   = { fieldName  : field };
	var update  = { $inc : { val : 1 } };
	var options = { new : true };

	var deferred = Q.defer();

	var query = modelObj.findOneAndUpdate(query,update,options);
	var promise = query.exec();

	promise.then(function(result){
		deferred.resolve(result);
	})
	.catch(function(error){
		deferred.reject(error);
	});
	return deferred.promise;
};

module.exports = {
	GetNextId : getNextId
}

