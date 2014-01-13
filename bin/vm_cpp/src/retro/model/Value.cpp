#include <hxcpp.h>

#ifndef INCLUDED_retro_model_Value
#include <retro/model/Value.h>
#endif
#ifndef INCLUDED_retro_pub_RetroType
#include <retro/pub/RetroType.h>
#endif
namespace retro{
namespace model{

Void Value_obj::__construct(::retro::pub::RetroType _type,Dynamic _value)
{
HX_STACK_PUSH("Value::new","retro/model/Value.hx",9);
{
	HX_STACK_LINE(10)
	this->type = _type;
	HX_STACK_LINE(11)
	this->value = _value;
}
;
	return null();
}

Value_obj::~Value_obj() { }

Dynamic Value_obj::__CreateEmpty() { return  new Value_obj; }
hx::ObjectPtr< Value_obj > Value_obj::__new(::retro::pub::RetroType _type,Dynamic _value)
{  hx::ObjectPtr< Value_obj > result = new Value_obj();
	result->__construct(_type,_value);
	return result;}

Dynamic Value_obj::__Create(hx::DynamicArray inArgs)
{  hx::ObjectPtr< Value_obj > result = new Value_obj();
	result->__construct(inArgs[0],inArgs[1]);
	return result;}


Value_obj::Value_obj()
{
}

void Value_obj::__Mark(HX_MARK_PARAMS)
{
	HX_MARK_BEGIN_CLASS(Value);
	HX_MARK_MEMBER_NAME(value,"value");
	HX_MARK_MEMBER_NAME(type,"type");
	HX_MARK_END_CLASS();
}

void Value_obj::__Visit(HX_VISIT_PARAMS)
{
	HX_VISIT_MEMBER_NAME(value,"value");
	HX_VISIT_MEMBER_NAME(type,"type");
}

Dynamic Value_obj::__Field(const ::String &inName,bool inCallProp)
{
	switch(inName.length) {
	case 4:
		if (HX_FIELD_EQ(inName,"type") ) { return type; }
		break;
	case 5:
		if (HX_FIELD_EQ(inName,"value") ) { return value; }
	}
	return super::__Field(inName,inCallProp);
}

Dynamic Value_obj::__SetField(const ::String &inName,const Dynamic &inValue,bool inCallProp)
{
	switch(inName.length) {
	case 4:
		if (HX_FIELD_EQ(inName,"type") ) { type=inValue.Cast< ::retro::pub::RetroType >(); return inValue; }
		break;
	case 5:
		if (HX_FIELD_EQ(inName,"value") ) { value=inValue.Cast< Dynamic >(); return inValue; }
	}
	return super::__SetField(inName,inValue,inCallProp);
}

void Value_obj::__GetFields(Array< ::String> &outFields)
{
	outFields->push(HX_CSTRING("value"));
	outFields->push(HX_CSTRING("type"));
	super::__GetFields(outFields);
};

static ::String sStaticFields[] = {
	String(null()) };

static ::String sMemberFields[] = {
	HX_CSTRING("value"),
	HX_CSTRING("type"),
	String(null()) };

static void sMarkStatics(HX_MARK_PARAMS) {
	HX_MARK_MEMBER_NAME(Value_obj::__mClass,"__mClass");
};

static void sVisitStatics(HX_VISIT_PARAMS) {
	HX_VISIT_MEMBER_NAME(Value_obj::__mClass,"__mClass");
};

Class Value_obj::__mClass;

void Value_obj::__register()
{
	hx::Static(__mClass) = hx::RegisterClass(HX_CSTRING("retro.model.Value"), hx::TCanCast< Value_obj> ,sStaticFields,sMemberFields,
	&__CreateEmpty, &__Create,
	&super::__SGetClass(), 0, sMarkStatics, sVisitStatics);
}

void Value_obj::__boot()
{
}

} // end namespace retro
} // end namespace model
