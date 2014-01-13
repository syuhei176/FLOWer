#include <hxcpp.h>

#ifndef INCLUDED_retro_model_InputPort
#include <retro/model/InputPort.h>
#endif
#ifndef INCLUDED_retro_model_OutputPort
#include <retro/model/OutputPort.h>
#endif
#ifndef INCLUDED_retro_model_Port
#include <retro/model/Port.h>
#endif
#ifndef INCLUDED_retro_model_Value
#include <retro/model/Value.h>
#endif
#ifndef INCLUDED_retro_model_ValueCarrier
#include <retro/model/ValueCarrier.h>
#endif
namespace retro{
namespace model{

Void ValueCarrier_obj::__construct(::retro::model::Value value,::retro::model::OutputPort src,::retro::model::InputPort dest)
{
HX_STACK_PUSH("ValueCarrier::new","retro/model/ValueCarrier.hx",5);
{
	HX_STACK_LINE(12)
	this->count = (int)0;
	HX_STACK_LINE(15)
	this->value = value;
	HX_STACK_LINE(16)
	this->srcPort = src;
	HX_STACK_LINE(17)
	this->destPort = dest;
	HX_STACK_LINE(18)
	this->count = (int)0;
	HX_STACK_LINE(19)
	this->onStepListeners = Dynamic( Array_obj<Dynamic>::__new() );
}
;
	return null();
}

ValueCarrier_obj::~ValueCarrier_obj() { }

Dynamic ValueCarrier_obj::__CreateEmpty() { return  new ValueCarrier_obj; }
hx::ObjectPtr< ValueCarrier_obj > ValueCarrier_obj::__new(::retro::model::Value value,::retro::model::OutputPort src,::retro::model::InputPort dest)
{  hx::ObjectPtr< ValueCarrier_obj > result = new ValueCarrier_obj();
	result->__construct(value,src,dest);
	return result;}

Dynamic ValueCarrier_obj::__Create(hx::DynamicArray inArgs)
{  hx::ObjectPtr< ValueCarrier_obj > result = new ValueCarrier_obj();
	result->__construct(inArgs[0],inArgs[1],inArgs[2]);
	return result;}

Void ValueCarrier_obj::fireOnStepListeners( ){
{
		HX_STACK_PUSH("ValueCarrier::fireOnStepListeners","retro/model/ValueCarrier.hx",40);
		HX_STACK_THIS(this);
		HX_STACK_LINE(41)
		int _g = (int)0;		HX_STACK_VAR(_g,"_g");
		Dynamic _g1 = this->onStepListeners;		HX_STACK_VAR(_g1,"_g1");
		HX_STACK_LINE(41)
		while(((_g < _g1->__Field(HX_CSTRING("length"),true)))){
			HX_STACK_LINE(41)
			Dynamic l = _g1->__GetItem(_g);		HX_STACK_VAR(l,"l");
			HX_STACK_LINE(41)
			++(_g);
			HX_STACK_LINE(42)
			l().Cast< Void >();
		}
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC0(ValueCarrier_obj,fireOnStepListeners,(void))

Void ValueCarrier_obj::onStep( Dynamic listener){
{
		HX_STACK_PUSH("ValueCarrier::onStep","retro/model/ValueCarrier.hx",36);
		HX_STACK_THIS(this);
		HX_STACK_ARG(listener,"listener");
		HX_STACK_LINE(36)
		this->onStepListeners->__Field(HX_CSTRING("push"),true)(listener);
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC1(ValueCarrier_obj,onStep,(void))

::retro::model::Value ValueCarrier_obj::getValue( ){
	HX_STACK_PUSH("ValueCarrier::getValue","retro/model/ValueCarrier.hx",32);
	HX_STACK_THIS(this);
	HX_STACK_LINE(32)
	return this->value;
}


HX_DEFINE_DYNAMIC_FUNC0(ValueCarrier_obj,getValue,return )

::retro::model::InputPort ValueCarrier_obj::step( ){
	HX_STACK_PUSH("ValueCarrier::step","retro/model/ValueCarrier.hx",22);
	HX_STACK_THIS(this);
	HX_STACK_LINE(22)
	if (((this->count > (int)9))){
		HX_STACK_LINE(23)
		return this->destPort;
	}
	else{
		HX_STACK_LINE(26)
		(this->count)++;
		HX_STACK_LINE(27)
		this->fireOnStepListeners();
		HX_STACK_LINE(28)
		return null();
	}
	HX_STACK_LINE(22)
	return null();
}


HX_DEFINE_DYNAMIC_FUNC0(ValueCarrier_obj,step,return )


ValueCarrier_obj::ValueCarrier_obj()
{
}

void ValueCarrier_obj::__Mark(HX_MARK_PARAMS)
{
	HX_MARK_BEGIN_CLASS(ValueCarrier);
	HX_MARK_MEMBER_NAME(count,"count");
	HX_MARK_MEMBER_NAME(onStepListeners,"onStepListeners");
	HX_MARK_MEMBER_NAME(destPort,"destPort");
	HX_MARK_MEMBER_NAME(srcPort,"srcPort");
	HX_MARK_MEMBER_NAME(value,"value");
	HX_MARK_END_CLASS();
}

void ValueCarrier_obj::__Visit(HX_VISIT_PARAMS)
{
	HX_VISIT_MEMBER_NAME(count,"count");
	HX_VISIT_MEMBER_NAME(onStepListeners,"onStepListeners");
	HX_VISIT_MEMBER_NAME(destPort,"destPort");
	HX_VISIT_MEMBER_NAME(srcPort,"srcPort");
	HX_VISIT_MEMBER_NAME(value,"value");
}

Dynamic ValueCarrier_obj::__Field(const ::String &inName,bool inCallProp)
{
	switch(inName.length) {
	case 4:
		if (HX_FIELD_EQ(inName,"step") ) { return step_dyn(); }
		break;
	case 5:
		if (HX_FIELD_EQ(inName,"count") ) { return count; }
		if (HX_FIELD_EQ(inName,"value") ) { return value; }
		break;
	case 6:
		if (HX_FIELD_EQ(inName,"onStep") ) { return onStep_dyn(); }
		break;
	case 7:
		if (HX_FIELD_EQ(inName,"srcPort") ) { return srcPort; }
		break;
	case 8:
		if (HX_FIELD_EQ(inName,"getValue") ) { return getValue_dyn(); }
		if (HX_FIELD_EQ(inName,"destPort") ) { return destPort; }
		break;
	case 15:
		if (HX_FIELD_EQ(inName,"onStepListeners") ) { return onStepListeners; }
		break;
	case 19:
		if (HX_FIELD_EQ(inName,"fireOnStepListeners") ) { return fireOnStepListeners_dyn(); }
	}
	return super::__Field(inName,inCallProp);
}

Dynamic ValueCarrier_obj::__SetField(const ::String &inName,const Dynamic &inValue,bool inCallProp)
{
	switch(inName.length) {
	case 5:
		if (HX_FIELD_EQ(inName,"count") ) { count=inValue.Cast< int >(); return inValue; }
		if (HX_FIELD_EQ(inName,"value") ) { value=inValue.Cast< ::retro::model::Value >(); return inValue; }
		break;
	case 7:
		if (HX_FIELD_EQ(inName,"srcPort") ) { srcPort=inValue.Cast< ::retro::model::OutputPort >(); return inValue; }
		break;
	case 8:
		if (HX_FIELD_EQ(inName,"destPort") ) { destPort=inValue.Cast< ::retro::model::InputPort >(); return inValue; }
		break;
	case 15:
		if (HX_FIELD_EQ(inName,"onStepListeners") ) { onStepListeners=inValue.Cast< Dynamic >(); return inValue; }
	}
	return super::__SetField(inName,inValue,inCallProp);
}

void ValueCarrier_obj::__GetFields(Array< ::String> &outFields)
{
	outFields->push(HX_CSTRING("count"));
	outFields->push(HX_CSTRING("onStepListeners"));
	outFields->push(HX_CSTRING("destPort"));
	outFields->push(HX_CSTRING("srcPort"));
	outFields->push(HX_CSTRING("value"));
	super::__GetFields(outFields);
};

static ::String sStaticFields[] = {
	String(null()) };

static ::String sMemberFields[] = {
	HX_CSTRING("fireOnStepListeners"),
	HX_CSTRING("onStep"),
	HX_CSTRING("getValue"),
	HX_CSTRING("step"),
	HX_CSTRING("count"),
	HX_CSTRING("onStepListeners"),
	HX_CSTRING("destPort"),
	HX_CSTRING("srcPort"),
	HX_CSTRING("value"),
	String(null()) };

static void sMarkStatics(HX_MARK_PARAMS) {
	HX_MARK_MEMBER_NAME(ValueCarrier_obj::__mClass,"__mClass");
};

static void sVisitStatics(HX_VISIT_PARAMS) {
	HX_VISIT_MEMBER_NAME(ValueCarrier_obj::__mClass,"__mClass");
};

Class ValueCarrier_obj::__mClass;

void ValueCarrier_obj::__register()
{
	hx::Static(__mClass) = hx::RegisterClass(HX_CSTRING("retro.model.ValueCarrier"), hx::TCanCast< ValueCarrier_obj> ,sStaticFields,sMemberFields,
	&__CreateEmpty, &__Create,
	&super::__SGetClass(), 0, sMarkStatics, sVisitStatics);
}

void ValueCarrier_obj::__boot()
{
}

} // end namespace retro
} // end namespace model
