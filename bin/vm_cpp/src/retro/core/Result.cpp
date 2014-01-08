#include <hxcpp.h>

#ifndef INCLUDED_retro_core_Result
#include <retro/core/Result.h>
#endif
#ifndef INCLUDED_retro_core_ScriptReturnValue
#include <retro/core/ScriptReturnValue.h>
#endif
namespace retro{
namespace core{

Void Result_obj::__construct()
{
HX_STACK_PUSH("Result::new","retro/core/Result.hx",8);
{
	HX_STACK_LINE(8)
	this->script_result = Array_obj< ::Dynamic >::__new();
}
;
	return null();
}

Result_obj::~Result_obj() { }

Dynamic Result_obj::__CreateEmpty() { return  new Result_obj; }
hx::ObjectPtr< Result_obj > Result_obj::__new()
{  hx::ObjectPtr< Result_obj > result = new Result_obj();
	result->__construct();
	return result;}

Dynamic Result_obj::__Create(hx::DynamicArray inArgs)
{  hx::ObjectPtr< Result_obj > result = new Result_obj();
	result->__construct();
	return result;}

::retro::core::ScriptReturnValue Result_obj::get( ::String portname){
	HX_STACK_PUSH("Result::get","retro/core/Result.hx",20);
	HX_STACK_THIS(this);
	HX_STACK_ARG(portname,"portname");
	HX_STACK_LINE(21)
	{
		HX_STACK_LINE(21)
		int _g = (int)0;		HX_STACK_VAR(_g,"_g");
		Array< ::Dynamic > _g1 = this->script_result;		HX_STACK_VAR(_g1,"_g1");
		HX_STACK_LINE(21)
		while(((_g < _g1->length))){
			HX_STACK_LINE(21)
			::retro::core::ScriptReturnValue sr = _g1->__get(_g).StaticCast< ::retro::core::ScriptReturnValue >();		HX_STACK_VAR(sr,"sr");
			HX_STACK_LINE(21)
			++(_g);
			HX_STACK_LINE(22)
			if (((sr->portname == portname))){
				HX_STACK_LINE(22)
				return sr;
			}
		}
	}
	HX_STACK_LINE(26)
	return null();
}


HX_DEFINE_DYNAMIC_FUNC1(Result_obj,get,return )

Void Result_obj::set( ::String portname,Dynamic value){
{
		HX_STACK_PUSH("Result::set","retro/core/Result.hx",11);
		HX_STACK_THIS(this);
		HX_STACK_ARG(portname,"portname");
		HX_STACK_ARG(value,"value");
		HX_STACK_LINE(12)
		{
			HX_STACK_LINE(12)
			int _g = (int)0;		HX_STACK_VAR(_g,"_g");
			Array< ::Dynamic > _g1 = this->script_result;		HX_STACK_VAR(_g1,"_g1");
			HX_STACK_LINE(12)
			while(((_g < _g1->length))){
				HX_STACK_LINE(12)
				::retro::core::ScriptReturnValue sr = _g1->__get(_g).StaticCast< ::retro::core::ScriptReturnValue >();		HX_STACK_VAR(sr,"sr");
				HX_STACK_LINE(12)
				++(_g);
				HX_STACK_LINE(13)
				if (((sr->portname == portname))){
					HX_STACK_LINE(14)
					sr->value = value;
					HX_STACK_LINE(15)
					return null();
				}
			}
		}
		HX_STACK_LINE(18)
		this->script_result->push(::retro::core::ScriptReturnValue_obj::__new(portname,value));
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC2(Result_obj,set,(void))


Result_obj::Result_obj()
{
}

void Result_obj::__Mark(HX_MARK_PARAMS)
{
	HX_MARK_BEGIN_CLASS(Result);
	HX_MARK_MEMBER_NAME(script_result,"script_result");
	HX_MARK_END_CLASS();
}

void Result_obj::__Visit(HX_VISIT_PARAMS)
{
	HX_VISIT_MEMBER_NAME(script_result,"script_result");
}

Dynamic Result_obj::__Field(const ::String &inName,bool inCallProp)
{
	switch(inName.length) {
	case 3:
		if (HX_FIELD_EQ(inName,"get") ) { return get_dyn(); }
		if (HX_FIELD_EQ(inName,"set") ) { return set_dyn(); }
		break;
	case 13:
		if (HX_FIELD_EQ(inName,"script_result") ) { return script_result; }
	}
	return super::__Field(inName,inCallProp);
}

Dynamic Result_obj::__SetField(const ::String &inName,const Dynamic &inValue,bool inCallProp)
{
	switch(inName.length) {
	case 13:
		if (HX_FIELD_EQ(inName,"script_result") ) { script_result=inValue.Cast< Array< ::Dynamic > >(); return inValue; }
	}
	return super::__SetField(inName,inValue,inCallProp);
}

void Result_obj::__GetFields(Array< ::String> &outFields)
{
	outFields->push(HX_CSTRING("script_result"));
	super::__GetFields(outFields);
};

static ::String sStaticFields[] = {
	String(null()) };

static ::String sMemberFields[] = {
	HX_CSTRING("get"),
	HX_CSTRING("set"),
	HX_CSTRING("script_result"),
	String(null()) };

static void sMarkStatics(HX_MARK_PARAMS) {
	HX_MARK_MEMBER_NAME(Result_obj::__mClass,"__mClass");
};

static void sVisitStatics(HX_VISIT_PARAMS) {
	HX_VISIT_MEMBER_NAME(Result_obj::__mClass,"__mClass");
};

Class Result_obj::__mClass;

void Result_obj::__register()
{
	hx::Static(__mClass) = hx::RegisterClass(HX_CSTRING("retro.core.Result"), hx::TCanCast< Result_obj> ,sStaticFields,sMemberFields,
	&__CreateEmpty, &__Create,
	&super::__SGetClass(), 0, sMarkStatics, sVisitStatics);
}

void Result_obj::__boot()
{
}

} // end namespace retro
} // end namespace core
