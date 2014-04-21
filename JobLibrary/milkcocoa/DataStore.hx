package ;

extern class DataStore
{
	/**
	 * コンストラクタ
	 * @param	path	パス文字列
	 */
	public function new( path:String ):Void;

	/**
	 * 送信
	 * @param	value	値
	 */
	public function send( value:Dynamic ):Void;

	/**
	 * 
	 * @param	event	イベント名
	 */
	public function off( event:String ):Void;

	/**
	 * 
	 * @param	event	イベント名
	 * @param	cb		コールバック関数
	 */
	public function on( event:String, ?cb:Dynamic->Void ):Void;

	/**
	 * プッシュ
	 * @param	value		値
	 * @param	onComplete	完了時のコールバック関数
	 */
	public function push( value:Dynamic, ?onComplete:Dynamic->Void ):Void;

	/**
	 * 削除
	 * @param	onComplete	完了時のコールバック関数
	 */
	public function remove( onComplete:Dynamic->Void ):Void;

	/**
	 * 
	 * @param	value		値
	 * @param	onComplete	完了時のコールバック関数
	 */
	public function set( value:Dynamic, onComplete:Dynamic->Void ):Void;

	/**
	 * クエリ
	 * @param	query	？
	 * @return	クエリ
	 */
	public function query( query:Dynamic ):Query;

	/**
	 * 取得
	 * @param	cb	コールバック関数
	 */
	public function get( cb:Dynamic->Void ):Void;

	/**
	 * パス取得
	 * @return	パス文字列
	 */
	public function getPath( ):String;

	/**
	 * 親パス取得
	 * @return	パス文字列
	 */
	public function parent( ):String;

	/**
	 * 子供取得
	 * @param	query	子供の名前
	 * @return	子供のデータストア
	 */
	public function child( query:String ):DataStore;

	/**
	 * ルート取得
	 * @return	ルートのデータストア
	 */
	public function root( ):DataStore;
}
