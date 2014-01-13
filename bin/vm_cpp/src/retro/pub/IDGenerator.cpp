#include <hxcpp.h>

#ifndef INCLUDED_Std
#include <Std.h>
#endif
#ifndef INCLUDED_retro_pub_IDGenerator
#include <retro/pub/IDGenerator.h>
#endif
namespace retro{
namespace pub{

Void IDGenerator_obj::__construct(::String uniqueEditorKey)
{
HX_STACK_PUSH("IDGenerator::new","retro/pub/IdGenerator.hx",11);
{
	HX_STACK_LINE(12)
	this->uniqueEditorKey = uniqueEditorKey;
	HX_STACK_LINE(13)
	this->counter = (int)0;
}
;
	return null();
}

IDGenerator_obj::~IDGenerator_obj() { }

Dynamic IDGenerator_obj::__CreateEmpty() { return  new IDGenerator_obj; }
hx::ObjectPtr< IDGenerator_obj > IDGenerator_obj::__new(::String uniqueEditorKey)
{  hx::ObjectPtr< IDGenerator_obj > result = new IDGenerator_obj();
	result->__construct(uniqueEditorKey);
	return result;}

Dynamic IDGenerator_obj::__Create(hx::DynamicArray inArgs)
{  hx::ObjectPtr< IDGenerator_obj > result = new IDGenerator_obj();
	result->__construct(inArgs[0]);
	return result;}

::String IDGenerator_obj::genID( ){
	HX_STACK_PUSH("IDGenerator::genID","retro/pub/IdGenerator.hx",23);
	HX_STACK_THIS(this);
	HX_STACK_LINE(24)
	hx::AddEq(this->counter,(int)1);
	HX_STACK_LINE(25)
	return (this->uniqueEditorKey + ::Std_obj::string(this->counter));
}


HX_DEFINE_DYNAMIC_FUNC0(IDGenerator_obj,genID,return )

::retro::pub::IDGenerator IDGenerator_obj::idGen;

::retro::pub::IDGenerator IDGenerator_obj::getInstance( ::String uniqueEditorKey){
	HX_STACK_PUSH("IDGenerator::getInstance","retro/pub/IdGenerator.hx",16);
	HX_STACK_ARG(uniqueEditorKey,"uniqueEditorKey");
	HX_STACK_LINE(17)
	if (((::retro::pub::IDGenerator_obj::idGen == null()))){
		HX_STACK_LINE(17)
		::retro::pub::IDGenerator_obj::idGen = ::retro::pub::IDGenerator_obj::__new(uniqueEditorKey);
	}
	HX_STACK_LINE(20)
	return ::retro::pub::IDGenerator_obj::idGen;
}


STATIC_HX_DEFINE_DYNAMIC_FUNC1(IDGenerator_obj,getInstance,return )


IDGenerator_obj::IDGenerator_obj()
{
}

void IDGenerator_obj::__Mark(HX_MARK_PARAMS)
{
	HX_MARK_BEGIN_CLASS(IDGenerator);
	HX_MARK_MEMBER_NAME(counter,"counter");
	HX_MARK_MEMBER_NAME(uniqueEditorKey,"uniqueEditorKey");
	HX_MARK_END_CLASS();
}

void IDGenerator_obj::__Visit(HX_VISIT_PARAMS)
{
	HX_VISIT_MEMBER_NAME(counter,"counter");
	HX_VISIT_MEMBER_NAME(uniqueEditorKey,"uniqueEditorKey");
}

Dynamic IDGenerator_obj::__Field(const ::String &inName,bool inCallProp)
{
	switch(inName.length) {
	case 5:
		if (HX_FIELD_EQ(inName,"idGen") ) { return idGen; }
		if (HX_FIELD_EQ(inName,"genID") ) { return genID_dyn(); }
		break;
	case 7:
		if (HX_FIELD_EQ(inName,"counter") ) { return counter; }
		break;
	case 11:
		if (HX_FIELD_EQ(inName,"getInstance") ) { return getInstance_dyn(); }
		break;
	case 15:
		if (HX_FIELD_EQ(inName,"uniqueEditorKey") ) { return uniqueEditorKey; }
	}
	return super::__Field(inName,inCallProp);
}

Dynamic IDGenerator_obj::__SetField(const ::String &inName,const Dynamic &inValue,bool inCallProp)
{
	switch(inName.length) {
	case 5:
		if (HX_FIELD_EQ(inName,"idGen") ) { idGen=inValue.Cast< ::retro::pub::IDGenerator >(); return inValue; }
		break;
	case 7:
		if (HX_FIELD_EQ(inName,"counter") ) { counter=inValue.Cast< int >(); return inValue; }
		break;
	case 15:
		if (HX_FIELD_EQ(inName,"uniqueEditorKey") ) { uniqueEditorKey=inValue.Cast< ::String >(); return inValue; }
	}
	return super::__SetField(inName,inValue,inCallProp);
}

void IDGenerator_obj::__GetFields(Array< ::String> &outFields)
{
	outFields->push(HX_CSTRING("counter"));
	outFields->push(HX_CSTRING("uniqueEditorKey"));
	super::__GetFields(outFields);
};

static ::String sStaticFields[] = {
	HX_CSTRING("idGen"),
	HX_CSTRING("getInstance"),
	String(null()) };

static ::String sMemberFields[] = {
	HX_CSTRING("genID"),
	HX_CSTRING("counter"),
	HX_CSTRING("uniqueEditorKey"),
	String(null()) };

static void sMarkStatics(HX_MARK_PARAMS) {
	HX_MARK_MEMBER_NAME(IDGenerator_obj::__mClass,"__mClass");
	HX_MARK_MEMBER_NAME(IDGenerator_obj::idGen,"idGen");
};

static void sVisitStatics(HX_VISIT_PARAMS) {
	HX_VISIT_MEMBER_NAME(IDGenerator_obj::__mClass,"__mClass");
	HX_VISIT_MEMBER_NAME(IDGenerator_obj::idGen,"idGen");
};

Class IDGenerator_obj::__mClass;

void IDGenerator_obj::__register()
{
	hx::Static(__mClass) = hx::RegisterClass(HX_CSTRING("retro.pub.IDGenerator"), hx::TCanCast< IDGenerator_obj> ,sStaticFields,sMemberFields,
	&__CreateEmpty, &__Create,
	&super::__SGetClass(), 0, sMarkStatics, sVisitStatics);
}

void IDGenerator_obj::__boot()
{
}

} // end namespace retro
} // end namespace pub
