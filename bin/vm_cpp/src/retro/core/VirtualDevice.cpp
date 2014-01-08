#include <hxcpp.h>

#ifndef INCLUDED_retro_core_VirtualDevice
#include <retro/core/VirtualDevice.h>
#endif
namespace retro{
namespace core{

Void VirtualDevice_obj::__construct()
{
HX_STACK_PUSH("VirtualDevice::new","retro/core/VirtualDevice.hx",15);
{
}
;
	return null();
}

VirtualDevice_obj::~VirtualDevice_obj() { }

Dynamic VirtualDevice_obj::__CreateEmpty() { return  new VirtualDevice_obj; }
hx::ObjectPtr< VirtualDevice_obj > VirtualDevice_obj::__new()
{  hx::ObjectPtr< VirtualDevice_obj > result = new VirtualDevice_obj();
	result->__construct();
	return result;}

Dynamic VirtualDevice_obj::__Create(hx::DynamicArray inArgs)
{  hx::ObjectPtr< VirtualDevice_obj > result = new VirtualDevice_obj();
	result->__construct();
	return result;}


VirtualDevice_obj::VirtualDevice_obj()
{
}

void VirtualDevice_obj::__Mark(HX_MARK_PARAMS)
{
	HX_MARK_BEGIN_CLASS(VirtualDevice);
	HX_MARK_END_CLASS();
}

void VirtualDevice_obj::__Visit(HX_VISIT_PARAMS)
{
}

Dynamic VirtualDevice_obj::__Field(const ::String &inName,bool inCallProp)
{
	return super::__Field(inName,inCallProp);
}

Dynamic VirtualDevice_obj::__SetField(const ::String &inName,const Dynamic &inValue,bool inCallProp)
{
	return super::__SetField(inName,inValue,inCallProp);
}

void VirtualDevice_obj::__GetFields(Array< ::String> &outFields)
{
	super::__GetFields(outFields);
};

static ::String sStaticFields[] = {
	String(null()) };

static ::String sMemberFields[] = {
	String(null()) };

static void sMarkStatics(HX_MARK_PARAMS) {
	HX_MARK_MEMBER_NAME(VirtualDevice_obj::__mClass,"__mClass");
};

static void sVisitStatics(HX_VISIT_PARAMS) {
	HX_VISIT_MEMBER_NAME(VirtualDevice_obj::__mClass,"__mClass");
};

Class VirtualDevice_obj::__mClass;

void VirtualDevice_obj::__register()
{
	hx::Static(__mClass) = hx::RegisterClass(HX_CSTRING("retro.core.VirtualDevice"), hx::TCanCast< VirtualDevice_obj> ,sStaticFields,sMemberFields,
	&__CreateEmpty, &__Create,
	&super::__SGetClass(), 0, sMarkStatics, sVisitStatics);
}

void VirtualDevice_obj::__boot()
{
}

} // end namespace retro
} // end namespace core
