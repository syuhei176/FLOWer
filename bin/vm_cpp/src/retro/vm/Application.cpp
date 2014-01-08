#include <hxcpp.h>

#ifndef INCLUDED_retro_model_Diagram
#include <retro/model/Diagram.h>
#endif
#ifndef INCLUDED_retro_vm_Application
#include <retro/vm/Application.h>
#endif
namespace retro{
namespace vm{

Void Application_obj::__construct()
{
HX_STACK_PUSH("Application::new","retro/vm/Application.hx",6);
{
	HX_STACK_LINE(7)
	this->diagram = null();
}
;
	return null();
}

Application_obj::~Application_obj() { }

Dynamic Application_obj::__CreateEmpty() { return  new Application_obj; }
hx::ObjectPtr< Application_obj > Application_obj::__new()
{  hx::ObjectPtr< Application_obj > result = new Application_obj();
	result->__construct();
	return result;}

Dynamic Application_obj::__Create(hx::DynamicArray inArgs)
{  hx::ObjectPtr< Application_obj > result = new Application_obj();
	result->__construct();
	return result;}

Void Application_obj::parse_from_json( ::String json_text){
{
		HX_STACK_PUSH("Application::parse_from_json","retro/vm/Application.hx",20);
		HX_STACK_THIS(this);
		HX_STACK_ARG(json_text,"json_text");
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC1(Application_obj,parse_from_json,(void))

Void Application_obj::parse( Dynamic json_obj){
{
		HX_STACK_PUSH("Application::parse","retro/vm/Application.hx",16);
		HX_STACK_THIS(this);
		HX_STACK_ARG(json_obj,"json_obj");
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC1(Application_obj,parse,(void))

::String Application_obj::getName( ){
	HX_STACK_PUSH("Application::getName","retro/vm/Application.hx",11);
	HX_STACK_THIS(this);
	HX_STACK_LINE(11)
	return HX_CSTRING("Application Name");
}


HX_DEFINE_DYNAMIC_FUNC0(Application_obj,getName,return )


Application_obj::Application_obj()
{
}

void Application_obj::__Mark(HX_MARK_PARAMS)
{
	HX_MARK_BEGIN_CLASS(Application);
	HX_MARK_MEMBER_NAME(diagram,"diagram");
	HX_MARK_END_CLASS();
}

void Application_obj::__Visit(HX_VISIT_PARAMS)
{
	HX_VISIT_MEMBER_NAME(diagram,"diagram");
}

Dynamic Application_obj::__Field(const ::String &inName,bool inCallProp)
{
	switch(inName.length) {
	case 5:
		if (HX_FIELD_EQ(inName,"parse") ) { return parse_dyn(); }
		break;
	case 7:
		if (HX_FIELD_EQ(inName,"getName") ) { return getName_dyn(); }
		if (HX_FIELD_EQ(inName,"diagram") ) { return diagram; }
		break;
	case 15:
		if (HX_FIELD_EQ(inName,"parse_from_json") ) { return parse_from_json_dyn(); }
	}
	return super::__Field(inName,inCallProp);
}

Dynamic Application_obj::__SetField(const ::String &inName,const Dynamic &inValue,bool inCallProp)
{
	switch(inName.length) {
	case 7:
		if (HX_FIELD_EQ(inName,"diagram") ) { diagram=inValue.Cast< ::retro::model::Diagram >(); return inValue; }
	}
	return super::__SetField(inName,inValue,inCallProp);
}

void Application_obj::__GetFields(Array< ::String> &outFields)
{
	outFields->push(HX_CSTRING("diagram"));
	super::__GetFields(outFields);
};

static ::String sStaticFields[] = {
	String(null()) };

static ::String sMemberFields[] = {
	HX_CSTRING("parse_from_json"),
	HX_CSTRING("parse"),
	HX_CSTRING("getName"),
	HX_CSTRING("diagram"),
	String(null()) };

static void sMarkStatics(HX_MARK_PARAMS) {
	HX_MARK_MEMBER_NAME(Application_obj::__mClass,"__mClass");
};

static void sVisitStatics(HX_VISIT_PARAMS) {
	HX_VISIT_MEMBER_NAME(Application_obj::__mClass,"__mClass");
};

Class Application_obj::__mClass;

void Application_obj::__register()
{
	hx::Static(__mClass) = hx::RegisterClass(HX_CSTRING("retro.vm.Application"), hx::TCanCast< Application_obj> ,sStaticFields,sMemberFields,
	&__CreateEmpty, &__Create,
	&super::__SGetClass(), 0, sMarkStatics, sVisitStatics);
}

void Application_obj::__boot()
{
}

} // end namespace retro
} // end namespace vm
