#include <hxcpp.h>

#ifndef INCLUDED_Sys
#include <Sys.h>
#endif
#ifndef INCLUDED_retro_core_Inputs
#include <retro/core/Inputs.h>
#endif
#ifndef INCLUDED_retro_core_JobComponent
#include <retro/core/JobComponent.h>
#endif
#ifndef INCLUDED_retro_core_Outputs
#include <retro/core/Outputs.h>
#endif
#ifndef INCLUDED_retro_core_Param
#include <retro/core/Param.h>
#endif
#ifndef INCLUDED_retro_core_Params
#include <retro/core/Params.h>
#endif
#ifndef INCLUDED_retro_core_Result
#include <retro/core/Result.h>
#endif
#ifndef INCLUDED_retro_core_VirtualDevice
#include <retro/core/VirtualDevice.h>
#endif
#ifndef INCLUDED_retro_library_system_Print
#include <retro/library/system/Print.h>
#endif
#ifndef INCLUDED_retro_pub_RetroType
#include <retro/pub/RetroType.h>
#endif
namespace retro{
namespace library{
namespace system{

Void Print_obj::__construct(::retro::core::VirtualDevice virtualDevice)
{
HX_STACK_PUSH("Print::new","retro/library/system/Print.hx",17);
{
	HX_STACK_LINE(18)
	this->name = HX_CSTRING("Print");
	HX_STACK_LINE(19)
	this->inputs = ::retro::core::Inputs_obj::__new();
	HX_STACK_LINE(20)
	this->outputs = ::retro::core::Outputs_obj::__new();
	HX_STACK_LINE(21)
	this->inputs->add(HX_CSTRING("input"),::retro::pub::RetroType_obj::RNumber);
	HX_STACK_LINE(22)
	this->outputs->add(HX_CSTRING("output"),::retro::pub::RetroType_obj::RNumber);
	HX_STACK_LINE(23)
	this->virtualDevice = virtualDevice;
}
;
	return null();
}

Print_obj::~Print_obj() { }

Dynamic Print_obj::__CreateEmpty() { return  new Print_obj; }
hx::ObjectPtr< Print_obj > Print_obj::__new(::retro::core::VirtualDevice virtualDevice)
{  hx::ObjectPtr< Print_obj > result = new Print_obj();
	result->__construct(virtualDevice);
	return result;}

Dynamic Print_obj::__Create(hx::DynamicArray inArgs)
{  hx::ObjectPtr< Print_obj > result = new Print_obj();
	result->__construct(inArgs[0]);
	return result;}

hx::Object *Print_obj::__ToInterface(const hx::type_info &inType) {
	if (inType==typeid( ::retro::core::JobComponent_obj)) return operator ::retro::core::JobComponent_obj *();
	return super::__ToInterface(inType);
}

::String Print_obj::getModuleName( ){
	HX_STACK_PUSH("Print::getModuleName","retro/library/system/Print.hx",47);
	HX_STACK_THIS(this);
	HX_STACK_LINE(47)
	return HX_CSTRING("system.Print");
}


HX_DEFINE_DYNAMIC_FUNC0(Print_obj,getModuleName,return )

Void Print_obj::onInputRecieved( ::retro::core::Params params,Dynamic cb){
{
		HX_STACK_PUSH("Print::onInputRecieved","retro/library/system/Print.hx",26);
		HX_STACK_THIS(this);
		HX_STACK_ARG(params,"params");
		HX_STACK_ARG(cb,"cb");
		HX_STACK_LINE(27)
		::retro::core::Param input = params->get(HX_CSTRING("input"));		HX_STACK_VAR(input,"input");
		HX_STACK_LINE(28)
		if ((input->isEmpty())){
			HX_STACK_LINE(29)
			cb(null()).Cast< Void >();
			HX_STACK_LINE(30)
			return null();
		}
		HX_STACK_LINE(40)
		::Sys_obj::print(input->getValue());
		HX_STACK_LINE(42)
		::retro::core::Result result = ::retro::core::Result_obj::__new();		HX_STACK_VAR(result,"result");
		HX_STACK_LINE(43)
		result->set(HX_CSTRING("output"),input->getValue());
		HX_STACK_LINE(44)
		cb(result).Cast< Void >();
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC2(Print_obj,onInputRecieved,(void))


Print_obj::Print_obj()
{
}

void Print_obj::__Mark(HX_MARK_PARAMS)
{
	HX_MARK_BEGIN_CLASS(Print);
	HX_MARK_MEMBER_NAME(virtualDevice,"virtualDevice");
	HX_MARK_MEMBER_NAME(outputs,"outputs");
	HX_MARK_MEMBER_NAME(inputs,"inputs");
	HX_MARK_MEMBER_NAME(name,"name");
	HX_MARK_END_CLASS();
}

void Print_obj::__Visit(HX_VISIT_PARAMS)
{
	HX_VISIT_MEMBER_NAME(virtualDevice,"virtualDevice");
	HX_VISIT_MEMBER_NAME(outputs,"outputs");
	HX_VISIT_MEMBER_NAME(inputs,"inputs");
	HX_VISIT_MEMBER_NAME(name,"name");
}

Dynamic Print_obj::__Field(const ::String &inName,bool inCallProp)
{
	switch(inName.length) {
	case 4:
		if (HX_FIELD_EQ(inName,"name") ) { return name; }
		break;
	case 6:
		if (HX_FIELD_EQ(inName,"inputs") ) { return inputs; }
		break;
	case 7:
		if (HX_FIELD_EQ(inName,"outputs") ) { return outputs; }
		break;
	case 13:
		if (HX_FIELD_EQ(inName,"getModuleName") ) { return getModuleName_dyn(); }
		if (HX_FIELD_EQ(inName,"virtualDevice") ) { return virtualDevice; }
		break;
	case 15:
		if (HX_FIELD_EQ(inName,"onInputRecieved") ) { return onInputRecieved_dyn(); }
	}
	return super::__Field(inName,inCallProp);
}

Dynamic Print_obj::__SetField(const ::String &inName,const Dynamic &inValue,bool inCallProp)
{
	switch(inName.length) {
	case 4:
		if (HX_FIELD_EQ(inName,"name") ) { name=inValue.Cast< ::String >(); return inValue; }
		break;
	case 6:
		if (HX_FIELD_EQ(inName,"inputs") ) { inputs=inValue.Cast< ::retro::core::Inputs >(); return inValue; }
		break;
	case 7:
		if (HX_FIELD_EQ(inName,"outputs") ) { outputs=inValue.Cast< ::retro::core::Outputs >(); return inValue; }
		break;
	case 13:
		if (HX_FIELD_EQ(inName,"virtualDevice") ) { virtualDevice=inValue.Cast< ::retro::core::VirtualDevice >(); return inValue; }
	}
	return super::__SetField(inName,inValue,inCallProp);
}

void Print_obj::__GetFields(Array< ::String> &outFields)
{
	outFields->push(HX_CSTRING("virtualDevice"));
	outFields->push(HX_CSTRING("outputs"));
	outFields->push(HX_CSTRING("inputs"));
	outFields->push(HX_CSTRING("name"));
	super::__GetFields(outFields);
};

static ::String sStaticFields[] = {
	String(null()) };

static ::String sMemberFields[] = {
	HX_CSTRING("getModuleName"),
	HX_CSTRING("onInputRecieved"),
	HX_CSTRING("virtualDevice"),
	HX_CSTRING("outputs"),
	HX_CSTRING("inputs"),
	HX_CSTRING("name"),
	String(null()) };

static void sMarkStatics(HX_MARK_PARAMS) {
	HX_MARK_MEMBER_NAME(Print_obj::__mClass,"__mClass");
};

static void sVisitStatics(HX_VISIT_PARAMS) {
	HX_VISIT_MEMBER_NAME(Print_obj::__mClass,"__mClass");
};

Class Print_obj::__mClass;

void Print_obj::__register()
{
	hx::Static(__mClass) = hx::RegisterClass(HX_CSTRING("retro.library.system.Print"), hx::TCanCast< Print_obj> ,sStaticFields,sMemberFields,
	&__CreateEmpty, &__Create,
	&super::__SGetClass(), 0, sMarkStatics, sVisitStatics);
}

void Print_obj::__boot()
{
}

} // end namespace retro
} // end namespace library
} // end namespace system
