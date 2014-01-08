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
#ifndef INCLUDED_retro_library_data_Stack
#include <retro/library/data/Stack.h>
#endif
#ifndef INCLUDED_retro_pub_RetroType
#include <retro/pub/RetroType.h>
#endif
namespace retro{
namespace library{
namespace data{

Void Stack_obj::__construct()
{
HX_STACK_PUSH("Stack::new","retro/library/data/Stack.hx",17);
{
	HX_STACK_LINE(18)
	this->name = HX_CSTRING("Stack");
	HX_STACK_LINE(19)
	this->inputs = ::retro::core::Inputs_obj::__new();
	HX_STACK_LINE(20)
	this->outputs = ::retro::core::Outputs_obj::__new();
	HX_STACK_LINE(21)
	this->inputs->add(HX_CSTRING("push"),::retro::pub::RetroType_obj::RNumber);
	HX_STACK_LINE(22)
	this->inputs->add(HX_CSTRING("pop"),::retro::pub::RetroType_obj::RNumber);
	HX_STACK_LINE(23)
	this->outputs->add(HX_CSTRING("output"),::retro::pub::RetroType_obj::RNumber);
	HX_STACK_LINE(25)
	this->datas = Dynamic( Array_obj<Dynamic>::__new() );
}
;
	return null();
}

Stack_obj::~Stack_obj() { }

Dynamic Stack_obj::__CreateEmpty() { return  new Stack_obj; }
hx::ObjectPtr< Stack_obj > Stack_obj::__new()
{  hx::ObjectPtr< Stack_obj > result = new Stack_obj();
	result->__construct();
	return result;}

Dynamic Stack_obj::__Create(hx::DynamicArray inArgs)
{  hx::ObjectPtr< Stack_obj > result = new Stack_obj();
	result->__construct();
	return result;}

hx::Object *Stack_obj::__ToInterface(const hx::type_info &inType) {
	if (inType==typeid( ::retro::core::JobComponent_obj)) return operator ::retro::core::JobComponent_obj *();
	return super::__ToInterface(inType);
}

::String Stack_obj::getModuleName( ){
	HX_STACK_PUSH("Stack::getModuleName","retro/library/data/Stack.hx",42);
	HX_STACK_THIS(this);
	HX_STACK_LINE(42)
	return HX_CSTRING("data.Stack");
}


HX_DEFINE_DYNAMIC_FUNC0(Stack_obj,getModuleName,return )

Void Stack_obj::onInputRecieved( ::retro::core::Params params,Dynamic cb){
{
		HX_STACK_PUSH("Stack::onInputRecieved","retro/library/data/Stack.hx",28);
		HX_STACK_THIS(this);
		HX_STACK_ARG(params,"params");
		HX_STACK_ARG(cb,"cb");
		HX_STACK_LINE(29)
		::retro::core::Param push = params->get(HX_CSTRING("push"));		HX_STACK_VAR(push,"push");
		HX_STACK_LINE(30)
		::retro::core::Param pop = params->get(HX_CSTRING("pop"));		HX_STACK_VAR(pop,"pop");
		HX_STACK_LINE(31)
		if ((!(push->isEmpty()))){
			HX_STACK_LINE(32)
			this->datas->__Field(HX_CSTRING("push"),true)(push->getValue());
			HX_STACK_LINE(33)
			cb(null()).Cast< Void >();
			HX_STACK_LINE(34)
			return null();
		}
		else{
			HX_STACK_LINE(35)
			if ((!(pop->isEmpty()))){
				HX_STACK_LINE(36)
				::retro::core::Result result = ::retro::core::Result_obj::__new();		HX_STACK_VAR(result,"result");
				HX_STACK_LINE(37)
				result->set(HX_CSTRING("output"),this->datas->__Field(HX_CSTRING("pop"),true)());
				HX_STACK_LINE(38)
				cb(result).Cast< Void >();
			}
		}
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC2(Stack_obj,onInputRecieved,(void))


Stack_obj::Stack_obj()
{
}

void Stack_obj::__Mark(HX_MARK_PARAMS)
{
	HX_MARK_BEGIN_CLASS(Stack);
	HX_MARK_MEMBER_NAME(datas,"datas");
	HX_MARK_MEMBER_NAME(outputs,"outputs");
	HX_MARK_MEMBER_NAME(inputs,"inputs");
	HX_MARK_MEMBER_NAME(name,"name");
	HX_MARK_END_CLASS();
}

void Stack_obj::__Visit(HX_VISIT_PARAMS)
{
	HX_VISIT_MEMBER_NAME(datas,"datas");
	HX_VISIT_MEMBER_NAME(outputs,"outputs");
	HX_VISIT_MEMBER_NAME(inputs,"inputs");
	HX_VISIT_MEMBER_NAME(name,"name");
}

Dynamic Stack_obj::__Field(const ::String &inName,bool inCallProp)
{
	switch(inName.length) {
	case 4:
		if (HX_FIELD_EQ(inName,"name") ) { return name; }
		break;
	case 5:
		if (HX_FIELD_EQ(inName,"datas") ) { return datas; }
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

Dynamic Stack_obj::__SetField(const ::String &inName,const Dynamic &inValue,bool inCallProp)
{
	switch(inName.length) {
	case 4:
		if (HX_FIELD_EQ(inName,"name") ) { name=inValue.Cast< ::String >(); return inValue; }
		break;
	case 5:
		if (HX_FIELD_EQ(inName,"datas") ) { datas=inValue.Cast< Dynamic >(); return inValue; }
		break;
	case 6:
		if (HX_FIELD_EQ(inName,"inputs") ) { inputs=inValue.Cast< ::retro::core::Inputs >(); return inValue; }
		break;
	case 7:
		if (HX_FIELD_EQ(inName,"outputs") ) { outputs=inValue.Cast< ::retro::core::Outputs >(); return inValue; }
	}
	return super::__SetField(inName,inValue,inCallProp);
}

void Stack_obj::__GetFields(Array< ::String> &outFields)
{
	outFields->push(HX_CSTRING("datas"));
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
	HX_CSTRING("datas"),
	HX_CSTRING("outputs"),
	HX_CSTRING("inputs"),
	HX_CSTRING("name"),
	String(null()) };

static void sMarkStatics(HX_MARK_PARAMS) {
	HX_MARK_MEMBER_NAME(Stack_obj::__mClass,"__mClass");
};

static void sVisitStatics(HX_VISIT_PARAMS) {
	HX_VISIT_MEMBER_NAME(Stack_obj::__mClass,"__mClass");
};

Class Stack_obj::__mClass;

void Stack_obj::__register()
{
	hx::Static(__mClass) = hx::RegisterClass(HX_CSTRING("retro.library.data.Stack"), hx::TCanCast< Stack_obj> ,sStaticFields,sMemberFields,
	&__CreateEmpty, &__Create,
	&super::__SGetClass(), 0, sMarkStatics, sVisitStatics);
}

void Stack_obj::__boot()
{
}

} // end namespace retro
} // end namespace library
} // end namespace data
