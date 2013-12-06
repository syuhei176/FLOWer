package retro.pub;

class Point2D {
	private var x:Float;
	private var y:Float;
	public function new(x, y) {
		this.x = x;
		this.y = y;
	}
	public function getX() {
		return this.x;
	}
	public function getY() {
		return this.y;
	}
	static public function add(p1, p2) {
		return new Point2D(p1.x + p2.x, p1.y + p2.y);
	}
	static public function sub(p1, p2) {
		return new Point2D(p1.x - p2.x, p1.y - p2.y);
	}
	static public function addToSelf(p1, p2) {
		p1.x += p2.x;
		p1.y += p2.y;
	}
	static public function subToSelf(p1, p2) {
		p1.x -= p2.x;
		p1.y -= p2.y;
	}
}
