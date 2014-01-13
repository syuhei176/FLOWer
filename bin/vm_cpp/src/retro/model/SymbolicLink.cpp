#include <hxcpp.h>

#ifndef INCLUDED_retro_core_Input
#include <retro/core/Input.h>
#endif
#ifndef INCLUDED_retro_core_Inputs
#include <retro/core/Inputs.h>
#endif
#ifndef INCLUDED_retro_core_JobComponent
#include <retro/core/JobComponent.h>
#endif
#ifndef INCLUDED_retro_core_Output
#include <retro/core/Output.h>
#endif
#ifndef INCLUDED_retro_core_Outputs
#include <retro/core/Outputs.h>
#endif
#ifndef INCLUDED_retro_core_Params
#include <retro/core/Params.h>
#endif
#ifndef INCLUDED_retro_core_Result
#include <retro/core/Result.h>
#endif
#ifndef INCLUDED_retro_model_InputPort
#include <retro/model/InputPort.h>
#endif
#ifndef INCLUDED_retro_model_Job
#include <retro/model/Job.h>
#endif
#ifndef INCLUDED_retro_model_OutputPort
#include <retro/model/OutputPort.h>
#endif
#ifndef INCLUDED_retro_model_Port
#include <retro/model/Port.h>
#endif
#ifndef INCLUDED_retro_model_SymbolicLink
#include <retro/model/SymbolicLink.h>
#endif
#ifndef INCLUDED_retro_pub_RetroType
#include <retro/pub/RetroType.h>
#endif
#ifndef INCLUDED_retro_vm_Worker
#include <retro/vm/Worker.h>
#endif
namespace retro{
namespace model{

Void SymbolicLink_obj::__construct(::String id,::retro::core::JobComponent jobComponent)
{
HX_STACK_PUSH("SymbolicLink::new","retro/model/SymbolicLink.hx",11);
{
	HX_STACK_LINE(12)
	super::__construct(id);
	HX_STACK_LINE(13)
	this->prototype = jobComponent;
	HX_STACK_LINE(14)
	{
		HX_STACK_LINE(14)
		int _g = (int)0;		HX_STACK_VAR(_g,"_g");
		Array< ::Dynamic > _g1 = this->prototype->__Field(HX_CSTRING("inputs"),true)->__Field(HX_CSTRING("getArray"),true)();		HX_STACK_VAR(_g1,"_g1");
		HX_STACK_LINE(14)
		while(((_g < _g1->length))){
			HX_STACK_LINE(14)
			::retro::core::Input ip = _g1->__get(_g).StaticCast< ::retro::core::Input >();		HX_STACK_VAR(ip,"ip");
			HX_STACK_LINE(14)
			++(_g);
			HX_STACK_LINE(15)
			this->addInputPort(::retro::model::InputPort_obj::__new(hx::ObjectPtr<OBJ_>(this),ip->getType(),ip->getName()));
		}
	}
	HX_STACK_LINE(17)
	{
		HX_STACK_LINE(17)
		int _g = (int)0;		HX_STACK_VAR(_g,"_g");
		Array< ::Dynamic > _g1 = this->prototype->__Field(HX_CSTRING("outputs"),true)->__Field(HX_CSTRING("getArray"),true)();		HX_STACK_VAR(_g1,"_g1");
		HX_STACK_LINE(17)
		while(((_g < _g1->length))){
			HX_STACK_LINE(17)
			::retro::core::Output op = _g1->__get(_g).StaticCast< ::retro::core::Output >();		HX_STACK_VAR(op,"op");
			HX_STACK_LINE(17)
			++(_g);
			HX_STACK_LINE(18)
			this->addOutputPort(::retro::model::OutputPort_obj::__new(hx::ObjectPtr<OBJ_>(this),op->getType(),op->getName()));
		}
	}
}
;
	return null();
}

SymbolicLink_obj::~SymbolicLink_obj() { }

Dynamic SymbolicLink_obj::__CreateEmpty() { return  new SymbolicLink_obj; }
hx::ObjectPtr< SymbolicLink_obj > SymbolicLink_obj::__new(::String id,::retro::core::JobComponent jobComponent)
{  hx::ObjectPtr< SymbolicLink_obj > result = new SymbolicLink_obj();
	result->__construct(id,jobComponent);
	return result;}

Dynamic SymbolicLink_obj::__Create(hx::DynamicArray inArgs)
{  hx::ObjectPtr< SymbolicLink_obj > result = new SymbolicLink_obj();
	result->__construct(inArgs[0],inArgs[1]);
	return result;}

Dynamic SymbolicLink_obj::getJSON( ){
	HX_STACK_PUSH("SymbolicLink::getJSON","retro/model/SymbolicLink.hx",34);
	HX_STACK_THIS(this);
	struct _Function_1_1{
		inline static Dynamic Block( ){
			HX_STACK_PUSH("*::closure","retro/model/SymbolicLink.hx",35);
			{
				hx::Anon __result = hx::Anon_obj::Create();
				return __result;
			}
			return null();
		}
	};
	HX_STACK_LINE(35)
	Dynamic json = _Function_1_1::Block();		HX_STACK_VAR(json,"json");
	HX_STACK_LINE(36)
	json->__FieldRef(HX_CSTRING("id")) = this->getId();
	HX_STACK_LINE(37)
	json->__FieldRef(HX_CSTRING("ref")) = this->getName();
	HX_STACK_LINE(38)
	return json;
}


::retro::vm::Worker SymbolicLink_obj::getWorker( ){
	HX_STACK_PUSH("SymbolicLink::getWorker","retro/model/SymbolicLink.hx",30);
	HX_STACK_THIS(this);
	HX_STACK_LINE(30)
	return ::retro::vm::Worker_obj::__new(hx::ObjectPtr<OBJ_>(this),this->prototype->onInputRecieved_dyn());
}


::String SymbolicLink_obj::getName( ){
	HX_STACK_PUSH("SymbolicLink::getName","retro/model/SymbolicLink.hx",26);
	HX_STACK_THIS(this);
	HX_STACK_LINE(26)
	return this->prototype->getModuleName();
}


::retro::core::JobComponent SymbolicLink_obj::getPrototype( ){
	HX_STACK_PUSH("SymbolicLink::getPrototype","retro/model/SymbolicLink.hx",22);
	HX_STACK_THIS(this);
	HX_STACK_LINE(22)
	return this->prototype;
}


HX_DEFINE_DYNAMIC_FUNC0(SymbolicLink_obj,getPrototype,return )


SymbolicLink_obj::SymbolicLink_obj()
{
}

void SymbolicLink_obj::__Mark(HX_MARK_PARAMS)
{
	HX_MARK_BEGIN_CLASS(SymbolicLink);
	HX_MARK_MEMBER_NAME(prototype,"prototype");
	super::__Mark(HX_MARK_ARG);
	HX_MARK_END_CLASS();
}

void SymbolicLink_obj::__Visit(HX_VISIT_PARAMS)
{
	HX_VISIT_MEMBER_NAME(prototype,"prototype");
	super::__Visit(HX_VISIT_ARG);
}

Dynamic SymbolicLink_obj::__Field(const ::String &inName,bool inCallProp)
{
	switch(inName.length) {
	case 7:
		if (HX_FIELD_EQ(inName,"getJSON") ) { return getJSON_dyn(); }
		if (HX_FIELD_EQ(inName,"getName") ) { return getName_dyn(); }
		break;
	case 9:
		if (HX_FIELD_EQ(inName,"getWorker") ) { return getWorker_dyn(); }
		if (HX_FIELD_EQ(inName,"prototype") ) { return prototype; }
		break;
	case 12:
		if (HX_FIELD_EQ(inName,"getPrototype") ) { return getPrototype_dyn(); }
	}
	return super::__Field(inName,inCallProp);
}

Dynamic SymbolicLink_obj::__SetField(const ::String &inName,const Dynamic &inValue,bool inCallProp)
{
	switch(inName.length) {
	case 9:
		if (HX_FIELD_EQ(inName,"prototype") ) { prototype=inValue.Cast< ::retro::core::JobComponent >(); return inValue; }
	}
	return super::__SetField(inName,inValue,inCallProp);
}

void SymbolicLink_obj::__GetFields(Array< ::String> &outFields)
{
	outFields->push(HX_CSTRING("prototype"));
	super::__GetFields(outFields);
};

static ::String sStaticFields[] = {
	String(null()) };

static ::String sMemberFields[] = {
	HX_CSTRING("getJSON"),
	HX_CSTRING("getWorker"),
	HX_CSTRING("getName"),
	HX_CSTRING("getPrototype"),
	HX_CSTRING("prototype"),
	String(null()) };

static void sMarkStatics(HX_MARK_PARAMS) {
	HX_MARK_MEMBER_NAME(SymbolicLink_obj::__mClass,"__mClass");
};

static void sVisitStatics(HX_VISIT_PARAMS) {
	HX_VISIT_MEMBER_NAME(SymbolicLink_obj::__mClass,"__mClass");
};

Class SymbolicLink_obj::__mClass;

void SymbolicLink_obj::__register()
{
	hx::Static(__mClass) = hx::RegisterClass(HX_CSTRING("retro.model.SymbolicLink"), hx::TCanCast< SymbolicLink_obj> ,sStaticFields,sMemberFields,
	&__CreateEmpty, &__Create,
	&super::__SGetClass(), 0, sMarkStatics, sVisitStatics);
}

void SymbolicLink_obj::__boot()
{
}

} // end namespace retro
} // end namespace model
