#ifndef INCLUDED_retro_model_SymbolicLink
#define INCLUDED_retro_model_SymbolicLink

#ifndef HXCPP_H
#include <hxcpp.h>
#endif

#include <retro/model/Job.h>
HX_DECLARE_CLASS2(retro,core,JobComponent)
HX_DECLARE_CLASS2(retro,model,Job)
HX_DECLARE_CLASS2(retro,model,SymbolicLink)
HX_DECLARE_CLASS2(retro,vm,Worker)
namespace retro{
namespace model{


class HXCPP_CLASS_ATTRIBUTES  SymbolicLink_obj : public ::retro::model::Job_obj{
	public:
		typedef ::retro::model::Job_obj super;
		typedef SymbolicLink_obj OBJ_;
		SymbolicLink_obj();
		Void __construct(::String id,::retro::core::JobComponent jobComponent);

	public:
		static hx::ObjectPtr< SymbolicLink_obj > __new(::String id,::retro::core::JobComponent jobComponent);
		static Dynamic __CreateEmpty();
		static Dynamic __Create(hx::DynamicArray inArgs);
		~SymbolicLink_obj();

		HX_DO_RTTI;
		static void __boot();
		static void __register();
		void __Mark(HX_MARK_PARAMS);
		void __Visit(HX_VISIT_PARAMS);
		::String __ToString() const { return HX_CSTRING("SymbolicLink"); }

		virtual Dynamic getJSON( );

		virtual ::retro::vm::Worker getWorker( );

		virtual ::String getName( );

		virtual ::retro::core::JobComponent getPrototype( );
		Dynamic getPrototype_dyn();

		::retro::core::JobComponent prototype;
};

} // end namespace retro
} // end namespace model

#endif /* INCLUDED_retro_model_SymbolicLink */ 
