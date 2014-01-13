#ifndef INCLUDED_retro_model_Project
#define INCLUDED_retro_model_Project

#ifndef HXCPP_H
#include <hxcpp.h>
#endif

HX_DECLARE_CLASS2(retro,model,Diagram)
HX_DECLARE_CLASS2(retro,model,Project)
namespace retro{
namespace model{


class HXCPP_CLASS_ATTRIBUTES  Project_obj : public hx::Object{
	public:
		typedef hx::Object super;
		typedef Project_obj OBJ_;
		Project_obj();
		Void __construct();

	public:
		static hx::ObjectPtr< Project_obj > __new();
		static Dynamic __CreateEmpty();
		static Dynamic __Create(hx::DynamicArray inArgs);
		~Project_obj();

		HX_DO_RTTI;
		static void __boot();
		static void __register();
		void __Mark(HX_MARK_PARAMS);
		void __Visit(HX_VISIT_PARAMS);
		::String __ToString() const { return HX_CSTRING("Project"); }

		virtual Void fireOnConnection( ::retro::model::Diagram d);
		Dynamic fireOnConnection_dyn();

		virtual Void onDiagramAdded( Dynamic listener);
		Dynamic onDiagramAdded_dyn();

		virtual ::retro::model::Diagram getRootDiagram( );
		Dynamic getRootDiagram_dyn();

		virtual Void setRootDiagram( ::retro::model::Diagram diagram);
		Dynamic setRootDiagram_dyn();

		Dynamic onDiagramAddedListeners;
		::retro::model::Diagram diagram;
};

} // end namespace retro
} // end namespace model

#endif /* INCLUDED_retro_model_Project */ 
