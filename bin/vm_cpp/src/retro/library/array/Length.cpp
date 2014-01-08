#include <hxcpp.h>

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
#ifndef INCLUDED_retro_library_array_Length
#include <retro/library/array/Length.h>
#endif
#ifndef INCLUDED_retro_pub_RetroType
#include <retro/pub/RetroType.h>
#endif
namespace retro{
namespace library{
namespace array{

Void Length_obj::__construct()
{
HX_STACK_PUSH("Length::new","retro/library/array/Length.hx",15);
{
	HX_STACK_LINE(16)
	this->name = HX_CSTRING("Length");
	HX_STACK_LINE(17)
	this->inputs = ::retro::core::Inputs_obj::__new();
	HX_STACK_LINE(18)
	this->outputs = ::retro::core::Outputs_obj::__new();
	HX_STACK_LINE(19)
	this->inputs->add(HX_CSTRING("array"),::retro::pub::RetroType_obj::RNumber);
	HX_STACK_LINE(20)
	this->outputs->add(HX_CSTRING("output"),::retro::pub::RetroType_obj::RNumber);
}
;
	return null();
}

Length_obj::~Length_obj() { }

Dynamic Length_obj::__CreateEmpty() { return  new Length_obj; }
hx::ObjectPtr< Length_obj > Length_obj::__new()
{  hx::ObjectPtr< Length_obj > result = new Length_obj();
	result->__construct();
	return result;}

Dynamic Length_obj::__Create(hx::DynamicArray inArgs)
{  hx::ObjectPtr< Length_obj > result = new Length_obj();
	result->__construct();
	return result;}

hx::Object *Length_obj::__ToInterface(const hx::type_info &inType) {
	if (inType==typeid( ::retro::core::JobComponent_obj)) return operator ::retro::core::JobComponent_obj *();
	return super::__ToInterface(inType);
}

::String Length_obj::getModuleName( ){
	HX_STACK_PUSH("Length::getModuleName","retro/library/array/Length.hx",34);
	HX_STACK_THIS(this);
	HX_STACK_LINE(34)
	return HX_CSTRING("array.Length");
}


HX_DEFINE_DYNAMIC_FUNC0(Length_obj,getModuleName,return )

Void Length_obj::onInputRecieved( ::retro::core::Params params,Dynamic cb){
{
		HX_STACK_PUSH("Length::onInputRecieved","retro/library/array/Length.hx",23);
		HX_STACK_THIS(this);
		HX_STACK_ARG(params,"params");
		HX_STACK_ARG(cb,"cb");
		HX_STACK_LINE(24)
		::retro::core::Param array = params->get(HX_CSTRING("array"));		HX_STACK_VAR(array,"array");
		HX_STACK_LINE(25)
		if ((array->isEmpty())){
			HX_STACK_LINE(26)
			cb(null()).Cast< Void >();
			HX_STACK_LINE(27)
			return null();
		}
		HX_STACK_LINE(29)
		::retro::core::Result result = ::retro::core::Result_obj::__new();		HX_STACK_VAR(result,"result");
		HX_STACK_LINE(30)
		result->set(HX_CSTRING("output"),array->getValue()->__Field(HX_CSTRING("length"),true));
		HX_STACK_LINE(31)
		cb(result).Cast< Void >();
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC2(Length_obj,onInputRecieved,(void))


Length_obj::Length_obj()
{
}

void Length_obj::__Mark(HX_MARK_PARAMS)
{
	HX_MARK_BEGIN_CLASS(Length);
	HX_MARK_MEMBER_NAME(outputs,"outputs");
	HX_MARK_MEMBER_NAME(inputs,"inputs");
	HX_MARK_MEMBER_NAME(name,"name");
	HX_MARK_END_CLASS();
}

void Length_obj::__Visit(HX_VISIT_PARAMS)
{
	HX_VISIT_MEMBER_NAME(outputs,"outputs");
	HX_VISIT_MEMBER_NAME(inputs,"inputs");
	HX_VISIT_MEMBER_NAME(name,"name");
}

Dynamic Length_obj::__Field(const ::String &inName,bool inCallProp)
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
		break;
	case 15:
		if (HX_FIELD_EQ(inName,"onInputRecieved") ) { return onInputRecieved_dyn(); }
	}
	return super::__Field(inName,inCallProp);
}

Dynamic Length_obj::__SetField(const ::String &inName,const Dynamic &inValue,bool inCallProp)
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
	}
	return super::__SetField(inName,inValue,inCallProp);
}

void Length_obj::__GetFields(Array< ::String> &outFields)
{
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
	HX_CSTRING("outputs"),
	HX_CSTRING("inputs"),
	HX_CSTRING("name"),
	String(null()) };

static void sMarkStatics(HX_MARK_PARAMS) {
	HX_MARK_MEMBER_NAME(Length_obj::__mClass,"__mClass");
};

static void sVisitStatics(HX_VISIT_PARAMS) {
	HX_VISIT_MEMBER_NAME(Length_obj::__mClass,"__mClass");
};

Class Length_obj::__mClass;

void Length_obj::__register()
{
	hx::Static(__mClass) = hx::RegisterClass(HX_CSTRING("retro.library.array.Length"), hx::TCanCast< Length_obj> ,sStaticFields,sMemberFields,
	&__CreateEmpty, &__Create,
	&super::__SGetClass(), 0, sMarkStatics, sVisitStatics);
}

void Length_obj::__boot()
{
}

} // end namespace retro
} // end namespace library
} // end namespace array
