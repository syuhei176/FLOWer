package retro.pub;

import retro.pub.Value.RetroType;
import retro.pub.Job;

class Worker{

	public var job:retro.pub.Job;
	
	public function new(job:retro.pub.Job){
		this.job = job;
	}
	//実行条件を満たしているかチェックする
	public function check_condition() {
	}
	//実行する
	public function execute() {
		//スレッドを起動して実行する
	}
}