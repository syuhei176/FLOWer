package ;

extern class Query {

	/**
	 * コンストラクタ
	 * @param	params	？
	 */
	public function new( params:Dynamic ):Void;

	/**
	 * 終了
	 * @param	cb	コールバック関数
	 */
	public function done( cb:Dynamic->Void ):Void;

	/**
	 * 
	 * @param	skip
	 * @return
	 */
	public function skip( skip:Dynamic ):Query;

	/**
	 * 
	 * @param	attr
	 * @return
	 */
	public function sort( attr:Dynamic ):Query;

	/**
	 * 
	 * @param	attr
	 * @return
	 */
	public function desort( attr:Dynamic ):Query;

	/**
	 * 
	 * @param	n
	 * @return
	 */
	public function limit( n:Dynamic ):Query;
}
