package retro.vm;

import retro.vm.Application;
using retro.vm.Application;
import retro.pub.EntryNode;
import retro.pub.Worker;

//Flowerで作成されたアプリケーションの実行を管理するクラス
class Runtime{
	private var app : Application;
	private var workers_queue : Array<retro.pub.Worker>;
	public function new(app:Application) {
		this.app = app;
	}
	
	//実行
	public function run() {
		trace(this.app.getName());
		//fire event
		this.invoke_entry("entry id");
		/*
			//手続きが他言語での議事並列処理の場合は以下のようになる
			while(1) {
				run_step();
				delay(1);
			}
			
			//並列化可能な言語の場合、Workerごとにスレッドを作成する
		*/
	}
	
	//エントリを起こす
	public function invoke_entry(entry_id) {
		var entry:retro.pub.EntryNode = this.app.diagram.getEntry(entry_id);
		var worker = new retro.pub.Worker(entry);
		workers_queue.push(worker);
		return true;
	}
	
	//ステップ実行
	public function run_step() {
		//workers_queueから次に実行するWorkerを取得
		var worker:retro.pub.Worker = workers_queue.shift();
		if(worker.check_condition()) {
			//条件を満たしていれば（例えばInputParamsがすべて到着している場合）、Workerを実行
			//非同期でworkerを動かす、プロセス作成
			var result:retro.vm.Value = worker.execute();
			//実行後、アウトプットから接続されているジョブからWorkerを作成し、workers_queueに入れる
			var workers = worker.getNextWorkers();
			for(var w in workers) {
				w.setParameter(result);
				workers_queue.push(w);
			}
			//実行済みのworkerを削除
			//worker.delete()
		}else{
			//条件を満たしていなければ、workerをworkers_queueに戻す
			workers_queue.push(worker);
		}
	}
}

class Value {
}
