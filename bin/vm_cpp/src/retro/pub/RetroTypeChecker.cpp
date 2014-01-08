#include <hxcpp.h>

#ifndef INCLUDED_retro_pub_RetroType
#include <retro/pub/RetroType.h>
#endif
#ifndef INCLUDED_retro_pub_RetroTypeChecker
#include <retro/pub/RetroTypeChecker.h>
#endif
namespace retro{
namespace pub{

Void RetroTypeChecker_obj::__construct()
{
	return null();
}

RetroTypeChecker_obj::~RetroTypeChecker_obj() { }

Dynamic RetroTypeChecker_obj::__CreateEmpty() { return  new RetroTypeChecker_obj; }
hx::ObjectPtr< RetroTypeChecker_obj > RetroTypeChecker_obj::__new()
{  hx::ObjectPtr< RetroTypeChecker_obj > result = new RetroTypeChecker_obj();
	result->__construct();
	return result;}

Dynamic RetroTypeChecker_obj::__Create(hx::DynamicArray inArgs)
{  hx::ObjectPtr< RetroTypeChecker_obj > result = new RetroTypeChecker_obj();
	result->__construct();
	return result;}

bool RetroTypeChecker_obj::check( ::retro::pub::RetroType type1,::retro::pub::RetroType type2){
	HX_STACK_PUSH("RetroTypeChecker::check","retro/pub/RetroType.hx",17);
	HX_STACK_ARG(type1,"type1");
	HX_STACK_ARG(type2,"type2");
	HX_STACK_LINE(17)
	return true;
}


STATIC_HX_DEFINE_DYNAMIC_FUNC2(RetroTypeChecker_obj,check,return )


RetroTypeChecker_obj::RetroTypeChecker_obj()
{
}

void RetroTypeChecker_obj::__Mark(HX_MARK_PARAMS)
{
	HX_MARK_BEGIN_CLASS(RetroTypeChecker);
	HX_MARK_END_CLASS();
}

void RetroTypeChecker_obj::__Visit(HX_VISIT_PARAMS)
{
}

Dynamic RetroTypeChecker_obj::__Field(const ::String &inName,bool inCallProp)
{
	switch(inName.length) {
	case 5:
		if (HX_FIELD_EQ(inName,"check") ) { return check_dyn(); }
	}
	return super::__Field(inName,inCallProp);
}

Dynamic RetroTypeChecker_obj::__SetField(const ::String &inName,const Dynamic &inValue,bool inCallProp)
{
	return super::__SetField(inName,inValue,inCallProp);
}

void RetroTypeChecker_obj::__GetFields(Array< ::String> &outFields)
{
	super::__GetFields(outFields);
};

static ::String sStaticFields[] = {
	HX_CSTRING("check"),
	String(null()) };

static ::String sMemberFields[] = {
	String(null()) };

static void sMarkStatics(HX_MARK_PARAMS) {
	HX_MARK_MEMBER_NAME(RetroTypeChecker_obj::__mClass,"__mClass");
};

static void sVisitStatics(HX_VISIT_PARAMS) {
	HX_VISIT_MEMBER_NAME(RetroTypeChecker_obj::__mClass,"__mClass");
};

Class RetroTypeChecker_obj::__mClass;

void RetroTypeChecker_obj::__register()
{
	hx::Static(__mClass) = hx::RegisterClass(HX_CSTRING("retro.pub.RetroTypeChecker"), hx::TCanCast< RetroTypeChecker_obj> ,sStaticFields,sMemberFields,
	&__CreateEmpty, &__Create,
	&super::__SGetClass(), 0, sMarkStatics, sVisitStatics);
}

void RetroTypeChecker_obj::__boot()
{
}

} // end namespace retro
} // end namespace pub
