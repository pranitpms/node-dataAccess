'use-strict';

var q = require("q");

var fetch = function(modelObj,condition,fields,options){

    var deferred = q.defer();
    var query = modelObj.find(condition);

    if(fields){
		var result = '\'' + fields.split(',').join('\',\'') + '\'';
		query = query.select(result);
	}
	
	if(options){
		if(options.limit){
			 query = query.limit(parseInt(options.limit));
		}
		if(options.skip){
			 query = query.skip(parseInt(options.skip));
		}
		if(options.sort){
			query =  query.sort(options.sort);
		}
	}
	
	var promise = query.exec();

	promise.then(function(result){
		deferred.resolve(result);
	})
	.catch(function(error){
		deferred.reject(error);
	});

	return deferred.promise;

};

var fetchByUId = function(modelObj,id){

	console.log(id);

	var deferred = Q.defer();

	var query = modelObj.findById(id);
	var promise = query.exec();

	promise.then(function(result){
		deferred.resolve(result);
	})
	.catch(function(error){
		deferred.reject(error);
	});

	return deferred.promise;
};

var fetchById = function(modelObj,id,keyName){
	var deferred = Q.defer();

	var condition = {};
	condition[keyName] = id;

	console.log(condition);
	var query = modelObj.findOne(condition);
	var promise = query.exec();

	promise.then(function(result){
		deferred.resolve(result);
	})
	.catch(function(error){
		deferred.reject(error);
	});

	return deferred.promise;
};

var fetchAllById = function(modelObj,id,keyName){

	var deferred = Q.defer();

	var condition = {};
	condition[keyName] = id;

	console.log(condition);
	var query = modelObj.find(condition);
	var promise = query.exec();

	promise.then(function(result){
		deferred.resolve(result);
	})
	.catch(function(error){
		deferred.reject(error);
	});

	return deferred.promise;
};

var fetchAll = function(modelObj){

	var deferred = Q.defer();

	var query = modelObj.find();
	var promise = query.exec();

	promise.then(function(result){
		deferred.resolve(result);
	})
	.catch(function(error){
		deferred.reject(error);
	});

	return deferred.promise;
};

var getCount = function(modelObj,condition){

	var deferred = Q.defer();
	
	var query = modelObj.count(condition);
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
	Fetch         : fetch,
	FetchByUId    : fetchByUId,
	FetchById     : fetchById,
	FetchAllById  : fetchAllById,
	FetchAll      : fetchAll,
	GetCount      : getCount
}
