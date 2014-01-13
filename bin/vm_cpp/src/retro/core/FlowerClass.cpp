#include <hxcpp.h>

#ifndef INCLUDED_retro_core_FlowerClass
#include <retro/core/FlowerClass.h>
#endif
namespace retro{
namespace core{


static ::String sMemberFields[] = {
	HX_CSTRING("name"),
	String(null()) };

static void sMarkStatics(HX_MARK_PARAMS) {
	HX_MARK_MEMBER_NAME(FlowerClass_obj::__mClass,"__mClass");
};

static void sVisitStatics(HX_VISIT_PARAMS) {
	HX_VISIT_MEMBER_NAME(FlowerClass_obj::__mClass,"__mClass");
};

Class FlowerClass_obj::__mClass;

void FlowerClass_obj::__register()
{
	hx::Static(__mClass) = hx::RegisterClass(HX_CSTRING("retro.core.FlowerClass"), hx::TCanCast< FlowerClass_obj> ,0,sMemberFields,
	0, 0,
	&super::__SGetClass(), 0, sMarkStatics, sVisitStatics);
}

void FlowerClass_obj::__boot()
{
}

} // end namespace retro
} // end namespace core
