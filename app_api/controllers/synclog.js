var db=require('../models/sqldb');
var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};
module.exports.getSyncLogSummary=function(req,res){
	var q="SELECT *FROM (	SELECT DataName AS dataName,Status AS [status],COUNT(1) AS c FROM dbo.IntegrationLog GROUP BY DataName, Status ) as s PIVOT(    SUM([c])    FOR [status] IN (New,NoNeedUpload,Success,Exception,Processing,Inqueue))AS pvt";
	db.select(q,function(r){		
		sendJSONresponse(res,200,r);
	});
}