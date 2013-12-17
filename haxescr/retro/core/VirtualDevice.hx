package retro.core;

#if js
import retro.view.ConsoleView;
#end

class VirtualDevice {

#if js
	private var consoleDevice : ConsoleView;
#end
	
	public function new() {
	
	}
	
#if js
	public function setConsoleDevice(consoleDevice : ConsoleView) {
		this.consoleDevice = consoleDevice;
	}
	
	public function getConsoleDevice() {
		return this.consoleDevice;
	}
#end
	
}