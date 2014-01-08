#ifndef INCLUDED_retro_core_Param
#define INCLUDED_retro_core_Param

#ifndef HXCPP_H
#include <hxcpp.h>
#endif

HX_DECLARE_CLASS2(retro,core,Param)
HX_DECLARE_CLASS2(retro,model,Value)
namespace retro{
namespace core{


class HXCPP_CLASS_ATTRIBUTES  Param_obj : public hx::Object{
	public:
		typedef hx::Object super;
		typedef Param_obj OBJ_;
		Param_obj();
		Void __construct(::String name,::retro::model::Value value);

	public:
		static hx::ObjectPtr< Param_obj > __new(::String name,::retro::model::Value value);
		static Dynamic __CreateEmpty();
		static Dynamic __Create(hx::DynamicArray inArgs);
		~Param_obj();

		HX_DO_RTTI;
		static void __boot();
		static void __register();
		void __Mark(HX_MARK_PARAMS);
		void __Visit(HX_VISIT_PARAMS);
		::String __ToString() const { return HX_CSTRING("Param"); }

		virtual Dynamic getValue( );
		Dynamic getValue_dyn();

		virtual bool isEmpty( );
		Dynamic isEmpty_dyn();

		::retro::model::Value value;
		::String name;
};

} // end namespace retro
} // end namespace core

#endif /* INCLUDED_retro_core_Param */ 
