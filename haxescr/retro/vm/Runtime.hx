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
			while(1) {
				run_step();
				delay(1);
			}
		*/
	}
	
	//エントリを起こす
	public function invoke_entry(entry_id) {
		var entry:retro.pub.EntryNode = this.app.diagram.getEntry(entry_id);
		var worker = new retro.pub.Worker(entry);
		workers_queue.append(worker);
		return true;
	}
	
	//ステップ実行
	public function run_step() {
		//workers_queueから次に実行するWorkerを取得
		//条件を満たしていれば（例えばInputParamsがすべて到着している場合）、Workerを実行
		//条件を満たしていなければ、workers_queueに戻す
		//実行後、アウトプットから接続されているジョブからWorkerを作成し、workers_queueに入れる
	}
}