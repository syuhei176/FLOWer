#include <hxcpp.h>

#ifndef INCLUDED_Std
#include <Std.h>
#endif
#ifndef INCLUDED_retro_core_Param
#include <retro/core/Param.h>
#endif
#ifndef INCLUDED_retro_core_Params
#include <retro/core/Params.h>
#endif
#ifndef INCLUDED_retro_model_Value
#include <retro/model/Value.h>
#endif
namespace retro{
namespace core{

Void Params_obj::__construct()
{
HX_STACK_PUSH("Params::new","retro/core/Params.hx",11);
{
	HX_STACK_LINE(11)
	this->params = Array_obj< ::Dynamic >::__new();
}
;
	return null();
}

Params_obj::~Params_obj() { }

Dynamic Params_obj::__CreateEmpty() { return  new Params_obj; }
hx::ObjectPtr< Params_obj > Params_obj::__new()
{  hx::ObjectPtr< Params_obj > result = new Params_obj();
	result->__construct();
	return result;}

Dynamic Params_obj::__Create(hx::DynamicArray inArgs)
{  hx::ObjectPtr< Params_obj > result = new Params_obj();
	result->__construct();
	return result;}

::String Params_obj::toString( ){
	HX_STACK_PUSH("Params::toString","retro/core/Params.hx",25);
	HX_STACK_THIS(this);
	HX_STACK_LINE(26)
	::String str = HX_CSTRING("[");		HX_STACK_VAR(str,"str");
	HX_STACK_LINE(27)
	{
		HX_STACK_LINE(27)
		int _g = (int)0;		HX_STACK_VAR(_g,"_g");
		Array< ::Dynamic > _g1 = this->params;		HX_STACK_VAR(_g1,"_g1");
		HX_STACK_LINE(27)
		while(((_g < _g1->length))){
			HX_STACK_LINE(27)
			::retro::core::Param param = _g1->__get(_g).StaticCast< ::retro::core::Param >();		HX_STACK_VAR(param,"param");
			HX_STACK_LINE(27)
			++(_g);
			HX_STACK_LINE(28)
			hx::AddEq(str,((((HX_CSTRING("{") + param->name) + HX_CSTRING(",")) + ::Std_obj::string(param->value->value)) + HX_CSTRING("}")));
		}
	}
	HX_STACK_LINE(30)
	hx::AddEq(str,HX_CSTRING("]"));
	HX_STACK_LINE(31)
	return str;
}


HX_DEFINE_DYNAMIC_FUNC0(Params_obj,toString,return )

Void Params_obj::add( ::String name,::retro::model::Value value){
{
		HX_STACK_PUSH("Params::add","retro/core/Params.hx",22);
		HX_STACK_THIS(this);
		HX_STACK_ARG(name,"name");
		HX_STACK_ARG(value,"value");
		HX_STACK_LINE(22)
		this->params->push(::retro::core::Param_obj::__new(name,value));
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC2(Params_obj,add,(void))

::retro::core::Param Params_obj::get( ::String name){
	HX_STACK_PUSH("Params::get","retro/core/Params.hx",14);
	HX_STACK_THIS(this);
	HX_STACK_ARG(name,"name");
	HX_STACK_LINE(15)
	{
		HX_STACK_LINE(15)
		int _g = (int)0;		HX_STACK_VAR(_g,"_g");
		Array< ::Dynamic > _g1 = this->params;		HX_STACK_VAR(_g1,"_g1");
		HX_STACK_LINE(15)
		while(((_g < _g1->length))){
			HX_STACK_LINE(15)
			::retro::core::Param param = _g1->__get(_g).StaticCast< ::retro::core::Param >();		HX_STACK_VAR(param,"param");
			HX_STACK_LINE(15)
			++(_g);
			HX_STACK_LINE(16)
			if (((param->name == name))){
				HX_STACK_LINE(16)
				return param;
			}
		}
	}
	HX_STACK_LINE(20)
	return null();
}


HX_DEFINE_DYNAMIC_FUNC1(Params_obj,get,return )


Params_obj::Params_obj()
{
}

void Params_obj::__Mark(HX_MARK_PARAMS)
{
	HX_MARK_BEGIN_CLASS(Params);
	HX_MARK_MEMBER_NAME(params,"params");
	HX_MARK_END_CLASS();
}

void Params_obj::__Visit(HX_VISIT_PARAMS)
{
	HX_VISIT_MEMBER_NAME(params,"params");
}

Dynamic Params_obj::__Field(const ::String &inName,bool inCallProp)
{
	switch(inName.length) {
	case 3:
		if (HX_FIELD_EQ(inName,"add") ) { return add_dyn(); }
		if (HX_FIELD_EQ(inName,"get") ) { return get_dyn(); }
		break;
	case 6:
		if (HX_FIELD_EQ(inName,"params") ) { return params; }
		break;
	case 8:
		if (HX_FIELD_EQ(inName,"toString") ) { return toString_dyn(); }
	}
	return super::__Field(inName,inCallProp);
}

Dynamic Params_obj::__SetField(const ::String &inName,const Dynamic &inValue,bool inCallProp)
{
	switch(inName.length) {
	case 6:
		if (HX_FIELD_EQ(inName,"params") ) { params=inValue.Cast< Array< ::Dynamic > >(); return inValue; }
	}
	return super::__SetField(inName,inValue,inCallProp);
}

void Params_obj::__GetFields(Array< ::String> &outFields)
{
	outFields->push(HX_CSTRING("params"));
	super::__GetFields(outFields);
};

static ::String sStaticFields[] = {
	String(null()) };

static ::String sMemberFields[] = {
	HX_CSTRING("toString"),
	HX_CSTRING("add"),
	HX_CSTRING("get"),
	HX_CSTRING("params"),
	String(null()) };

static void sMarkStatics(HX_MARK_PARAMS) {
	HX_MARK_MEMBER_NAME(Params_obj::__mClass,"__mClass");
};

static void sVisitStatics(HX_VISIT_PARAMS) {
	HX_VISIT_MEMBER_NAME(Params_obj::__mClass,"__mClass");
};

Class Params_obj::__mClass;

void Params_obj::__register()
{
	hx::Static(__mClass) = hx::RegisterClass(HX_CSTRING("retro.core.Params"), hx::TCanCast< Params_obj> ,sStaticFields,sMemberFields,
	&__CreateEmpty, &__Create,
	&super::__SGetClass(), 0, sMarkStatics, sVisitStatics);
}

void Params_obj::__boot()
{
}

} // end namespace retro
} // end namespace core
