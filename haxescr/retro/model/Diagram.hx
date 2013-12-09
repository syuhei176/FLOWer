package retro.model;

using Lambda;

/*
  Diagram model class.
*/
class Diagram{
	public var jobs : Array<Job>;
	private var onJobAddedListeners:Array<Job->Void>;

	public function new(){
		this.jobs = new Array<Job>();
		this.onJobAddedListeners = new Array<Job->Void>();
	}
	
	public function addJob(job:Job) {
		this.fireOnJobAdded(job);
		jobs.push(job);
	}
	
	public function removeJob(job:Job) {
		jobs.remove(job);
	}
	
	public function getJob(id){
		for( job in this.jobs ){
			if(job.getId() == id){
				return job;
			}
		}
		return null;
	}

	public function getPort(uri:String){
		var ids = uri.split(".");
		for( job in this.jobs ){
			if( job.getId() == ids[0] ){
				return job.getInputPort(ids[1]);
			}
		}
		return null;
	}
	
	public function getJobs() {
		return this.jobs;
	}	
	
	public function onJobAdded(listener) {
		this.onJobAddedListeners.push(listener);
	}
	
	private function fireOnJobAdded(j) {
		for(l in this.onJobAddedListeners) {
			l(j);
		}
	}
	
}