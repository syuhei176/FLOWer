#ifndef INCLUDED_retro_vm_Worker
#define INCLUDED_retro_vm_Worker

#ifndef HXCPP_H
#include <hxcpp.h>
#endif

HX_DECLARE_CLASS2(retro,core,Params)
HX_DECLARE_CLASS2(retro,core,Result)
HX_DECLARE_CLASS2(retro,model,Job)
HX_DECLARE_CLASS2(retro,vm,Worker)
namespace retro{
namespace vm{


class HXCPP_CLASS_ATTRIBUTES  Worker_obj : public hx::Object{
	public:
		typedef hx::Object super;
		typedef Worker_obj OBJ_;
		Worker_obj();
		Void __construct(::retro::model::Job job,Dynamic func);

	public:
		static hx::ObjectPtr< Worker_obj > __new(::retro::model::Job job,Dynamic func);
		static Dynamic __CreateEmpty();
		static Dynamic __Create(hx::DynamicArray inArgs);
		~Worker_obj();

		HX_DO_RTTI;
		static void __boot();
		static void __register();
		void __Mark(HX_MARK_PARAMS);
		void __Visit(HX_VISIT_PARAMS);
		::String __ToString() const { return HX_CSTRING("Worker"); }

		virtual Void act( ::retro::core::Params params,Dynamic cb);
		Dynamic act_dyn();

		Dynamic func;
		Dynamic &func_dyn() { return func;}
		::retro::model::Job job;
};

} // end namespace retro
} // end namespace vm

#endif /* INCLUDED_retro_vm_Worker */ 
