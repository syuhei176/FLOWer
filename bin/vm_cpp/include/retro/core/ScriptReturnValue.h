#ifndef INCLUDED_retro_core_ScriptReturnValue
#define INCLUDED_retro_core_ScriptReturnValue

#ifndef HXCPP_H
#include <hxcpp.h>
#endif

HX_DECLARE_CLASS2(retro,core,ScriptReturnValue)
namespace retro{
namespace core{


class HXCPP_CLASS_ATTRIBUTES  ScriptReturnValue_obj : public hx::Object{
	public:
		typedef hx::Object super;
		typedef ScriptReturnValue_obj OBJ_;
		ScriptReturnValue_obj();
		Void __construct(::String portname,Dynamic value);

	public:
		static hx::ObjectPtr< ScriptReturnValue_obj > __new(::String portname,Dynamic value);
		static Dynamic __CreateEmpty();
		static Dynamic __Create(hx::DynamicArray inArgs);
		~ScriptReturnValue_obj();

		HX_DO_RTTI;
		static void __boot();
		static void __register();
		void __Mark(HX_MARK_PARAMS);
		void __Visit(HX_VISIT_PARAMS);
		::String __ToString() const { return HX_CSTRING("ScriptReturnValue"); }

		Dynamic value;
		::String portname;
};

} // end namespace retro
} // end namespace core

#endif /* INCLUDED_retro_core_ScriptReturnValue */ 
