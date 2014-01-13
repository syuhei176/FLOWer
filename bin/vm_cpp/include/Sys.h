#ifndef INCLUDED_Sys
#define INCLUDED_Sys

#ifndef HXCPP_H
#include <hxcpp.h>
#endif

HX_DECLARE_CLASS0(Sys)
HX_DECLARE_CLASS2(haxe,io,Input)


class HXCPP_CLASS_ATTRIBUTES  Sys_obj : public hx::Object{
	public:
		typedef hx::Object super;
		typedef Sys_obj OBJ_;
		Sys_obj();
		Void __construct();

	public:
		static hx::ObjectPtr< Sys_obj > __new();
		static Dynamic __CreateEmpty();
		static Dynamic __Create(hx::DynamicArray inArgs);
		~Sys_obj();

		HX_DO_RTTI;
		static void __boot();
		static void __register();
		void __Mark(HX_MARK_PARAMS);
		void __Visit(HX_VISIT_PARAMS);
		::String __ToString() const { return HX_CSTRING("Sys"); }

		static Void print( Dynamic v);
		static Dynamic print_dyn();

		static ::haxe::io::Input _stdin( );
		static Dynamic _stdin_dyn();

		static Array< ::String > args( );
		static Dynamic args_dyn();

		static Void sleep( Float seconds);
		static Dynamic sleep_dyn();

		static Dynamic _sleep;
		static Dynamic &_sleep_dyn() { return _sleep;}
		static Dynamic file_stdin;
		static Dynamic &file_stdin_dyn() { return file_stdin;}
};


#endif /* INCLUDED_Sys */ 
