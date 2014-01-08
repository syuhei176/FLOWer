#ifndef INCLUDED_retro_core_JobComponent
#define INCLUDED_retro_core_JobComponent

#ifndef HXCPP_H
#include <hxcpp.h>
#endif

HX_DECLARE_CLASS2(retro,core,Inputs)
HX_DECLARE_CLASS2(retro,core,JobComponent)
HX_DECLARE_CLASS2(retro,core,Outputs)
HX_DECLARE_CLASS2(retro,core,Params)
HX_DECLARE_CLASS2(retro,core,Result)
namespace retro{
namespace core{


class HXCPP_CLASS_ATTRIBUTES  JobComponent_obj : public hx::Interface{
	public:
		typedef hx::Interface super;
		typedef JobComponent_obj OBJ_;
		HX_DO_INTERFACE_RTTI;
		static void __boot();
virtual ::String getModuleName( )=0;
		Dynamic getModuleName_dyn();
virtual Void onInputRecieved( ::retro::core::Params params,Dynamic cb)=0;
		Dynamic onInputRecieved_dyn();
};

#define DELEGATE_retro_core_JobComponent \
virtual ::String getModuleName( ) { return mDelegate->getModuleName();}  \
virtual Dynamic getModuleName_dyn() { return mDelegate->getModuleName_dyn();}  \
virtual Void onInputRecieved( ::retro::core::Params params,Dynamic cb) { return mDelegate->onInputRecieved(params,cb);}  \
virtual Dynamic onInputRecieved_dyn() { return mDelegate->onInputRecieved_dyn();}  \


template<typename IMPL>
class JobComponent_delegate_ : public JobComponent_obj
{
	protected:
		IMPL *mDelegate;
	public:
		JobComponent_delegate_(IMPL *inDelegate) : mDelegate(inDelegate) {}
		hx::Object *__GetRealObject() { return mDelegate; }
		void __Visit(HX_VISIT_PARAMS) { HX_VISIT_OBJECT(mDelegate); }
		DELEGATE_retro_core_JobComponent
};

} // end namespace retro
} // end namespace core

#endif /* INCLUDED_retro_core_JobComponent */ 
