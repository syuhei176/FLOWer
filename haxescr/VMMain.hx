package ;

import retro.vm.Application;
import retro.vm.Runtime;
import retro.vm.Compiler;

class VMMain {
  public static function main() {
  	//var app = new retro.vm.Application();
  	var diagram = new retro.model.Diagram();
  	var runtime = new retro.vm.Runtime(diagram);
  	runtime.run();
  	//var compiler = new retro.vm.Compiler(app);
  	//var result = compiler.compile("Javascript");
  }
}
