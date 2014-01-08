#ifndef INCLUDED_VMMain_cpp
#define INCLUDED_VMMain_cpp

#ifndef HXCPP_H
#include <hxcpp.h>
#endif

HX_DECLARE_CLASS0(VMMain_cpp)


class HXCPP_CLASS_ATTRIBUTES  VMMain_cpp_obj : public hx::Object{
	public:
		typedef hx::Object super;
		typedef VMMain_cpp_obj OBJ_;
		VMMain_cpp_obj();
		Void __construct();

	public:
		static hx::ObjectPtr< VMMain_cpp_obj > __new();
		static Dynamic __CreateEmpty();
		static Dynamic __Create(hx::DynamicArray inArgs);
		~VMMain_cpp_obj();

		HX_DO_RTTI;
		static void __boot();
		static void __register();
		void __Mark(HX_MARK_PARAMS);
		void __Visit(HX_VISIT_PARAMS);
		::String __ToString() const { return HX_CSTRING("VMMain_cpp"); }

		static Void main( );
		static Dynamic main_dyn();

};


#endif /* INCLUDED_VMMain_cpp */ 
