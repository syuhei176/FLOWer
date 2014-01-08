#ifndef INCLUDED_sys_io_File
#define INCLUDED_sys_io_File

#ifndef HXCPP_H
#include <hxcpp.h>
#endif

HX_DECLARE_CLASS2(haxe,io,Input)
HX_DECLARE_CLASS2(sys,io,File)
HX_DECLARE_CLASS2(sys,io,FileInput)
namespace sys{
namespace io{


class HXCPP_CLASS_ATTRIBUTES  File_obj : public hx::Object{
	public:
		typedef hx::Object super;
		typedef File_obj OBJ_;
		File_obj();
		Void __construct();

	public:
		static hx::ObjectPtr< File_obj > __new();
		static Dynamic __CreateEmpty();
		static Dynamic __Create(hx::DynamicArray inArgs);
		~File_obj();

		HX_DO_RTTI;
		static void __boot();
		static void __register();
		void __Mark(HX_MARK_PARAMS);
		void __Visit(HX_VISIT_PARAMS);
		::String __ToString() const { return HX_CSTRING("File"); }

		static ::sys::io::FileInput read( ::String path,hx::Null< bool >  binary);
		static Dynamic read_dyn();

		static Dynamic file_open;
		static Dynamic &file_open_dyn() { return file_open;}
};

} // end namespace sys
} // end namespace io

#endif /* INCLUDED_sys_io_File */ 
