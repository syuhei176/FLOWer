#ifndef INCLUDED_retro_vm_Compiler
#define INCLUDED_retro_vm_Compiler

#ifndef HXCPP_H
#include <hxcpp.h>
#endif

HX_DECLARE_CLASS2(retro,vm,Application)
HX_DECLARE_CLASS2(retro,vm,Compiler)
namespace retro{
namespace vm{


class HXCPP_CLASS_ATTRIBUTES  Compiler_obj : public hx::Object{
	public:
		typedef hx::Object super;
		typedef Compiler_obj OBJ_;
		Compiler_obj();
		Void __construct(::retro::vm::Application app);

	public:
		static hx::ObjectPtr< Compiler_obj > __new(::retro::vm::Application app);
		static Dynamic __CreateEmpty();
		static Dynamic __Create(hx::DynamicArray inArgs);
		~Compiler_obj();

		HX_DO_RTTI;
		static void __boot();
		static void __register();
		void __Mark(HX_MARK_PARAMS);
		void __Visit(HX_VISIT_PARAMS);
		::String __ToString() const { return HX_CSTRING("Compiler"); }

		virtual Void compile( ::String lang);
		Dynamic compile_dyn();

		::retro::vm::Application app;
};

} // end namespace retro
} // end namespace vm

#endif /* INCLUDED_retro_vm_Compiler */ 
