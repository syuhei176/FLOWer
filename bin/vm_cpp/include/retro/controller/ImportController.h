#ifndef INCLUDED_retro_controller_ImportController
#define INCLUDED_retro_controller_ImportController

#ifndef HXCPP_H
#include <hxcpp.h>
#endif

HX_DECLARE_CLASS2(retro,controller,ImportController)
HX_DECLARE_CLASS2(retro,core,JobComponent)
HX_DECLARE_CLASS2(retro,core,VirtualDevice)
HX_DECLARE_CLASS2(retro,model,Diagram)
HX_DECLARE_CLASS2(retro,model,Project)
namespace retro{
namespace controller{


class HXCPP_CLASS_ATTRIBUTES  ImportController_obj : public hx::Object{
	public:
		typedef hx::Object super;
		typedef ImportController_obj OBJ_;
		ImportController_obj();
		Void __construct(::retro::model::Project project,::retro::core::VirtualDevice virtualDevice);

	public:
		static hx::ObjectPtr< ImportController_obj > __new(::retro::model::Project project,::retro::core::VirtualDevice virtualDevice);
		static Dynamic __CreateEmpty();
		static Dynamic __Create(hx::DynamicArray inArgs);
		~ImportController_obj();

		HX_DO_RTTI;
		static void __boot();
		static void __register();
		void __Mark(HX_MARK_PARAMS);
		void __Visit(HX_VISIT_PARAMS);
		::String __ToString() const { return HX_CSTRING("ImportController"); }

		virtual Void import_job( Dynamic model,::retro::model::Diagram diagram);
		Dynamic import_job_dyn();

		virtual Void import_diagram( ::retro::model::Diagram diagram,Dynamic diagram_model);
		Dynamic import_diagram_dyn();

		virtual Void do_import( Dynamic model);
		Dynamic do_import_dyn();

		virtual ::retro::core::JobComponent getModule( ::String name);
		Dynamic getModule_dyn();

		virtual ::retro::model::Project getProject( );
		Dynamic getProject_dyn();

		Array< ::Dynamic > modules;
		::retro::model::Project project;
};

} // end namespace retro
} // end namespace controller

#endif /* INCLUDED_retro_controller_ImportController */ 
