#include <hxcpp.h>

#ifndef INCLUDED_haxe_Log
#include <haxe/Log.h>
#endif
#ifndef INCLUDED_retro_vm_Application
#include <retro/vm/Application.h>
#endif
#ifndef INCLUDED_retro_vm_Compiler
#include <retro/vm/Compiler.h>
#endif
namespace retro{
namespace vm{

Void Compiler_obj::__construct(::retro::vm::Application app)
{
HX_STACK_PUSH("Compiler::new","retro/vm/Compiler.hx",9);
{
	HX_STACK_LINE(9)
	this->app = app;
}
;
	return null();
}

Compiler_obj::~Compiler_obj() { }

Dynamic Compiler_obj::__CreateEmpty() { return  new Compiler_obj; }
hx::ObjectPtr< Compiler_obj > Compiler_obj::__new(::retro::vm::Application app)
{  hx::ObjectPtr< Compiler_obj > result = new Compiler_obj();
	result->__construct(app);
	return result;}

Dynamic Compiler_obj::__Create(hx::DynamicArray inArgs)
{  hx::ObjectPtr< Compiler_obj > result = new Compiler_obj();
	result->__construct(inArgs[0]);
	return result;}

Void Compiler_obj::compile( ::String lang){
{
		HX_STACK_PUSH("Compiler::compile","retro/vm/Compiler.hx",12);
		HX_STACK_THIS(this);
		HX_STACK_ARG(lang,"lang");
		HX_STACK_LINE(13)
		if (((lang == HX_CSTRING("js")))){
		}
		else{
			HX_STACK_LINE(14)
			if (((lang == HX_CSTRING("Java")))){
			}
			else{
				HX_STACK_LINE(15)
				if (((lang == HX_CSTRING("obj-c")))){
				}
				else{
					HX_STACK_LINE(16)
					if (((lang == HX_CSTRING("c++")))){
					}
					else{
						HX_STACK_LINE(17)
						if (((lang == HX_CSTRING("go")))){
						}
						else{
							HX_STACK_LINE(18)
							if (((lang == HX_CSTRING("scala")))){
							}
							else{
								HX_STACK_LINE(19)
								if (((lang == HX_CSTRING("python")))){
								}
							}
						}
					}
				}
			}
		}
		HX_STACK_LINE(21)
		::haxe::Log_obj::trace(this->app->getName(),hx::SourceInfo(HX_CSTRING("Compiler.hx"),21,HX_CSTRING("retro.vm.Compiler"),HX_CSTRING("compile")));
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC1(Compiler_obj,compile,(void))


Compiler_obj::Compiler_obj()
{
}

void Compiler_obj::__Mark(HX_MARK_PARAMS)
{
	HX_MARK_BEGIN_CLASS(Compiler);
	HX_MARK_MEMBER_NAME(app,"app");
	HX_MARK_END_CLASS();
}

void Compiler_obj::__Visit(HX_VISIT_PARAMS)
{
	HX_VISIT_MEMBER_NAME(app,"app");
}

Dynamic Compiler_obj::__Field(const ::String &inName,bool inCallProp)
{
	switch(inName.length) {
	case 3:
		if (HX_FIELD_EQ(inName,"app") ) { return app; }
		break;
	case 7:
		if (HX_FIELD_EQ(inName,"compile") ) { return compile_dyn(); }
	}
	return super::__Field(inName,inCallProp);
}

Dynamic Compiler_obj::__SetField(const ::String &inName,const Dynamic &inValue,bool inCallProp)
{
	switch(inName.length) {
	case 3:
		if (HX_FIELD_EQ(inName,"app") ) { app=inValue.Cast< ::retro::vm::Application >(); return inValue; }
	}
	return super::__SetField(inName,inValue,inCallProp);
}

void Compiler_obj::__GetFields(Array< ::String> &outFields)
{
	outFields->push(HX_CSTRING("app"));
	super::__GetFields(outFields);
};

static ::String sStaticFields[] = {
	String(null()) };

static ::String sMemberFields[] = {
	HX_CSTRING("compile"),
	HX_CSTRING("app"),
	String(null()) };

static void sMarkStatics(HX_MARK_PARAMS) {
	HX_MARK_MEMBER_NAME(Compiler_obj::__mClass,"__mClass");
};

static void sVisitStatics(HX_VISIT_PARAMS) {
	HX_VISIT_MEMBER_NAME(Compiler_obj::__mClass,"__mClass");
};

Class Compiler_obj::__mClass;

void Compiler_obj::__register()
{
	hx::Static(__mClass) = hx::RegisterClass(HX_CSTRING("retro.vm.Compiler"), hx::TCanCast< Compiler_obj> ,sStaticFields,sMemberFields,
	&__CreateEmpty, &__Create,
	&super::__SGetClass(), 0, sMarkStatics, sVisitStatics);
}

void Compiler_obj::__boot()
{
}

} // end namespace retro
} // end namespace vm
