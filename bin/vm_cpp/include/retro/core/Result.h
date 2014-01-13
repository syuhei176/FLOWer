#ifndef INCLUDED_retro_core_Result
#define INCLUDED_retro_core_Result

#ifndef HXCPP_H
#include <hxcpp.h>
#endif

HX_DECLARE_CLASS2(retro,core,Result)
HX_DECLARE_CLASS2(retro,core,ScriptReturnValue)
namespace retro{
namespace core{


class HXCPP_CLASS_ATTRIBUTES  Result_obj : public hx::Object{
	public:
		typedef hx::Object super;
		typedef Result_obj OBJ_;
		Result_obj();
		Void __construct();

	public:
		static hx::ObjectPtr< Result_obj > __new();
		static Dynamic __CreateEmpty();
		static Dynamic __Create(hx::DynamicArray inArgs);
		~Result_obj();

		HX_DO_RTTI;
		static void __boot();
		static void __register();
		void __Mark(HX_MARK_PARAMS);
		void __Visit(HX_VISIT_PARAMS);
		::String __ToString() const { return HX_CSTRING("Result"); }

		virtual ::retro::core::ScriptReturnValue get( ::String portname);
		Dynamic get_dyn();

		virtual Void set( ::String portname,Dynamic value);
		Dynamic set_dyn();

		Array< ::Dynamic > script_result;
};

} // end namespace retro
} // end namespace core

#endif /* INCLUDED_retro_core_Result */ 
