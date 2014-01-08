#include <hxcpp.h>

#ifndef INCLUDED_retro_core_Input
#include <retro/core/Input.h>
#endif
#ifndef INCLUDED_retro_core_Inputs
#include <retro/core/Inputs.h>
#endif
#ifndef INCLUDED_retro_pub_RetroType
#include <retro/pub/RetroType.h>
#endif
namespace retro{
namespace core{

Void Inputs_obj::__construct()
{
HX_STACK_PUSH("Inputs::new","retro/core/Inputs.hx",9);
{
	HX_STACK_LINE(9)
	this->inputs = Array_obj< ::Dynamic >::__new();
}
;
	return null();
}

Inputs_obj::~Inputs_obj() { }

Dynamic Inputs_obj::__CreateEmpty() { return  new Inputs_obj; }
hx::ObjectPtr< Inputs_obj > Inputs_obj::__new()
{  hx::ObjectPtr< Inputs_obj > result = new Inputs_obj();
	result->__construct();
	return result;}

Dynamic Inputs_obj::__Create(hx::DynamicArray inArgs)
{  hx::ObjectPtr< Inputs_obj > result = new Inputs_obj();
	result->__construct();
	return result;}

Array< ::Dynamic > Inputs_obj::getArray( ){
	HX_STACK_PUSH("Inputs::getArray","retro/core/Inputs.hx",26);
	HX_STACK_THIS(this);
	HX_STACK_LINE(26)
	return this->inputs;
}


HX_DEFINE_DYNAMIC_FUNC0(Inputs_obj,getArray,return )

::retro::core::Input Inputs_obj::get( ::String name){
	HX_STACK_PUSH("Inputs::get","retro/core/Inputs.hx",17);
	HX_STACK_THIS(this);
	HX_STACK_ARG(name,"name");
	HX_STACK_LINE(18)
	{
		HX_STACK_LINE(18)
		int _g = (int)0;		HX_STACK_VAR(_g,"_g");
		Array< ::Dynamic > _g1 = this->inputs;		HX_STACK_VAR(_g1,"_g1");
		HX_STACK_LINE(18)
		while(((_g < _g1->length))){
			HX_STACK_LINE(18)
			::retro::core::Input input = _g1->__get(_g).StaticCast< ::retro::core::Input >();		HX_STACK_VAR(input,"input");
			HX_STACK_LINE(18)
			++(_g);
			HX_STACK_LINE(19)
			if (((input->name == name))){
				HX_STACK_LINE(19)
				return input;
			}
		}
	}
	HX_STACK_LINE(23)
	return null();
}


HX_DEFINE_DYNAMIC_FUNC1(Inputs_obj,get,return )

Void Inputs_obj::add( ::String name,::retro::pub::RetroType type){
{
		HX_STACK_PUSH("Inputs::add","retro/core/Inputs.hx",13);
		HX_STACK_THIS(this);
		HX_STACK_ARG(name,"name");
		HX_STACK_ARG(type,"type");
		HX_STACK_LINE(13)
		this->inputs->push(::retro::core::Input_obj::__new(name,type));
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC2(Inputs_obj,add,(void))


Inputs_obj::Inputs_obj()
{
}

void Inputs_obj::__Mark(HX_MARK_PARAMS)
{
	HX_MARK_BEGIN_CLASS(Inputs);
	HX_MARK_MEMBER_NAME(inputs,"inputs");
	HX_MARK_END_CLASS();
}

void Inputs_obj::__Visit(HX_VISIT_PARAMS)
{
	HX_VISIT_MEMBER_NAME(inputs,"inputs");
}

Dynamic Inputs_obj::__Field(const ::String &inName,bool inCallProp)
{
	switch(inName.length) {
	case 3:
		if (HX_FIELD_EQ(inName,"get") ) { return get_dyn(); }
		if (HX_FIELD_EQ(inName,"add") ) { return add_dyn(); }
		break;
	case 6:
		if (HX_FIELD_EQ(inName,"inputs") ) { return inputs; }
		break;
	case 8:
		if (HX_FIELD_EQ(inName,"getArray") ) { return getArray_dyn(); }
	}
	return super::__Field(inName,inCallProp);
}

Dynamic Inputs_obj::__SetField(const ::String &inName,const Dynamic &inValue,bool inCallProp)
{
	switch(inName.length) {
	case 6:
		if (HX_FIELD_EQ(inName,"inputs") ) { inputs=inValue.Cast< Array< ::Dynamic > >(); return inValue; }
	}
	return super::__SetField(inName,inValue,inCallProp);
}

void Inputs_obj::__GetFields(Array< ::String> &outFields)
{
	outFields->push(HX_CSTRING("inputs"));
	super::__GetFields(outFields);
};

static ::String sStaticFields[] = {
	String(null()) };

static ::String sMemberFields[] = {
	HX_CSTRING("getArray"),
	HX_CSTRING("get"),
	HX_CSTRING("add"),
	HX_CSTRING("inputs"),
	String(null()) };

static void sMarkStatics(HX_MARK_PARAMS) {
	HX_MARK_MEMBER_NAME(Inputs_obj::__mClass,"__mClass");
};

static void sVisitStatics(HX_VISIT_PARAMS) {
	HX_VISIT_MEMBER_NAME(Inputs_obj::__mClass,"__mClass");
};

Class Inputs_obj::__mClass;

void Inputs_obj::__register()
{
	hx::Static(__mClass) = hx::RegisterClass(HX_CSTRING("retro.core.Inputs"), hx::TCanCast< Inputs_obj> ,sStaticFields,sMemberFields,
	&__CreateEmpty, &__Create,
	&super::__SGetClass(), 0, sMarkStatics, sVisitStatics);
}

void Inputs_obj::__boot()
{
}

} // end namespace retro
} // end namespace core
