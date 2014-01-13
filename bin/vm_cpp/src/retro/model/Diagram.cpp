#include <hxcpp.h>

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
#ifndef INCLUDED_retro_model_ValueCarrier
#include <retro/model/ValueCarrier.h>
#endif
namespace retro{
namespace model{

Void Diagram_obj::__construct()
{
HX_STACK_PUSH("Diagram::new","retro/model/Diagram.hx",20);
{
	HX_STACK_LINE(21)
	this->jobs = Array_obj< ::Dynamic >::__new();
	HX_STACK_LINE(22)
	this->valueCarriers = Array_obj< ::Dynamic >::__new();
	HX_STACK_LINE(23)
	this->onJobAddedListeners = Dynamic( Array_obj<Dynamic>::__new() );
	HX_STACK_LINE(24)
	this->onJobRemovedListeners = Dynamic( Array_obj<Dynamic>::__new() );
	HX_STACK_LINE(25)
	this->onValueCarrierAddedListeners = Dynamic( Array_obj<Dynamic>::__new() );
	HX_STACK_LINE(26)
	this->onValueCarrierRemovedListeners = Dynamic( Array_obj<Dynamic>::__new() );
	HX_STACK_LINE(27)
	this->onValueCarrierClearedListeners = Dynamic( Array_obj<Dynamic>::__new() );
}
;
	return null();
}

Diagram_obj::~Diagram_obj() { }

Dynamic Diagram_obj::__CreateEmpty() { return  new Diagram_obj; }
hx::ObjectPtr< Diagram_obj > Diagram_obj::__new()
{  hx::ObjectPtr< Diagram_obj > result = new Diagram_obj();
	result->__construct();
	return result;}

Dynamic Diagram_obj::__Create(hx::DynamicArray inArgs)
{  hx::ObjectPtr< Diagram_obj > result = new Diagram_obj();
	result->__construct();
	return result;}

Void Diagram_obj::fireOnValueCarrierCleared( ){
{
		HX_STACK_PUSH("Diagram::fireOnValueCarrierCleared","retro/model/Diagram.hx",140);
		HX_STACK_THIS(this);
		HX_STACK_LINE(141)
		int _g = (int)0;		HX_STACK_VAR(_g,"_g");
		Dynamic _g1 = this->onValueCarrierClearedListeners;		HX_STACK_VAR(_g1,"_g1");
		HX_STACK_LINE(141)
		while(((_g < _g1->__Field(HX_CSTRING("length"),true)))){
			HX_STACK_LINE(141)
			Dynamic l = _g1->__GetItem(_g);		HX_STACK_VAR(l,"l");
			HX_STACK_LINE(141)
			++(_g);
			HX_STACK_LINE(142)
			l().Cast< Void >();
		}
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC0(Diagram_obj,fireOnValueCarrierCleared,(void))

Void Diagram_obj::fireOnValueCarrierRemoved( ::retro::model::ValueCarrier vc){
{
		HX_STACK_PUSH("Diagram::fireOnValueCarrierRemoved","retro/model/Diagram.hx",134);
		HX_STACK_THIS(this);
		HX_STACK_ARG(vc,"vc");
		HX_STACK_LINE(135)
		int _g = (int)0;		HX_STACK_VAR(_g,"_g");
		Dynamic _g1 = this->onValueCarrierRemovedListeners;		HX_STACK_VAR(_g1,"_g1");
		HX_STACK_LINE(135)
		while(((_g < _g1->__Field(HX_CSTRING("length"),true)))){
			HX_STACK_LINE(135)
			Dynamic l = _g1->__GetItem(_g);		HX_STACK_VAR(l,"l");
			HX_STACK_LINE(135)
			++(_g);
			HX_STACK_LINE(136)
			l(vc).Cast< Void >();
		}
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC1(Diagram_obj,fireOnValueCarrierRemoved,(void))

Void Diagram_obj::fireOnValueCarrierAdded( ::retro::model::ValueCarrier vc){
{
		HX_STACK_PUSH("Diagram::fireOnValueCarrierAdded","retro/model/Diagram.hx",128);
		HX_STACK_THIS(this);
		HX_STACK_ARG(vc,"vc");
		HX_STACK_LINE(129)
		int _g = (int)0;		HX_STACK_VAR(_g,"_g");
		Dynamic _g1 = this->onValueCarrierAddedListeners;		HX_STACK_VAR(_g1,"_g1");
		HX_STACK_LINE(129)
		while(((_g < _g1->__Field(HX_CSTRING("length"),true)))){
			HX_STACK_LINE(129)
			Dynamic l = _g1->__GetItem(_g);		HX_STACK_VAR(l,"l");
			HX_STACK_LINE(129)
			++(_g);
			HX_STACK_LINE(130)
			l(vc).Cast< Void >();
		}
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC1(Diagram_obj,fireOnValueCarrierAdded,(void))

Void Diagram_obj::fireOnJobRemoved( ::retro::model::Job j){
{
		HX_STACK_PUSH("Diagram::fireOnJobRemoved","retro/model/Diagram.hx",122);
		HX_STACK_THIS(this);
		HX_STACK_ARG(j,"j");
		HX_STACK_LINE(123)
		int _g = (int)0;		HX_STACK_VAR(_g,"_g");
		Dynamic _g1 = this->onJobRemovedListeners;		HX_STACK_VAR(_g1,"_g1");
		HX_STACK_LINE(123)
		while(((_g < _g1->__Field(HX_CSTRING("length"),true)))){
			HX_STACK_LINE(123)
			Dynamic l = _g1->__GetItem(_g);		HX_STACK_VAR(l,"l");
			HX_STACK_LINE(123)
			++(_g);
			HX_STACK_LINE(124)
			l(j).Cast< Void >();
		}
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC1(Diagram_obj,fireOnJobRemoved,(void))

Void Diagram_obj::fireOnJobAdded( ::retro::model::Job j){
{
		HX_STACK_PUSH("Diagram::fireOnJobAdded","retro/model/Diagram.hx",116);
		HX_STACK_THIS(this);
		HX_STACK_ARG(j,"j");
		HX_STACK_LINE(117)
		int _g = (int)0;		HX_STACK_VAR(_g,"_g");
		Dynamic _g1 = this->onJobAddedListeners;		HX_STACK_VAR(_g1,"_g1");
		HX_STACK_LINE(117)
		while(((_g < _g1->__Field(HX_CSTRING("length"),true)))){
			HX_STACK_LINE(117)
			Dynamic l = _g1->__GetItem(_g);		HX_STACK_VAR(l,"l");
			HX_STACK_LINE(117)
			++(_g);
			HX_STACK_LINE(118)
			l(j).Cast< Void >();
		}
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC1(Diagram_obj,fireOnJobAdded,(void))

Void Diagram_obj::onValueCarrierCleared( Dynamic listener){
{
		HX_STACK_PUSH("Diagram::onValueCarrierCleared","retro/model/Diagram.hx",112);
		HX_STACK_THIS(this);
		HX_STACK_ARG(listener,"listener");
		HX_STACK_LINE(112)
		this->onValueCarrierClearedListeners->__Field(HX_CSTRING("push"),true)(listener);
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC1(Diagram_obj,onValueCarrierCleared,(void))

Void Diagram_obj::onValueCarrierRemoved( Dynamic listener){
{
		HX_STACK_PUSH("Diagram::onValueCarrierRemoved","retro/model/Diagram.hx",109);
		HX_STACK_THIS(this);
		HX_STACK_ARG(listener,"listener");
		HX_STACK_LINE(109)
		this->onValueCarrierRemovedListeners->__Field(HX_CSTRING("push"),true)(listener);
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC1(Diagram_obj,onValueCarrierRemoved,(void))

Void Diagram_obj::onValueCarrierAdded( Dynamic listener){
{
		HX_STACK_PUSH("Diagram::onValueCarrierAdded","retro/model/Diagram.hx",106);
		HX_STACK_THIS(this);
		HX_STACK_ARG(listener,"listener");
		HX_STACK_LINE(106)
		this->onValueCarrierAddedListeners->__Field(HX_CSTRING("push"),true)(listener);
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC1(Diagram_obj,onValueCarrierAdded,(void))

Void Diagram_obj::onJobRemoved( Dynamic listener){
{
		HX_STACK_PUSH("Diagram::onJobRemoved","retro/model/Diagram.hx",103);
		HX_STACK_THIS(this);
		HX_STACK_ARG(listener,"listener");
		HX_STACK_LINE(103)
		this->onJobRemovedListeners->__Field(HX_CSTRING("push"),true)(listener);
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC1(Diagram_obj,onJobRemoved,(void))

Void Diagram_obj::onJobAdded( Dynamic listener){
{
		HX_STACK_PUSH("Diagram::onJobAdded","retro/model/Diagram.hx",100);
		HX_STACK_THIS(this);
		HX_STACK_ARG(listener,"listener");
		HX_STACK_LINE(100)
		this->onJobAddedListeners->__Field(HX_CSTRING("push"),true)(listener);
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC1(Diagram_obj,onJobAdded,(void))

Void Diagram_obj::clearValueCarriers( ){
{
		HX_STACK_PUSH("Diagram::clearValueCarriers","retro/model/Diagram.hx",95);
		HX_STACK_THIS(this);
		HX_STACK_LINE(96)
		this->valueCarriers = Array_obj< ::Dynamic >::__new();
		HX_STACK_LINE(97)
		this->fireOnValueCarrierCleared();
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC0(Diagram_obj,clearValueCarriers,(void))

Array< ::Dynamic > Diagram_obj::getValueCarriers( ){
	HX_STACK_PUSH("Diagram::getValueCarriers","retro/model/Diagram.hx",91);
	HX_STACK_THIS(this);
	HX_STACK_LINE(91)
	return this->valueCarriers;
}


HX_DEFINE_DYNAMIC_FUNC0(Diagram_obj,getValueCarriers,return )

Void Diagram_obj::removeValueCarrier( ::retro::model::ValueCarrier valueCarrier){
{
		HX_STACK_PUSH("Diagram::removeValueCarrier","retro/model/Diagram.hx",86);
		HX_STACK_THIS(this);
		HX_STACK_ARG(valueCarrier,"valueCarrier");
		HX_STACK_LINE(87)
		this->fireOnValueCarrierRemoved(valueCarrier);
		HX_STACK_LINE(88)
		this->valueCarriers->remove(valueCarrier);
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC1(Diagram_obj,removeValueCarrier,(void))

Void Diagram_obj::addValueCarrier( ::retro::model::ValueCarrier valueCarrier){
{
		HX_STACK_PUSH("Diagram::addValueCarrier","retro/model/Diagram.hx",81);
		HX_STACK_THIS(this);
		HX_STACK_ARG(valueCarrier,"valueCarrier");
		HX_STACK_LINE(82)
		this->fireOnValueCarrierAdded(valueCarrier);
		HX_STACK_LINE(83)
		this->valueCarriers->push(valueCarrier);
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC1(Diagram_obj,addValueCarrier,(void))

Array< ::Dynamic > Diagram_obj::getJobs( ){
	HX_STACK_PUSH("Diagram::getJobs","retro/model/Diagram.hx",77);
	HX_STACK_THIS(this);
	HX_STACK_LINE(77)
	return this->jobs;
}


HX_DEFINE_DYNAMIC_FUNC0(Diagram_obj,getJobs,return )

::retro::model::InputPort Diagram_obj::getInputPort( ::String uri){
	HX_STACK_PUSH("Diagram::getInputPort","retro/model/Diagram.hx",67);
	HX_STACK_THIS(this);
	HX_STACK_ARG(uri,"uri");
	HX_STACK_LINE(68)
	Array< ::String > ids = uri.split(HX_CSTRING("."));		HX_STACK_VAR(ids,"ids");
	HX_STACK_LINE(69)
	{
		HX_STACK_LINE(69)
		int _g = (int)0;		HX_STACK_VAR(_g,"_g");
		Array< ::Dynamic > _g1 = this->jobs;		HX_STACK_VAR(_g1,"_g1");
		HX_STACK_LINE(69)
		while(((_g < _g1->length))){
			HX_STACK_LINE(69)
			::retro::model::Job job = _g1->__get(_g).StaticCast< ::retro::model::Job >();		HX_STACK_VAR(job,"job");
			HX_STACK_LINE(69)
			++(_g);
			HX_STACK_LINE(70)
			if (((job->getId() == ids->__get((int)0)))){
				HX_STACK_LINE(70)
				return job->getInputPort(ids->__get((int)1));
			}
		}
	}
	HX_STACK_LINE(74)
	return null();
}


HX_DEFINE_DYNAMIC_FUNC1(Diagram_obj,getInputPort,return )

::retro::model::OutputPort Diagram_obj::getOutputPort( ::String uri){
	HX_STACK_PUSH("Diagram::getOutputPort","retro/model/Diagram.hx",58);
	HX_STACK_THIS(this);
	HX_STACK_ARG(uri,"uri");
	HX_STACK_LINE(59)
	Array< ::String > ids = uri.split(HX_CSTRING("."));		HX_STACK_VAR(ids,"ids");
	HX_STACK_LINE(60)
	{
		HX_STACK_LINE(60)
		int _g = (int)0;		HX_STACK_VAR(_g,"_g");
		Array< ::Dynamic > _g1 = this->jobs;		HX_STACK_VAR(_g1,"_g1");
		HX_STACK_LINE(60)
		while(((_g < _g1->length))){
			HX_STACK_LINE(60)
			::retro::model::Job job = _g1->__get(_g).StaticCast< ::retro::model::Job >();		HX_STACK_VAR(job,"job");
			HX_STACK_LINE(60)
			++(_g);
			HX_STACK_LINE(61)
			if (((job->getId() == ids->__get((int)0)))){
				HX_STACK_LINE(61)
				return job->getOutputPort(ids->__get((int)1));
			}
		}
	}
	HX_STACK_LINE(65)
	return null();
}


HX_DEFINE_DYNAMIC_FUNC1(Diagram_obj,getOutputPort,return )

::retro::model::Job Diagram_obj::getJob( ::String id){
	HX_STACK_PUSH("Diagram::getJob","retro/model/Diagram.hx",49);
	HX_STACK_THIS(this);
	HX_STACK_ARG(id,"id");
	HX_STACK_LINE(50)
	{
		HX_STACK_LINE(50)
		int _g = (int)0;		HX_STACK_VAR(_g,"_g");
		Array< ::Dynamic > _g1 = this->jobs;		HX_STACK_VAR(_g1,"_g1");
		HX_STACK_LINE(50)
		while(((_g < _g1->length))){
			HX_STACK_LINE(50)
			::retro::model::Job job = _g1->__get(_g).StaticCast< ::retro::model::Job >();		HX_STACK_VAR(job,"job");
			HX_STACK_LINE(50)
			++(_g);
			HX_STACK_LINE(51)
			if (((job->getId() == id))){
				HX_STACK_LINE(51)
				return job;
			}
		}
	}
	HX_STACK_LINE(55)
	return null();
}


HX_DEFINE_DYNAMIC_FUNC1(Diagram_obj,getJob,return )

Void Diagram_obj::removeJob( ::retro::model::Job job){
{
		HX_STACK_PUSH("Diagram::removeJob","retro/model/Diagram.hx",44);
		HX_STACK_THIS(this);
		HX_STACK_ARG(job,"job");
		HX_STACK_LINE(45)
		this->fireOnJobRemoved(job);
		HX_STACK_LINE(46)
		this->jobs->remove(job);
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC1(Diagram_obj,removeJob,(void))

Void Diagram_obj::addJob( ::retro::model::Job job){
{
		HX_STACK_PUSH("Diagram::addJob","retro/model/Diagram.hx",39);
		HX_STACK_THIS(this);
		HX_STACK_ARG(job,"job");
		HX_STACK_LINE(40)
		this->fireOnJobAdded(job);
		HX_STACK_LINE(41)
		this->jobs->push(job);
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC1(Diagram_obj,addJob,(void))

::retro::model::EntryJob Diagram_obj::getEntryPoint( ){
	HX_STACK_PUSH("Diagram::getEntryPoint","retro/model/Diagram.hx",35);
	HX_STACK_THIS(this);
	HX_STACK_LINE(35)
	return this->entryPoint;
}


HX_DEFINE_DYNAMIC_FUNC0(Diagram_obj,getEntryPoint,return )

Void Diagram_obj::setEntryPoint( ::retro::model::EntryJob entry){
{
		HX_STACK_PUSH("Diagram::setEntryPoint","retro/model/Diagram.hx",30);
		HX_STACK_THIS(this);
		HX_STACK_ARG(entry,"entry");
		HX_STACK_LINE(31)
		this->entryPoint = entry;
		HX_STACK_LINE(32)
		this->addJob(this->entryPoint);
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC1(Diagram_obj,setEntryPoint,(void))


Diagram_obj::Diagram_obj()
{
}

void Diagram_obj::__Mark(HX_MARK_PARAMS)
{
	HX_MARK_BEGIN_CLASS(Diagram);
	HX_MARK_MEMBER_NAME(onValueCarrierClearedListeners,"onValueCarrierClearedListeners");
	HX_MARK_MEMBER_NAME(onValueCarrierRemovedListeners,"onValueCarrierRemovedListeners");
	HX_MARK_MEMBER_NAME(onValueCarrierAddedListeners,"onValueCarrierAddedListeners");
	HX_MARK_MEMBER_NAME(onJobRemovedListeners,"onJobRemovedListeners");
	HX_MARK_MEMBER_NAME(onJobAddedListeners,"onJobAddedListeners");
	HX_MARK_MEMBER_NAME(valueCarriers,"valueCarriers");
	HX_MARK_MEMBER_NAME(jobs,"jobs");
	HX_MARK_MEMBER_NAME(entryPoint,"entryPoint");
	HX_MARK_END_CLASS();
}

void Diagram_obj::__Visit(HX_VISIT_PARAMS)
{
	HX_VISIT_MEMBER_NAME(onValueCarrierClearedListeners,"onValueCarrierClearedListeners");
	HX_VISIT_MEMBER_NAME(onValueCarrierRemovedListeners,"onValueCarrierRemovedListeners");
	HX_VISIT_MEMBER_NAME(onValueCarrierAddedListeners,"onValueCarrierAddedListeners");
	HX_VISIT_MEMBER_NAME(onJobRemovedListeners,"onJobRemovedListeners");
	HX_VISIT_MEMBER_NAME(onJobAddedListeners,"onJobAddedListeners");
	HX_VISIT_MEMBER_NAME(valueCarriers,"valueCarriers");
	HX_VISIT_MEMBER_NAME(jobs,"jobs");
	HX_VISIT_MEMBER_NAME(entryPoint,"entryPoint");
}

Dynamic Diagram_obj::__Field(const ::String &inName,bool inCallProp)
{
	switch(inName.length) {
	case 4:
		if (HX_FIELD_EQ(inName,"jobs") ) { return jobs; }
		break;
	case 6:
		if (HX_FIELD_EQ(inName,"getJob") ) { return getJob_dyn(); }
		if (HX_FIELD_EQ(inName,"addJob") ) { return addJob_dyn(); }
		break;
	case 7:
		if (HX_FIELD_EQ(inName,"getJobs") ) { return getJobs_dyn(); }
		break;
	case 9:
		if (HX_FIELD_EQ(inName,"removeJob") ) { return removeJob_dyn(); }
		break;
	case 10:
		if (HX_FIELD_EQ(inName,"onJobAdded") ) { return onJobAdded_dyn(); }
		if (HX_FIELD_EQ(inName,"entryPoint") ) { return entryPoint; }
		break;
	case 12:
		if (HX_FIELD_EQ(inName,"onJobRemoved") ) { return onJobRemoved_dyn(); }
		if (HX_FIELD_EQ(inName,"getInputPort") ) { return getInputPort_dyn(); }
		break;
	case 13:
		if (HX_FIELD_EQ(inName,"getOutputPort") ) { return getOutputPort_dyn(); }
		if (HX_FIELD_EQ(inName,"getEntryPoint") ) { return getEntryPoint_dyn(); }
		if (HX_FIELD_EQ(inName,"setEntryPoint") ) { return setEntryPoint_dyn(); }
		if (HX_FIELD_EQ(inName,"valueCarriers") ) { return valueCarriers; }
		break;
	case 14:
		if (HX_FIELD_EQ(inName,"fireOnJobAdded") ) { return fireOnJobAdded_dyn(); }
		break;
	case 15:
		if (HX_FIELD_EQ(inName,"addValueCarrier") ) { return addValueCarrier_dyn(); }
		break;
	case 16:
		if (HX_FIELD_EQ(inName,"fireOnJobRemoved") ) { return fireOnJobRemoved_dyn(); }
		if (HX_FIELD_EQ(inName,"getValueCarriers") ) { return getValueCarriers_dyn(); }
		break;
	case 18:
		if (HX_FIELD_EQ(inName,"clearValueCarriers") ) { return clearValueCarriers_dyn(); }
		if (HX_FIELD_EQ(inName,"removeValueCarrier") ) { return removeValueCarrier_dyn(); }
		break;
	case 19:
		if (HX_FIELD_EQ(inName,"onValueCarrierAdded") ) { return onValueCarrierAdded_dyn(); }
		if (HX_FIELD_EQ(inName,"onJobAddedListeners") ) { return onJobAddedListeners; }
		break;
	case 21:
		if (HX_FIELD_EQ(inName,"onValueCarrierCleared") ) { return onValueCarrierCleared_dyn(); }
		if (HX_FIELD_EQ(inName,"onValueCarrierRemoved") ) { return onValueCarrierRemoved_dyn(); }
		if (HX_FIELD_EQ(inName,"onJobRemovedListeners") ) { return onJobRemovedListeners; }
		break;
	case 23:
		if (HX_FIELD_EQ(inName,"fireOnValueCarrierAdded") ) { return fireOnValueCarrierAdded_dyn(); }
		break;
	case 25:
		if (HX_FIELD_EQ(inName,"fireOnValueCarrierCleared") ) { return fireOnValueCarrierCleared_dyn(); }
		if (HX_FIELD_EQ(inName,"fireOnValueCarrierRemoved") ) { return fireOnValueCarrierRemoved_dyn(); }
		break;
	case 28:
		if (HX_FIELD_EQ(inName,"onValueCarrierAddedListeners") ) { return onValueCarrierAddedListeners; }
		break;
	case 30:
		if (HX_FIELD_EQ(inName,"onValueCarrierClearedListeners") ) { return onValueCarrierClearedListeners; }
		if (HX_FIELD_EQ(inName,"onValueCarrierRemovedListeners") ) { return onValueCarrierRemovedListeners; }
	}
	return super::__Field(inName,inCallProp);
}

Dynamic Diagram_obj::__SetField(const ::String &inName,const Dynamic &inValue,bool inCallProp)
{
	switch(inName.length) {
	case 4:
		if (HX_FIELD_EQ(inName,"jobs") ) { jobs=inValue.Cast< Array< ::Dynamic > >(); return inValue; }
		break;
	case 10:
		if (HX_FIELD_EQ(inName,"entryPoint") ) { entryPoint=inValue.Cast< ::retro::model::EntryJob >(); return inValue; }
		break;
	case 13:
		if (HX_FIELD_EQ(inName,"valueCarriers") ) { valueCarriers=inValue.Cast< Array< ::Dynamic > >(); return inValue; }
		break;
	case 19:
		if (HX_FIELD_EQ(inName,"onJobAddedListeners") ) { onJobAddedListeners=inValue.Cast< Dynamic >(); return inValue; }
		break;
	case 21:
		if (HX_FIELD_EQ(inName,"onJobRemovedListeners") ) { onJobRemovedListeners=inValue.Cast< Dynamic >(); return inValue; }
		break;
	case 28:
		if (HX_FIELD_EQ(inName,"onValueCarrierAddedListeners") ) { onValueCarrierAddedListeners=inValue.Cast< Dynamic >(); return inValue; }
		break;
	case 30:
		if (HX_FIELD_EQ(inName,"onValueCarrierClearedListeners") ) { onValueCarrierClearedListeners=inValue.Cast< Dynamic >(); return inValue; }
		if (HX_FIELD_EQ(inName,"onValueCarrierRemovedListeners") ) { onValueCarrierRemovedListeners=inValue.Cast< Dynamic >(); return inValue; }
	}
	return super::__SetField(inName,inValue,inCallProp);
}

void Diagram_obj::__GetFields(Array< ::String> &outFields)
{
	outFields->push(HX_CSTRING("onValueCarrierClearedListeners"));
	outFields->push(HX_CSTRING("onValueCarrierRemovedListeners"));
	outFields->push(HX_CSTRING("onValueCarrierAddedListeners"));
	outFields->push(HX_CSTRING("onJobRemovedListeners"));
	outFields->push(HX_CSTRING("onJobAddedListeners"));
	outFields->push(HX_CSTRING("valueCarriers"));
	outFields->push(HX_CSTRING("jobs"));
	outFields->push(HX_CSTRING("entryPoint"));
	super::__GetFields(outFields);
};

static ::String sStaticFields[] = {
	String(null()) };

static ::String sMemberFields[] = {
	HX_CSTRING("fireOnValueCarrierCleared"),
	HX_CSTRING("fireOnValueCarrierRemoved"),
	HX_CSTRING("fireOnValueCarrierAdded"),
	HX_CSTRING("fireOnJobRemoved"),
	HX_CSTRING("fireOnJobAdded"),
	HX_CSTRING("onValueCarrierCleared"),
	HX_CSTRING("onValueCarrierRemoved"),
	HX_CSTRING("onValueCarrierAdded"),
	HX_CSTRING("onJobRemoved"),
	HX_CSTRING("onJobAdded"),
	HX_CSTRING("clearValueCarriers"),
	HX_CSTRING("getValueCarriers"),
	HX_CSTRING("removeValueCarrier"),
	HX_CSTRING("addValueCarrier"),
	HX_CSTRING("getJobs"),
	HX_CSTRING("getInputPort"),
	HX_CSTRING("getOutputPort"),
	HX_CSTRING("getJob"),
	HX_CSTRING("removeJob"),
	HX_CSTRING("addJob"),
	HX_CSTRING("getEntryPoint"),
	HX_CSTRING("setEntryPoint"),
	HX_CSTRING("onValueCarrierClearedListeners"),
	HX_CSTRING("onValueCarrierRemovedListeners"),
	HX_CSTRING("onValueCarrierAddedListeners"),
	HX_CSTRING("onJobRemovedListeners"),
	HX_CSTRING("onJobAddedListeners"),
	HX_CSTRING("valueCarriers"),
	HX_CSTRING("jobs"),
	HX_CSTRING("entryPoint"),
	String(null()) };

static void sMarkStatics(HX_MARK_PARAMS) {
	HX_MARK_MEMBER_NAME(Diagram_obj::__mClass,"__mClass");
};

static void sVisitStatics(HX_VISIT_PARAMS) {
	HX_VISIT_MEMBER_NAME(Diagram_obj::__mClass,"__mClass");
};

Class Diagram_obj::__mClass;

void Diagram_obj::__register()
{
	hx::Static(__mClass) = hx::RegisterClass(HX_CSTRING("retro.model.Diagram"), hx::TCanCast< Diagram_obj> ,sStaticFields,sMemberFields,
	&__CreateEmpty, &__Create,
	&super::__SGetClass(), 0, sMarkStatics, sVisitStatics);
}

void Diagram_obj::__boot()
{
}

} // end namespace retro
} // end namespace model
