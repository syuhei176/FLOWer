#ifndef INCLUDED_retro_core_FlowerClass
#define INCLUDED_retro_core_FlowerClass

#ifndef HXCPP_H
#include <hxcpp.h>
#endif

HX_DECLARE_CLASS2(retro,core,FlowerClass)
namespace retro{
namespace core{


class HXCPP_CLASS_ATTRIBUTES  FlowerClass_obj : public hx::Interface{
	public:
		typedef hx::Interface super;
		typedef FlowerClass_obj OBJ_;
		HX_DO_INTERFACE_RTTI;
		static void __boot();
};

#define DELEGATE_retro_core_FlowerClass \


template<typename IMPL>
class FlowerClass_delegate_ : public FlowerClass_obj
{
	protected:
		IMPL *mDelegate;
	public:
		FlowerClass_delegate_(IMPL *inDelegate) : mDelegate(inDelegate) {}
		hx::Object *__GetRealObject() { return mDelegate; }
		void __Visit(HX_VISIT_PARAMS) { HX_VISIT_OBJECT(mDelegate); }
		DELEGATE_retro_core_FlowerClass
};

} // end namespace retro
} // end namespace core

#endif /* INCLUDED_retro_core_FlowerClass */ 
