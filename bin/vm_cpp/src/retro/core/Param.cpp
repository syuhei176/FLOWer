#include <hxcpp.h>

#ifndef INCLUDED_retro_core_Param
#include <retro/core/Param.h>
#endif
#ifndef INCLUDED_retro_model_Value
#include <retro/model/Value.h>
#endif
namespace retro{
namespace core{

Void Param_obj::__construct(::String name,::retro::model::Value value)
{
HX_STACK_PUSH("Param::new","retro/core/Params.hx",39);
{
	HX_STACK_LINE(40)
	this->name = name;
	HX_STACK_LINE(41)
	this->value = value;
}
;
	return null();
}

Param_obj::~Param_obj() { }

Dynamic Param_obj::__CreateEmpty() { return  new Param_obj; }
hx::ObjectPtr< Param_obj > Param_obj::__new(::String name,::retro::model::Value value)
{  hx::ObjectPtr< Param_obj > result = new Param_obj();
	result->__construct(name,value);
	return result;}

Dynamic Param_obj::__Create(hx::DynamicArray inArgs)
{  hx::ObjectPtr< Param_obj > result = new Param_obj();
	result->__construct(inArgs[0],inArgs[1]);
	return result;}

Dynamic Param_obj::getValue( ){
	HX_STACK_PUSH("Param::getValue","retro/core/Params.hx",47);
	HX_STACK_THIS(this);
	HX_STACK_LINE(47)
	return this->value->value;
}


HX_DEFINE_DYNAMIC_FUNC0(Param_obj,getValue,return )

bool Param_obj::isEmpty( ){
	HX_STACK_PUSH("Param::isEmpty","retro/core/Params.hx",44);
	HX_STACK_THIS(this);
	HX_STACK_LINE(44)
	return (this->value == null());
}


HX_DEFINE_DYNAMIC_FUNC0(Param_obj,isEmpty,return )


Param_obj::Param_obj()
{
}

void Param_obj::__Mark(HX_MARK_PARAMS)
{
	HX_MARK_BEGIN_CLASS(Param);
	HX_MARK_MEMBER_NAME(value,"value");
	HX_MARK_MEMBER_NAME(name,"name");
	HX_MARK_END_CLASS();
}

void Param_obj::__Visit(HX_VISIT_PARAMS)
{
	HX_VISIT_MEMBER_NAME(value,"value");
	HX_VISIT_MEMBER_NAME(name,"name");
}

Dynamic Param_obj::__Field(const ::String &inName,bool inCallProp)
{
	switch(inName.length) {
	case 4:
		if (HX_FIELD_EQ(inName,"name") ) { return name; }
		break;
	case 5:
		if (HX_FIELD_EQ(inName,"value") ) { return value; }
		break;
	case 7:
		if (HX_FIELD_EQ(inName,"isEmpty") ) { return isEmpty_dyn(); }
		break;
	case 8:
		if (HX_FIELD_EQ(inName,"getValue") ) { return getValue_dyn(); }
	}
	return super::__Field(inName,inCallProp);
}

Dynamic Param_obj::__SetField(const ::String &inName,const Dynamic &inValue,bool inCallProp)
{
	switch(inName.length) {
	case 4:
		if (HX_FIELD_EQ(inName,"name") ) { name=inValue.Cast< ::String >(); return inValue; }
		break;
	case 5:
		if (HX_FIELD_EQ(inName,"value") ) { value=inValue.Cast< ::retro::model::Value >(); return inValue; }
	}
	return super::__SetField(inName,inValue,inCallProp);
}

void Param_obj::__GetFields(Array< ::String> &outFields)
{
	outFields->push(HX_CSTRING("value"));
	outFields->push(HX_CSTRING("name"));
	super::__GetFields(outFields);
};

static ::String sStaticFields[] = {
	String(null()) };

static ::String sMemberFields[] = {
	HX_CSTRING("getValue"),
	HX_CSTRING("isEmpty"),
	HX_CSTRING("value"),
	HX_CSTRING("name"),
	String(null()) };

static void sMarkStatics(HX_MARK_PARAMS) {
	HX_MARK_MEMBER_NAME(Param_obj::__mClass,"__mClass");
};

static void sVisitStatics(HX_VISIT_PARAMS) {
	HX_VISIT_MEMBER_NAME(Param_obj::__mClass,"__mClass");
};

Class Param_obj::__mClass;

void Param_obj::__register()
{
	hx::Static(__mClass) = hx::RegisterClass(HX_CSTRING("retro.core.Param"), hx::TCanCast< Param_obj> ,sStaticFields,sMemberFields,
	&__CreateEmpty, &__Create,
	&super::__SGetClass(), 0, sMarkStatics, sVisitStatics);
}

void Param_obj::__boot()
{
}

} // end namespace retro
} // end namespace core
