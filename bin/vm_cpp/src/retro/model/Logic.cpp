#include <hxcpp.h>

#ifndef INCLUDED_retro_model_Job
#include <retro/model/Job.h>
#endif
#ifndef INCLUDED_retro_model_Logic
#include <retro/model/Logic.h>
#endif
namespace retro{
namespace model{

Void Logic_obj::__construct(::String id)
{
HX_STACK_PUSH("Logic::new","retro/model/Logic.hx",4);
{
	HX_STACK_LINE(4)
	super::__construct(id);
}
;
	return null();
}

Logic_obj::~Logic_obj() { }

Dynamic Logic_obj::__CreateEmpty() { return  new Logic_obj; }
hx::ObjectPtr< Logic_obj > Logic_obj::__new(::String id)
{  hx::ObjectPtr< Logic_obj > result = new Logic_obj();
	result->__construct(id);
	return result;}

Dynamic Logic_obj::__Create(hx::DynamicArray inArgs)
{  hx::ObjectPtr< Logic_obj > result = new Logic_obj();
	result->__construct(inArgs[0]);
	return result;}


Logic_obj::Logic_obj()
{
}

void Logic_obj::__Mark(HX_MARK_PARAMS)
{
	HX_MARK_BEGIN_CLASS(Logic);
	super::__Mark(HX_MARK_ARG);
	HX_MARK_END_CLASS();
}

void Logic_obj::__Visit(HX_VISIT_PARAMS)
{
	super::__Visit(HX_VISIT_ARG);
}

Dynamic Logic_obj::__Field(const ::String &inName,bool inCallProp)
{
	return super::__Field(inName,inCallProp);
}

Dynamic Logic_obj::__SetField(const ::String &inName,const Dynamic &inValue,bool inCallProp)
{
	return super::__SetField(inName,inValue,inCallProp);
}

void Logic_obj::__GetFields(Array< ::String> &outFields)
{
	super::__GetFields(outFields);
};

static ::String sStaticFields[] = {
	String(null()) };

static ::String sMemberFields[] = {
	String(null()) };

static void sMarkStatics(HX_MARK_PARAMS) {
	HX_MARK_MEMBER_NAME(Logic_obj::__mClass,"__mClass");
};

static void sVisitStatics(HX_VISIT_PARAMS) {
	HX_VISIT_MEMBER_NAME(Logic_obj::__mClass,"__mClass");
};

Class Logic_obj::__mClass;

void Logic_obj::__register()
{
	hx::Static(__mClass) = hx::RegisterClass(HX_CSTRING("retro.model.Logic"), hx::TCanCast< Logic_obj> ,sStaticFields,sMemberFields,
	&__CreateEmpty, &__Create,
	&super::__SGetClass(), 0, sMarkStatics, sVisitStatics);
}

void Logic_obj::__boot()
{
}

} // end namespace retro
} // end namespace model
