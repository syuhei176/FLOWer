package retro.controller;

import retro.pub.RetroType;
import retro.model.Project;
import retro.model.Diagram;
import retro.model.Job;
import retro.model.EntryJob;
import retro.model.Logic;
import retro.model.OutputPort;
import retro.model.SymbolicLink;
import retro.model.Value;
import retro.core.JobComponent;

/*
	ImportController
*/
class ImportController {
	
	private var project:Project;
	private var modules:Array<JobComponent>;
	
	public function new(project, virtualDevice){
		this.project = project;
		this.modules = new Array<JobComponent>();
		this.modules.push(new retro.library.core.Through());
		this.modules.push(new retro.library.core.Add());
		this.modules.push(new retro.library.core.Times());
		this.modules.push(new retro.library.core.Remainder());
		this.modules.push(new retro.library.core.Filter());
		this.modules.push(new retro.library.core.Drop());
		this.modules.push(new retro.library.core.Compare());
		this.modules.push(new retro.library.core.And());
		this.modules.push(new retro.library.core.Or());
		this.modules.push(new retro.library.core.Not());
		this.modules.push(new retro.library.core.Transistor());
		this.modules.push(new retro.library.system.Print(virtualDevice));
		this.modules.push(new retro.library.system.Scan(virtualDevice));
		this.modules.push(new retro.library.array.Create());
		this.modules.push(new retro.library.array.Length());
		this.modules.push(new retro.library.array.Push());
		this.modules.push(new retro.library.array.Pop());
		this.modules.push(new retro.library.array.Get());
		this.modules.push(new retro.library.data.Stack());
this.modules.push(new retro.library.sphero.SetBackLED());
this.modules.push(new retro.library.sphero.SetHeading());
this.modules.push(new retro.library.sphero.Roll());
this.modules.push(new retro.library.string.Split());
this.modules.push(new retro.library.string.IndexOf());
this.modules.push(new retro.library.string.ChatAt());
this.modules.push(new retro.library.string.Substr());
this.modules.push(new retro.library.string.Length());
this.modules.push(new retro.library.string.LastIndexOf());
this.modules.push(new retro.library.point2d.Add());
this.modules.push(new retro.library.point2d.Sub());
this.modules.push(new retro.library.point2d.Create());
this.modules.push(new retro.library.point2d.Distance());
this.modules.push(new retro.library.http.Post());
this.modules.push(new retro.library.http.Get());
this.modules.push(new retro.library.line2d.Create());
this.modules.push(new retro.library.line2d.Distance());
this.modules.push(new retro.library.list.Length());
this.modules.push(new retro.library.list.Add());
this.modules.push(new retro.library.list.Clear());
this.modules.push(new retro.library.list.First());
this.modules.push(new retro.library.list.IsEmpty());
this.modules.push(new retro.library.list.Join());
this.modules.push(new retro.library.list.Last());
this.modules.push(new retro.library.list.Pop());
this.modules.push(new retro.library.list.Push());
this.modules.push(new retro.library.list.Remove());
this.modules.push(new retro.library.math.Abs());
this.modules.push(new retro.library.math.Acos());
this.modules.push(new retro.library.math.Asin());
this.modules.push(new retro.library.math.Atan());
this.modules.push(new retro.library.math.Atan2());
this.modules.push(new retro.library.math.Cos());
this.modules.push(new retro.library.math.Sin());
this.modules.push(new retro.library.math.Floor());
this.modules.push(new retro.library.math.Log());
this.modules.push(new retro.library.math.Max());
this.modules.push(new retro.library.math.Min());
this.modules.push(new retro.library.math.Pow());
this.modules.push(new retro.library.math.Random());
this.modules.push(new retro.library.math.Sqrt());
#if (!nodejs && !cpp)
this.modules.push(new retro.library.snapsvg.Rect(virtualDevice));
this.modules.push(new retro.library.snapsvg.Circle());
this.modules.push(new retro.library.snapelement.Translate());
this.modules.push(new retro.library.snapelement.Fill());
this.modules.push(new retro.library.jquery.Find());
this.modules.push(new retro.library.jquery.Html());
#end
this.modules.push(new retro.library.pigpio.Write());
this.modules.push(new retro.library.pigpio.Read());
	}
	
	public function getProject() {
		return this.project;
	}
	
	public function getModule(name) {
		for(m in this.modules) {
			if(m.getModuleName() == name) {
				return m;
			}
		}
		return null;
	}
	
	public function do_import(model:Dynamic) {
		var diagram = new Diagram();
		this.project.setRootDiagram(diagram);
		//if(model.model.diagram) {
			this.import_diagram(diagram, model.model.diagram);
		//}
	}
	
	public function import_diagram(diagram:Diagram, diagram_model:Dynamic) {
		var jobs : Array<Dynamic> = diagram_model.jobs;
		for( j in jobs ) {
			if(j.meta == "retro.model.EntryJob") {
				var entry = new EntryJob(j.id);
				diagram.setEntryPoint(entry);
				entry.addOutputPort(new OutputPort(entry, RetroType.RString, "output"));
				entry.setPos(j.pos.x, j.pos.y);
			}else if(j.meta == "retro.model.SymbolicLink"){
				var jobComponent = this.getModule(j.ref);
				var job = new SymbolicLink(j.id, jobComponent);
				diagram.addJob(job);
				job.setPos(j.pos.x, j.pos.y);
			}
		}
		for( j in jobs ) {
			this.import_job(j, diagram);
		}
	}
	
	public function import_job(model:Dynamic, diagram:Diagram) {
		var ops:Array<Dynamic> = model.outputports;
		var ips:Array<Dynamic> = model.inputports;
		for(op in ops) {
			var start = diagram.getOutputPort(model.id + "." + op.name);
			var cons:Array<Dynamic> = op.connections;
			for(con in cons) {
				var end = diagram.getInputPort(con);
				start.connectToInputPort(end);
			}
		}
		for(ip in ips) {
			var inputPort = diagram.getInputPort(model.id + "." + ip.name);
			if(ip.constant != null) {
				inputPort.setConstant(new Value(ip.constant.type, ip.constant.value));
			}
		}
	}
	
}
