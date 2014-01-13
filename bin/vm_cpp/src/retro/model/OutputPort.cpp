#include <hxcpp.h>

#ifndef INCLUDED_retro_model_InputPort
#include <retro/model/InputPort.h>
#endif
#ifndef INCLUDED_retro_model_Job
#include <retro/model/Job.h>
#endif
#ifndef INCLUDED_retro_model_OutputPort
#include <retro/model/OutputPort.h>
#endif
#ifndef INCLUDED_retro_model_Port
#include <retro/model/Port.h>
#endif
#ifndef INCLUDED_retro_pub_RetroType
#include <retro/pub/RetroType.h>
#endif
namespace retro{
namespace model{

Void OutputPort_obj::__construct(::retro::model::Job parent,::retro::pub::RetroType type,::String name)
{
HX_STACK_PUSH("OutputPort::new","retro/model/OutputPort.hx",15);
{
	HX_STACK_LINE(16)
	super::__construct(parent,type,name);
	HX_STACK_LINE(17)
	this->connection = Array_obj< ::Dynamic >::__new();
	HX_STACK_LINE(18)
	this->onConnectedListeners = Dynamic( Array_obj<Dynamic>::__new() );
	HX_STACK_LINE(19)
	this->onDisconnectedListeners = Dynamic( Array_obj<Dynamic>::__new() );
}
;
	return null();
}

OutputPort_obj::~OutputPort_obj() { }

Dynamic OutputPort_obj::__CreateEmpty() { return  new OutputPort_obj; }
hx::ObjectPtr< OutputPort_obj > OutputPort_obj::__new(::retro::model::Job parent,::retro::pub::RetroType type,::String name)
{  hx::ObjectPtr< OutputPort_obj > result = new OutputPort_obj();
	result->__construct(parent,type,name);
	return result;}

Dynamic OutputPort_obj::__Create(hx::DynamicArray inArgs)
{  hx::ObjectPtr< OutputPort_obj > result = new OutputPort_obj();
	result->__construct(inArgs[0],inArgs[1],inArgs[2]);
	return result;}

Void OutputPort_obj::fireOnDisconnectedListeners( ::retro::model::OutputPort o,::retro::model::InputPort i){
{
		HX_STACK_PUSH("OutputPort::fireOnDisconnectedListeners","retro/model/OutputPort.hx",49);
		HX_STACK_THIS(this);
		HX_STACK_ARG(o,"o");
		HX_STACK_ARG(i,"i");
		HX_STACK_LINE(50)
		int _g = (int)0;		HX_STACK_VAR(_g,"_g");
		Dynamic _g1 = this->onDisconnectedListeners;		HX_STACK_VAR(_g1,"_g1");
		HX_STACK_LINE(50)
		while(((_g < _g1->__Field(HX_CSTRING("length"),true)))){
			HX_STACK_LINE(50)
			Dynamic l = _g1->__GetItem(_g);		HX_STACK_VAR(l,"l");
			HX_STACK_LINE(50)
			++(_g);
			HX_STACK_LINE(51)
			l(o,i).Cast< Void >();
		}
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC2(OutputPort_obj,fireOnDisconnectedListeners,(void))

Void OutputPort_obj::fireOnConnectedListeners( ::retro::model::OutputPort o,::retro::model::InputPort i){
{
		HX_STACK_PUSH("OutputPort::fireOnConnectedListeners","retro/model/OutputPort.hx",43);
		HX_STACK_THIS(this);
		HX_STACK_ARG(o,"o");
		HX_STACK_ARG(i,"i");
		HX_STACK_LINE(44)
		int _g = (int)0;		HX_STACK_VAR(_g,"_g");
		Dynamic _g1 = this->onConnectedListeners;		HX_STACK_VAR(_g1,"_g1");
		HX_STACK_LINE(44)
		while(((_g < _g1->__Field(HX_CSTRING("length"),true)))){
			HX_STACK_LINE(44)
			Dynamic l = _g1->__GetItem(_g);		HX_STACK_VAR(l,"l");
			HX_STACK_LINE(44)
			++(_g);
			HX_STACK_LINE(45)
			l(o,i).Cast< Void >();
		}
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC2(OutputPort_obj,fireOnConnectedListeners,(void))

Void OutputPort_obj::onDisconnected( Dynamic listener){
{
		HX_STACK_PUSH("OutputPort::onDisconnected","retro/model/OutputPort.hx",39);
		HX_STACK_THIS(this);
		HX_STACK_ARG(listener,"listener");
		HX_STACK_LINE(39)
		this->onDisconnectedListeners->__Field(HX_CSTRING("push"),true)(listener);
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC1(OutputPort_obj,onDisconnected,(void))

Void OutputPort_obj::onConnected( Dynamic listener){
{
		HX_STACK_PUSH("OutputPort::onConnected","retro/model/OutputPort.hx",35);
		HX_STACK_THIS(this);
		HX_STACK_ARG(listener,"listener");
		HX_STACK_LINE(35)
		this->onConnectedListeners->__Field(HX_CSTRING("push"),true)(listener);
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC1(OutputPort_obj,onConnected,(void))

Void OutputPort_obj::disconnectToInputPort( ::retro::model::InputPort port){
{
		HX_STACK_PUSH("OutputPort::disconnectToInputPort","retro/model/OutputPort.hx",30);
		HX_STACK_THIS(this);
		HX_STACK_ARG(port,"port");
		HX_STACK_LINE(31)
		this->fireOnDisconnectedListeners(hx::ObjectPtr<OBJ_>(this),port);
		HX_STACK_LINE(32)
		this->connection->remove(port);
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC1(OutputPort_obj,disconnectToInputPort,(void))

Void OutputPort_obj::connectToInputPort( ::retro::model::InputPort port){
{
		HX_STACK_PUSH("OutputPort::connectToInputPort","retro/model/OutputPort.hx",26);
		HX_STACK_THIS(this);
		HX_STACK_ARG(port,"port");
		HX_STACK_LINE(27)
		this->fireOnConnectedListeners(hx::ObjectPtr<OBJ_>(this),port);
		HX_STACK_LINE(28)
		this->connection->push(port);
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC1(OutputPort_obj,connectToInputPort,(void))

Array< ::Dynamic > OutputPort_obj::getConnections( ){
	HX_STACK_PUSH("OutputPort::getConnections","retro/model/OutputPort.hx",22);
	HX_STACK_THIS(this);
	HX_STACK_LINE(22)
	return this->connection;
}


HX_DEFINE_DYNAMIC_FUNC0(OutputPort_obj,getConnections,return )


OutputPort_obj::OutputPort_obj()
{
}

void OutputPort_obj::__Mark(HX_MARK_PARAMS)
{
	HX_MARK_BEGIN_CLASS(OutputPort);
	HX_MARK_MEMBER_NAME(onDisconnectedListeners,"onDisconnectedListeners");
	HX_MARK_MEMBER_NAME(onConnectedListeners,"onConnectedListeners");
	HX_MARK_MEMBER_NAME(connection,"connection");
	super::__Mark(HX_MARK_ARG);
	HX_MARK_END_CLASS();
}

void OutputPort_obj::__Visit(HX_VISIT_PARAMS)
{
	HX_VISIT_MEMBER_NAME(onDisconnectedListeners,"onDisconnectedListeners");
	HX_VISIT_MEMBER_NAME(onConnectedListeners,"onConnectedListeners");
	HX_VISIT_MEMBER_NAME(connection,"connection");
	super::__Visit(HX_VISIT_ARG);
}

Dynamic OutputPort_obj::__Field(const ::String &inName,bool inCallProp)
{
	switch(inName.length) {
	case 10:
		if (HX_FIELD_EQ(inName,"connection") ) { return connection; }
		break;
	case 11:
		if (HX_FIELD_EQ(inName,"onConnected") ) { return onConnected_dyn(); }
		break;
	case 14:
		if (HX_FIELD_EQ(inName,"onDisconnected") ) { return onDisconnected_dyn(); }
		if (HX_FIELD_EQ(inName,"getConnections") ) { return getConnections_dyn(); }
		break;
	case 18:
		if (HX_FIELD_EQ(inName,"connectToInputPort") ) { return connectToInputPort_dyn(); }
		break;
	case 20:
		if (HX_FIELD_EQ(inName,"onConnectedListeners") ) { return onConnectedListeners; }
		break;
	case 21:
		if (HX_FIELD_EQ(inName,"disconnectToInputPort") ) { return disconnectToInputPort_dyn(); }
		break;
	case 23:
		if (HX_FIELD_EQ(inName,"onDisconnectedListeners") ) { return onDisconnectedListeners; }
		break;
	case 24:
		if (HX_FIELD_EQ(inName,"fireOnConnectedListeners") ) { return fireOnConnectedListeners_dyn(); }
		break;
	case 27:
		if (HX_FIELD_EQ(inName,"fireOnDisconnectedListeners") ) { return fireOnDisconnectedListeners_dyn(); }
	}
	return super::__Field(inName,inCallProp);
}

Dynamic OutputPort_obj::__SetField(const ::String &inName,const Dynamic &inValue,bool inCallProp)
{
	switch(inName.length) {
	case 10:
		if (HX_FIELD_EQ(inName,"connection") ) { connection=inValue.Cast< Array< ::Dynamic > >(); return inValue; }
		break;
	case 20:
		if (HX_FIELD_EQ(inName,"onConnectedListeners") ) { onConnectedListeners=inValue.Cast< Dynamic >(); return inValue; }
		break;
	case 23:
		if (HX_FIELD_EQ(inName,"onDisconnectedListeners") ) { onDisconnectedListeners=inValue.Cast< Dynamic >(); return inValue; }
	}
	return super::__SetField(inName,inValue,inCallProp);
}

void OutputPort_obj::__GetFields(Array< ::String> &outFields)
{
	outFields->push(HX_CSTRING("onDisconnectedListeners"));
	outFields->push(HX_CSTRING("onConnectedListeners"));
	outFields->push(HX_CSTRING("connection"));
	super::__GetFields(outFields);
};

static ::String sStaticFields[] = {
	String(null()) };

static ::String sMemberFields[] = {
	HX_CSTRING("fireOnDisconnectedListeners"),
	HX_CSTRING("fireOnConnectedListeners"),
	HX_CSTRING("onDisconnected"),
	HX_CSTRING("onConnected"),
	HX_CSTRING("disconnectToInputPort"),
	HX_CSTRING("connectToInputPort"),
	HX_CSTRING("getConnections"),
	HX_CSTRING("onDisconnectedListeners"),
	HX_CSTRING("onConnectedListeners"),
	HX_CSTRING("connection"),
	String(null()) };

static void sMarkStatics(HX_MARK_PARAMS) {
	HX_MARK_MEMBER_NAME(OutputPort_obj::__mClass,"__mClass");
};

static void sVisitStatics(HX_VISIT_PARAMS) {
	HX_VISIT_MEMBER_NAME(OutputPort_obj::__mClass,"__mClass");
};

Class OutputPort_obj::__mClass;

void OutputPort_obj::__register()
{
	hx::Static(__mClass) = hx::RegisterClass(HX_CSTRING("retro.model.OutputPort"), hx::TCanCast< OutputPort_obj> ,sStaticFields,sMemberFields,
	&__CreateEmpty, &__Create,
	&super::__SGetClass(), 0, sMarkStatics, sVisitStatics);
}

void OutputPort_obj::__boot()
{
}

} // end namespace retro
} // end namespace model
