#ifndef INCLUDED_retro_library_line2d_Create
#define INCLUDED_retro_library_line2d_Create

#ifndef HXCPP_H
#include <hxcpp.h>
#endif

#include <retro/core/JobComponent.h>
HX_DECLARE_CLASS2(retro,core,Inputs)
HX_DECLARE_CLASS2(retro,core,JobComponent)
HX_DECLARE_CLASS2(retro,core,Outputs)
HX_DECLARE_CLASS2(retro,core,Params)
HX_DECLARE_CLASS2(retro,core,Result)
HX_DECLARE_CLASS3(retro,library,line2d,Create)
namespace retro{
namespace library{
namespace line2d{


class HXCPP_CLASS_ATTRIBUTES  Create_obj : public hx::Object{
	public:
		typedef hx::Object super;
		typedef Create_obj OBJ_;
		Create_obj();
		Void __construct();

	public:
		static hx::ObjectPtr< Create_obj > __new();
		static Dynamic __CreateEmpty();
		static Dynamic __Create(hx::DynamicArray inArgs);
		~Create_obj();

		HX_DO_RTTI;
		static void __boot();
		static void __register();
		void __Mark(HX_MARK_PARAMS);
		void __Visit(HX_VISIT_PARAMS);
		inline operator ::retro::core::JobComponent_obj *()
			{ return new ::retro::core::JobComponent_delegate_< Create_obj >(this); }
		hx::Object *__ToInterface(const hx::type_info &inType);
		::String __ToString() const { return HX_CSTRING("Create"); }

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
} // end namespace line2d

#endif /* INCLUDED_retro_library_line2d_Create */ 
