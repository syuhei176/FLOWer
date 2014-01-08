#include <hxcpp.h>

#ifndef INCLUDED_retro_model_Diagram
#include <retro/model/Diagram.h>
#endif
#ifndef INCLUDED_retro_model_Project
#include <retro/model/Project.h>
#endif
namespace retro{
namespace model{

Void Project_obj::__construct()
{
HX_STACK_PUSH("Project::new","retro/model/Project.hx",8);
{
	HX_STACK_LINE(8)
	this->onDiagramAddedListeners = Dynamic( Array_obj<Dynamic>::__new() );
}
;
	return null();
}

Project_obj::~Project_obj() { }

Dynamic Project_obj::__CreateEmpty() { return  new Project_obj; }
hx::ObjectPtr< Project_obj > Project_obj::__new()
{  hx::ObjectPtr< Project_obj > result = new Project_obj();
	result->__construct();
	return result;}

Dynamic Project_obj::__Create(hx::DynamicArray inArgs)
{  hx::ObjectPtr< Project_obj > result = new Project_obj();
	result->__construct();
	return result;}

Void Project_obj::fireOnConnection( ::retro::model::Diagram d){
{
		HX_STACK_PUSH("Project::fireOnConnection","retro/model/Project.hx",25);
		HX_STACK_THIS(this);
		HX_STACK_ARG(d,"d");
		HX_STACK_LINE(26)
		int _g = (int)0;		HX_STACK_VAR(_g,"_g");
		Dynamic _g1 = this->onDiagramAddedListeners;		HX_STACK_VAR(_g1,"_g1");
		HX_STACK_LINE(26)
		while(((_g < _g1->__Field(HX_CSTRING("length"),true)))){
			HX_STACK_LINE(26)
			Dynamic l = _g1->__GetItem(_g);		HX_STACK_VAR(l,"l");
			HX_STACK_LINE(26)
			++(_g);
			HX_STACK_LINE(27)
			l(d).Cast< Void >();
		}
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC1(Project_obj,fireOnConnection,(void))

Void Project_obj::onDiagramAdded( Dynamic listener){
{
		HX_STACK_PUSH("Project::onDiagramAdded","retro/model/Project.hx",21);
		HX_STACK_THIS(this);
		HX_STACK_ARG(listener,"listener");
		HX_STACK_LINE(21)
		this->onDiagramAddedListeners->__Field(HX_CSTRING("push"),true)(listener);
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC1(Project_obj,onDiagramAdded,(void))

::retro::model::Diagram Project_obj::getRootDiagram( ){
	HX_STACK_PUSH("Project::getRootDiagram","retro/model/Project.hx",17);
	HX_STACK_THIS(this);
	HX_STACK_LINE(17)
	return this->diagram;
}


HX_DEFINE_DYNAMIC_FUNC0(Project_obj,getRootDiagram,return )

Void Project_obj::setRootDiagram( ::retro::model::Diagram diagram){
{
		HX_STACK_PUSH("Project::setRootDiagram","retro/model/Project.hx",12);
		HX_STACK_THIS(this);
		HX_STACK_ARG(diagram,"diagram");
		HX_STACK_LINE(13)
		this->diagram = diagram;
		HX_STACK_LINE(14)
		this->fireOnConnection(this->diagram);
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC1(Project_obj,setRootDiagram,(void))


Project_obj::Project_obj()
{
}

void Project_obj::__Mark(HX_MARK_PARAMS)
{
	HX_MARK_BEGIN_CLASS(Project);
	HX_MARK_MEMBER_NAME(onDiagramAddedListeners,"onDiagramAddedListeners");
	HX_MARK_MEMBER_NAME(diagram,"diagram");
	HX_MARK_END_CLASS();
}

void Project_obj::__Visit(HX_VISIT_PARAMS)
{
	HX_VISIT_MEMBER_NAME(onDiagramAddedListeners,"onDiagramAddedListeners");
	HX_VISIT_MEMBER_NAME(diagram,"diagram");
}

Dynamic Project_obj::__Field(const ::String &inName,bool inCallProp)
{
	switch(inName.length) {
	case 7:
		if (HX_FIELD_EQ(inName,"diagram") ) { return diagram; }
		break;
	case 14:
		if (HX_FIELD_EQ(inName,"onDiagramAdded") ) { return onDiagramAdded_dyn(); }
		if (HX_FIELD_EQ(inName,"getRootDiagram") ) { return getRootDiagram_dyn(); }
		if (HX_FIELD_EQ(inName,"setRootDiagram") ) { return setRootDiagram_dyn(); }
		break;
	case 16:
		if (HX_FIELD_EQ(inName,"fireOnConnection") ) { return fireOnConnection_dyn(); }
		break;
	case 23:
		if (HX_FIELD_EQ(inName,"onDiagramAddedListeners") ) { return onDiagramAddedListeners; }
	}
	return super::__Field(inName,inCallProp);
}

Dynamic Project_obj::__SetField(const ::String &inName,const Dynamic &inValue,bool inCallProp)
{
	switch(inName.length) {
	case 7:
		if (HX_FIELD_EQ(inName,"diagram") ) { diagram=inValue.Cast< ::retro::model::Diagram >(); return inValue; }
		break;
	case 23:
		if (HX_FIELD_EQ(inName,"onDiagramAddedListeners") ) { onDiagramAddedListeners=inValue.Cast< Dynamic >(); return inValue; }
	}
	return super::__SetField(inName,inValue,inCallProp);
}

void Project_obj::__GetFields(Array< ::String> &outFields)
{
	outFields->push(HX_CSTRING("onDiagramAddedListeners"));
	outFields->push(HX_CSTRING("diagram"));
	super::__GetFields(outFields);
};

static ::String sStaticFields[] = {
	String(null()) };

static ::String sMemberFields[] = {
	HX_CSTRING("fireOnConnection"),
	HX_CSTRING("onDiagramAdded"),
	HX_CSTRING("getRootDiagram"),
	HX_CSTRING("setRootDiagram"),
	HX_CSTRING("onDiagramAddedListeners"),
	HX_CSTRING("diagram"),
	String(null()) };

static void sMarkStatics(HX_MARK_PARAMS) {
	HX_MARK_MEMBER_NAME(Project_obj::__mClass,"__mClass");
};

static void sVisitStatics(HX_VISIT_PARAMS) {
	HX_VISIT_MEMBER_NAME(Project_obj::__mClass,"__mClass");
};

Class Project_obj::__mClass;

void Project_obj::__register()
{
	hx::Static(__mClass) = hx::RegisterClass(HX_CSTRING("retro.model.Project"), hx::TCanCast< Project_obj> ,sStaticFields,sMemberFields,
	&__CreateEmpty, &__Create,
	&super::__SGetClass(), 0, sMarkStatics, sVisitStatics);
}

void Project_obj::__boot()
{
}

} // end namespace retro
} // end namespace model
