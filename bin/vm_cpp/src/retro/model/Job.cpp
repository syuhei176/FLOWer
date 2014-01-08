#include <hxcpp.h>

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
#ifndef INCLUDED_retro_model_Value
#include <retro/model/Value.h>
#endif
#ifndef INCLUDED_retro_pub_Point2D
#include <retro/pub/Point2D.h>
#endif
#ifndef INCLUDED_retro_vm_Worker
#include <retro/vm/Worker.h>
#endif
namespace retro{
namespace model{

Void Job_obj::__construct(::String id)
{
HX_STACK_PUSH("Job::new","retro/model/Job.hx",29);
{
	HX_STACK_LINE(30)
	this->id = id;
	HX_STACK_LINE(31)
	this->inputPorts = Array_obj< ::Dynamic >::__new();
	HX_STACK_LINE(32)
	this->outputPorts = Array_obj< ::Dynamic >::__new();
	HX_STACK_LINE(33)
	this->pos = ::retro::pub::Point2D_obj::__new((int)0,(int)0);
	HX_STACK_LINE(34)
	this->onInputPortAddedListeners = Dynamic( Array_obj<Dynamic>::__new() );
	HX_STACK_LINE(35)
	this->onOutputPortAddedListeners = Dynamic( Array_obj<Dynamic>::__new() );
	HX_STACK_LINE(36)
	this->onInputPortRemovedListeners = Dynamic( Array_obj<Dynamic>::__new() );
	HX_STACK_LINE(37)
	this->onOutputPortRemovedListeners = Dynamic( Array_obj<Dynamic>::__new() );
	HX_STACK_LINE(38)
	this->onPosChangedListeners = Dynamic( Array_obj<Dynamic>::__new() );
}
;
	return null();
}

Job_obj::~Job_obj() { }

Dynamic Job_obj::__CreateEmpty() { return  new Job_obj; }
hx::ObjectPtr< Job_obj > Job_obj::__new(::String id)
{  hx::ObjectPtr< Job_obj > result = new Job_obj();
	result->__construct(id);
	return result;}

Dynamic Job_obj::__Create(hx::DynamicArray inArgs)
{  hx::ObjectPtr< Job_obj > result = new Job_obj();
	result->__construct(inArgs[0]);
	return result;}

Dynamic Job_obj::getJSON( ){
	HX_STACK_PUSH("Job::getJSON","retro/model/Job.hx",169);
	HX_STACK_THIS(this);
	struct _Function_1_1{
		inline static Dynamic Block( ){
			HX_STACK_PUSH("*::closure","retro/model/Job.hx",170);
			{
				hx::Anon __result = hx::Anon_obj::Create();
				return __result;
			}
			return null();
		}
	};
	HX_STACK_LINE(170)
	Dynamic json = _Function_1_1::Block();		HX_STACK_VAR(json,"json");
	HX_STACK_LINE(171)
	json->__FieldRef(HX_CSTRING("id")) = this->getId();
	HX_STACK_LINE(172)
	return json;
}


HX_DEFINE_DYNAMIC_FUNC0(Job_obj,getJSON,return )

Void Job_obj::fireOnPosChangedListeners( Float x,Float y){
{
		HX_STACK_PUSH("Job::fireOnPosChangedListeners","retro/model/Job.hx",163);
		HX_STACK_THIS(this);
		HX_STACK_ARG(x,"x");
		HX_STACK_ARG(y,"y");
		HX_STACK_LINE(164)
		int _g = (int)0;		HX_STACK_VAR(_g,"_g");
		Dynamic _g1 = this->onPosChangedListeners;		HX_STACK_VAR(_g1,"_g1");
		HX_STACK_LINE(164)
		while(((_g < _g1->__Field(HX_CSTRING("length"),true)))){
			HX_STACK_LINE(164)
			Dynamic l = _g1->__GetItem(_g);		HX_STACK_VAR(l,"l");
			HX_STACK_LINE(164)
			++(_g);
			HX_STACK_LINE(165)
			l(x,y).Cast< Void >();
		}
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC2(Job_obj,fireOnPosChangedListeners,(void))

Void Job_obj::onPosChanged( Dynamic listener){
{
		HX_STACK_PUSH("Job::onPosChanged","retro/model/Job.hx",159);
		HX_STACK_THIS(this);
		HX_STACK_ARG(listener,"listener");
		HX_STACK_LINE(159)
		this->onPosChangedListeners->__Field(HX_CSTRING("push"),true)(listener);
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC1(Job_obj,onPosChanged,(void))

Void Job_obj::fireOnOutputPortRemovedListeners( ::retro::model::OutputPort j){
{
		HX_STACK_PUSH("Job::fireOnOutputPortRemovedListeners","retro/model/Job.hx",153);
		HX_STACK_THIS(this);
		HX_STACK_ARG(j,"j");
		HX_STACK_LINE(154)
		int _g = (int)0;		HX_STACK_VAR(_g,"_g");
		Dynamic _g1 = this->onOutputPortRemovedListeners;		HX_STACK_VAR(_g1,"_g1");
		HX_STACK_LINE(154)
		while(((_g < _g1->__Field(HX_CSTRING("length"),true)))){
			HX_STACK_LINE(154)
			Dynamic l = _g1->__GetItem(_g);		HX_STACK_VAR(l,"l");
			HX_STACK_LINE(154)
			++(_g);
			HX_STACK_LINE(155)
			l(j).Cast< Void >();
		}
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC1(Job_obj,fireOnOutputPortRemovedListeners,(void))

Void Job_obj::onOutputPortRemoved( Dynamic listener){
{
		HX_STACK_PUSH("Job::onOutputPortRemoved","retro/model/Job.hx",149);
		HX_STACK_THIS(this);
		HX_STACK_ARG(listener,"listener");
		HX_STACK_LINE(149)
		this->onOutputPortRemovedListeners->__Field(HX_CSTRING("push"),true)(listener);
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC1(Job_obj,onOutputPortRemoved,(void))

Void Job_obj::fireOnInputPortRemovedListeners( ::retro::model::InputPort j){
{
		HX_STACK_PUSH("Job::fireOnInputPortRemovedListeners","retro/model/Job.hx",143);
		HX_STACK_THIS(this);
		HX_STACK_ARG(j,"j");
		HX_STACK_LINE(144)
		int _g = (int)0;		HX_STACK_VAR(_g,"_g");
		Dynamic _g1 = this->onInputPortRemovedListeners;		HX_STACK_VAR(_g1,"_g1");
		HX_STACK_LINE(144)
		while(((_g < _g1->__Field(HX_CSTRING("length"),true)))){
			HX_STACK_LINE(144)
			Dynamic l = _g1->__GetItem(_g);		HX_STACK_VAR(l,"l");
			HX_STACK_LINE(144)
			++(_g);
			HX_STACK_LINE(145)
			l(j).Cast< Void >();
		}
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC1(Job_obj,fireOnInputPortRemovedListeners,(void))

Void Job_obj::onInputPortRemoved( Dynamic listener){
{
		HX_STACK_PUSH("Job::onInputPortRemoved","retro/model/Job.hx",139);
		HX_STACK_THIS(this);
		HX_STACK_ARG(listener,"listener");
		HX_STACK_LINE(139)
		this->onInputPortRemovedListeners->__Field(HX_CSTRING("push"),true)(listener);
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC1(Job_obj,onInputPortRemoved,(void))

Void Job_obj::fireOnOutputPortAddedListeners( ::retro::model::OutputPort j){
{
		HX_STACK_PUSH("Job::fireOnOutputPortAddedListeners","retro/model/Job.hx",133);
		HX_STACK_THIS(this);
		HX_STACK_ARG(j,"j");
		HX_STACK_LINE(134)
		int _g = (int)0;		HX_STACK_VAR(_g,"_g");
		Dynamic _g1 = this->onOutputPortAddedListeners;		HX_STACK_VAR(_g1,"_g1");
		HX_STACK_LINE(134)
		while(((_g < _g1->__Field(HX_CSTRING("length"),true)))){
			HX_STACK_LINE(134)
			Dynamic l = _g1->__GetItem(_g);		HX_STACK_VAR(l,"l");
			HX_STACK_LINE(134)
			++(_g);
			HX_STACK_LINE(135)
			l(j).Cast< Void >();
		}
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC1(Job_obj,fireOnOutputPortAddedListeners,(void))

Void Job_obj::onOutputPortAdded( Dynamic listener){
{
		HX_STACK_PUSH("Job::onOutputPortAdded","retro/model/Job.hx",129);
		HX_STACK_THIS(this);
		HX_STACK_ARG(listener,"listener");
		HX_STACK_LINE(129)
		this->onOutputPortAddedListeners->__Field(HX_CSTRING("push"),true)(listener);
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC1(Job_obj,onOutputPortAdded,(void))

Void Job_obj::fireOnInputPortAddedListeners( ::retro::model::InputPort j){
{
		HX_STACK_PUSH("Job::fireOnInputPortAddedListeners","retro/model/Job.hx",123);
		HX_STACK_THIS(this);
		HX_STACK_ARG(j,"j");
		HX_STACK_LINE(124)
		int _g = (int)0;		HX_STACK_VAR(_g,"_g");
		Dynamic _g1 = this->onInputPortAddedListeners;		HX_STACK_VAR(_g1,"_g1");
		HX_STACK_LINE(124)
		while(((_g < _g1->__Field(HX_CSTRING("length"),true)))){
			HX_STACK_LINE(124)
			Dynamic l = _g1->__GetItem(_g);		HX_STACK_VAR(l,"l");
			HX_STACK_LINE(124)
			++(_g);
			HX_STACK_LINE(125)
			l(j).Cast< Void >();
		}
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC1(Job_obj,fireOnInputPortAddedListeners,(void))

Void Job_obj::onInputPortAdded( Dynamic listener){
{
		HX_STACK_PUSH("Job::onInputPortAdded","retro/model/Job.hx",119);
		HX_STACK_THIS(this);
		HX_STACK_ARG(listener,"listener");
		HX_STACK_LINE(119)
		this->onInputPortAddedListeners->__Field(HX_CSTRING("push"),true)(listener);
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC1(Job_obj,onInputPortAdded,(void))

::retro::model::OutputPort Job_obj::getOutputPort( ::String name){
	HX_STACK_PUSH("Job::getOutputPort","retro/model/Job.hx",110);
	HX_STACK_THIS(this);
	HX_STACK_ARG(name,"name");
	HX_STACK_LINE(111)
	{
		HX_STACK_LINE(111)
		int _g = (int)0;		HX_STACK_VAR(_g,"_g");
		Array< ::Dynamic > _g1 = this->outputPorts;		HX_STACK_VAR(_g1,"_g1");
		HX_STACK_LINE(111)
		while(((_g < _g1->length))){
			HX_STACK_LINE(111)
			::retro::model::OutputPort p = _g1->__get(_g).StaticCast< ::retro::model::OutputPort >();		HX_STACK_VAR(p,"p");
			HX_STACK_LINE(111)
			++(_g);
			HX_STACK_LINE(112)
			if (((name == p->name))){
				HX_STACK_LINE(112)
				return p;
			}
		}
	}
	HX_STACK_LINE(116)
	return null();
}


HX_DEFINE_DYNAMIC_FUNC1(Job_obj,getOutputPort,return )

::retro::model::InputPort Job_obj::getInputPort( ::String name){
	HX_STACK_PUSH("Job::getInputPort","retro/model/Job.hx",102);
	HX_STACK_THIS(this);
	HX_STACK_ARG(name,"name");
	HX_STACK_LINE(103)
	{
		HX_STACK_LINE(103)
		int _g = (int)0;		HX_STACK_VAR(_g,"_g");
		Array< ::Dynamic > _g1 = this->inputPorts;		HX_STACK_VAR(_g1,"_g1");
		HX_STACK_LINE(103)
		while(((_g < _g1->length))){
			HX_STACK_LINE(103)
			::retro::model::InputPort p = _g1->__get(_g).StaticCast< ::retro::model::InputPort >();		HX_STACK_VAR(p,"p");
			HX_STACK_LINE(103)
			++(_g);
			HX_STACK_LINE(104)
			if (((name == p->name))){
				HX_STACK_LINE(104)
				return p;
			}
		}
	}
	HX_STACK_LINE(108)
	return null();
}


HX_DEFINE_DYNAMIC_FUNC1(Job_obj,getInputPort,return )

::retro::vm::Worker Job_obj::getWorker( ){
	HX_STACK_PUSH("Job::getWorker","retro/model/Job.hx",96);
	HX_STACK_THIS(this);

	HX_BEGIN_LOCAL_FUNC_S0(hx::LocalFunc,_Function_1_1)
	Void run(::retro::core::Params params,Dynamic cb){
		HX_STACK_PUSH("*::_Function_1_1","retro/model/Job.hx",97);
		HX_STACK_ARG(params,"params");
		HX_STACK_ARG(cb,"cb");
		{
			HX_STACK_LINE(97)
			cb(::retro::core::Result_obj::__new()).Cast< Void >();
		}
		return null();
	}
	HX_END_LOCAL_FUNC2((void))

	HX_STACK_LINE(96)
	return ::retro::vm::Worker_obj::__new(hx::ObjectPtr<OBJ_>(this), Dynamic(new _Function_1_1()));
}


HX_DEFINE_DYNAMIC_FUNC0(Job_obj,getWorker,return )

::retro::core::Params Job_obj::getParams( ){
	HX_STACK_PUSH("Job::getParams","retro/model/Job.hx",84);
	HX_STACK_THIS(this);
	HX_STACK_LINE(85)
	::retro::core::Params params = ::retro::core::Params_obj::__new();		HX_STACK_VAR(params,"params");
	HX_STACK_LINE(86)
	{
		HX_STACK_LINE(86)
		int _g = (int)0;		HX_STACK_VAR(_g,"_g");
		Array< ::Dynamic > _g1 = this->inputPorts;		HX_STACK_VAR(_g1,"_g1");
		HX_STACK_LINE(86)
		while(((_g < _g1->length))){
			HX_STACK_LINE(86)
			::retro::model::InputPort p = _g1->__get(_g).StaticCast< ::retro::model::InputPort >();		HX_STACK_VAR(p,"p");
			HX_STACK_LINE(86)
			++(_g);
			HX_STACK_LINE(87)
			::retro::model::Value value = null();		HX_STACK_VAR(value,"value");
			HX_STACK_LINE(88)
			if (((p->getValue() != null()))){
				HX_STACK_LINE(88)
				value = p->getValue();
			}
			HX_STACK_LINE(91)
			params->add(p->getName(),value);
		}
	}
	HX_STACK_LINE(93)
	return params;
}


HX_DEFINE_DYNAMIC_FUNC0(Job_obj,getParams,return )

Void Job_obj::removeOutputPort( ::retro::model::OutputPort port){
{
		HX_STACK_PUSH("Job::removeOutputPort","retro/model/Job.hx",79);
		HX_STACK_THIS(this);
		HX_STACK_ARG(port,"port");
		HX_STACK_LINE(80)
		this->fireOnOutputPortRemovedListeners(port);
		HX_STACK_LINE(81)
		this->outputPorts->remove(port);
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC1(Job_obj,removeOutputPort,(void))

Void Job_obj::removeInputPort( ::retro::model::InputPort port){
{
		HX_STACK_PUSH("Job::removeInputPort","retro/model/Job.hx",75);
		HX_STACK_THIS(this);
		HX_STACK_ARG(port,"port");
		HX_STACK_LINE(76)
		this->fireOnInputPortRemovedListeners(port);
		HX_STACK_LINE(77)
		this->inputPorts->remove(port);
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC1(Job_obj,removeInputPort,(void))

Void Job_obj::addOutputPort( ::retro::model::OutputPort port){
{
		HX_STACK_PUSH("Job::addOutputPort","retro/model/Job.hx",71);
		HX_STACK_THIS(this);
		HX_STACK_ARG(port,"port");
		HX_STACK_LINE(72)
		this->fireOnOutputPortAddedListeners(port);
		HX_STACK_LINE(73)
		this->outputPorts->push(port);
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC1(Job_obj,addOutputPort,(void))

Void Job_obj::addInputPort( ::retro::model::InputPort port){
{
		HX_STACK_PUSH("Job::addInputPort","retro/model/Job.hx",67);
		HX_STACK_THIS(this);
		HX_STACK_ARG(port,"port");
		HX_STACK_LINE(68)
		this->fireOnInputPortAddedListeners(port);
		HX_STACK_LINE(69)
		this->inputPorts->push(port);
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC1(Job_obj,addInputPort,(void))

Array< ::Dynamic > Job_obj::getOutputPorts( ){
	HX_STACK_PUSH("Job::getOutputPorts","retro/model/Job.hx",63);
	HX_STACK_THIS(this);
	HX_STACK_LINE(63)
	return this->outputPorts;
}


HX_DEFINE_DYNAMIC_FUNC0(Job_obj,getOutputPorts,return )

Array< ::Dynamic > Job_obj::getInputPorts( ){
	HX_STACK_PUSH("Job::getInputPorts","retro/model/Job.hx",59);
	HX_STACK_THIS(this);
	HX_STACK_LINE(59)
	return this->inputPorts;
}


HX_DEFINE_DYNAMIC_FUNC0(Job_obj,getInputPorts,return )

::retro::pub::Point2D Job_obj::getPos( ){
	HX_STACK_PUSH("Job::getPos","retro/model/Job.hx",55);
	HX_STACK_THIS(this);
	HX_STACK_LINE(55)
	return this->pos;
}


HX_DEFINE_DYNAMIC_FUNC0(Job_obj,getPos,return )

Void Job_obj::setPos( Float x,Float y){
{
		HX_STACK_PUSH("Job::setPos","retro/model/Job.hx",49);
		HX_STACK_THIS(this);
		HX_STACK_ARG(x,"x");
		HX_STACK_ARG(y,"y");
		HX_STACK_LINE(50)
		this->fireOnPosChangedListeners(x,y);
		HX_STACK_LINE(51)
		this->pos->setX(x);
		HX_STACK_LINE(52)
		this->pos->setY(y);
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC2(Job_obj,setPos,(void))

::String Job_obj::getName( ){
	HX_STACK_PUSH("Job::getName","retro/model/Job.hx",45);
	HX_STACK_THIS(this);
	HX_STACK_LINE(45)
	return HX_CSTRING("");
}


HX_DEFINE_DYNAMIC_FUNC0(Job_obj,getName,return )

::String Job_obj::getId( ){
	HX_STACK_PUSH("Job::getId","retro/model/Job.hx",41);
	HX_STACK_THIS(this);
	HX_STACK_LINE(41)
	return this->id;
}


HX_DEFINE_DYNAMIC_FUNC0(Job_obj,getId,return )


Job_obj::Job_obj()
{
}

void Job_obj::__Mark(HX_MARK_PARAMS)
{
	HX_MARK_BEGIN_CLASS(Job);
	HX_MARK_MEMBER_NAME(worker,"worker");
	HX_MARK_MEMBER_NAME(onPosChangedListeners,"onPosChangedListeners");
	HX_MARK_MEMBER_NAME(onOutputPortRemovedListeners,"onOutputPortRemovedListeners");
	HX_MARK_MEMBER_NAME(onInputPortRemovedListeners,"onInputPortRemovedListeners");
	HX_MARK_MEMBER_NAME(onOutputPortAddedListeners,"onOutputPortAddedListeners");
	HX_MARK_MEMBER_NAME(onInputPortAddedListeners,"onInputPortAddedListeners");
	HX_MARK_MEMBER_NAME(pos,"pos");
	HX_MARK_MEMBER_NAME(outputPorts,"outputPorts");
	HX_MARK_MEMBER_NAME(inputPorts,"inputPorts");
	HX_MARK_MEMBER_NAME(id,"id");
	HX_MARK_END_CLASS();
}

void Job_obj::__Visit(HX_VISIT_PARAMS)
{
	HX_VISIT_MEMBER_NAME(worker,"worker");
	HX_VISIT_MEMBER_NAME(onPosChangedListeners,"onPosChangedListeners");
	HX_VISIT_MEMBER_NAME(onOutputPortRemovedListeners,"onOutputPortRemovedListeners");
	HX_VISIT_MEMBER_NAME(onInputPortRemovedListeners,"onInputPortRemovedListeners");
	HX_VISIT_MEMBER_NAME(onOutputPortAddedListeners,"onOutputPortAddedListeners");
	HX_VISIT_MEMBER_NAME(onInputPortAddedListeners,"onInputPortAddedListeners");
	HX_VISIT_MEMBER_NAME(pos,"pos");
	HX_VISIT_MEMBER_NAME(outputPorts,"outputPorts");
	HX_VISIT_MEMBER_NAME(inputPorts,"inputPorts");
	HX_VISIT_MEMBER_NAME(id,"id");
}

Dynamic Job_obj::__Field(const ::String &inName,bool inCallProp)
{
	switch(inName.length) {
	case 2:
		if (HX_FIELD_EQ(inName,"id") ) { return id; }
		break;
	case 3:
		if (HX_FIELD_EQ(inName,"pos") ) { return pos; }
		break;
	case 5:
		if (HX_FIELD_EQ(inName,"getId") ) { return getId_dyn(); }
		break;
	case 6:
		if (HX_FIELD_EQ(inName,"getPos") ) { return getPos_dyn(); }
		if (HX_FIELD_EQ(inName,"setPos") ) { return setPos_dyn(); }
		if (HX_FIELD_EQ(inName,"worker") ) { return worker; }
		break;
	case 7:
		if (HX_FIELD_EQ(inName,"getJSON") ) { return getJSON_dyn(); }
		if (HX_FIELD_EQ(inName,"getName") ) { return getName_dyn(); }
		break;
	case 9:
		if (HX_FIELD_EQ(inName,"getWorker") ) { return getWorker_dyn(); }
		if (HX_FIELD_EQ(inName,"getParams") ) { return getParams_dyn(); }
		break;
	case 10:
		if (HX_FIELD_EQ(inName,"inputPorts") ) { return inputPorts; }
		break;
	case 11:
		if (HX_FIELD_EQ(inName,"outputPorts") ) { return outputPorts; }
		break;
	case 12:
		if (HX_FIELD_EQ(inName,"onPosChanged") ) { return onPosChanged_dyn(); }
		if (HX_FIELD_EQ(inName,"getInputPort") ) { return getInputPort_dyn(); }
		if (HX_FIELD_EQ(inName,"addInputPort") ) { return addInputPort_dyn(); }
		break;
	case 13:
		if (HX_FIELD_EQ(inName,"getOutputPort") ) { return getOutputPort_dyn(); }
		if (HX_FIELD_EQ(inName,"addOutputPort") ) { return addOutputPort_dyn(); }
		if (HX_FIELD_EQ(inName,"getInputPorts") ) { return getInputPorts_dyn(); }
		break;
	case 14:
		if (HX_FIELD_EQ(inName,"getOutputPorts") ) { return getOutputPorts_dyn(); }
		break;
	case 15:
		if (HX_FIELD_EQ(inName,"removeInputPort") ) { return removeInputPort_dyn(); }
		break;
	case 16:
		if (HX_FIELD_EQ(inName,"onInputPortAdded") ) { return onInputPortAdded_dyn(); }
		if (HX_FIELD_EQ(inName,"removeOutputPort") ) { return removeOutputPort_dyn(); }
		break;
	case 17:
		if (HX_FIELD_EQ(inName,"onOutputPortAdded") ) { return onOutputPortAdded_dyn(); }
		break;
	case 18:
		if (HX_FIELD_EQ(inName,"onInputPortRemoved") ) { return onInputPortRemoved_dyn(); }
		break;
	case 19:
		if (HX_FIELD_EQ(inName,"onOutputPortRemoved") ) { return onOutputPortRemoved_dyn(); }
		break;
	case 21:
		if (HX_FIELD_EQ(inName,"onPosChangedListeners") ) { return onPosChangedListeners; }
		break;
	case 25:
		if (HX_FIELD_EQ(inName,"fireOnPosChangedListeners") ) { return fireOnPosChangedListeners_dyn(); }
		if (HX_FIELD_EQ(inName,"onInputPortAddedListeners") ) { return onInputPortAddedListeners; }
		break;
	case 26:
		if (HX_FIELD_EQ(inName,"onOutputPortAddedListeners") ) { return onOutputPortAddedListeners; }
		break;
	case 27:
		if (HX_FIELD_EQ(inName,"onInputPortRemovedListeners") ) { return onInputPortRemovedListeners; }
		break;
	case 28:
		if (HX_FIELD_EQ(inName,"onOutputPortRemovedListeners") ) { return onOutputPortRemovedListeners; }
		break;
	case 29:
		if (HX_FIELD_EQ(inName,"fireOnInputPortAddedListeners") ) { return fireOnInputPortAddedListeners_dyn(); }
		break;
	case 30:
		if (HX_FIELD_EQ(inName,"fireOnOutputPortAddedListeners") ) { return fireOnOutputPortAddedListeners_dyn(); }
		break;
	case 31:
		if (HX_FIELD_EQ(inName,"fireOnInputPortRemovedListeners") ) { return fireOnInputPortRemovedListeners_dyn(); }
		break;
	case 32:
		if (HX_FIELD_EQ(inName,"fireOnOutputPortRemovedListeners") ) { return fireOnOutputPortRemovedListeners_dyn(); }
	}
	return super::__Field(inName,inCallProp);
}

Dynamic Job_obj::__SetField(const ::String &inName,const Dynamic &inValue,bool inCallProp)
{
	switch(inName.length) {
	case 2:
		if (HX_FIELD_EQ(inName,"id") ) { id=inValue.Cast< ::String >(); return inValue; }
		break;
	case 3:
		if (HX_FIELD_EQ(inName,"pos") ) { pos=inValue.Cast< ::retro::pub::Point2D >(); return inValue; }
		break;
	case 6:
		if (HX_FIELD_EQ(inName,"worker") ) { worker=inValue.Cast< ::retro::vm::Worker >(); return inValue; }
		break;
	case 10:
		if (HX_FIELD_EQ(inName,"inputPorts") ) { inputPorts=inValue.Cast< Array< ::Dynamic > >(); return inValue; }
		break;
	case 11:
		if (HX_FIELD_EQ(inName,"outputPorts") ) { outputPorts=inValue.Cast< Array< ::Dynamic > >(); return inValue; }
		break;
	case 21:
		if (HX_FIELD_EQ(inName,"onPosChangedListeners") ) { onPosChangedListeners=inValue.Cast< Dynamic >(); return inValue; }
		break;
	case 25:
		if (HX_FIELD_EQ(inName,"onInputPortAddedListeners") ) { onInputPortAddedListeners=inValue.Cast< Dynamic >(); return inValue; }
		break;
	case 26:
		if (HX_FIELD_EQ(inName,"onOutputPortAddedListeners") ) { onOutputPortAddedListeners=inValue.Cast< Dynamic >(); return inValue; }
		break;
	case 27:
		if (HX_FIELD_EQ(inName,"onInputPortRemovedListeners") ) { onInputPortRemovedListeners=inValue.Cast< Dynamic >(); return inValue; }
		break;
	case 28:
		if (HX_FIELD_EQ(inName,"onOutputPortRemovedListeners") ) { onOutputPortRemovedListeners=inValue.Cast< Dynamic >(); return inValue; }
	}
	return super::__SetField(inName,inValue,inCallProp);
}

void Job_obj::__GetFields(Array< ::String> &outFields)
{
	outFields->push(HX_CSTRING("worker"));
	outFields->push(HX_CSTRING("onPosChangedListeners"));
	outFields->push(HX_CSTRING("onOutputPortRemovedListeners"));
	outFields->push(HX_CSTRING("onInputPortRemovedListeners"));
	outFields->push(HX_CSTRING("onOutputPortAddedListeners"));
	outFields->push(HX_CSTRING("onInputPortAddedListeners"));
	outFields->push(HX_CSTRING("pos"));
	outFields->push(HX_CSTRING("outputPorts"));
	outFields->push(HX_CSTRING("inputPorts"));
	outFields->push(HX_CSTRING("id"));
	super::__GetFields(outFields);
};

static ::String sStaticFields[] = {
	String(null()) };

static ::String sMemberFields[] = {
	HX_CSTRING("getJSON"),
	HX_CSTRING("fireOnPosChangedListeners"),
	HX_CSTRING("onPosChanged"),
	HX_CSTRING("fireOnOutputPortRemovedListeners"),
	HX_CSTRING("onOutputPortRemoved"),
	HX_CSTRING("fireOnInputPortRemovedListeners"),
	HX_CSTRING("onInputPortRemoved"),
	HX_CSTRING("fireOnOutputPortAddedListeners"),
	HX_CSTRING("onOutputPortAdded"),
	HX_CSTRING("fireOnInputPortAddedListeners"),
	HX_CSTRING("onInputPortAdded"),
	HX_CSTRING("getOutputPort"),
	HX_CSTRING("getInputPort"),
	HX_CSTRING("getWorker"),
	HX_CSTRING("getParams"),
	HX_CSTRING("removeOutputPort"),
	HX_CSTRING("removeInputPort"),
	HX_CSTRING("addOutputPort"),
	HX_CSTRING("addInputPort"),
	HX_CSTRING("getOutputPorts"),
	HX_CSTRING("getInputPorts"),
	HX_CSTRING("getPos"),
	HX_CSTRING("setPos"),
	HX_CSTRING("getName"),
	HX_CSTRING("getId"),
	HX_CSTRING("worker"),
	HX_CSTRING("onPosChangedListeners"),
	HX_CSTRING("onOutputPortRemovedListeners"),
	HX_CSTRING("onInputPortRemovedListeners"),
	HX_CSTRING("onOutputPortAddedListeners"),
	HX_CSTRING("onInputPortAddedListeners"),
	HX_CSTRING("pos"),
	HX_CSTRING("outputPorts"),
	HX_CSTRING("inputPorts"),
	HX_CSTRING("id"),
	String(null()) };

static void sMarkStatics(HX_MARK_PARAMS) {
	HX_MARK_MEMBER_NAME(Job_obj::__mClass,"__mClass");
};

static void sVisitStatics(HX_VISIT_PARAMS) {
	HX_VISIT_MEMBER_NAME(Job_obj::__mClass,"__mClass");
};

Class Job_obj::__mClass;

void Job_obj::__register()
{
	hx::Static(__mClass) = hx::RegisterClass(HX_CSTRING("retro.model.Job"), hx::TCanCast< Job_obj> ,sStaticFields,sMemberFields,
	&__CreateEmpty, &__Create,
	&super::__SGetClass(), 0, sMarkStatics, sVisitStatics);
}

void Job_obj::__boot()
{
}

} // end namespace retro
} // end namespace model
