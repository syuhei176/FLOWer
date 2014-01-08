#include <hxcpp.h>

#ifndef INCLUDED_Sys
#include <Sys.h>
#endif
#ifndef INCLUDED_VMMain_cpp
#include <VMMain_cpp.h>
#endif
#ifndef INCLUDED_haxe_Json
#include <haxe/Json.h>
#endif
#ifndef INCLUDED_haxe_Log
#include <haxe/Log.h>
#endif
#ifndef INCLUDED_haxe_io_Input
#include <haxe/io/Input.h>
#endif
#ifndef INCLUDED_retro_controller_ImportController
#include <retro/controller/ImportController.h>
#endif
#ifndef INCLUDED_retro_core_VirtualDevice
#include <retro/core/VirtualDevice.h>
#endif
#ifndef INCLUDED_retro_model_Diagram
#include <retro/model/Diagram.h>
#endif
#ifndef INCLUDED_retro_model_EntryJob
#include <retro/model/EntryJob.h>
#endif
#ifndef INCLUDED_retro_model_Job
#include <retro/model/Job.h>
#endif
#ifndef INCLUDED_retro_model_Project
#include <retro/model/Project.h>
#endif
#ifndef INCLUDED_retro_vm_Runtime
#include <retro/vm/Runtime.h>
#endif
#ifndef INCLUDED_sys_io_File
#include <sys/io/File.h>
#endif
#ifndef INCLUDED_sys_io_FileInput
#include <sys/io/FileInput.h>
#endif

Void VMMain_cpp_obj::__construct()
{
	return null();
}

VMMain_cpp_obj::~VMMain_cpp_obj() { }

Dynamic VMMain_cpp_obj::__CreateEmpty() { return  new VMMain_cpp_obj; }
hx::ObjectPtr< VMMain_cpp_obj > VMMain_cpp_obj::__new()
{  hx::ObjectPtr< VMMain_cpp_obj > result = new VMMain_cpp_obj();
	result->__construct();
	return result;}

Dynamic VMMain_cpp_obj::__Create(hx::DynamicArray inArgs)
{  hx::ObjectPtr< VMMain_cpp_obj > result = new VMMain_cpp_obj();
	result->__construct();
	return result;}

Void VMMain_cpp_obj::main( ){
{
		HX_STACK_PUSH("VMMain_cpp::main","VMMain_cpp.hx",12);
		HX_STACK_LINE(13)
		::String filename = ::Sys_obj::args()->__get((int)0);		HX_STACK_VAR(filename,"filename");
		HX_STACK_LINE(14)
		::haxe::Log_obj::trace(filename,hx::SourceInfo(HX_CSTRING("VMMain_cpp.hx"),14,HX_CSTRING("VMMain_cpp"),HX_CSTRING("main")));
		HX_STACK_LINE(15)
		::sys::io::FileInput fi = ::sys::io::File_obj::read(filename,null());		HX_STACK_VAR(fi,"fi");
		HX_STACK_LINE(16)
		::String content = HX_CSTRING("");		HX_STACK_VAR(content,"content");
		HX_STACK_LINE(17)
		while((!(fi->eof()))){
			HX_STACK_LINE(17)
			hx::AddEq(content,fi->readLine());
		}
		HX_STACK_LINE(20)
		::retro::model::Project project = ::retro::model::Project_obj::__new();		HX_STACK_VAR(project,"project");
		HX_STACK_LINE(21)
		::retro::controller::ImportController importController = ::retro::controller::ImportController_obj::__new(project,null());		HX_STACK_VAR(importController,"importController");
		HX_STACK_LINE(22)
		importController->do_import(::haxe::Json_obj::parse(content));
		HX_STACK_LINE(23)
		::retro::vm::Runtime runtime = ::retro::vm::Runtime_obj::__new(project->getRootDiagram());		HX_STACK_VAR(runtime,"runtime");
		HX_STACK_LINE(24)
		::retro::model::EntryJob job = project->getRootDiagram()->getEntryPoint();		HX_STACK_VAR(job,"job");
		HX_STACK_LINE(25)
		runtime->run(job,::Sys_obj::args());
	}
return null();
}


STATIC_HX_DEFINE_DYNAMIC_FUNC0(VMMain_cpp_obj,main,(void))


VMMain_cpp_obj::VMMain_cpp_obj()
{
}

void VMMain_cpp_obj::__Mark(HX_MARK_PARAMS)
{
	HX_MARK_BEGIN_CLASS(VMMain_cpp);
	HX_MARK_END_CLASS();
}

void VMMain_cpp_obj::__Visit(HX_VISIT_PARAMS)
{
}

Dynamic VMMain_cpp_obj::__Field(const ::String &inName,bool inCallProp)
{
	switch(inName.length) {
	case 4:
		if (HX_FIELD_EQ(inName,"main") ) { return main_dyn(); }
	}
	return super::__Field(inName,inCallProp);
}

Dynamic VMMain_cpp_obj::__SetField(const ::String &inName,const Dynamic &inValue,bool inCallProp)
{
	return super::__SetField(inName,inValue,inCallProp);
}

void VMMain_cpp_obj::__GetFields(Array< ::String> &outFields)
{
	super::__GetFields(outFields);
};

static ::String sStaticFields[] = {
	HX_CSTRING("main"),
	String(null()) };

static ::String sMemberFields[] = {
	String(null()) };

static void sMarkStatics(HX_MARK_PARAMS) {
	HX_MARK_MEMBER_NAME(VMMain_cpp_obj::__mClass,"__mClass");
};

static void sVisitStatics(HX_VISIT_PARAMS) {
	HX_VISIT_MEMBER_NAME(VMMain_cpp_obj::__mClass,"__mClass");
};

Class VMMain_cpp_obj::__mClass;

void VMMain_cpp_obj::__register()
{
	hx::Static(__mClass) = hx::RegisterClass(HX_CSTRING("VMMain_cpp"), hx::TCanCast< VMMain_cpp_obj> ,sStaticFields,sMemberFields,
	&__CreateEmpty, &__Create,
	&super::__SGetClass(), 0, sMarkStatics, sVisitStatics);
}

void VMMain_cpp_obj::__boot()
{
}

