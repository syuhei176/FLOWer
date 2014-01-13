#include <hxcpp.h>

#ifndef INCLUDED_retro_model_EntryJob
#include <retro/model/EntryJob.h>
#endif
#ifndef INCLUDED_retro_model_Job
#include <retro/model/Job.h>
#endif
namespace retro{
namespace model{

Void EntryJob_obj::__construct(::String id)
{
HX_STACK_PUSH("EntryJob::new","retro/model/EntryJob.hx",5);
{
	HX_STACK_LINE(5)
	super::__construct(id);
}
;
	return null();
}

EntryJob_obj::~EntryJob_obj() { }

Dynamic EntryJob_obj::__CreateEmpty() { return  new EntryJob_obj; }
hx::ObjectPtr< EntryJob_obj > EntryJob_obj::__new(::String id)
{  hx::ObjectPtr< EntryJob_obj > result = new EntryJob_obj();
	result->__construct(id);
	return result;}

Dynamic EntryJob_obj::__Create(hx::DynamicArray inArgs)
{  hx::ObjectPtr< EntryJob_obj > result = new EntryJob_obj();
	result->__construct(inArgs[0]);
	return result;}

::String EntryJob_obj::getName( ){
	HX_STACK_PUSH("EntryJob::getName","retro/model/EntryJob.hx",9);
	HX_STACK_THIS(this);
	HX_STACK_LINE(9)
	return HX_CSTRING("Entry");
}



EntryJob_obj::EntryJob_obj()
{
}

void EntryJob_obj::__Mark(HX_MARK_PARAMS)
{
	HX_MARK_BEGIN_CLASS(EntryJob);
	super::__Mark(HX_MARK_ARG);
	HX_MARK_END_CLASS();
}

void EntryJob_obj::__Visit(HX_VISIT_PARAMS)
{
	super::__Visit(HX_VISIT_ARG);
}

Dynamic EntryJob_obj::__Field(const ::String &inName,bool inCallProp)
{
	switch(inName.length) {
	case 7:
		if (HX_FIELD_EQ(inName,"getName") ) { return getName_dyn(); }
	}
	return super::__Field(inName,inCallProp);
}

Dynamic EntryJob_obj::__SetField(const ::String &inName,const Dynamic &inValue,bool inCallProp)
{
	return super::__SetField(inName,inValue,inCallProp);
}

void EntryJob_obj::__GetFields(Array< ::String> &outFields)
{
	super::__GetFields(outFields);
};

static ::String sStaticFields[] = {
	String(null()) };

static ::String sMemberFields[] = {
	HX_CSTRING("getName"),
	String(null()) };

static void sMarkStatics(HX_MARK_PARAMS) {
	HX_MARK_MEMBER_NAME(EntryJob_obj::__mClass,"__mClass");
};

static void sVisitStatics(HX_VISIT_PARAMS) {
	HX_VISIT_MEMBER_NAME(EntryJob_obj::__mClass,"__mClass");
};

Class EntryJob_obj::__mClass;

void EntryJob_obj::__register()
{
	hx::Static(__mClass) = hx::RegisterClass(HX_CSTRING("retro.model.EntryJob"), hx::TCanCast< EntryJob_obj> ,sStaticFields,sMemberFields,
	&__CreateEmpty, &__Create,
	&super::__SGetClass(), 0, sMarkStatics, sVisitStatics);
}

void EntryJob_obj::__boot()
{
}

} // end namespace retro
} // end namespace model
