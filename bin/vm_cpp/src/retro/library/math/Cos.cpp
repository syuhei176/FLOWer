#include <hxcpp.h>

#ifndef INCLUDED_hxMath
#include <hxMath.h>
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
#ifndef INCLUDED_retro_library_math_Cos
#include <retro/library/math/Cos.h>
#endif
#ifndef INCLUDED_retro_pub_RetroType
#include <retro/pub/RetroType.h>
#endif
namespace retro{
namespace library{
namespace math{

Void Cos_obj::__construct()
{
HX_STACK_PUSH("Cos::new","retro/library/math/Cos.hx",17);
{
	HX_STACK_LINE(18)
	this->name = HX_CSTRING("Cos");
	HX_STACK_LINE(19)
	this->inputs = ::retro::core::Inputs_obj::__new();
	HX_STACK_LINE(20)
	this->outputs = ::retro::core::Outputs_obj::__new();
	HX_STACK_LINE(21)
	this->inputs->add(HX_CSTRING("input"),::retro::pub::RetroType_obj::RNumber);
	HX_STACK_LINE(22)
	this->outputs->add(HX_CSTRING("output"),::retro::pub::RetroType_obj::RNumber);
}
;
	return null();
}

Cos_obj::~Cos_obj() { }

Dynamic Cos_obj::__CreateEmpty() { return  new Cos_obj; }
hx::ObjectPtr< Cos_obj > Cos_obj::__new()
{  hx::ObjectPtr< Cos_obj > result = new Cos_obj();
	result->__construct();
	return result;}

Dynamic Cos_obj::__Create(hx::DynamicArray inArgs)
{  hx::ObjectPtr< Cos_obj > result = new Cos_obj();
	result->__construct();
	return result;}

hx::Object *Cos_obj::__ToInterface(const hx::type_info &inType) {
	if (inType==typeid( ::retro::core::JobComponent_obj)) return operator ::retro::core::JobComponent_obj *();
	return super::__ToInterface(inType);
}

::String Cos_obj::getModuleName( ){
	HX_STACK_PUSH("Cos::getModuleName","retro/library/math/Cos.hx",36);
	HX_STACK_THIS(this);
	HX_STACK_LINE(36)
	return HX_CSTRING("math.Cos");
}


HX_DEFINE_DYNAMIC_FUNC0(Cos_obj,getModuleName,return )

Void Cos_obj::onInputRecieved( ::retro::core::Params params,Dynamic cb){
{
		HX_STACK_PUSH("Cos::onInputRecieved","retro/library/math/Cos.hx",25);
		HX_STACK_THIS(this);
		HX_STACK_ARG(params,"params");
		HX_STACK_ARG(cb,"cb");
		HX_STACK_LINE(26)
		::retro::core::Param input = params->get(HX_CSTRING("input"));		HX_STACK_VAR(input,"input");
		HX_STACK_LINE(27)
		if ((input->isEmpty())){
			HX_STACK_LINE(28)
			cb(null()).Cast< Void >();
			HX_STACK_LINE(29)
			return null();
		}
		HX_STACK_LINE(31)
		::retro::core::Result result = ::retro::core::Result_obj::__new();		HX_STACK_VAR(result,"result");
		HX_STACK_LINE(32)
		result->set(HX_CSTRING("output"),::Math_obj::cos(input->getValue()));
		HX_STACK_LINE(33)
		cb(result).Cast< Void >();
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC2(Cos_obj,onInputRecieved,(void))


Cos_obj::Cos_obj()
{
}

void Cos_obj::__Mark(HX_MARK_PARAMS)
{
	HX_MARK_BEGIN_CLASS(Cos);
	HX_MARK_MEMBER_NAME(outputs,"outputs");
	HX_MARK_MEMBER_NAME(inputs,"inputs");
	HX_MARK_MEMBER_NAME(name,"name");
	HX_MARK_END_CLASS();
}

void Cos_obj::__Visit(HX_VISIT_PARAMS)
{
	HX_VISIT_MEMBER_NAME(outputs,"outputs");
	HX_VISIT_MEMBER_NAME(inputs,"inputs");
	HX_VISIT_MEMBER_NAME(name,"name");
}

Dynamic Cos_obj::__Field(const ::String &inName,bool inCallProp)
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

Dynamic Cos_obj::__SetField(const ::String &inName,const Dynamic &inValue,bool inCallProp)
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

void Cos_obj::__GetFields(Array< ::String> &outFields)
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
	HX_MARK_MEMBER_NAME(Cos_obj::__mClass,"__mClass");
};

static void sVisitStatics(HX_VISIT_PARAMS) {
	HX_VISIT_MEMBER_NAME(Cos_obj::__mClass,"__mClass");
};

Class Cos_obj::__mClass;

void Cos_obj::__register()
{
	hx::Static(__mClass) = hx::RegisterClass(HX_CSTRING("retro.library.math.Cos"), hx::TCanCast< Cos_obj> ,sStaticFields,sMemberFields,
	&__CreateEmpty, &__Create,
	&super::__SGetClass(), 0, sMarkStatics, sVisitStatics);
}

void Cos_obj::__boot()
{
}

} // end namespace retro
} // end namespace library
} // end namespace math
