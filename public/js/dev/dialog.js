(function(){
	var packages = {"core":["Through","Add","Times","Reminder","Filter","Compare","And","Or","Not"],
			"array":["Create","Length","Push","Pop","Shift","Get"],
			"system":["Print"]};
	function CreateJobDialog() {
		this.listeners = [];
	}
	CreateJobDialog.prototype.on = function(listener) {
		this.listeners[0] = listener;
	}
	CreateJobDialog.prototype.open = function() {
		var self = this;
		var pkg_hrml = [];
		for(var key in packages) {
			pkg_hrml.push("<option>"+key+"</option>")
		}
		var style = ["width: 180px;",
		             "height: 50px;"].join('');
		w2popup.open({
			title   : 'new job',
			body    : ['<select id="pkg-name" style="'+style+'">'+pkg_hrml.join('')+'</select>',
			           '<select id="cmp-name" style="'+style+'"><option>Through</option></select>'],
			buttons : '<button id="createjob-btn">OK</button>'
		});
		$("#pkg-name").change(function() {
			self.get_component_names($("#pkg-name").val());
		})
		$('#createjob-btn').click(function() {
			self.listeners[0]($("#pkg-name").val(), $("#cmp-name").val());
			w2popup.close();
		});
		self.get_component_names("core");
	}
	CreateJobDialog.prototype.get_component_names = function(pkg_name) {
		var cmps = packages[pkg_name];
		var cmps_html = [];
		for(var i=0;i < cmps.length;i++) {
			cmps_html.push("<option>" + cmps[i] + "</option>");
		}
		$("#cmp-name").html(cmps_html.join(''));
	}
	window.CreateJobDialog = CreateJobDialog;
}())