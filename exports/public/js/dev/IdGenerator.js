(function(){
	
function IDGenerator(_editorUniqueKey) {
	var counter = 0;
	var editorUniqueKey = _editorUniqueKey;
	return {
		genNewId : function() {
			counter++;
			var counter36 = counter.toString(36);
			for(var i=counter36.length;i < 3;i++) {
				counter36 = '0' + counter36;
			}
			var newId = editorUniqueKey + counter36;
			console.log("IDが生成されました",newId,"長さは",newId.length);
			return newId;
		}
	}
}

window.retro.IDGenerator = IDGenerator;

}());
