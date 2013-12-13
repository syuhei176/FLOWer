package retro.model;

using Lambda;

/*
  Diagram model class.
*/
class Diagram{
	//model
	private var jobs : Array<Job>;
	private var valueCarriers : Array<ValueCarrier>;
	//listeners
	private var onJobAddedListeners:Array<Job->Void>;
	private var onJobRemovedListeners:Array<Job->Void>;
	private var onValueCarrierAddedListeners:Array<ValueCarrier->Void>;
	private var onValueCarrierRemovedListeners:Array<ValueCarrier->Void>;

	public function new(){
		this.jobs = new Array<Job>();
		this.valueCarriers = new Array<ValueCarrier>();
		this.onJobAddedListeners = new Array<Job->Void>();
		this.onJobRemovedListeners = new Array<Job->Void>();
		this.onValueCarrierAddedListeners = new Array<ValueCarrier->Void>();
		this.onValueCarrierRemovedListeners = new Array<ValueCarrier->Void>();
	}
	
	public function addJob(job:Job) {
		this.fireOnJobAdded(job);
		this.jobs.push(job);
	}
	
	public function removeJob(job:Job) {
		this.fireOnJobRemoved(job);
		this.jobs.remove(job);
	}
	
	public function getJob(id){
		for( job in this.jobs ){
			if(job.getId() == id){
				return job;
			}
		}
		return null;
	}

	public function getOutputPort(uri:String){
		var ids = uri.split(".");
		for( job in this.jobs ){
			if( job.getId() == ids[0] ){
				return job.getOutputPort(ids[1]);
			}
		}
		return null;
	}
	public function getInputPort(uri:String){
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
	
	public function addValueCarrier(valueCarrier:ValueCarrier) {
		this.fireOnValueCarrierAdded(valueCarrier);
		this.valueCarriers.push(valueCarrier);
	}
	
	public function removeValueCarrier(valueCarrier:ValueCarrier) {
		this.fireOnValueCarrierRemoved(valueCarrier);
		this.valueCarriers.remove(valueCarrier);
	}
	
	public function getValueCarriers() {
		return this.valueCarriers;
	}	
	
	public function onJobAdded(listener) {
		this.onJobAddedListeners.push(listener);
	}
	public function onJobRemoved(listener) {
		this.onJobRemovedListeners.push(listener);
	}
	public function onValueCarrierAdded(listener) {
		this.onValueCarrierAddedListeners.push(listener);
	}
	public function onValueCarrierRemoved(listener) {
		this.onValueCarrierRemovedListeners.push(listener);
	}
	
	private function fireOnJobAdded(j) {
		for(l in this.onJobAddedListeners) {
			l(j);
		}
	}
	
	private function fireOnJobRemoved(j) {
		for(l in this.onJobRemovedListeners) {
			l(j);
		}
	}
	
	private function fireOnValueCarrierAdded(vc) {
		for(l in this.onValueCarrierAddedListeners) {
			l(vc);
		}
	}
	
	private function fireOnValueCarrierRemoved(vc) {
		for(l in this.onValueCarrierRemovedListeners) {
			l(vc);
		}
	}
}