#include <hxcpp.h>

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
#ifndef INCLUDED_retro_model_Value
#include <retro/model/Value.h>
#endif
#ifndef INCLUDED_retro_model_ValueCarrier
#include <retro/model/ValueCarrier.h>
#endif
#ifndef INCLUDED_retro_pub_RetroType
#include <retro/pub/RetroType.h>
#endif
namespace retro{
namespace model{

Void InputPort_obj::__construct(::retro::model::Job parent,::retro::pub::RetroType type,::String name)
{
HX_STACK_PUSH("InputPort::new","retro/model/InputPort.hx",16);
{
	HX_STACK_LINE(17)
	super::__construct(parent,type,name);
	HX_STACK_LINE(18)
	this->onSetValueListeners = Dynamic( Array_obj<Dynamic>::__new() );
	HX_STACK_LINE(19)
	this->onUseValueListeners = Dynamic( Array_obj<Dynamic>::__new() );
	HX_STACK_LINE(20)
	this->onSetConstantValueListeners = Dynamic( Array_obj<Dynamic>::__new() );
	HX_STACK_LINE(21)
	this->onRemoveConstantValueListeners = Dynamic( Array_obj<Dynamic>::__new() );
}
;
	return null();
}

InputPort_obj::~InputPort_obj() { }

Dynamic InputPort_obj::__CreateEmpty() { return  new InputPort_obj; }
hx::ObjectPtr< InputPort_obj > InputPort_obj::__new(::retro::model::Job parent,::retro::pub::RetroType type,::String name)
{  hx::ObjectPtr< InputPort_obj > result = new InputPort_obj();
	result->__construct(parent,type,name);
	return result;}

Dynamic InputPort_obj::__Create(hx::DynamicArray inArgs)
{  hx::ObjectPtr< InputPort_obj > result = new InputPort_obj();
	result->__construct(inArgs[0],inArgs[1],inArgs[2]);
	return result;}

Void InputPort_obj::fireOnRemoveConstantValueListeners( ){
{
		HX_STACK_PUSH("InputPort::fireOnRemoveConstantValueListeners","retro/model/InputPort.hx",99);
		HX_STACK_THIS(this);
		HX_STACK_LINE(100)
		int _g = (int)0;		HX_STACK_VAR(_g,"_g");
		Dynamic _g1 = this->onRemoveConstantValueListeners;		HX_STACK_VAR(_g1,"_g1");
		HX_STACK_LINE(100)
		while(((_g < _g1->__Field(HX_CSTRING("length"),true)))){
			HX_STACK_LINE(100)
			Dynamic l = _g1->__GetItem(_g);		HX_STACK_VAR(l,"l");
			HX_STACK_LINE(100)
			++(_g);
			HX_STACK_LINE(101)
			l().Cast< Void >();
		}
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC0(InputPort_obj,fireOnRemoveConstantValueListeners,(void))

Void InputPort_obj::fireOnSetConstantValueListeners( ::retro::model::Value v){
{
		HX_STACK_PUSH("InputPort::fireOnSetConstantValueListeners","retro/model/InputPort.hx",94);
		HX_STACK_THIS(this);
		HX_STACK_ARG(v,"v");
		HX_STACK_LINE(95)
		int _g = (int)0;		HX_STACK_VAR(_g,"_g");
		Dynamic _g1 = this->onSetConstantValueListeners;		HX_STACK_VAR(_g1,"_g1");
		HX_STACK_LINE(95)
		while(((_g < _g1->__Field(HX_CSTRING("length"),true)))){
			HX_STACK_LINE(95)
			Dynamic l = _g1->__GetItem(_g);		HX_STACK_VAR(l,"l");
			HX_STACK_LINE(95)
			++(_g);
			HX_STACK_LINE(96)
			l(v).Cast< Void >();
		}
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC1(InputPort_obj,fireOnSetConstantValueListeners,(void))

Void InputPort_obj::fireOnUseValueListeners( ){
{
		HX_STACK_PUSH("InputPort::fireOnUseValueListeners","retro/model/InputPort.hx",89);
		HX_STACK_THIS(this);
		HX_STACK_LINE(90)
		int _g = (int)0;		HX_STACK_VAR(_g,"_g");
		Dynamic _g1 = this->onUseValueListeners;		HX_STACK_VAR(_g1,"_g1");
		HX_STACK_LINE(90)
		while(((_g < _g1->__Field(HX_CSTRING("length"),true)))){
			HX_STACK_LINE(90)
			Dynamic l = _g1->__GetItem(_g);		HX_STACK_VAR(l,"l");
			HX_STACK_LINE(90)
			++(_g);
			HX_STACK_LINE(91)
			l().Cast< Void >();
		}
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC0(InputPort_obj,fireOnUseValueListeners,(void))

Void InputPort_obj::fireOnSetValueListeners( ::retro::model::ValueCarrier v){
{
		HX_STACK_PUSH("InputPort::fireOnSetValueListeners","retro/model/InputPort.hx",83);
		HX_STACK_THIS(this);
		HX_STACK_ARG(v,"v");
		HX_STACK_LINE(84)
		int _g = (int)0;		HX_STACK_VAR(_g,"_g");
		Dynamic _g1 = this->onSetValueListeners;		HX_STACK_VAR(_g1,"_g1");
		HX_STACK_LINE(84)
		while(((_g < _g1->__Field(HX_CSTRING("length"),true)))){
			HX_STACK_LINE(84)
			Dynamic l = _g1->__GetItem(_g);		HX_STACK_VAR(l,"l");
			HX_STACK_LINE(84)
			++(_g);
			HX_STACK_LINE(85)
			l(v).Cast< Void >();
		}
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC1(InputPort_obj,fireOnSetValueListeners,(void))

Void InputPort_obj::onRemoveConstantValue( Dynamic listener){
{
		HX_STACK_PUSH("InputPort::onRemoveConstantValue","retro/model/InputPort.hx",79);
		HX_STACK_THIS(this);
		HX_STACK_ARG(listener,"listener");
		HX_STACK_LINE(79)
		this->onRemoveConstantValueListeners->__Field(HX_CSTRING("push"),true)(listener);
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC1(InputPort_obj,onRemoveConstantValue,(void))

Void InputPort_obj::onSetConstantValue( Dynamic listener){
{
		HX_STACK_PUSH("InputPort::onSetConstantValue","retro/model/InputPort.hx",75);
		HX_STACK_THIS(this);
		HX_STACK_ARG(listener,"listener");
		HX_STACK_LINE(75)
		this->onSetConstantValueListeners->__Field(HX_CSTRING("push"),true)(listener);
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC1(InputPort_obj,onSetConstantValue,(void))

Void InputPort_obj::onUseValue( Dynamic listener){
{
		HX_STACK_PUSH("InputPort::onUseValue","retro/model/InputPort.hx",71);
		HX_STACK_THIS(this);
		HX_STACK_ARG(listener,"listener");
		HX_STACK_LINE(71)
		this->onUseValueListeners->__Field(HX_CSTRING("push"),true)(listener);
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC1(InputPort_obj,onUseValue,(void))

Void InputPort_obj::onSetValue( Dynamic listener){
{
		HX_STACK_PUSH("InputPort::onSetValue","retro/model/InputPort.hx",67);
		HX_STACK_THIS(this);
		HX_STACK_ARG(listener,"listener");
		HX_STACK_LINE(67)
		this->onSetValueListeners->__Field(HX_CSTRING("push"),true)(listener);
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC1(InputPort_obj,onSetValue,(void))

Void InputPort_obj::removeConstant( ){
{
		HX_STACK_PUSH("InputPort::removeConstant","retro/model/InputPort.hx",62);
		HX_STACK_THIS(this);
		HX_STACK_LINE(63)
		this->constantValue = null();
		HX_STACK_LINE(64)
		this->fireOnRemoveConstantValueListeners();
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC0(InputPort_obj,removeConstant,(void))

Void InputPort_obj::setConstant( ::retro::model::Value value){
{
		HX_STACK_PUSH("InputPort::setConstant","retro/model/InputPort.hx",56);
		HX_STACK_THIS(this);
		HX_STACK_ARG(value,"value");
		HX_STACK_LINE(57)
		this->constantValue = value;
		HX_STACK_LINE(58)
		this->fireOnSetConstantValueListeners(this->constantValue);
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC1(InputPort_obj,setConstant,(void))

::retro::model::ValueCarrier InputPort_obj::useValueCarrier( ){
	HX_STACK_PUSH("InputPort::useValueCarrier","retro/model/InputPort.hx",48);
	HX_STACK_THIS(this);
	HX_STACK_LINE(49)
	::retro::model::ValueCarrier v = this->valueCarrier;		HX_STACK_VAR(v,"v");
	HX_STACK_LINE(50)
	this->valueCarrier = null();
	HX_STACK_LINE(51)
	this->fireOnUseValueListeners();
	HX_STACK_LINE(52)
	return v;
}


HX_DEFINE_DYNAMIC_FUNC0(InputPort_obj,useValueCarrier,return )

::retro::model::Value InputPort_obj::getValue( ){
	HX_STACK_PUSH("InputPort::getValue","retro/model/InputPort.hx",37);
	HX_STACK_THIS(this);
	HX_STACK_LINE(37)
	if (((this->constantValue != null()))){
		HX_STACK_LINE(38)
		return this->constantValue;
	}
	else{
		HX_STACK_LINE(41)
		if (((this->valueCarrier == null()))){
			HX_STACK_LINE(41)
			return null();
		}
		HX_STACK_LINE(44)
		return this->valueCarrier->getValue();
	}
	HX_STACK_LINE(37)
	return null();
}


HX_DEFINE_DYNAMIC_FUNC0(InputPort_obj,getValue,return )

::retro::model::Value InputPort_obj::getConstantValue( ){
	HX_STACK_PUSH("InputPort::getConstantValue","retro/model/InputPort.hx",33);
	HX_STACK_THIS(this);
	HX_STACK_LINE(33)
	return this->constantValue;
}


HX_DEFINE_DYNAMIC_FUNC0(InputPort_obj,getConstantValue,return )

::retro::model::ValueCarrier InputPort_obj::getValueCarrier( ){
	HX_STACK_PUSH("InputPort::getValueCarrier","retro/model/InputPort.hx",29);
	HX_STACK_THIS(this);
	HX_STACK_LINE(29)
	return this->valueCarrier;
}


HX_DEFINE_DYNAMIC_FUNC0(InputPort_obj,getValueCarrier,return )

Void InputPort_obj::setValueCarrier( ::retro::model::ValueCarrier valueCarrier){
{
		HX_STACK_PUSH("InputPort::setValueCarrier","retro/model/InputPort.hx",24);
		HX_STACK_THIS(this);
		HX_STACK_ARG(valueCarrier,"valueCarrier");
		HX_STACK_LINE(25)
		this->valueCarrier = valueCarrier;
		HX_STACK_LINE(26)
		this->fireOnSetValueListeners(this->valueCarrier);
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC1(InputPort_obj,setValueCarrier,(void))


InputPort_obj::InputPort_obj()
{
}

void InputPort_obj::__Mark(HX_MARK_PARAMS)
{
	HX_MARK_BEGIN_CLASS(InputPort);
	HX_MARK_MEMBER_NAME(onRemoveConstantValueListeners,"onRemoveConstantValueListeners");
	HX_MARK_MEMBER_NAME(onSetConstantValueListeners,"onSetConstantValueListeners");
	HX_MARK_MEMBER_NAME(onUseValueListeners,"onUseValueListeners");
	HX_MARK_MEMBER_NAME(onSetValueListeners,"onSetValueListeners");
	HX_MARK_MEMBER_NAME(constantValue,"constantValue");
	HX_MARK_MEMBER_NAME(valueCarrier,"valueCarrier");
	HX_MARK_MEMBER_NAME(connection,"connection");
	super::__Mark(HX_MARK_ARG);
	HX_MARK_END_CLASS();
}

void InputPort_obj::__Visit(HX_VISIT_PARAMS)
{
	HX_VISIT_MEMBER_NAME(onRemoveConstantValueListeners,"onRemoveConstantValueListeners");
	HX_VISIT_MEMBER_NAME(onSetConstantValueListeners,"onSetConstantValueListeners");
	HX_VISIT_MEMBER_NAME(onUseValueListeners,"onUseValueListeners");
	HX_VISIT_MEMBER_NAME(onSetValueListeners,"onSetValueListeners");
	HX_VISIT_MEMBER_NAME(constantValue,"constantValue");
	HX_VISIT_MEMBER_NAME(valueCarrier,"valueCarrier");
	HX_VISIT_MEMBER_NAME(connection,"connection");
	super::__Visit(HX_VISIT_ARG);
}

Dynamic InputPort_obj::__Field(const ::String &inName,bool inCallProp)
{
	switch(inName.length) {
	case 8:
		if (HX_FIELD_EQ(inName,"getValue") ) { return getValue_dyn(); }
		break;
	case 10:
		if (HX_FIELD_EQ(inName,"onUseValue") ) { return onUseValue_dyn(); }
		if (HX_FIELD_EQ(inName,"onSetValue") ) { return onSetValue_dyn(); }
		if (HX_FIELD_EQ(inName,"connection") ) { return connection; }
		break;
	case 11:
		if (HX_FIELD_EQ(inName,"setConstant") ) { return setConstant_dyn(); }
		break;
	case 12:
		if (HX_FIELD_EQ(inName,"valueCarrier") ) { return valueCarrier; }
		break;
	case 13:
		if (HX_FIELD_EQ(inName,"constantValue") ) { return constantValue; }
		break;
	case 14:
		if (HX_FIELD_EQ(inName,"removeConstant") ) { return removeConstant_dyn(); }
		break;
	case 15:
		if (HX_FIELD_EQ(inName,"useValueCarrier") ) { return useValueCarrier_dyn(); }
		if (HX_FIELD_EQ(inName,"getValueCarrier") ) { return getValueCarrier_dyn(); }
		if (HX_FIELD_EQ(inName,"setValueCarrier") ) { return setValueCarrier_dyn(); }
		break;
	case 16:
		if (HX_FIELD_EQ(inName,"getConstantValue") ) { return getConstantValue_dyn(); }
		break;
	case 18:
		if (HX_FIELD_EQ(inName,"onSetConstantValue") ) { return onSetConstantValue_dyn(); }
		break;
	case 19:
		if (HX_FIELD_EQ(inName,"onUseValueListeners") ) { return onUseValueListeners; }
		if (HX_FIELD_EQ(inName,"onSetValueListeners") ) { return onSetValueListeners; }
		break;
	case 21:
		if (HX_FIELD_EQ(inName,"onRemoveConstantValue") ) { return onRemoveConstantValue_dyn(); }
		break;
	case 23:
		if (HX_FIELD_EQ(inName,"fireOnUseValueListeners") ) { return fireOnUseValueListeners_dyn(); }
		if (HX_FIELD_EQ(inName,"fireOnSetValueListeners") ) { return fireOnSetValueListeners_dyn(); }
		break;
	case 27:
		if (HX_FIELD_EQ(inName,"onSetConstantValueListeners") ) { return onSetConstantValueListeners; }
		break;
	case 30:
		if (HX_FIELD_EQ(inName,"onRemoveConstantValueListeners") ) { return onRemoveConstantValueListeners; }
		break;
	case 31:
		if (HX_FIELD_EQ(inName,"fireOnSetConstantValueListeners") ) { return fireOnSetConstantValueListeners_dyn(); }
		break;
	case 34:
		if (HX_FIELD_EQ(inName,"fireOnRemoveConstantValueListeners") ) { return fireOnRemoveConstantValueListeners_dyn(); }
	}
	return super::__Field(inName,inCallProp);
}

Dynamic InputPort_obj::__SetField(const ::String &inName,const Dynamic &inValue,bool inCallProp)
{
	switch(inName.length) {
	case 10:
		if (HX_FIELD_EQ(inName,"connection") ) { connection=inValue.Cast< Array< ::Dynamic > >(); return inValue; }
		break;
	case 12:
		if (HX_FIELD_EQ(inName,"valueCarrier") ) { valueCarrier=inValue.Cast< ::retro::model::ValueCarrier >(); return inValue; }
		break;
	case 13:
		if (HX_FIELD_EQ(inName,"constantValue") ) { constantValue=inValue.Cast< ::retro::model::Value >(); return inValue; }
		break;
	case 19:
		if (HX_FIELD_EQ(inName,"onUseValueListeners") ) { onUseValueListeners=inValue.Cast< Dynamic >(); return inValue; }
		if (HX_FIELD_EQ(inName,"onSetValueListeners") ) { onSetValueListeners=inValue.Cast< Dynamic >(); return inValue; }
		break;
	case 27:
		if (HX_FIELD_EQ(inName,"onSetConstantValueListeners") ) { onSetConstantValueListeners=inValue.Cast< Dynamic >(); return inValue; }
		break;
	case 30:
		if (HX_FIELD_EQ(inName,"onRemoveConstantValueListeners") ) { onRemoveConstantValueListeners=inValue.Cast< Dynamic >(); return inValue; }
	}
	return super::__SetField(inName,inValue,inCallProp);
}

void InputPort_obj::__GetFields(Array< ::String> &outFields)
{
	outFields->push(HX_CSTRING("onRemoveConstantValueListeners"));
	outFields->push(HX_CSTRING("onSetConstantValueListeners"));
	outFields->push(HX_CSTRING("onUseValueListeners"));
	outFields->push(HX_CSTRING("onSetValueListeners"));
	outFields->push(HX_CSTRING("constantValue"));
	outFields->push(HX_CSTRING("valueCarrier"));
	outFields->push(HX_CSTRING("connection"));
	super::__GetFields(outFields);
};

static ::String sStaticFields[] = {
	String(null()) };

static ::String sMemberFields[] = {
	HX_CSTRING("fireOnRemoveConstantValueListeners"),
	HX_CSTRING("fireOnSetConstantValueListeners"),
	HX_CSTRING("fireOnUseValueListeners"),
	HX_CSTRING("fireOnSetValueListeners"),
	HX_CSTRING("onRemoveConstantValue"),
	HX_CSTRING("onSetConstantValue"),
	HX_CSTRING("onUseValue"),
	HX_CSTRING("onSetValue"),
	HX_CSTRING("removeConstant"),
	HX_CSTRING("setConstant"),
	HX_CSTRING("useValueCarrier"),
	HX_CSTRING("getValue"),
	HX_CSTRING("getConstantValue"),
	HX_CSTRING("getValueCarrier"),
	HX_CSTRING("setValueCarrier"),
	HX_CSTRING("onRemoveConstantValueListeners"),
	HX_CSTRING("onSetConstantValueListeners"),
	HX_CSTRING("onUseValueListeners"),
	HX_CSTRING("onSetValueListeners"),
	HX_CSTRING("constantValue"),
	HX_CSTRING("valueCarrier"),
	HX_CSTRING("connection"),
	String(null()) };

static void sMarkStatics(HX_MARK_PARAMS) {
	HX_MARK_MEMBER_NAME(InputPort_obj::__mClass,"__mClass");
};

static void sVisitStatics(HX_VISIT_PARAMS) {
	HX_VISIT_MEMBER_NAME(InputPort_obj::__mClass,"__mClass");
};

Class InputPort_obj::__mClass;

void InputPort_obj::__register()
{
	hx::Static(__mClass) = hx::RegisterClass(HX_CSTRING("retro.model.InputPort"), hx::TCanCast< InputPort_obj> ,sStaticFields,sMemberFields,
	&__CreateEmpty, &__Create,
	&super::__SGetClass(), 0, sMarkStatics, sVisitStatics);
}

void InputPort_obj::__boot()
{
}

} // end namespace retro
} // end namespace model
