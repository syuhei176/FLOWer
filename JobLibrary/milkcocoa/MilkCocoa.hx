package ;

extern class MilkCocoa
{
	/**
	 * コンストラクタ
	 * @param	host	ホスト
	 * @param	cb		コールバック関数
	 */
	public function new( host:String, ?cb:Dynamic->Void ):Void;

	/**
	 * 
	 * @param	token	アクセストークン
	 * @param	cb		コールバック関数
	 */
	public function auth( token:String, cb:Dynamic->Void ):Void;

	/**
	 * サインアップ
	 * @param	email	メールアドレス
	 * @param	secret	シークレットキー
	 * @param	option	？
	 * @param	cb		コールバック関数
	 */
	public function signUp( email:String, secret:String, option:Dynamic, cb:Dynamic->Dynamic->Void ):Void;

	/**
	 * サインイン
	 * @param	email	メールアドレス
	 * @param	secret	シークレットキー
	 * @param	cb		コールバック関数
	 */
	public function signIn( email:String, secret:String, cb:Dynamic->Dynamic->Void ):Void;

	/**
	 * サインアウト
	 * @param	cb	コールバック関数
	 */
	public function signOut( cb:Dynamic->Void ):Void;

	/**
	 * ユーザーリスト取得
	 * @param	cb	コールバック関数
	 */
	public function getCurrentUser( cb:Dynamic->Dynamic->Void ):Void;

	/**
	 * データストア
	 * @param	path	パスへの文字列
	 */
	public function dataStore( path:String ):DataStore;
}
