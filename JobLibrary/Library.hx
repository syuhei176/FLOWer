package ;

import library.core.Entry;
import library.core.Through;
import flower.JobComponent;

@:expose
class Library{
	public static function get() : Array<JobComponent>{
		var jobComponent = new Array<JobComponent>();
		jobComponent.push(new Entry());
		jobComponent.push(new Through());
		return jobComponent;
	}
}