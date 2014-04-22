package externs;

import flower.RetroType;

extern class Inputs {
	public function new();
	public function get(name:String) : Dynamic;
	public function add(name:String, type:RetroType) : Void;
}