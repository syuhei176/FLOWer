#include <hxcpp.h>

#ifndef INCLUDED_retro_core_Input
#include <retro/core/Input.h>
#endif
#ifndef INCLUDED_retro_pub_RetroType
#include <retro/pub/RetroType.h>
#endif
namespace retro{
namespace core{

Void Input_obj::__construct(::String name,::retro::pub::RetroType type)
{
HX_STACK_PUSH("Input::new","retro/core/Input.hx",9);
{
	HX_STACK_LINE(10)
	this->name = name;
	HX_STACK_LINE(11)
	this->type = type;
}
;
	return null();
}

Input_obj::~Input_obj() { }

Dynamic Input_obj::__CreateEmpty() { return  new Input_obj; }
hx::ObjectPtr< Input_obj > Input_obj::__new(::String name,::retro::pub::RetroType type)
{  hx::ObjectPtr< Input_obj > result = new Input_obj();
	result->__construct(name,type);
	return result;}

Dynamic Input_obj::__Create(hx::DynamicArray inArgs)
{  hx::ObjectPtr< Input_obj > result = new Input_obj();
	result->__construct(inArgs[0],inArgs[1]);
	return result;}

::retro::pub::RetroType Input_obj::getType( ){
	HX_STACK_PUSH("Input::getType","retro/core/Input.hx",17);
	HX_STACK_THIS(this);
	HX_STACK_LINE(17)
	return this->type;
}


HX_DEFINE_DYNAMIC_FUNC0(Input_obj,getType,return )

::String Input_obj::getName( ){
	HX_STACK_PUSH("Input::getName","retro/core/Input.hx",14);
	HX_STACK_THIS(this);
	HX_STACK_LINE(14)
	return this->name;
}


HX_DEFINE_DYNAMIC_FUNC0(Input_obj,getName,return )


Input_obj::Input_obj()
{
}

void Input_obj::__Mark(HX_MARK_PARAMS)
{
	HX_MARK_BEGIN_CLASS(Input);
	HX_MARK_MEMBER_NAME(type,"type");
	HX_MARK_MEMBER_NAME(name,"name");
	HX_MARK_END_CLASS();
}

void Input_obj::__Visit(HX_VISIT_PARAMS)
{
	HX_VISIT_MEMBER_NAME(type,"type");
	HX_VISIT_MEMBER_NAME(name,"name");
}

Dynamic Input_obj::__Field(const ::String &inName,bool inCallProp)
{
	switch(inName.length) {
	case 4:
		if (HX_FIELD_EQ(inName,"type") ) { return type; }
		if (HX_FIELD_EQ(inName,"name") ) { return name; }
		break;
	case 7:
		if (HX_FIELD_EQ(inName,"getType") ) { return getType_dyn(); }
		if (HX_FIELD_EQ(inName,"getName") ) { return getName_dyn(); }
	}
	return super::__Field(inName,inCallProp);
}

Dynamic Input_obj::__SetField(const ::String &inName,const Dynamic &inValue,bool inCallProp)
{
	switch(inName.length) {
	case 4:
		if (HX_FIELD_EQ(inName,"type") ) { type=inValue.Cast< ::retro::pub::RetroType >(); return inValue; }
		if (HX_FIELD_EQ(inName,"name") ) { name=inValue.Cast< ::String >(); return inValue; }
	}
	return super::__SetField(inName,inValue,inCallProp);
}

void Input_obj::__GetFields(Array< ::String> &outFields)
{
	outFields->push(HX_CSTRING("type"));
	outFields->push(HX_CSTRING("name"));
	super::__GetFields(outFields);
};

static ::String sStaticFields[] = {
	String(null()) };

static ::String sMemberFields[] = {
	HX_CSTRING("getType"),
	HX_CSTRING("getName"),
	HX_CSTRING("type"),
	HX_CSTRING("name"),
	String(null()) };

static void sMarkStatics(HX_MARK_PARAMS) {
	HX_MARK_MEMBER_NAME(Input_obj::__mClass,"__mClass");
};

static void sVisitStatics(HX_VISIT_PARAMS) {
	HX_VISIT_MEMBER_NAME(Input_obj::__mClass,"__mClass");
};

Class Input_obj::__mClass;

void Input_obj::__register()
{
	hx::Static(__mClass) = hx::RegisterClass(HX_CSTRING("retro.core.Input"), hx::TCanCast< Input_obj> ,sStaticFields,sMemberFields,
	&__CreateEmpty, &__Create,
	&super::__SGetClass(), 0, sMarkStatics, sVisitStatics);
}

void Input_obj::__boot()
{
}

} // end namespace retro
} // end namespace core
