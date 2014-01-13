#include <hxcpp.h>

#ifndef INCLUDED_retro_core_ScriptReturnValue
#include <retro/core/ScriptReturnValue.h>
#endif
namespace retro{
namespace core{

Void ScriptReturnValue_obj::__construct(::String portname,Dynamic value)
{
HX_STACK_PUSH("ScriptReturnValue::new","retro/core/Result.hx",33);
{
	HX_STACK_LINE(34)
	this->portname = portname;
	HX_STACK_LINE(35)
	this->value = value;
}
;
	return null();
}

ScriptReturnValue_obj::~ScriptReturnValue_obj() { }

Dynamic ScriptReturnValue_obj::__CreateEmpty() { return  new ScriptReturnValue_obj; }
hx::ObjectPtr< ScriptReturnValue_obj > ScriptReturnValue_obj::__new(::String portname,Dynamic value)
{  hx::ObjectPtr< ScriptReturnValue_obj > result = new ScriptReturnValue_obj();
	result->__construct(portname,value);
	return result;}

Dynamic ScriptReturnValue_obj::__Create(hx::DynamicArray inArgs)
{  hx::ObjectPtr< ScriptReturnValue_obj > result = new ScriptReturnValue_obj();
	result->__construct(inArgs[0],inArgs[1]);
	return result;}


ScriptReturnValue_obj::ScriptReturnValue_obj()
{
}

void ScriptReturnValue_obj::__Mark(HX_MARK_PARAMS)
{
	HX_MARK_BEGIN_CLASS(ScriptReturnValue);
	HX_MARK_MEMBER_NAME(value,"value");
	HX_MARK_MEMBER_NAME(portname,"portname");
	HX_MARK_END_CLASS();
}

void ScriptReturnValue_obj::__Visit(HX_VISIT_PARAMS)
{
	HX_VISIT_MEMBER_NAME(value,"value");
	HX_VISIT_MEMBER_NAME(portname,"portname");
}

Dynamic ScriptReturnValue_obj::__Field(const ::String &inName,bool inCallProp)
{
	switch(inName.length) {
	case 5:
		if (HX_FIELD_EQ(inName,"value") ) { return value; }
		break;
	case 8:
		if (HX_FIELD_EQ(inName,"portname") ) { return portname; }
	}
	return super::__Field(inName,inCallProp);
}

Dynamic ScriptReturnValue_obj::__SetField(const ::String &inName,const Dynamic &inValue,bool inCallProp)
{
	switch(inName.length) {
	case 5:
		if (HX_FIELD_EQ(inName,"value") ) { value=inValue.Cast< Dynamic >(); return inValue; }
		break;
	case 8:
		if (HX_FIELD_EQ(inName,"portname") ) { portname=inValue.Cast< ::String >(); return inValue; }
	}
	return super::__SetField(inName,inValue,inCallProp);
}

void ScriptReturnValue_obj::__GetFields(Array< ::String> &outFields)
{
	outFields->push(HX_CSTRING("value"));
	outFields->push(HX_CSTRING("portname"));
	super::__GetFields(outFields);
};

static ::String sStaticFields[] = {
	String(null()) };

static ::String sMemberFields[] = {
	HX_CSTRING("value"),
	HX_CSTRING("portname"),
	String(null()) };

static void sMarkStatics(HX_MARK_PARAMS) {
	HX_MARK_MEMBER_NAME(ScriptReturnValue_obj::__mClass,"__mClass");
};

static void sVisitStatics(HX_VISIT_PARAMS) {
	HX_VISIT_MEMBER_NAME(ScriptReturnValue_obj::__mClass,"__mClass");
};

Class ScriptReturnValue_obj::__mClass;

void ScriptReturnValue_obj::__register()
{
	hx::Static(__mClass) = hx::RegisterClass(HX_CSTRING("retro.core.ScriptReturnValue"), hx::TCanCast< ScriptReturnValue_obj> ,sStaticFields,sMemberFields,
	&__CreateEmpty, &__Create,
	&super::__SGetClass(), 0, sMarkStatics, sVisitStatics);
}

void ScriptReturnValue_obj::__boot()
{
}

} // end namespace retro
} // end namespace core
