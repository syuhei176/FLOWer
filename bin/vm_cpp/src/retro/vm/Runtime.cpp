#include <hxcpp.h>

#ifndef INCLUDED_Sys
#include <Sys.h>
#endif
#ifndef INCLUDED_haxe_Timer
#include <haxe/Timer.h>
#endif
#ifndef INCLUDED_retro_core_Params
#include <retro/core/Params.h>
#endif
#ifndef INCLUDED_retro_core_Result
#include <retro/core/Result.h>
#endif
#ifndef INCLUDED_retro_core_ScriptReturnValue
#include <retro/core/ScriptReturnValue.h>
#endif
#ifndef INCLUDED_retro_model_Diagram
#include <retro/model/Diagram.h>
#endif
#ifndef INCLUDED_retro_model_EntryJob
#include <retro/model/EntryJob.h>
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
#ifndef INCLUDED_retro_model_ValueCarrier
#include <retro/model/ValueCarrier.h>
#endif
#ifndef INCLUDED_retro_pub_RetroType
#include <retro/pub/RetroType.h>
#endif
#ifndef INCLUDED_retro_vm_Runtime
#include <retro/vm/Runtime.h>
#endif
#ifndef INCLUDED_retro_vm_Worker
#include <retro/vm/Worker.h>
#endif
namespace retro{
namespace vm{

Void Runtime_obj::__construct(::retro::model::Diagram diagram)
{
HX_STACK_PUSH("Runtime::new","retro/vm/Runtime.hx",21);
{
	HX_STACK_LINE(21)
	this->diagram = diagram;
}
;
	return null();
}

Runtime_obj::~Runtime_obj() { }

Dynamic Runtime_obj::__CreateEmpty() { return  new Runtime_obj; }
hx::ObjectPtr< Runtime_obj > Runtime_obj::__new(::retro::model::Diagram diagram)
{  hx::ObjectPtr< Runtime_obj > result = new Runtime_obj();
	result->__construct(diagram);
	return result;}

Dynamic Runtime_obj::__Create(hx::DynamicArray inArgs)
{  hx::ObjectPtr< Runtime_obj > result = new Runtime_obj();
	result->__construct(inArgs[0]);
	return result;}

Void Runtime_obj::run_step( ){
{
		HX_STACK_PUSH("Runtime::run_step","retro/vm/Runtime.hx",71);
		HX_STACK_THIS(this);
		HX_STACK_LINE(71)
		Array< ::Dynamic > _g4 = Array_obj< ::Dynamic >::__new().Add(hx::ObjectPtr<OBJ_>(this));		HX_STACK_VAR(_g4,"_g4");
		HX_STACK_LINE(72)
		{
			HX_STACK_LINE(72)
			int _g = (int)0;		HX_STACK_VAR(_g,"_g");
			Array< ::Dynamic > _g1 = this->diagram->getValueCarriers();		HX_STACK_VAR(_g1,"_g1");
			HX_STACK_LINE(72)
			while(((_g < _g1->length))){
				HX_STACK_LINE(72)
				Array< ::Dynamic > valueCarrier = Array_obj< ::Dynamic >::__new().Add(_g1->__get(_g).StaticCast< ::retro::model::ValueCarrier >());		HX_STACK_VAR(valueCarrier,"valueCarrier");
				HX_STACK_LINE(72)
				++(_g);
				HX_STACK_LINE(73)
				Array< ::Dynamic > port = Array_obj< ::Dynamic >::__new().Add(valueCarrier->__get((int)0).StaticCast< ::retro::model::ValueCarrier >()->step());		HX_STACK_VAR(port,"port");
				HX_STACK_LINE(74)
				if (((port->__get((int)0).StaticCast< ::retro::model::InputPort >() == null()))){
					HX_STACK_LINE(74)
					continue;
				}
				HX_STACK_LINE(77)
				port->__get((int)0).StaticCast< ::retro::model::InputPort >()->setValueCarrier(valueCarrier->__get((int)0).StaticCast< ::retro::model::ValueCarrier >());
				HX_STACK_LINE(78)
				::retro::core::Params params = port->__get((int)0).StaticCast< ::retro::model::InputPort >()->parent->getParams();		HX_STACK_VAR(params,"params");
				HX_STACK_LINE(79)
				::retro::vm::Worker worker = port->__get((int)0).StaticCast< ::retro::model::InputPort >()->parent->getWorker();		HX_STACK_VAR(worker,"worker");

				HX_BEGIN_LOCAL_FUNC_S3(hx::LocalFunc,_Function_3_1,Array< ::Dynamic >,port,Array< ::Dynamic >,_g4,Array< ::Dynamic >,valueCarrier)
				Void run(::retro::core::Result script_result){
					HX_STACK_PUSH("*::_Function_3_1","retro/vm/Runtime.hx",80);
					HX_STACK_ARG(script_result,"script_result");
					{
						HX_STACK_LINE(81)
						if (((script_result == null()))){
							HX_STACK_LINE(81)
							return null();
						}
						HX_STACK_LINE(84)
						{
							HX_STACK_LINE(84)
							int _g2 = (int)0;		HX_STACK_VAR(_g2,"_g2");
							Array< ::Dynamic > _g3 = port->__get((int)0).StaticCast< ::retro::model::InputPort >()->parent->getInputPorts();		HX_STACK_VAR(_g3,"_g3");
							HX_STACK_LINE(84)
							while(((_g2 < _g3->length))){
								HX_STACK_LINE(84)
								::retro::model::InputPort p = _g3->__get(_g2).StaticCast< ::retro::model::InputPort >();		HX_STACK_VAR(p,"p");
								HX_STACK_LINE(84)
								++(_g2);
								HX_STACK_LINE(85)
								_g4->__get((int)0).StaticCast< ::retro::vm::Runtime >()->diagram->removeValueCarrier(p->useValueCarrier());
							}
						}
						HX_STACK_LINE(87)
						_g4->__get((int)0).StaticCast< ::retro::vm::Runtime >()->diagram->removeValueCarrier(valueCarrier->__get((int)0).StaticCast< ::retro::model::ValueCarrier >());
						HX_STACK_LINE(89)
						{
							HX_STACK_LINE(89)
							int _g2 = (int)0;		HX_STACK_VAR(_g2,"_g2");
							Array< ::Dynamic > _g3 = port->__get((int)0).StaticCast< ::retro::model::InputPort >()->parent->getOutputPorts();		HX_STACK_VAR(_g3,"_g3");
							HX_STACK_LINE(89)
							while(((_g2 < _g3->length))){
								HX_STACK_LINE(89)
								::retro::model::OutputPort p = _g3->__get(_g2).StaticCast< ::retro::model::OutputPort >();		HX_STACK_VAR(p,"p");
								HX_STACK_LINE(89)
								++(_g2);
								HX_STACK_LINE(90)
								::retro::core::ScriptReturnValue sr = script_result->get(p->name);		HX_STACK_VAR(sr,"sr");
								HX_STACK_LINE(92)
								if (((sr == null()))){
									HX_STACK_LINE(92)
									continue;
								}
								HX_STACK_LINE(93)
								{
									HX_STACK_LINE(93)
									int _g5 = (int)0;		HX_STACK_VAR(_g5,"_g5");
									Array< ::Dynamic > _g6 = p->connection;		HX_STACK_VAR(_g6,"_g6");
									HX_STACK_LINE(93)
									while(((_g5 < _g6->length))){
										HX_STACK_LINE(93)
										::retro::model::InputPort c = _g6->__get(_g5).StaticCast< ::retro::model::InputPort >();		HX_STACK_VAR(c,"c");
										HX_STACK_LINE(93)
										++(_g5);
										HX_STACK_LINE(94)
										::retro::model::ValueCarrier newValueCarrier = ::retro::model::ValueCarrier_obj::__new(::retro::model::Value_obj::__new(p->type,sr->value),p,c);		HX_STACK_VAR(newValueCarrier,"newValueCarrier");
										HX_STACK_LINE(95)
										_g4->__get((int)0).StaticCast< ::retro::vm::Runtime >()->diagram->addValueCarrier(newValueCarrier);
									}
								}
							}
						}
					}
					return null();
				}
				HX_END_LOCAL_FUNC1((void))

				HX_STACK_LINE(80)
				worker->act(params, Dynamic(new _Function_3_1(port,_g4,valueCarrier)));
			}
		}
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC0(Runtime_obj,run_step,(void))

bool Runtime_obj::invoke_entry( ::retro::model::Job entry,::retro::model::Value v){
	HX_STACK_PUSH("Runtime::invoke_entry","retro/vm/Runtime.hx",57);
	HX_STACK_THIS(this);
	HX_STACK_ARG(entry,"entry");
	HX_STACK_ARG(v,"v");
	HX_STACK_LINE(57)
	Array< ::Dynamic > v1 = Array_obj< ::Dynamic >::__new().Add(v);		HX_STACK_VAR(v1,"v1");
	HX_STACK_LINE(57)
	Array< ::Dynamic > entry1 = Array_obj< ::Dynamic >::__new().Add(entry);		HX_STACK_VAR(entry1,"entry1");
	HX_STACK_LINE(57)
	Array< ::Dynamic > _g4 = Array_obj< ::Dynamic >::__new().Add(hx::ObjectPtr<OBJ_>(this));		HX_STACK_VAR(_g4,"_g4");
	HX_STACK_LINE(58)
	::retro::vm::Worker worker = entry1->__get((int)0).StaticCast< ::retro::model::Job >()->getWorker();		HX_STACK_VAR(worker,"worker");

	HX_BEGIN_LOCAL_FUNC_S3(hx::LocalFunc,_Function_1_1,Array< ::Dynamic >,entry1,Array< ::Dynamic >,_g4,Array< ::Dynamic >,v1)
	Void run(::retro::core::Result script_result){
		HX_STACK_PUSH("*::_Function_1_1","retro/vm/Runtime.hx",59);
		HX_STACK_ARG(script_result,"script_result");
		{
			HX_STACK_LINE(60)
			int _g = (int)0;		HX_STACK_VAR(_g,"_g");
			Array< ::Dynamic > _g1 = entry1->__get((int)0).StaticCast< ::retro::model::Job >()->getOutputPorts();		HX_STACK_VAR(_g1,"_g1");
			HX_STACK_LINE(60)
			while(((_g < _g1->length))){
				HX_STACK_LINE(60)
				::retro::model::OutputPort p = _g1->__get(_g).StaticCast< ::retro::model::OutputPort >();		HX_STACK_VAR(p,"p");
				HX_STACK_LINE(60)
				++(_g);
				HX_STACK_LINE(61)
				{
					HX_STACK_LINE(61)
					int _g2 = (int)0;		HX_STACK_VAR(_g2,"_g2");
					Array< ::Dynamic > _g3 = p->connection;		HX_STACK_VAR(_g3,"_g3");
					HX_STACK_LINE(61)
					while(((_g2 < _g3->length))){
						HX_STACK_LINE(61)
						::retro::model::InputPort c = _g3->__get(_g2).StaticCast< ::retro::model::InputPort >();		HX_STACK_VAR(c,"c");
						HX_STACK_LINE(61)
						++(_g2);
						HX_STACK_LINE(62)
						::retro::model::ValueCarrier newValueCarrier = ::retro::model::ValueCarrier_obj::__new(v1->__get((int)0).StaticCast< ::retro::model::Value >(),p,c);		HX_STACK_VAR(newValueCarrier,"newValueCarrier");
						HX_STACK_LINE(63)
						_g4->__get((int)0).StaticCast< ::retro::vm::Runtime >()->diagram->addValueCarrier(newValueCarrier);
					}
				}
			}
		}
		return null();
	}
	HX_END_LOCAL_FUNC1((void))

	HX_STACK_LINE(59)
	worker->act(null(), Dynamic(new _Function_1_1(entry1,_g4,v1)));
	HX_STACK_LINE(67)
	return true;
}


HX_DEFINE_DYNAMIC_FUNC2(Runtime_obj,invoke_entry,return )

Void Runtime_obj::stop( ){
{
		HX_STACK_PUSH("Runtime::stop","retro/vm/Runtime.hx",48);
		HX_STACK_THIS(this);
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC0(Runtime_obj,stop,(void))

Void Runtime_obj::run( ::retro::model::EntryJob entry,Array< ::String > v){
{
		HX_STACK_PUSH("Runtime::run","retro/vm/Runtime.hx",33);
		HX_STACK_THIS(this);
		HX_STACK_ARG(entry,"entry");
		HX_STACK_ARG(v,"v");
		HX_STACK_LINE(34)
		this->invoke_entry(entry,::retro::model::Value_obj::__new(::retro::pub::RetroType_obj::RNumber,v));
		HX_STACK_LINE(36)
		while((true)){
			HX_STACK_LINE(37)
			this->run_step();
			HX_STACK_LINE(38)
			::Sys_obj::sleep(0.05);
		}
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC2(Runtime_obj,run,(void))

bool Runtime_obj::isRunning( ){
	HX_STACK_PUSH("Runtime::isRunning","retro/vm/Runtime.hx",25);
	HX_STACK_THIS(this);
	HX_STACK_LINE(26)
	if (((this->timer != null()))){
		HX_STACK_LINE(26)
		return true;
	}
	HX_STACK_LINE(29)
	return false;
}


HX_DEFINE_DYNAMIC_FUNC0(Runtime_obj,isRunning,return )


Runtime_obj::Runtime_obj()
{
}

void Runtime_obj::__Mark(HX_MARK_PARAMS)
{
	HX_MARK_BEGIN_CLASS(Runtime);
	HX_MARK_MEMBER_NAME(timer,"timer");
	HX_MARK_MEMBER_NAME(diagram,"diagram");
	HX_MARK_END_CLASS();
}

void Runtime_obj::__Visit(HX_VISIT_PARAMS)
{
	HX_VISIT_MEMBER_NAME(timer,"timer");
	HX_VISIT_MEMBER_NAME(diagram,"diagram");
}

Dynamic Runtime_obj::__Field(const ::String &inName,bool inCallProp)
{
	switch(inName.length) {
	case 3:
		if (HX_FIELD_EQ(inName,"run") ) { return run_dyn(); }
		break;
	case 4:
		if (HX_FIELD_EQ(inName,"stop") ) { return stop_dyn(); }
		break;
	case 5:
		if (HX_FIELD_EQ(inName,"timer") ) { return timer; }
		break;
	case 7:
		if (HX_FIELD_EQ(inName,"diagram") ) { return diagram; }
		break;
	case 8:
		if (HX_FIELD_EQ(inName,"run_step") ) { return run_step_dyn(); }
		break;
	case 9:
		if (HX_FIELD_EQ(inName,"isRunning") ) { return isRunning_dyn(); }
		break;
	case 12:
		if (HX_FIELD_EQ(inName,"invoke_entry") ) { return invoke_entry_dyn(); }
	}
	return super::__Field(inName,inCallProp);
}

Dynamic Runtime_obj::__SetField(const ::String &inName,const Dynamic &inValue,bool inCallProp)
{
	switch(inName.length) {
	case 5:
		if (HX_FIELD_EQ(inName,"timer") ) { timer=inValue.Cast< ::haxe::Timer >(); return inValue; }
		break;
	case 7:
		if (HX_FIELD_EQ(inName,"diagram") ) { diagram=inValue.Cast< ::retro::model::Diagram >(); return inValue; }
	}
	return super::__SetField(inName,inValue,inCallProp);
}

void Runtime_obj::__GetFields(Array< ::String> &outFields)
{
	outFields->push(HX_CSTRING("timer"));
	outFields->push(HX_CSTRING("diagram"));
	super::__GetFields(outFields);
};

static ::String sStaticFields[] = {
	String(null()) };

static ::String sMemberFields[] = {
	HX_CSTRING("run_step"),
	HX_CSTRING("invoke_entry"),
	HX_CSTRING("stop"),
	HX_CSTRING("run"),
	HX_CSTRING("isRunning"),
	HX_CSTRING("timer"),
	HX_CSTRING("diagram"),
	String(null()) };

static void sMarkStatics(HX_MARK_PARAMS) {
	HX_MARK_MEMBER_NAME(Runtime_obj::__mClass,"__mClass");
};

static void sVisitStatics(HX_VISIT_PARAMS) {
	HX_VISIT_MEMBER_NAME(Runtime_obj::__mClass,"__mClass");
};

Class Runtime_obj::__mClass;

void Runtime_obj::__register()
{
	hx::Static(__mClass) = hx::RegisterClass(HX_CSTRING("retro.vm.Runtime"), hx::TCanCast< Runtime_obj> ,sStaticFields,sMemberFields,
	&__CreateEmpty, &__Create,
	&super::__SGetClass(), 0, sMarkStatics, sVisitStatics);
}

void Runtime_obj::__boot()
{
}

} // end namespace retro
} // end namespace vm
