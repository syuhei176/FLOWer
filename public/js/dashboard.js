(function(){
	function EditorList() {
		this.collection = [];
	}
	EditorList.prototype.set = function(data) {
		for(var i=0;i < data.length;i++) {
			var e = new Editor(data[i]);
			this.collection.push(e);
		}
	}
	EditorList.prototype.get = function(key) {
    	for(var i=0;i < this.collection.length;i++) {
    		if(this.collection[i].get("key") == key) {
    			return this.collection[i];
    		}
    	}
    	return null;
	}
	EditorList.prototype.toJSON = function() {
		var json_text = [];
    	for(var i=0;i < this.collection.length;i++) {
    		json_text.push(this.collection[i].toJSON());
    	}
    	return json_text;
	}
	//エディタ
	function Editor(model) {
		this.model = model;
		this.init = function(data) {
			if(data.visibility == "list") {
    			data.visibility_text = "非公開";
    			data.visibility_class = "icon-list";
			}else if(data.visibility == "public") {
    			data.visibility_text = "公開";
    			data.visibility_class = "icon-public";
			}
		}
		this.init(this.model);
	}
	Editor.prototype.get = function(k) {
		return this.model[k];
	}
	Editor.prototype.set = function(k, v) {
		this.model[k] = v;
		this.init(this.model);
	}
	Editor.prototype.toJSON = function() {
    	return this.model;
	}
	
	function createEditor(cb, name) {
  	  $.post("/editor/create", {name : name}, function(result) {
  		  cb(result);
	  }, "json");
	}
	
	window.Editor = Editor;
	window.EditorList = EditorList;
	window.createEditor = createEditor;
	
}());