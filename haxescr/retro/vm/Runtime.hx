package retro.vm;

import retro.vm.Application;
using retro.vm.Application;
import retro.pub.EntryJob;
import retro.pub.Worker;
import retro.pub.InputPort;
import retro.pub.OutputPort;
import haxe.Timer;

//Flowerで作成されたアプリケーションの実行を管理するクラス
class Runtime{
	private var app : Application;
	private var job_queue : Array<retro.pub.Job>;
	private var valuemediums : Array<ValueMedium>;
	public function new(app:Application) {
		this.app = app;
	}
	
	//実行
	public function run() {
		trace(this.app.getName());
		//fire event
		this.invoke_entry("entry id");
		/*
			//手続き型言語での疑似並列処理の場合は以下のようになる
			while(1) {
				run_step();
				delay(1);
			}
			
			//並列化可能な言語の場合、Workerごとにスレッドを作成する
		*/
	}
	
	//エントリを起こす
	public function invoke_entry(entry_id) {
		var entry:retro.pub.Job = this.app.diagram.getJob(entry_id);
		entry.act(function(script_result) {
			//出力ポート分ループ
			//コネクションの先の分ループ
			for(p in entry.outputPorts) {
				var sr = script_result.get(p.name);
				for(c in p.connection) {
					//c.setValue(sr.value);
					var valuemedium = new ValueMedium(sr.value, p, c);
					valuemediums.push(valuemedium);
				}
			}
		});
		return true;
	}
	
	//ステップ実行
	public function run_step() {
		//job_queueから次に実行するWorkerを取得
		for(valuemedium in valuemediums) {
			var port = valuemedium.step();
			if(port != null) {
				port.parent.act(function(script_result) {
					//出力ポート分ループ
					for(p in port.parent.outputPorts) {
						var sr = script_result.get(p.name);
						//コネクションの先の分ループ
						for(c in p.connection) {
							//c.setValue(sr.value);
							var valuemedium = new ValueMedium(sr.value, p, c);
							valuemediums.push(valuemedium);
						}
					}
				});
			}
		}
	}
}

class ValueMedium {
	public var value:retro.pub.Value;
	public var srcPort : retro.pub.OutputPort;
	public var destPort : retro.pub.InputPort;
	
	var timer:Timer;
	var count:Int;
	
	public function new(value, src, dest) {
		this.value = value;
		this.srcPort = src;
		this.destPort = dest;
		
		this.count = 0;
	}
	
	public function step() {
		this.count++;
		if(this.count > 10) {
			this.count = 0;
			return this.destPort;
		}
		return null;
	}
	public function start(cb) {
		this.timer = new Timer(100);
		this.timer.run = function() {
			this.count++;
			if(this.count > 10) {
				this.timer.stop();
				this.count = 0;
				cb();
			}
		}
	}
}


