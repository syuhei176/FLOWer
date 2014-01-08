#include <hxcpp.h>

#ifndef INCLUDED_retro_core_Params
#include <retro/core/Params.h>
#endif
#ifndef INCLUDED_retro_core_Result
#include <retro/core/Result.h>
#endif
#ifndef INCLUDED_retro_model_Job
#include <retro/model/Job.h>
#endif
#ifndef INCLUDED_retro_vm_Worker
#include <retro/vm/Worker.h>
#endif
namespace retro{
namespace vm{

Void Worker_obj::__construct(::retro::model::Job job,Dynamic func)
{
HX_STACK_PUSH("Worker::new","retro/vm/Worker.hx",14);
{
	HX_STACK_LINE(15)
	this->job = job;
	HX_STACK_LINE(16)
	this->func = func;
}
;
	return null();
}

Worker_obj::~Worker_obj() { }

Dynamic Worker_obj::__CreateEmpty() { return  new Worker_obj; }
hx::ObjectPtr< Worker_obj > Worker_obj::__new(::retro::model::Job job,Dynamic func)
{  hx::ObjectPtr< Worker_obj > result = new Worker_obj();
	result->__construct(job,func);
	return result;}

Dynamic Worker_obj::__Create(hx::DynamicArray inArgs)
{  hx::ObjectPtr< Worker_obj > result = new Worker_obj();
	result->__construct(inArgs[0],inArgs[1]);
	return result;}

Void Worker_obj::act( ::retro::core::Params params,Dynamic cb){
{
		HX_STACK_PUSH("Worker::act","retro/vm/Worker.hx",20);
		HX_STACK_THIS(this);
		HX_STACK_ARG(params,"params");
		HX_STACK_ARG(cb,"cb");
		HX_STACK_LINE(20)
		this->func(params,cb);
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC2(Worker_obj,act,(void))


Worker_obj::Worker_obj()
{
}

void Worker_obj::__Mark(HX_MARK_PARAMS)
{
	HX_MARK_BEGIN_CLASS(Worker);
	HX_MARK_MEMBER_NAME(func,"func");
	HX_MARK_MEMBER_NAME(job,"job");
	HX_MARK_END_CLASS();
}

void Worker_obj::__Visit(HX_VISIT_PARAMS)
{
	HX_VISIT_MEMBER_NAME(func,"func");
	HX_VISIT_MEMBER_NAME(job,"job");
}

Dynamic Worker_obj::__Field(const ::String &inName,bool inCallProp)
{
	switch(inName.length) {
	case 3:
		if (HX_FIELD_EQ(inName,"act") ) { return act_dyn(); }
		if (HX_FIELD_EQ(inName,"job") ) { return job; }
		break;
	case 4:
		if (HX_FIELD_EQ(inName,"func") ) { return func; }
	}
	return super::__Field(inName,inCallProp);
}

Dynamic Worker_obj::__SetField(const ::String &inName,const Dynamic &inValue,bool inCallProp)
{
	switch(inName.length) {
	case 3:
		if (HX_FIELD_EQ(inName,"job") ) { job=inValue.Cast< ::retro::model::Job >(); return inValue; }
		break;
	case 4:
		if (HX_FIELD_EQ(inName,"func") ) { func=inValue.Cast< Dynamic >(); return inValue; }
	}
	return super::__SetField(inName,inValue,inCallProp);
}

void Worker_obj::__GetFields(Array< ::String> &outFields)
{
	outFields->push(HX_CSTRING("job"));
	super::__GetFields(outFields);
};

static ::String sStaticFields[] = {
	String(null()) };

static ::String sMemberFields[] = {
	HX_CSTRING("act"),
	HX_CSTRING("func"),
	HX_CSTRING("job"),
	String(null()) };

static void sMarkStatics(HX_MARK_PARAMS) {
	HX_MARK_MEMBER_NAME(Worker_obj::__mClass,"__mClass");
};

static void sVisitStatics(HX_VISIT_PARAMS) {
	HX_VISIT_MEMBER_NAME(Worker_obj::__mClass,"__mClass");
};

Class Worker_obj::__mClass;

void Worker_obj::__register()
{
	hx::Static(__mClass) = hx::RegisterClass(HX_CSTRING("retro.vm.Worker"), hx::TCanCast< Worker_obj> ,sStaticFields,sMemberFields,
	&__CreateEmpty, &__Create,
	&super::__SGetClass(), 0, sMarkStatics, sVisitStatics);
}

void Worker_obj::__boot()
{
}

} // end namespace retro
} // end namespace vm
