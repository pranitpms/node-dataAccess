# node-mongoose-data-access

This package is wrapper over the mongoose (https://github.com/Automattic/mongoose) data Access API to have flexibility over the existing functionality.

All the methods inside the packages returns the Promise object as output.

## Getting Started

To have use this package, you need npm installed in your machine.


### Installing

to install package on local run the Below command

```
  npm install node-mongoose-data-access 
```

## Methods

> Fetch()

 - Method Name :  Fetch
 - Parameters :
	 - modelObj : **(object)** mongoose schema model object.
	 - condition : **(object)** mongoose db condition (JSON)
	 - fields : **(string)** DB fields for reference.
	 - options : **(object)** DB query options (sort,oder etc.)
	 
 refer :  http://mongoosejs.com/docs/api.html#model_Model.find

> FetchByUId()

 - Method Name : FetchByUId
 - parameters     :
	 - modelObj   :  **(object)** mongoose schema model object.
	 - id                : **(string)** mongoDB collection unique id (_id).

> FetchById()

 - Method Name : FetchById
 - parameters     :
	 - modelObj   :  **(object)** mongoose schema model object.
	 - id                : **(string)** value of the DB field.
	 - keyName    : **(string)** DB field name.

> FetchAllById()

 - Method Name : FetchAllById
 - parameters     :
	 - modelObj   :  **(object)** mongoose schema model object.
	 - id                : **(string)** value of the DB field.
	 - keyName    : **(string)** DB field name.

> FetchAll()

 - Method Name : FetchAll
 - parameters     :
	 - modelObj   :  **(object)** mongoose schema model object.

refer : http://mongoosejs.com/docs/api.html#model_Model.find
> GetCount()

 - Method Name : GetCount
 - parameters     :
	 - modelObj   :  **(object)** mongoose schema model object.
	 - condition    : **(object)** mongoose db condition (JSON)

refer : http://mongoosejs.com/docs/api.html#model_Model.count

>Delete()

 - Method Name : Delete
 - parameters     :
	 - modelObj   :  **(object)** mongoose schema model object.
	 - id                : **(string)** value of the DB field.
	 - options       : **(object)** DB query options.

refer : http://mongoosejs.com/docs/api.html#model_Model.findByIdAndRemove
	
> Save()

 - Method Name : Save
 - parameters     :
	 - modelObj   :  **(object)** mongoose schema model object.

> InsertMany()

 - Method Name : InsertMany
 - parameters     :
	 - modelObj   :  **(object)** mongoose schema model object.
	 - jArray         :  **(Array)**  array of collection data.

refer  : http://mongoosejs.com/docs/api.html#model_Model.insertMany

> Update()

 - Method Name : FetchAllById
 - parameters     :
	 - modelObj   :  **(object)** mongoose schema model object.
	 - id                : **(string)** value of the DB field.
	 - update        : **(string)** update field with value (JSON)
	 -  options     : **(object)** DB query options.

refer : http://mongoosejs.com/docs/api.html#model_Model.findByIdAndUpdate

> Search() - search by keyword

 - Method Name : Search
 - parameters     :
	 - modelObj   :  **(object)** mongoose schema model object.
	 - text             : **(string)** search string.
	 -  options     : **(object)** DB query options.(limit,skip etc.)

refer : https://docs.mongodb.com/manual/reference/operator/query/text/

> SearchCount() -  keyword serach count

 - Method Name : SearchCount
 - parameters     :
	 - modelObj   :  **(object)** mongoose schema model object.
	 - text             : **(string)** search string.
	
refer : https://docs.mongodb.com/manual/reference/operator/query/text/

## Author

* **Pranit Bardapurkar** 
