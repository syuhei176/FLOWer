#include <hxcpp.h>

#ifndef INCLUDED_retro_model_Job
#include <retro/model/Job.h>
#endif
#ifndef INCLUDED_retro_model_Port
#include <retro/model/Port.h>
#endif
#ifndef INCLUDED_retro_pub_RetroType
#include <retro/pub/RetroType.h>
#endif
namespace retro{
namespace model{

Void Port_obj::__construct(::retro::model::Job parent,::retro::pub::RetroType type,::String name)
{
HX_STACK_PUSH("Port::new","retro/model/Port.hx",10);
{
	HX_STACK_LINE(11)
	this->parent = parent;
	HX_STACK_LINE(12)
	this->type = type;
	HX_STACK_LINE(13)
	this->name = name;
}
;
	return null();
}

Port_obj::~Port_obj() { }

Dynamic Port_obj::__CreateEmpty() { return  new Port_obj; }
hx::ObjectPtr< Port_obj > Port_obj::__new(::retro::model::Job parent,::retro::pub::RetroType type,::String name)
{  hx::ObjectPtr< Port_obj > result = new Port_obj();
	result->__construct(parent,type,name);
	return result;}

Dynamic Port_obj::__Create(hx::DynamicArray inArgs)
{  hx::ObjectPtr< Port_obj > result = new Port_obj();
	result->__construct(inArgs[0],inArgs[1],inArgs[2]);
	return result;}

::retro::model::Job Port_obj::getParentJob( ){
	HX_STACK_PUSH("Port::getParentJob","retro/model/Port.hx",23);
	HX_STACK_THIS(this);
	HX_STACK_LINE(23)
	return this->parent;
}


HX_DEFINE_DYNAMIC_FUNC0(Port_obj,getParentJob,return )

::String Port_obj::getName( ){
	HX_STACK_PUSH("Port::getName","retro/model/Port.hx",20);
	HX_STACK_THIS(this);
	HX_STACK_LINE(20)
	return this->name;
}


HX_DEFINE_DYNAMIC_FUNC0(Port_obj,getName,return )

::String Port_obj::getURI( ){
	HX_STACK_PUSH("Port::getURI","retro/model/Port.hx",16);
	HX_STACK_THIS(this);
	HX_STACK_LINE(16)
	return ((this->parent->getId() + HX_CSTRING(".")) + this->getName());
}


HX_DEFINE_DYNAMIC_FUNC0(Port_obj,getURI,return )


Port_obj::Port_obj()
{
}

void Port_obj::__Mark(HX_MARK_PARAMS)
{
	HX_MARK_BEGIN_CLASS(Port);
	HX_MARK_MEMBER_NAME(name,"name");
	HX_MARK_MEMBER_NAME(type,"type");
	HX_MARK_MEMBER_NAME(parent,"parent");
	HX_MARK_END_CLASS();
}

void Port_obj::__Visit(HX_VISIT_PARAMS)
{
	HX_VISIT_MEMBER_NAME(name,"name");
	HX_VISIT_MEMBER_NAME(type,"type");
	HX_VISIT_MEMBER_NAME(parent,"parent");
}

Dynamic Port_obj::__Field(const ::String &inName,bool inCallProp)
{
	switch(inName.length) {
	case 4:
		if (HX_FIELD_EQ(inName,"name") ) { return name; }
		if (HX_FIELD_EQ(inName,"type") ) { return type; }
		break;
	case 6:
		if (HX_FIELD_EQ(inName,"getURI") ) { return getURI_dyn(); }
		if (HX_FIELD_EQ(inName,"parent") ) { return parent; }
		break;
	case 7:
		if (HX_FIELD_EQ(inName,"getName") ) { return getName_dyn(); }
		break;
	case 12:
		if (HX_FIELD_EQ(inName,"getParentJob") ) { return getParentJob_dyn(); }
	}
	return super::__Field(inName,inCallProp);
}

Dynamic Port_obj::__SetField(const ::String &inName,const Dynamic &inValue,bool inCallProp)
{
	switch(inName.length) {
	case 4:
		if (HX_FIELD_EQ(inName,"name") ) { name=inValue.Cast< ::String >(); return inValue; }
		if (HX_FIELD_EQ(inName,"type") ) { type=inValue.Cast< ::retro::pub::RetroType >(); return inValue; }
		break;
	case 6:
		if (HX_FIELD_EQ(inName,"parent") ) { parent=inValue.Cast< ::retro::model::Job >(); return inValue; }
	}
	return super::__SetField(inName,inValue,inCallProp);
}

void Port_obj::__GetFields(Array< ::String> &outFields)
{
	outFields->push(HX_CSTRING("name"));
	outFields->push(HX_CSTRING("type"));
	outFields->push(HX_CSTRING("parent"));
	super::__GetFields(outFields);
};

static ::String sStaticFields[] = {
	String(null()) };

static ::String sMemberFields[] = {
	HX_CSTRING("getParentJob"),
	HX_CSTRING("getName"),
	HX_CSTRING("getURI"),
	HX_CSTRING("name"),
	HX_CSTRING("type"),
	HX_CSTRING("parent"),
	String(null()) };

static void sMarkStatics(HX_MARK_PARAMS) {
	HX_MARK_MEMBER_NAME(Port_obj::__mClass,"__mClass");
};

static void sVisitStatics(HX_VISIT_PARAMS) {
	HX_VISIT_MEMBER_NAME(Port_obj::__mClass,"__mClass");
};

Class Port_obj::__mClass;

void Port_obj::__register()
{
	hx::Static(__mClass) = hx::RegisterClass(HX_CSTRING("retro.model.Port"), hx::TCanCast< Port_obj> ,sStaticFields,sMemberFields,
	&__CreateEmpty, &__Create,
	&super::__SGetClass(), 0, sMarkStatics, sVisitStatics);
}

void Port_obj::__boot()
{
}

} // end namespace retro
} // end namespace model
