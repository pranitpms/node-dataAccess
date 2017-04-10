
var DATAFETCHS = require('./data-access/fetch');
var DATADELETE = require('./data-access/delete');
var DATAINSERT = require('./data-access/insert');
var DATAUPDATE = require('./data-access/update');
var TEXTSEARCH = require('./data-access/textSearch');

exports = {
    Delete        : DATADELETE.DeleteModel,
    Fetch         : DATAFETCHS.Fetch,
	FetchByUId    : DATAFETCHS.FetchByUId,
	FetchById     : DATAFETCHS.FetchById,
	FetchAllById  : DATAFETCHS.FetchAllById,
	FetchAll      : DATAFETCHS.FetchAll,
	GetCount      : DATAFETCHS.GetCount,
    Save          : DATAINSERT.Save,
	InsertMany    : DATAINSERT.InsertMany,
    Search        : DATAINSERT.Search,
	SearchCount   : DATAINSERT.SearchCount,
    Update        : TEXTSEARCH.Update
};