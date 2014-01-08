#ifndef INCLUDED_retro_core_Input
#define INCLUDED_retro_core_Input

#ifndef HXCPP_H
#include <hxcpp.h>
#endif

HX_DECLARE_CLASS2(retro,core,Input)
HX_DECLARE_CLASS2(retro,pub,RetroType)
namespace retro{
namespace core{


class HXCPP_CLASS_ATTRIBUTES  Input_obj : public hx::Object{
	public:
		typedef hx::Object super;
		typedef Input_obj OBJ_;
		Input_obj();
		Void __construct(::String name,::retro::pub::RetroType type);

	public:
		static hx::ObjectPtr< Input_obj > __new(::String name,::retro::pub::RetroType type);
		static Dynamic __CreateEmpty();
		static Dynamic __Create(hx::DynamicArray inArgs);
		~Input_obj();

		HX_DO_RTTI;
		static void __boot();
		static void __register();
		void __Mark(HX_MARK_PARAMS);
		void __Visit(HX_VISIT_PARAMS);
		::String __ToString() const { return HX_CSTRING("Input"); }

		virtual ::retro::pub::RetroType getType( );
		Dynamic getType_dyn();

		virtual ::String getName( );
		Dynamic getName_dyn();

		::retro::pub::RetroType type;
		::String name;
};

} // end namespace retro
} // end namespace core

#endif /* INCLUDED_retro_core_Input */ 
