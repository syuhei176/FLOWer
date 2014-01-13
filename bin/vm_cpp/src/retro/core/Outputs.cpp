#include <hxcpp.h>

#ifndef INCLUDED_retro_core_Output
#include <retro/core/Output.h>
#endif
#ifndef INCLUDED_retro_core_Outputs
#include <retro/core/Outputs.h>
#endif
#ifndef INCLUDED_retro_pub_RetroType
#include <retro/pub/RetroType.h>
#endif
namespace retro{
namespace core{

Void Outputs_obj::__construct()
{
HX_STACK_PUSH("Outputs::new","retro/core/Outputs.hx",9);
{
	HX_STACK_LINE(9)
	this->outputs = Array_obj< ::Dynamic >::__new();
}
;
	return null();
}

Outputs_obj::~Outputs_obj() { }

Dynamic Outputs_obj::__CreateEmpty() { return  new Outputs_obj; }
hx::ObjectPtr< Outputs_obj > Outputs_obj::__new()
{  hx::ObjectPtr< Outputs_obj > result = new Outputs_obj();
	result->__construct();
	return result;}

Dynamic Outputs_obj::__Create(hx::DynamicArray inArgs)
{  hx::ObjectPtr< Outputs_obj > result = new Outputs_obj();
	result->__construct();
	return result;}

Array< ::Dynamic > Outputs_obj::getArray( ){
	HX_STACK_PUSH("Outputs::getArray","retro/core/Outputs.hx",26);
	HX_STACK_THIS(this);
	HX_STACK_LINE(26)
	return this->outputs;
}


HX_DEFINE_DYNAMIC_FUNC0(Outputs_obj,getArray,return )

::retro::core::Output Outputs_obj::get( ::String name){
	HX_STACK_PUSH("Outputs::get","retro/core/Outputs.hx",17);
	HX_STACK_THIS(this);
	HX_STACK_ARG(name,"name");
	HX_STACK_LINE(18)
	{
		HX_STACK_LINE(18)
		int _g = (int)0;		HX_STACK_VAR(_g,"_g");
		Array< ::Dynamic > _g1 = this->outputs;		HX_STACK_VAR(_g1,"_g1");
		HX_STACK_LINE(18)
		while(((_g < _g1->length))){
			HX_STACK_LINE(18)
			::retro::core::Output output = _g1->__get(_g).StaticCast< ::retro::core::Output >();		HX_STACK_VAR(output,"output");
			HX_STACK_LINE(18)
			++(_g);
			HX_STACK_LINE(19)
			if (((output->name == name))){
				HX_STACK_LINE(19)
				return output;
			}
		}
	}
	HX_STACK_LINE(23)
	return null();
}


HX_DEFINE_DYNAMIC_FUNC1(Outputs_obj,get,return )

Void Outputs_obj::add( ::String name,::retro::pub::RetroType type){
{
		HX_STACK_PUSH("Outputs::add","retro/core/Outputs.hx",13);
		HX_STACK_THIS(this);
		HX_STACK_ARG(name,"name");
		HX_STACK_ARG(type,"type");
		HX_STACK_LINE(13)
		this->outputs->push(::retro::core::Output_obj::__new(name,type));
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC2(Outputs_obj,add,(void))


Outputs_obj::Outputs_obj()
{
}

void Outputs_obj::__Mark(HX_MARK_PARAMS)
{
	HX_MARK_BEGIN_CLASS(Outputs);
	HX_MARK_MEMBER_NAME(outputs,"outputs");
	HX_MARK_END_CLASS();
}

void Outputs_obj::__Visit(HX_VISIT_PARAMS)
{
	HX_VISIT_MEMBER_NAME(outputs,"outputs");
}

Dynamic Outputs_obj::__Field(const ::String &inName,bool inCallProp)
{
	switch(inName.length) {
	case 3:
		if (HX_FIELD_EQ(inName,"get") ) { return get_dyn(); }
		if (HX_FIELD_EQ(inName,"add") ) { return add_dyn(); }
		break;
	case 7:
		if (HX_FIELD_EQ(inName,"outputs") ) { return outputs; }
		break;
	case 8:
		if (HX_FIELD_EQ(inName,"getArray") ) { return getArray_dyn(); }
	}
	return super::__Field(inName,inCallProp);
}

Dynamic Outputs_obj::__SetField(const ::String &inName,const Dynamic &inValue,bool inCallProp)
{
	switch(inName.length) {
	case 7:
		if (HX_FIELD_EQ(inName,"outputs") ) { outputs=inValue.Cast< Array< ::Dynamic > >(); return inValue; }
	}
	return super::__SetField(inName,inValue,inCallProp);
}

void Outputs_obj::__GetFields(Array< ::String> &outFields)
{
	outFields->push(HX_CSTRING("outputs"));
	super::__GetFields(outFields);
};

static ::String sStaticFields[] = {
	String(null()) };

static ::String sMemberFields[] = {
	HX_CSTRING("getArray"),
	HX_CSTRING("get"),
	HX_CSTRING("add"),
	HX_CSTRING("outputs"),
	String(null()) };

static void sMarkStatics(HX_MARK_PARAMS) {
	HX_MARK_MEMBER_NAME(Outputs_obj::__mClass,"__mClass");
};

static void sVisitStatics(HX_VISIT_PARAMS) {
	HX_VISIT_MEMBER_NAME(Outputs_obj::__mClass,"__mClass");
};

Class Outputs_obj::__mClass;

void Outputs_obj::__register()
{
	hx::Static(__mClass) = hx::RegisterClass(HX_CSTRING("retro.core.Outputs"), hx::TCanCast< Outputs_obj> ,sStaticFields,sMemberFields,
	&__CreateEmpty, &__Create,
	&super::__SGetClass(), 0, sMarkStatics, sVisitStatics);
}

void Outputs_obj::__boot()
{
}

} // end namespace retro
} // end namespace core
