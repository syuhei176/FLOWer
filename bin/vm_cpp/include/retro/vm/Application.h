#ifndef INCLUDED_retro_vm_Application
#define INCLUDED_retro_vm_Application

#ifndef HXCPP_H
#include <hxcpp.h>
#endif

HX_DECLARE_CLASS2(retro,model,Diagram)
HX_DECLARE_CLASS2(retro,vm,Application)
namespace retro{
namespace vm{


class HXCPP_CLASS_ATTRIBUTES  Application_obj : public hx::Object{
	public:
		typedef hx::Object super;
		typedef Application_obj OBJ_;
		Application_obj();
		Void __construct();

	public:
		static hx::ObjectPtr< Application_obj > __new();
		static Dynamic __CreateEmpty();
		static Dynamic __Create(hx::DynamicArray inArgs);
		~Application_obj();

		HX_DO_RTTI;
		static void __boot();
		static void __register();
		void __Mark(HX_MARK_PARAMS);
		void __Visit(HX_VISIT_PARAMS);
		::String __ToString() const { return HX_CSTRING("Application"); }

		virtual Void parse_from_json( ::String json_text);
		Dynamic parse_from_json_dyn();

		virtual Void parse( Dynamic json_obj);
		Dynamic parse_dyn();

		virtual ::String getName( );
		Dynamic getName_dyn();

		::retro::model::Diagram diagram;
};

} // end namespace retro
} // end namespace vm

#endif /* INCLUDED_retro_vm_Application */ 
