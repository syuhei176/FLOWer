package flower;

enum Message{
	NoMsg;
	Msg(i:Dynamic);
}
typedef Result = Map<String,Message>;