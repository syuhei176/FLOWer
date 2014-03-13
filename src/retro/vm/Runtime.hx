package retro.vm;

import retro.vm.Application;
using retro.vm.Application;
import retro.model.Diagram;
import retro.model.Job;
import retro.model.EntryJob;
import retro.model.ValueCarrier;
import retro.model.Value;
import retro.model.Job;
import retro.pub.RetroType;
import haxe.Timer;

using Lambda;

//Flowerで作成されたアプリケーションの実行を管理するクラス
class Runtime{
	//private var app : Application;
	private var diagram : Diagram;
	private var timer:Timer;
	
	public function new(diagram:Diagram) {
		this.diagram = diagram;
	}
	
	public function isRunning():Bool {
		if(this.timer != null) {
			return true;
		}
		return false;
	}
	
	//実行
	public function run(entry:EntryJob) {
		this.invoke_entry(entry);
		#if cpp
		while(true) {
			run_step();
			Sys.sleep(0.05);
		}
		#else
		var speed = js.Browser.window.sessionStorage.getItem("speed");
		if(speed == null) {
			speed = "32";
		}
		this.timer = new Timer(Std.parseInt(speed));
		this.timer.run = function() {
			this.run_step();
		};
		#end
	}
	
	public function stop() {
		#if cpp
		#else
		this.timer.stop();
		this.timer = null;
		#end
	}
	
	//エントリを起こす
	public function invoke_entry(entry:Job) {
		entry.work(function(result:Result) {
				entry.getOutputPorts().map(function(p) 
						if(result != null) switch (result.get(p.name)) {
							case NoMsg: return;
							case Msg(v):
							p.connection.map(function(c)
								this.diagram.addValueCarrier(new ValueCarrier(
									new Value(p.type, v), p, c)));
						});
		});
		return true;
	}



	public function run_step(){
		this.diagram.getValueCarriers()
			.map(function(valueCarrier){
				var port = valueCarrier.step();
				if( port != null) port.setValueCarrier(valueCarrier);
				});
		this.diagram.getJobs().filter(this.isReady).map(function(job){
			job.work(function(result){
				job.getInputPorts().map(function(p) this.diagram.removeValueCarrier(p.useValueCarrier()));
				job.getOutputPorts().map(function(p) 
					switch (result.get(p.name)) {
						case NoMsg: return;
						case Msg(v):
						p.connection.map(function(c)
							this.diagram.addValueCarrier(new ValueCarrier(
								new Value(p.type, v), p, c)));
					});
				});
			});
	}

	private function isReady(job : Job){
		return job.getName() != "Entry" && job.getInputPorts().fold(function(port, acc) return acc && port.getValue() != null, true);
	}
}




