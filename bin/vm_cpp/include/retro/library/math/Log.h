#ifndef INCLUDED_retro_library_math_Log
#define INCLUDED_retro_library_math_Log

#ifndef HXCPP_H
#include <hxcpp.h>
#endif

#include <retro/core/JobComponent.h>
HX_DECLARE_CLASS2(retro,core,Inputs)
HX_DECLARE_CLASS2(retro,core,JobComponent)
HX_DECLARE_CLASS2(retro,core,Outputs)
HX_DECLARE_CLASS2(retro,core,Params)
HX_DECLARE_CLASS2(retro,core,Result)
HX_DECLARE_CLASS3(retro,library,math,Log)
namespace retro{
namespace library{
namespace math{


class HXCPP_CLASS_ATTRIBUTES  Log_obj : public hx::Object{
	public:
		typedef hx::Object super;
		typedef Log_obj OBJ_;
		Log_obj();
		Void __construct();

	public:
		static hx::ObjectPtr< Log_obj > __new();
		static Dynamic __CreateEmpty();
		static Dynamic __Create(hx::DynamicArray inArgs);
		~Log_obj();

		HX_DO_RTTI;
		static void __boot();
		static void __register();
		void __Mark(HX_MARK_PARAMS);
		void __Visit(HX_VISIT_PARAMS);
		inline operator ::retro::core::JobComponent_obj *()
			{ return new ::retro::core::JobComponent_delegate_< Log_obj >(this); }
		hx::Object *__ToInterface(const hx::type_info &inType);
		::String __ToString() const { return HX_CSTRING("Log"); }

		virtual ::String getModuleName( );
		Dynamic getModuleName_dyn();

		virtual Void onInputRecieved( ::retro::core::Params params,Dynamic cb);
		Dynamic onInputRecieved_dyn();

		::retro::core::Outputs outputs;
		::retro::core::Inputs inputs;
		::String name;
};

} // end namespace retro
} // end namespace library
} // end namespace math

#endif /* INCLUDED_retro_library_math_Log */ 