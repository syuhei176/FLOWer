package ;

import retro.core.JobComponent;

extern class Library{
	public static function get() : Array<JobComponent>;
	public static function init() : Void;
}