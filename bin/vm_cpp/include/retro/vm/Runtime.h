#ifndef INCLUDED_retro_vm_Runtime
#define INCLUDED_retro_vm_Runtime

#ifndef HXCPP_H
#include <hxcpp.h>
#endif

HX_DECLARE_CLASS1(haxe,Timer)
HX_DECLARE_CLASS2(retro,model,Diagram)
HX_DECLARE_CLASS2(retro,model,EntryJob)
HX_DECLARE_CLASS2(retro,model,Job)
HX_DECLARE_CLASS2(retro,model,Value)
HX_DECLARE_CLASS2(retro,vm,Runtime)
namespace retro{
namespace vm{


class HXCPP_CLASS_ATTRIBUTES  Runtime_obj : public hx::Object{
	public:
		typedef hx::Object super;
		typedef Runtime_obj OBJ_;
		Runtime_obj();
		Void __construct(::retro::model::Diagram diagram);

	public:
		static hx::ObjectPtr< Runtime_obj > __new(::retro::model::Diagram diagram);
		static Dynamic __CreateEmpty();
		static Dynamic __Create(hx::DynamicArray inArgs);
		~Runtime_obj();

		HX_DO_RTTI;
		static void __boot();
		static void __register();
		void __Mark(HX_MARK_PARAMS);
		void __Visit(HX_VISIT_PARAMS);
		::String __ToString() const { return HX_CSTRING("Runtime"); }

		virtual Void run_step( );
		Dynamic run_step_dyn();

		virtual bool invoke_entry( ::retro::model::Job entry,::retro::model::Value v);
		Dynamic invoke_entry_dyn();

		virtual Void stop( );
		Dynamic stop_dyn();

		virtual Void run( ::retro::model::EntryJob entry,Array< ::String > v);
		Dynamic run_dyn();

		virtual bool isRunning( );
		Dynamic isRunning_dyn();

		::haxe::Timer timer;
		::retro::model::Diagram diagram;
};

} // end namespace retro
} // end namespace vm

#endif /* INCLUDED_retro_vm_Runtime */ 
