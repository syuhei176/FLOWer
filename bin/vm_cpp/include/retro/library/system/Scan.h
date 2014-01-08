#ifndef INCLUDED_retro_library_system_Scan
#define INCLUDED_retro_library_system_Scan

#ifndef HXCPP_H
#include <hxcpp.h>
#endif

#include <retro/core/JobComponent.h>
HX_DECLARE_CLASS2(retro,core,Inputs)
HX_DECLARE_CLASS2(retro,core,JobComponent)
HX_DECLARE_CLASS2(retro,core,Outputs)
HX_DECLARE_CLASS2(retro,core,Params)
HX_DECLARE_CLASS2(retro,core,Result)
HX_DECLARE_CLASS2(retro,core,VirtualDevice)
HX_DECLARE_CLASS3(retro,library,system,Scan)
namespace retro{
namespace library{
namespace system{


class HXCPP_CLASS_ATTRIBUTES  Scan_obj : public hx::Object{
	public:
		typedef hx::Object super;
		typedef Scan_obj OBJ_;
		Scan_obj();
		Void __construct(::retro::core::VirtualDevice virtualDevice);

	public:
		static hx::ObjectPtr< Scan_obj > __new(::retro::core::VirtualDevice virtualDevice);
		static Dynamic __CreateEmpty();
		static Dynamic __Create(hx::DynamicArray inArgs);
		~Scan_obj();

		HX_DO_RTTI;
		static void __boot();
		static void __register();
		void __Mark(HX_MARK_PARAMS);
		void __Visit(HX_VISIT_PARAMS);
		inline operator ::retro::core::JobComponent_obj *()
			{ return new ::retro::core::JobComponent_delegate_< Scan_obj >(this); }
		hx::Object *__ToInterface(const hx::type_info &inType);
		::String __ToString() const { return HX_CSTRING("Scan"); }

		virtual ::String getModuleName( );
		Dynamic getModuleName_dyn();

		virtual Void onInputRecieved( ::retro::core::Params params,Dynamic cb);
		Dynamic onInputRecieved_dyn();

		::retro::core::VirtualDevice virtualDevice;
		::retro::core::Outputs outputs;
		::retro::core::Inputs inputs;
		::String name;
};

} // end namespace retro
} // end namespace library
} // end namespace system

#endif /* INCLUDED_retro_library_system_Scan */ 
