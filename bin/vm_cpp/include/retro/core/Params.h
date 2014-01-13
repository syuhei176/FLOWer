#ifndef INCLUDED_retro_core_Params
#define INCLUDED_retro_core_Params

#ifndef HXCPP_H
#include <hxcpp.h>
#endif

HX_DECLARE_CLASS2(retro,core,Param)
HX_DECLARE_CLASS2(retro,core,Params)
HX_DECLARE_CLASS2(retro,model,Value)
namespace retro{
namespace core{


class HXCPP_CLASS_ATTRIBUTES  Params_obj : public hx::Object{
	public:
		typedef hx::Object super;
		typedef Params_obj OBJ_;
		Params_obj();
		Void __construct();

	public:
		static hx::ObjectPtr< Params_obj > __new();
		static Dynamic __CreateEmpty();
		static Dynamic __Create(hx::DynamicArray inArgs);
		~Params_obj();

		HX_DO_RTTI;
		static void __boot();
		static void __register();
		void __Mark(HX_MARK_PARAMS);
		void __Visit(HX_VISIT_PARAMS);
		::String __ToString() const { return HX_CSTRING("Params"); }

		virtual ::String toString( );
		Dynamic toString_dyn();

		virtual Void add( ::String name,::retro::model::Value value);
		Dynamic add_dyn();

		virtual ::retro::core::Param get( ::String name);
		Dynamic get_dyn();

		Array< ::Dynamic > params;
};

} // end namespace retro
} // end namespace core

#endif /* INCLUDED_retro_core_Params */ 
