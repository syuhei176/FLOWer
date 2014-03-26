package retro.vm;

import retro.vm.Application;
using retro.vm.Application;
import retro.model.Diagram;
import retro.model.Job;
import retro.model.ValueCarrier;
import retro.model.Value;
import retro.model.Job;
import retro.pub.RetroType;
import retro.model.OutputPort;
import haxe.Timer;

using Lambda;

enum Mode{
	Play;
	Stop;
}

//Flowerで作成されたアプリケーションの実行を管理するクラス
class Runtime{
	//private var app : Application;
	private var diagram : Diagram;
	private var mode : Mode;
	private var speed : String;

	
	public function new(diagram:Diagram) {
		this.diagram = diagram;
	}
	
	public function isRunning():Bool {
		return this.mode == Play;
	}
	
	//実行
	public function run() {
		#if cpp
		while(true) {
			run_step();
			Sys.sleep(0.05);
		}
		#else
		this.play();
		#end
	}
	
	public function stop() {
		#if cpp
		#else
		this.mode = Stop;
		this.diagram.getValueCarriers().map(function(valueCarrier) this.diagram.removeValueCarrier(valueCarrier));
		#end
	}

	public function play(){
		this.mode = Play;
		this.diagram.getJobs().map(function(job) job.onPlay(function(result){
				this.sendResult(job, result);
			}));
	}

	public function run_step_job(job : Job){
		job.work(function(result){
			job.getInputPorts().map(function(p) this.diagram.removeValueCarrier(p.useValueCarrier()));
			this.sendResult(job, result);
		});
	}

	private function sendResult(job, result){
		job.getOutputPorts().map(function(p : OutputPort) 
			switch (result.get(p.name)) {
				case NoMsg: return;
				case Msg(v):
				p.connection.map(function(c){
					var valueCarrier = new ValueCarrier(new Value(p.type, v), p, c);
					this.diagram.addValueCarrier(valueCarrier);
					valueCarrier.step(function(inputPort){
						if( this.mode == Play  ){
							inputPort.setValueCarrier(valueCarrier);
							if( inputPort.parent.isReady() ) this.run_step_job(inputPort.parent);
						}
					});
				});
			});
	}
}




