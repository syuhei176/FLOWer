#include <hxcpp.h>

#ifndef INCLUDED_retro_core_FlowerClass
#include <retro/core/FlowerClass.h>
#endif
#ifndef INCLUDED_retro_pub_RetroType
#include <retro/pub/RetroType.h>
#endif
namespace retro{
namespace pub{

::retro::pub::RetroType RetroType_obj::RBool;

::retro::pub::RetroType  RetroType_obj::RClass(::retro::core::FlowerClass type)
	{ return hx::CreateEnum< RetroType_obj >(HX_CSTRING("RClass"),7,hx::DynamicArray(0,1).Add(type)); }

::retro::pub::RetroType RetroType_obj::REmpty;

::retro::pub::RetroType  RetroType_obj::RList(::retro::pub::RetroType type)
	{ return hx::CreateEnum< RetroType_obj >(HX_CSTRING("RList"),4,hx::DynamicArray(0,1).Add(type)); }

::retro::pub::RetroType RetroType_obj::RNumber;

::retro::pub::RetroType RetroType_obj::RString;

::retro::pub::RetroType  RetroType_obj::RTuple(Array< ::Dynamic > types)
	{ return hx::CreateEnum< RetroType_obj >(HX_CSTRING("RTuple"),5,hx::DynamicArray(0,1).Add(types)); }

::retro::pub::RetroType  RetroType_obj::RUnknown(int id)
	{ return hx::CreateEnum< RetroType_obj >(HX_CSTRING("RUnknown"),6,hx::DynamicArray(0,1).Add(id)); }

HX_DEFINE_CREATE_ENUM(RetroType_obj)

int RetroType_obj::__FindIndex(::String inName)
{
	if (inName==HX_CSTRING("RBool")) return 3;
	if (inName==HX_CSTRING("RClass")) return 7;
	if (inName==HX_CSTRING("REmpty")) return 0;
	if (inName==HX_CSTRING("RList")) return 4;
	if (inName==HX_CSTRING("RNumber")) return 2;
	if (inName==HX_CSTRING("RString")) return 1;
	if (inName==HX_CSTRING("RTuple")) return 5;
	if (inName==HX_CSTRING("RUnknown")) return 6;
	return super::__FindIndex(inName);
}

STATIC_HX_DEFINE_DYNAMIC_FUNC1(RetroType_obj,RClass,return)

STATIC_HX_DEFINE_DYNAMIC_FUNC1(RetroType_obj,RList,return)

STATIC_HX_DEFINE_DYNAMIC_FUNC1(RetroType_obj,RTuple,return)

STATIC_HX_DEFINE_DYNAMIC_FUNC1(RetroType_obj,RUnknown,return)

int RetroType_obj::__FindArgCount(::String inName)
{
	if (inName==HX_CSTRING("RBool")) return 0;
	if (inName==HX_CSTRING("RClass")) return 1;
	if (inName==HX_CSTRING("REmpty")) return 0;
	if (inName==HX_CSTRING("RList")) return 1;
	if (inName==HX_CSTRING("RNumber")) return 0;
	if (inName==HX_CSTRING("RString")) return 0;
	if (inName==HX_CSTRING("RTuple")) return 1;
	if (inName==HX_CSTRING("RUnknown")) return 1;
	return super::__FindArgCount(inName);
}

Dynamic RetroType_obj::__Field(const ::String &inName,bool inCallProp)
{
	if (inName==HX_CSTRING("RBool")) return RBool;
	if (inName==HX_CSTRING("RClass")) return RClass_dyn();
	if (inName==HX_CSTRING("REmpty")) return REmpty;
	if (inName==HX_CSTRING("RList")) return RList_dyn();
	if (inName==HX_CSTRING("RNumber")) return RNumber;
	if (inName==HX_CSTRING("RString")) return RString;
	if (inName==HX_CSTRING("RTuple")) return RTuple_dyn();
	if (inName==HX_CSTRING("RUnknown")) return RUnknown_dyn();
	return super::__Field(inName,inCallProp);
}

static ::String sStaticFields[] = {
	HX_CSTRING("REmpty"),
	HX_CSTRING("RString"),
	HX_CSTRING("RNumber"),
	HX_CSTRING("RBool"),
	HX_CSTRING("RList"),
	HX_CSTRING("RTuple"),
	HX_CSTRING("RUnknown"),
	HX_CSTRING("RClass"),
	::String(null()) };

static void sMarkStatics(HX_MARK_PARAMS) {
	HX_MARK_MEMBER_NAME(RetroType_obj::RBool,"RBool");
	HX_MARK_MEMBER_NAME(RetroType_obj::REmpty,"REmpty");
	HX_MARK_MEMBER_NAME(RetroType_obj::RNumber,"RNumber");
	HX_MARK_MEMBER_NAME(RetroType_obj::RString,"RString");
};

static void sVisitStatic(HX_VISIT_PARAMS) {
	HX_VISIT_MEMBER_NAME(RetroType_obj::__mClass,"__mClass");
	HX_VISIT_MEMBER_NAME(RetroType_obj::RBool,"RBool");
	HX_VISIT_MEMBER_NAME(RetroType_obj::REmpty,"REmpty");
	HX_VISIT_MEMBER_NAME(RetroType_obj::RNumber,"RNumber");
	HX_VISIT_MEMBER_NAME(RetroType_obj::RString,"RString");
};

static ::String sMemberFields[] = { ::String(null()) };
Class RetroType_obj::__mClass;

Dynamic __Create_RetroType_obj() { return new RetroType_obj; }

void RetroType_obj::__register()
{

hx::Static(__mClass) = hx::RegisterClass(HX_CSTRING("retro.pub.RetroType"), hx::TCanCast< RetroType_obj >,sStaticFields,sMemberFields,
	&__Create_RetroType_obj, &__Create,
	&super::__SGetClass(), &CreateRetroType_obj, sMarkStatics, sVisitStatic);
}

void RetroType_obj::__boot()
{
hx::Static(RBool) = hx::CreateEnum< RetroType_obj >(HX_CSTRING("RBool"),3);
hx::Static(REmpty) = hx::CreateEnum< RetroType_obj >(HX_CSTRING("REmpty"),0);
hx::Static(RNumber) = hx::CreateEnum< RetroType_obj >(HX_CSTRING("RNumber"),2);
hx::Static(RString) = hx::CreateEnum< RetroType_obj >(HX_CSTRING("RString"),1);
}


} // end namespace retro
} // end namespace pub
