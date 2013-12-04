package ;

import retro.vm.Application;
import retro.vm.Runtime;
import retro.vm.Compiler;

class Main {
  public static function main() {
  	var app = new flower.Application();
  	var runtime = new flower.Runtime(app);
  	runtime.run();
  	var compiler = new flower.Compiler(app);
  	var result = compiler.compile("Javascript");
  }
}
