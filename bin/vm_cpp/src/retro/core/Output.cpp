#include <hxcpp.h>

#ifndef INCLUDED_retro_core_Output
#include <retro/core/Output.h>
#endif
#ifndef INCLUDED_retro_pub_RetroType
#include <retro/pub/RetroType.h>
#endif
namespace retro{
namespace core{

Void Output_obj::__construct(::String name,::retro::pub::RetroType type)
{
HX_STACK_PUSH("Output::new","retro/core/Outputs.hx",35);
{
	HX_STACK_LINE(36)
	this->name = name;
	HX_STACK_LINE(37)
	this->type = type;
}
;
	return null();
}

Output_obj::~Output_obj() { }

Dynamic Output_obj::__CreateEmpty() { return  new Output_obj; }
hx::ObjectPtr< Output_obj > Output_obj::__new(::String name,::retro::pub::RetroType type)
{  hx::ObjectPtr< Output_obj > result = new Output_obj();
	result->__construct(name,type);
	return result;}

Dynamic Output_obj::__Create(hx::DynamicArray inArgs)
{  hx::ObjectPtr< Output_obj > result = new Output_obj();
	result->__construct(inArgs[0],inArgs[1]);
	return result;}

::String Output_obj::getName( ){
	HX_STACK_PUSH("Output::getName","retro/core/Outputs.hx",44);
	HX_STACK_THIS(this);
	HX_STACK_LINE(44)
	return this->name;
}


HX_DEFINE_DYNAMIC_FUNC0(Output_obj,getName,return )

::retro::pub::RetroType Output_obj::getType( ){
	HX_STACK_PUSH("Output::getType","retro/core/Outputs.hx",40);
	HX_STACK_THIS(this);
	HX_STACK_LINE(40)
	return this->type;
}


HX_DEFINE_DYNAMIC_FUNC0(Output_obj,getType,return )


Output_obj::Output_obj()
{
}

void Output_obj::__Mark(HX_MARK_PARAMS)
{
	HX_MARK_BEGIN_CLASS(Output);
	HX_MARK_MEMBER_NAME(type,"type");
	HX_MARK_MEMBER_NAME(name,"name");
	HX_MARK_END_CLASS();
}

void Output_obj::__Visit(HX_VISIT_PARAMS)
{
	HX_VISIT_MEMBER_NAME(type,"type");
	HX_VISIT_MEMBER_NAME(name,"name");
}

Dynamic Output_obj::__Field(const ::String &inName,bool inCallProp)
{
	switch(inName.length) {
	case 4:
		if (HX_FIELD_EQ(inName,"type") ) { return type; }
		if (HX_FIELD_EQ(inName,"name") ) { return name; }
		break;
	case 7:
		if (HX_FIELD_EQ(inName,"getName") ) { return getName_dyn(); }
		if (HX_FIELD_EQ(inName,"getType") ) { return getType_dyn(); }
	}
	return super::__Field(inName,inCallProp);
}

Dynamic Output_obj::__SetField(const ::String &inName,const Dynamic &inValue,bool inCallProp)
{
	switch(inName.length) {
	case 4:
		if (HX_FIELD_EQ(inName,"type") ) { type=inValue.Cast< ::retro::pub::RetroType >(); return inValue; }
		if (HX_FIELD_EQ(inName,"name") ) { name=inValue.Cast< ::String >(); return inValue; }
	}
	return super::__SetField(inName,inValue,inCallProp);
}

void Output_obj::__GetFields(Array< ::String> &outFields)
{
	outFields->push(HX_CSTRING("type"));
	outFields->push(HX_CSTRING("name"));
	super::__GetFields(outFields);
};

static ::String sStaticFields[] = {
	String(null()) };

static ::String sMemberFields[] = {
	HX_CSTRING("getName"),
	HX_CSTRING("getType"),
	HX_CSTRING("type"),
	HX_CSTRING("name"),
	String(null()) };

static void sMarkStatics(HX_MARK_PARAMS) {
	HX_MARK_MEMBER_NAME(Output_obj::__mClass,"__mClass");
};

static void sVisitStatics(HX_VISIT_PARAMS) {
	HX_VISIT_MEMBER_NAME(Output_obj::__mClass,"__mClass");
};

Class Output_obj::__mClass;

void Output_obj::__register()
{
	hx::Static(__mClass) = hx::RegisterClass(HX_CSTRING("retro.core.Output"), hx::TCanCast< Output_obj> ,sStaticFields,sMemberFields,
	&__CreateEmpty, &__Create,
	&super::__SGetClass(), 0, sMarkStatics, sVisitStatics);
}

void Output_obj::__boot()
{
}

} // end namespace retro
} // end namespace core
