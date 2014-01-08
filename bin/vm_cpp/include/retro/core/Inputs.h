#ifndef INCLUDED_retro_core_Inputs
#define INCLUDED_retro_core_Inputs

#ifndef HXCPP_H
#include <hxcpp.h>
#endif

HX_DECLARE_CLASS2(retro,core,Input)
HX_DECLARE_CLASS2(retro,core,Inputs)
HX_DECLARE_CLASS2(retro,pub,RetroType)
namespace retro{
namespace core{


class HXCPP_CLASS_ATTRIBUTES  Inputs_obj : public hx::Object{
	public:
		typedef hx::Object super;
		typedef Inputs_obj OBJ_;
		Inputs_obj();
		Void __construct();

	public:
		static hx::ObjectPtr< Inputs_obj > __new();
		static Dynamic __CreateEmpty();
		static Dynamic __Create(hx::DynamicArray inArgs);
		~Inputs_obj();

		HX_DO_RTTI;
		static void __boot();
		static void __register();
		void __Mark(HX_MARK_PARAMS);
		void __Visit(HX_VISIT_PARAMS);
		::String __ToString() const { return HX_CSTRING("Inputs"); }

		virtual Array< ::Dynamic > getArray( );
		Dynamic getArray_dyn();

		virtual ::retro::core::Input get( ::String name);
		Dynamic get_dyn();

		virtual Void add( ::String name,::retro::pub::RetroType type);
		Dynamic add_dyn();

		Array< ::Dynamic > inputs;
};

} // end namespace retro
} // end namespace core

#endif /* INCLUDED_retro_core_Inputs */ 
