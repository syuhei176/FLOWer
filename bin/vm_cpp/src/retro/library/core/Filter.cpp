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
#ifndef INCLUDED_retro_library_core_Filter
#include <retro/library/core/Filter.h>
#endif
#ifndef INCLUDED_retro_pub_RetroType
#include <retro/pub/RetroType.h>
#endif
namespace retro{
namespace library{
namespace core{

Void Filter_obj::__construct()
{
HX_STACK_PUSH("Filter::new","retro/library/core/Filter.hx",15);
{
	HX_STACK_LINE(16)
	this->name = HX_CSTRING("Filter");
	HX_STACK_LINE(17)
	this->inputs = ::retro::core::Inputs_obj::__new();
	HX_STACK_LINE(18)
	this->outputs = ::retro::core::Outputs_obj::__new();
	HX_STACK_LINE(19)
	this->inputs->add(HX_CSTRING("value"),::retro::pub::RetroType_obj::RNumber);
	HX_STACK_LINE(20)
	this->inputs->add(HX_CSTRING("comparison"),::retro::pub::RetroType_obj::RNumber);
	HX_STACK_LINE(21)
	this->inputs->add(HX_CSTRING("operator"),::retro::pub::RetroType_obj::RString);
	HX_STACK_LINE(22)
	this->outputs->add(HX_CSTRING("pass"),::retro::pub::RetroType_obj::RNumber);
}
;
	return null();
}

Filter_obj::~Filter_obj() { }

Dynamic Filter_obj::__CreateEmpty() { return  new Filter_obj; }
hx::ObjectPtr< Filter_obj > Filter_obj::__new()
{  hx::ObjectPtr< Filter_obj > result = new Filter_obj();
	result->__construct();
	return result;}

Dynamic Filter_obj::__Create(hx::DynamicArray inArgs)
{  hx::ObjectPtr< Filter_obj > result = new Filter_obj();
	result->__construct();
	return result;}

hx::Object *Filter_obj::__ToInterface(const hx::type_info &inType) {
	if (inType==typeid( ::retro::core::JobComponent_obj)) return operator ::retro::core::JobComponent_obj *();
	return super::__ToInterface(inType);
}

::String Filter_obj::getModuleName( ){
	HX_STACK_PUSH("Filter::getModuleName","retro/library/core/Filter.hx",60);
	HX_STACK_THIS(this);
	HX_STACK_LINE(60)
	return HX_CSTRING("core.Filter");
}


HX_DEFINE_DYNAMIC_FUNC0(Filter_obj,getModuleName,return )

Void Filter_obj::onInputRecieved( ::retro::core::Params params,Dynamic cb){
{
		HX_STACK_PUSH("Filter::onInputRecieved","retro/library/core/Filter.hx",25);
		HX_STACK_THIS(this);
		HX_STACK_ARG(params,"params");
		HX_STACK_ARG(cb,"cb");
		HX_STACK_LINE(26)
		::retro::core::Param value = params->get(HX_CSTRING("value"));		HX_STACK_VAR(value,"value");
		HX_STACK_LINE(27)
		::retro::core::Param comparison = params->get(HX_CSTRING("comparison"));		HX_STACK_VAR(comparison,"comparison");
		HX_STACK_LINE(28)
		::retro::core::Param _operator = params->get(HX_CSTRING("operator"));		HX_STACK_VAR(_operator,"operator");
		HX_STACK_LINE(29)
		if (((bool((bool(value->isEmpty()) || bool(comparison->isEmpty()))) || bool(_operator->isEmpty())))){
			HX_STACK_LINE(30)
			cb(null()).Cast< Void >();
			HX_STACK_LINE(31)
			return null();
		}
		HX_STACK_LINE(33)
		bool pass = false;		HX_STACK_VAR(pass,"pass");
		HX_STACK_LINE(34)
		{
			HX_STACK_LINE(34)
			Dynamic _g = _operator->getValue();		HX_STACK_VAR(_g,"_g");
			HX_STACK_LINE(34)
			Dynamic _switch_1 = (_g);
			if (  ( _switch_1==HX_CSTRING("eq")) ||  ( _switch_1==HX_CSTRING("=="))){
				HX_STACK_LINE(35)
				pass = (value->getValue() == comparison->getValue());
			}
			else if (  ( _switch_1==HX_CSTRING("ne")) ||  ( _switch_1==HX_CSTRING("!="))){
				HX_STACK_LINE(37)
				pass = (value->getValue() != comparison->getValue());
			}
			else if (  ( _switch_1==HX_CSTRING("gt")) ||  ( _switch_1==HX_CSTRING(">"))){
				HX_STACK_LINE(39)
				pass = (value->getValue() > comparison->getValue());
			}
			else if (  ( _switch_1==HX_CSTRING("lt")) ||  ( _switch_1==HX_CSTRING("<"))){
				HX_STACK_LINE(41)
				pass = (value->getValue() < comparison->getValue());
			}
			else if (  ( _switch_1==HX_CSTRING("ge")) ||  ( _switch_1==HX_CSTRING(">="))){
				HX_STACK_LINE(43)
				pass = (value->getValue() >= comparison->getValue());
			}
			else if (  ( _switch_1==HX_CSTRING("le")) ||  ( _switch_1==HX_CSTRING("<="))){
				HX_STACK_LINE(45)
				pass = (value->getValue() <= comparison->getValue());
			}
			else  {
				HX_STACK_LINE(48)
				cb(null()).Cast< Void >();
				HX_STACK_LINE(49)
				return null();
			}
;
;
		}
		HX_STACK_LINE(51)
		if (((pass == false))){
			HX_STACK_LINE(52)
			cb(null()).Cast< Void >();
			HX_STACK_LINE(53)
			return null();
		}
		HX_STACK_LINE(55)
		::retro::core::Result result = ::retro::core::Result_obj::__new();		HX_STACK_VAR(result,"result");
		HX_STACK_LINE(56)
		result->set(HX_CSTRING("pass"),value->getValue());
		HX_STACK_LINE(57)
		cb(result).Cast< Void >();
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC2(Filter_obj,onInputRecieved,(void))


Filter_obj::Filter_obj()
{
}

void Filter_obj::__Mark(HX_MARK_PARAMS)
{
	HX_MARK_BEGIN_CLASS(Filter);
	HX_MARK_MEMBER_NAME(outputs,"outputs");
	HX_MARK_MEMBER_NAME(inputs,"inputs");
	HX_MARK_MEMBER_NAME(name,"name");
	HX_MARK_END_CLASS();
}

void Filter_obj::__Visit(HX_VISIT_PARAMS)
{
	HX_VISIT_MEMBER_NAME(outputs,"outputs");
	HX_VISIT_MEMBER_NAME(inputs,"inputs");
	HX_VISIT_MEMBER_NAME(name,"name");
}

Dynamic Filter_obj::__Field(const ::String &inName,bool inCallProp)
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

Dynamic Filter_obj::__SetField(const ::String &inName,const Dynamic &inValue,bool inCallProp)
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

void Filter_obj::__GetFields(Array< ::String> &outFields)
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
	HX_MARK_MEMBER_NAME(Filter_obj::__mClass,"__mClass");
};

static void sVisitStatics(HX_VISIT_PARAMS) {
	HX_VISIT_MEMBER_NAME(Filter_obj::__mClass,"__mClass");
};

Class Filter_obj::__mClass;

void Filter_obj::__register()
{
	hx::Static(__mClass) = hx::RegisterClass(HX_CSTRING("retro.library.core.Filter"), hx::TCanCast< Filter_obj> ,sStaticFields,sMemberFields,
	&__CreateEmpty, &__Create,
	&super::__SGetClass(), 0, sMarkStatics, sVisitStatics);
}

void Filter_obj::__boot()
{
}

} // end namespace retro
} // end namespace library
} // end namespace core
