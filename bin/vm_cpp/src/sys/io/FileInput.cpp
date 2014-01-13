#include <hxcpp.h>

#ifndef INCLUDED_cpp_Lib
#include <cpp/Lib.h>
#endif
#ifndef INCLUDED_haxe_io_Eof
#include <haxe/io/Eof.h>
#endif
#ifndef INCLUDED_haxe_io_Error
#include <haxe/io/Error.h>
#endif
#ifndef INCLUDED_haxe_io_Input
#include <haxe/io/Input.h>
#endif
#ifndef INCLUDED_sys_io_FileInput
#include <sys/io/FileInput.h>
#endif
namespace sys{
namespace io{

Void FileInput_obj::__construct(Dynamic f)
{
HX_STACK_PUSH("FileInput::new","/usr/lib/haxe/std/cpp/_std/sys/io/FileInput.hx",30);
{
	HX_STACK_LINE(30)
	this->__f = f;
}
;
	return null();
}

FileInput_obj::~FileInput_obj() { }

Dynamic FileInput_obj::__CreateEmpty() { return  new FileInput_obj; }
hx::ObjectPtr< FileInput_obj > FileInput_obj::__new(Dynamic f)
{  hx::ObjectPtr< FileInput_obj > result = new FileInput_obj();
	result->__construct(f);
	return result;}

Dynamic FileInput_obj::__Create(hx::DynamicArray inArgs)
{  hx::ObjectPtr< FileInput_obj > result = new FileInput_obj();
	result->__construct(inArgs[0]);
	return result;}

bool FileInput_obj::eof( ){
	HX_STACK_PUSH("FileInput::eof","/usr/lib/haxe/std/cpp/_std/sys/io/FileInput.hx",70);
	HX_STACK_THIS(this);
	HX_STACK_LINE(70)
	return ::sys::io::FileInput_obj::file_eof(this->__f);
}


HX_DEFINE_DYNAMIC_FUNC0(FileInput_obj,eof,return )

int FileInput_obj::readByte( ){
	HX_STACK_PUSH("FileInput::readByte","/usr/lib/haxe/std/cpp/_std/sys/io/FileInput.hx",34);
	HX_STACK_THIS(this);
	struct _Function_1_1{
		inline static int Block( ::sys::io::FileInput_obj *__this){
			HX_STACK_PUSH("*::closure","/usr/lib/haxe/std/cpp/_std/sys/io/FileInput.hx",35);
			{
				HX_STACK_LINE(35)
				try{
					HX_STACK_LINE(35)
					return ::sys::io::FileInput_obj::file_read_char(__this->__f);
				}
				catch(Dynamic __e){
					{
						HX_STACK_BEGIN_CATCH
						Dynamic e = __e;{
							HX_STACK_LINE(37)
							return (  ((e->__IsArray())) ? int(hx::Throw (::haxe::io::Eof_obj::__new())) : int(hx::Throw (::haxe::io::Error_obj::Custom(e))) );
						}
					}
				}
			}
			return null();
		}
	};
	HX_STACK_LINE(34)
	return _Function_1_1::Block(this);
}


Dynamic FileInput_obj::file_eof;

Dynamic FileInput_obj::file_read_char;


FileInput_obj::FileInput_obj()
{
}

void FileInput_obj::__Mark(HX_MARK_PARAMS)
{
	HX_MARK_BEGIN_CLASS(FileInput);
	HX_MARK_MEMBER_NAME(__f,"__f");
	super::__Mark(HX_MARK_ARG);
	HX_MARK_END_CLASS();
}

void FileInput_obj::__Visit(HX_VISIT_PARAMS)
{
	HX_VISIT_MEMBER_NAME(__f,"__f");
	super::__Visit(HX_VISIT_ARG);
}

Dynamic FileInput_obj::__Field(const ::String &inName,bool inCallProp)
{
	switch(inName.length) {
	case 3:
		if (HX_FIELD_EQ(inName,"eof") ) { return eof_dyn(); }
		if (HX_FIELD_EQ(inName,"__f") ) { return __f; }
		break;
	case 8:
		if (HX_FIELD_EQ(inName,"file_eof") ) { return file_eof; }
		if (HX_FIELD_EQ(inName,"readByte") ) { return readByte_dyn(); }
		break;
	case 14:
		if (HX_FIELD_EQ(inName,"file_read_char") ) { return file_read_char; }
	}
	return super::__Field(inName,inCallProp);
}

Dynamic FileInput_obj::__SetField(const ::String &inName,const Dynamic &inValue,bool inCallProp)
{
	switch(inName.length) {
	case 3:
		if (HX_FIELD_EQ(inName,"__f") ) { __f=inValue.Cast< Dynamic >(); return inValue; }
		break;
	case 8:
		if (HX_FIELD_EQ(inName,"file_eof") ) { file_eof=inValue.Cast< Dynamic >(); return inValue; }
		break;
	case 14:
		if (HX_FIELD_EQ(inName,"file_read_char") ) { file_read_char=inValue.Cast< Dynamic >(); return inValue; }
	}
	return super::__SetField(inName,inValue,inCallProp);
}

void FileInput_obj::__GetFields(Array< ::String> &outFields)
{
	outFields->push(HX_CSTRING("__f"));
	super::__GetFields(outFields);
};

static ::String sStaticFields[] = {
	HX_CSTRING("file_eof"),
	HX_CSTRING("file_read_char"),
	String(null()) };

static ::String sMemberFields[] = {
	HX_CSTRING("eof"),
	HX_CSTRING("readByte"),
	HX_CSTRING("__f"),
	String(null()) };

static void sMarkStatics(HX_MARK_PARAMS) {
	HX_MARK_MEMBER_NAME(FileInput_obj::__mClass,"__mClass");
	HX_MARK_MEMBER_NAME(FileInput_obj::file_eof,"file_eof");
	HX_MARK_MEMBER_NAME(FileInput_obj::file_read_char,"file_read_char");
};

static void sVisitStatics(HX_VISIT_PARAMS) {
	HX_VISIT_MEMBER_NAME(FileInput_obj::__mClass,"__mClass");
	HX_VISIT_MEMBER_NAME(FileInput_obj::file_eof,"file_eof");
	HX_VISIT_MEMBER_NAME(FileInput_obj::file_read_char,"file_read_char");
};

Class FileInput_obj::__mClass;

void FileInput_obj::__register()
{
	hx::Static(__mClass) = hx::RegisterClass(HX_CSTRING("sys.io.FileInput"), hx::TCanCast< FileInput_obj> ,sStaticFields,sMemberFields,
	&__CreateEmpty, &__Create,
	&super::__SGetClass(), 0, sMarkStatics, sVisitStatics);
}

void FileInput_obj::__boot()
{
	file_eof= ::cpp::Lib_obj::load(HX_CSTRING("std"),HX_CSTRING("file_eof"),(int)1);
	file_read_char= ::cpp::Lib_obj::load(HX_CSTRING("std"),HX_CSTRING("file_read_char"),(int)1);
}

} // end namespace sys
} // end namespace io
