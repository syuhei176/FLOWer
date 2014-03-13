package retro.pub;

class Dialog{
	private var element : js.html.Element;
	public var onClose : Void -> Void;

	public function new(id){
		this.element = js.Browser.document.createDivElement();
		this.element.id = id;
		this.element.className = "modal";
		js.Browser.document.body.insertBefore(element,null);
	}

	public function on(cb:String->String->Int->Int->Void):Void;
	public function open(){
		
	}
}
