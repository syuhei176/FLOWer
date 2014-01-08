#include <hxcpp.h>

#ifndef INCLUDED_Std
#include <Std.h>
#endif
#ifndef INCLUDED_retro_controller_ImportController
#include <retro/controller/ImportController.h>
#endif
#ifndef INCLUDED_retro_core_JobComponent
#include <retro/core/JobComponent.h>
#endif
#ifndef INCLUDED_retro_core_VirtualDevice
#include <retro/core/VirtualDevice.h>
#endif
#ifndef INCLUDED_retro_library_array_Create
#include <retro/library/array/Create.h>
#endif
#ifndef INCLUDED_retro_library_array_Get
#include <retro/library/array/Get.h>
#endif
#ifndef INCLUDED_retro_library_array_Length
#include <retro/library/array/Length.h>
#endif
#ifndef INCLUDED_retro_library_array_Pop
#include <retro/library/array/Pop.h>
#endif
#ifndef INCLUDED_retro_library_array_Push
#include <retro/library/array/Push.h>
#endif
#ifndef INCLUDED_retro_library_core_Add
#include <retro/library/core/Add.h>
#endif
#ifndef INCLUDED_retro_library_core_And
#include <retro/library/core/And.h>
#endif
#ifndef INCLUDED_retro_library_core_Compare
#include <retro/library/core/Compare.h>
#endif
#ifndef INCLUDED_retro_library_core_Drop
#include <retro/library/core/Drop.h>
#endif
#ifndef INCLUDED_retro_library_core_Filter
#include <retro/library/core/Filter.h>
#endif
#ifndef INCLUDED_retro_library_core_Not
#include <retro/library/core/Not.h>
#endif
#ifndef INCLUDED_retro_library_core_Or
#include <retro/library/core/Or.h>
#endif
#ifndef INCLUDED_retro_library_core_Remainder
#include <retro/library/core/Remainder.h>
#endif
#ifndef INCLUDED_retro_library_core_Through
#include <retro/library/core/Through.h>
#endif
#ifndef INCLUDED_retro_library_core_Times
#include <retro/library/core/Times.h>
#endif
#ifndef INCLUDED_retro_library_core_Transistor
#include <retro/library/core/Transistor.h>
#endif
#ifndef INCLUDED_retro_library_data_Stack
#include <retro/library/data/Stack.h>
#endif
#ifndef INCLUDED_retro_library_http_Get
#include <retro/library/http/Get.h>
#endif
#ifndef INCLUDED_retro_library_http_Post
#include <retro/library/http/Post.h>
#endif
#ifndef INCLUDED_retro_library_line2d_Create
#include <retro/library/line2d/Create.h>
#endif
#ifndef INCLUDED_retro_library_line2d_Distance
#include <retro/library/line2d/Distance.h>
#endif
#ifndef INCLUDED_retro_library_list_Add
#include <retro/library/list/Add.h>
#endif
#ifndef INCLUDED_retro_library_list_Clear
#include <retro/library/list/Clear.h>
#endif
#ifndef INCLUDED_retro_library_list_First
#include <retro/library/list/First.h>
#endif
#ifndef INCLUDED_retro_library_list_IsEmpty
#include <retro/library/list/IsEmpty.h>
#endif
#ifndef INCLUDED_retro_library_list_Join
#include <retro/library/list/Join.h>
#endif
#ifndef INCLUDED_retro_library_list_Last
#include <retro/library/list/Last.h>
#endif
#ifndef INCLUDED_retro_library_list_Length
#include <retro/library/list/Length.h>
#endif
#ifndef INCLUDED_retro_library_list_Pop
#include <retro/library/list/Pop.h>
#endif
#ifndef INCLUDED_retro_library_list_Push
#include <retro/library/list/Push.h>
#endif
#ifndef INCLUDED_retro_library_list_Remove
#include <retro/library/list/Remove.h>
#endif
#ifndef INCLUDED_retro_library_math_Abs
#include <retro/library/math/Abs.h>
#endif
#ifndef INCLUDED_retro_library_math_Acos
#include <retro/library/math/Acos.h>
#endif
#ifndef INCLUDED_retro_library_math_Asin
#include <retro/library/math/Asin.h>
#endif
#ifndef INCLUDED_retro_library_math_Atan
#include <retro/library/math/Atan.h>
#endif
#ifndef INCLUDED_retro_library_math_Atan2
#include <retro/library/math/Atan2.h>
#endif
#ifndef INCLUDED_retro_library_math_Cos
#include <retro/library/math/Cos.h>
#endif
#ifndef INCLUDED_retro_library_math_Floor
#include <retro/library/math/Floor.h>
#endif
#ifndef INCLUDED_retro_library_math_Log
#include <retro/library/math/Log.h>
#endif
#ifndef INCLUDED_retro_library_math_Max
#include <retro/library/math/Max.h>
#endif
#ifndef INCLUDED_retro_library_math_Min
#include <retro/library/math/Min.h>
#endif
#ifndef INCLUDED_retro_library_math_Pow
#include <retro/library/math/Pow.h>
#endif
#ifndef INCLUDED_retro_library_math_Random
#include <retro/library/math/Random.h>
#endif
#ifndef INCLUDED_retro_library_math_Sin
#include <retro/library/math/Sin.h>
#endif
#ifndef INCLUDED_retro_library_math_Sqrt
#include <retro/library/math/Sqrt.h>
#endif
#ifndef INCLUDED_retro_library_pigpio_Write
#include <retro/library/pigpio/Write.h>
#endif
#ifndef INCLUDED_retro_library_point2d_Add
#include <retro/library/point2d/Add.h>
#endif
#ifndef INCLUDED_retro_library_point2d_Create
#include <retro/library/point2d/Create.h>
#endif
#ifndef INCLUDED_retro_library_point2d_Distance
#include <retro/library/point2d/Distance.h>
#endif
#ifndef INCLUDED_retro_library_point2d_Sub
#include <retro/library/point2d/Sub.h>
#endif
#ifndef INCLUDED_retro_library_sphero_Roll
#include <retro/library/sphero/Roll.h>
#endif
#ifndef INCLUDED_retro_library_sphero_SetBackLED
#include <retro/library/sphero/SetBackLED.h>
#endif
#ifndef INCLUDED_retro_library_sphero_SetHeading
#include <retro/library/sphero/SetHeading.h>
#endif
#ifndef INCLUDED_retro_library_string_ChatAt
#include <retro/library/string/ChatAt.h>
#endif
#ifndef INCLUDED_retro_library_string_IndexOf
#include <retro/library/string/IndexOf.h>
#endif
#ifndef INCLUDED_retro_library_string_LastIndexOf
#include <retro/library/string/LastIndexOf.h>
#endif
#ifndef INCLUDED_retro_library_string_Length
#include <retro/library/string/Length.h>
#endif
#ifndef INCLUDED_retro_library_string_Split
#include <retro/library/string/Split.h>
#endif
#ifndef INCLUDED_retro_library_string_Substr
#include <retro/library/string/Substr.h>
#endif
#ifndef INCLUDED_retro_library_system_Print
#include <retro/library/system/Print.h>
#endif
#ifndef INCLUDED_retro_library_system_Scan
#include <retro/library/system/Scan.h>
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
#ifndef INCLUDED_retro_model_Project
#include <retro/model/Project.h>
#endif
#ifndef INCLUDED_retro_model_SymbolicLink
#include <retro/model/SymbolicLink.h>
#endif
#ifndef INCLUDED_retro_model_Value
#include <retro/model/Value.h>
#endif
#ifndef INCLUDED_retro_pub_RetroType
#include <retro/pub/RetroType.h>
#endif
namespace retro{
namespace controller{

Void ImportController_obj::__construct(::retro::model::Project project,::retro::core::VirtualDevice virtualDevice)
{
HX_STACK_PUSH("ImportController::new","retro/controller/ImportController.hx",22);
{
	HX_STACK_LINE(23)
	this->project = project;
	HX_STACK_LINE(24)
	this->modules = Array_obj< ::Dynamic >::__new();
	HX_STACK_LINE(25)
	this->modules->push(::retro::library::core::Through_obj::__new());
	HX_STACK_LINE(26)
	this->modules->push(::retro::library::core::Add_obj::__new());
	HX_STACK_LINE(27)
	this->modules->push(::retro::library::core::Times_obj::__new());
	HX_STACK_LINE(28)
	this->modules->push(::retro::library::core::Remainder_obj::__new());
	HX_STACK_LINE(29)
	this->modules->push(::retro::library::core::Filter_obj::__new());
	HX_STACK_LINE(30)
	this->modules->push(::retro::library::core::Drop_obj::__new());
	HX_STACK_LINE(31)
	this->modules->push(::retro::library::core::Compare_obj::__new());
	HX_STACK_LINE(32)
	this->modules->push(::retro::library::core::And_obj::__new());
	HX_STACK_LINE(33)
	this->modules->push(::retro::library::core::Or_obj::__new());
	HX_STACK_LINE(34)
	this->modules->push(::retro::library::core::Not_obj::__new());
	HX_STACK_LINE(35)
	this->modules->push(::retro::library::core::Transistor_obj::__new());
	HX_STACK_LINE(36)
	this->modules->push(::retro::library::system::Print_obj::__new(virtualDevice));
	HX_STACK_LINE(37)
	this->modules->push(::retro::library::system::Scan_obj::__new(virtualDevice));
	HX_STACK_LINE(38)
	this->modules->push(::retro::library::array::Create_obj::__new());
	HX_STACK_LINE(39)
	this->modules->push(::retro::library::array::Length_obj::__new());
	HX_STACK_LINE(40)
	this->modules->push(::retro::library::array::Push_obj::__new());
	HX_STACK_LINE(41)
	this->modules->push(::retro::library::array::Pop_obj::__new());
	HX_STACK_LINE(42)
	this->modules->push(::retro::library::array::Get_obj::__new());
	HX_STACK_LINE(43)
	this->modules->push(::retro::library::data::Stack_obj::__new());
	HX_STACK_LINE(44)
	this->modules->push(::retro::library::sphero::SetBackLED_obj::__new());
	HX_STACK_LINE(45)
	this->modules->push(::retro::library::sphero::SetHeading_obj::__new());
	HX_STACK_LINE(46)
	this->modules->push(::retro::library::sphero::Roll_obj::__new());
	HX_STACK_LINE(47)
	this->modules->push(::retro::library::string::Split_obj::__new());
	HX_STACK_LINE(48)
	this->modules->push(::retro::library::string::IndexOf_obj::__new());
	HX_STACK_LINE(49)
	this->modules->push(::retro::library::string::ChatAt_obj::__new());
	HX_STACK_LINE(50)
	this->modules->push(::retro::library::string::Substr_obj::__new());
	HX_STACK_LINE(51)
	this->modules->push(::retro::library::string::Length_obj::__new());
	HX_STACK_LINE(52)
	this->modules->push(::retro::library::string::LastIndexOf_obj::__new());
	HX_STACK_LINE(53)
	this->modules->push(::retro::library::point2d::Add_obj::__new());
	HX_STACK_LINE(54)
	this->modules->push(::retro::library::point2d::Sub_obj::__new());
	HX_STACK_LINE(55)
	this->modules->push(::retro::library::point2d::Create_obj::__new());
	HX_STACK_LINE(56)
	this->modules->push(::retro::library::point2d::Distance_obj::__new());
	HX_STACK_LINE(57)
	this->modules->push(::retro::library::http::Post_obj::__new());
	HX_STACK_LINE(58)
	this->modules->push(::retro::library::http::Get_obj::__new());
	HX_STACK_LINE(59)
	this->modules->push(::retro::library::line2d::Create_obj::__new());
	HX_STACK_LINE(60)
	this->modules->push(::retro::library::line2d::Distance_obj::__new());
	HX_STACK_LINE(61)
	this->modules->push(::retro::library::list::Length_obj::__new());
	HX_STACK_LINE(62)
	this->modules->push(::retro::library::list::Add_obj::__new());
	HX_STACK_LINE(63)
	this->modules->push(::retro::library::list::Clear_obj::__new());
	HX_STACK_LINE(64)
	this->modules->push(::retro::library::list::First_obj::__new());
	HX_STACK_LINE(65)
	this->modules->push(::retro::library::list::IsEmpty_obj::__new());
	HX_STACK_LINE(66)
	this->modules->push(::retro::library::list::Join_obj::__new());
	HX_STACK_LINE(67)
	this->modules->push(::retro::library::list::Last_obj::__new());
	HX_STACK_LINE(68)
	this->modules->push(::retro::library::list::Pop_obj::__new());
	HX_STACK_LINE(69)
	this->modules->push(::retro::library::list::Push_obj::__new());
	HX_STACK_LINE(70)
	this->modules->push(::retro::library::list::Remove_obj::__new());
	HX_STACK_LINE(71)
	this->modules->push(::retro::library::math::Abs_obj::__new());
	HX_STACK_LINE(72)
	this->modules->push(::retro::library::math::Acos_obj::__new());
	HX_STACK_LINE(73)
	this->modules->push(::retro::library::math::Asin_obj::__new());
	HX_STACK_LINE(74)
	this->modules->push(::retro::library::math::Atan_obj::__new());
	HX_STACK_LINE(75)
	this->modules->push(::retro::library::math::Atan2_obj::__new());
	HX_STACK_LINE(76)
	this->modules->push(::retro::library::math::Cos_obj::__new());
	HX_STACK_LINE(77)
	this->modules->push(::retro::library::math::Sin_obj::__new());
	HX_STACK_LINE(78)
	this->modules->push(::retro::library::math::Floor_obj::__new());
	HX_STACK_LINE(79)
	this->modules->push(::retro::library::math::Log_obj::__new());
	HX_STACK_LINE(80)
	this->modules->push(::retro::library::math::Max_obj::__new());
	HX_STACK_LINE(81)
	this->modules->push(::retro::library::math::Min_obj::__new());
	HX_STACK_LINE(82)
	this->modules->push(::retro::library::math::Pow_obj::__new());
	HX_STACK_LINE(83)
	this->modules->push(::retro::library::math::Random_obj::__new());
	HX_STACK_LINE(84)
	this->modules->push(::retro::library::math::Sqrt_obj::__new());
	HX_STACK_LINE(93)
	this->modules->push(::retro::library::pigpio::Write_obj::__new());
}
;
	return null();
}

ImportController_obj::~ImportController_obj() { }

Dynamic ImportController_obj::__CreateEmpty() { return  new ImportController_obj; }
hx::ObjectPtr< ImportController_obj > ImportController_obj::__new(::retro::model::Project project,::retro::core::VirtualDevice virtualDevice)
{  hx::ObjectPtr< ImportController_obj > result = new ImportController_obj();
	result->__construct(project,virtualDevice);
	return result;}

Dynamic ImportController_obj::__Create(hx::DynamicArray inArgs)
{  hx::ObjectPtr< ImportController_obj > result = new ImportController_obj();
	result->__construct(inArgs[0],inArgs[1]);
	return result;}

Void ImportController_obj::import_job( Dynamic model,::retro::model::Diagram diagram){
{
		HX_STACK_PUSH("ImportController::import_job","retro/controller/ImportController.hx",137);
		HX_STACK_THIS(this);
		HX_STACK_ARG(model,"model");
		HX_STACK_ARG(diagram,"diagram");
		HX_STACK_LINE(138)
		Dynamic ops = model->__Field(HX_CSTRING("outputports"),true);		HX_STACK_VAR(ops,"ops");
		HX_STACK_LINE(139)
		Dynamic ips = model->__Field(HX_CSTRING("inputports"),true);		HX_STACK_VAR(ips,"ips");
		HX_STACK_LINE(140)
		{
			HX_STACK_LINE(140)
			int _g = (int)0;		HX_STACK_VAR(_g,"_g");
			HX_STACK_LINE(140)
			while(((_g < ops->__Field(HX_CSTRING("length"),true)))){
				HX_STACK_LINE(140)
				Dynamic op = ops->__GetItem(_g);		HX_STACK_VAR(op,"op");
				HX_STACK_LINE(140)
				++(_g);
				HX_STACK_LINE(141)
				::retro::model::OutputPort start = diagram->getOutputPort(((::Std_obj::string(model->__Field(HX_CSTRING("id"),true)) + HX_CSTRING(".")) + ::Std_obj::string(op->__Field(HX_CSTRING("name"),true))));		HX_STACK_VAR(start,"start");
				HX_STACK_LINE(142)
				Dynamic cons = op->__Field(HX_CSTRING("connections"),true);		HX_STACK_VAR(cons,"cons");
				HX_STACK_LINE(143)
				{
					HX_STACK_LINE(143)
					int _g1 = (int)0;		HX_STACK_VAR(_g1,"_g1");
					HX_STACK_LINE(143)
					while(((_g1 < cons->__Field(HX_CSTRING("length"),true)))){
						HX_STACK_LINE(143)
						Dynamic con = cons->__GetItem(_g1);		HX_STACK_VAR(con,"con");
						HX_STACK_LINE(143)
						++(_g1);
						HX_STACK_LINE(144)
						::retro::model::InputPort end = diagram->getInputPort(con);		HX_STACK_VAR(end,"end");
						HX_STACK_LINE(145)
						start->connectToInputPort(end);
					}
				}
			}
		}
		HX_STACK_LINE(148)
		{
			HX_STACK_LINE(148)
			int _g = (int)0;		HX_STACK_VAR(_g,"_g");
			HX_STACK_LINE(148)
			while(((_g < ips->__Field(HX_CSTRING("length"),true)))){
				HX_STACK_LINE(148)
				Dynamic ip = ips->__GetItem(_g);		HX_STACK_VAR(ip,"ip");
				HX_STACK_LINE(148)
				++(_g);
				HX_STACK_LINE(149)
				::retro::model::InputPort inputPort = diagram->getInputPort(((::Std_obj::string(model->__Field(HX_CSTRING("id"),true)) + HX_CSTRING(".")) + ::Std_obj::string(ip->__Field(HX_CSTRING("name"),true))));		HX_STACK_VAR(inputPort,"inputPort");
				HX_STACK_LINE(150)
				if (((ip->__Field(HX_CSTRING("constant"),true) != null()))){
					HX_STACK_LINE(150)
					inputPort->setConstant(::retro::model::Value_obj::__new(ip->__Field(HX_CSTRING("constant"),true)->__Field(HX_CSTRING("type"),true),ip->__Field(HX_CSTRING("constant"),true)->__Field(HX_CSTRING("value"),true)));
				}
			}
		}
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC2(ImportController_obj,import_job,(void))

Void ImportController_obj::import_diagram( ::retro::model::Diagram diagram,Dynamic diagram_model){
{
		HX_STACK_PUSH("ImportController::import_diagram","retro/controller/ImportController.hx",117);
		HX_STACK_THIS(this);
		HX_STACK_ARG(diagram,"diagram");
		HX_STACK_ARG(diagram_model,"diagram_model");
		HX_STACK_LINE(118)
		Dynamic jobs = diagram_model->__Field(HX_CSTRING("jobs"),true);		HX_STACK_VAR(jobs,"jobs");
		HX_STACK_LINE(119)
		{
			HX_STACK_LINE(119)
			int _g = (int)0;		HX_STACK_VAR(_g,"_g");
			HX_STACK_LINE(119)
			while(((_g < jobs->__Field(HX_CSTRING("length"),true)))){
				HX_STACK_LINE(119)
				Dynamic j = jobs->__GetItem(_g);		HX_STACK_VAR(j,"j");
				HX_STACK_LINE(119)
				++(_g);
				HX_STACK_LINE(120)
				if (((j->__Field(HX_CSTRING("meta"),true) == HX_CSTRING("retro.model.EntryJob")))){
					HX_STACK_LINE(121)
					::retro::model::EntryJob entry = ::retro::model::EntryJob_obj::__new(j->__Field(HX_CSTRING("id"),true));		HX_STACK_VAR(entry,"entry");
					HX_STACK_LINE(122)
					diagram->setEntryPoint(entry);
					HX_STACK_LINE(123)
					entry->addOutputPort(::retro::model::OutputPort_obj::__new(entry,::retro::pub::RetroType_obj::RString,HX_CSTRING("output")));
					HX_STACK_LINE(124)
					entry->setPos(j->__Field(HX_CSTRING("pos"),true)->__Field(HX_CSTRING("x"),true),j->__Field(HX_CSTRING("pos"),true)->__Field(HX_CSTRING("y"),true));
				}
				else{
					HX_STACK_LINE(125)
					if (((j->__Field(HX_CSTRING("meta"),true) == HX_CSTRING("retro.model.SymbolicLink")))){
						HX_STACK_LINE(126)
						::retro::core::JobComponent jobComponent = this->getModule(j->__Field(HX_CSTRING("ref"),true));		HX_STACK_VAR(jobComponent,"jobComponent");
						HX_STACK_LINE(127)
						::retro::model::SymbolicLink job = ::retro::model::SymbolicLink_obj::__new(j->__Field(HX_CSTRING("id"),true),jobComponent);		HX_STACK_VAR(job,"job");
						HX_STACK_LINE(128)
						diagram->addJob(job);
						HX_STACK_LINE(129)
						job->setPos(j->__Field(HX_CSTRING("pos"),true)->__Field(HX_CSTRING("x"),true),j->__Field(HX_CSTRING("pos"),true)->__Field(HX_CSTRING("y"),true));
					}
				}
			}
		}
		HX_STACK_LINE(132)
		{
			HX_STACK_LINE(132)
			int _g = (int)0;		HX_STACK_VAR(_g,"_g");
			HX_STACK_LINE(132)
			while(((_g < jobs->__Field(HX_CSTRING("length"),true)))){
				HX_STACK_LINE(132)
				Dynamic j = jobs->__GetItem(_g);		HX_STACK_VAR(j,"j");
				HX_STACK_LINE(132)
				++(_g);
				HX_STACK_LINE(133)
				this->import_job(j,diagram);
			}
		}
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC2(ImportController_obj,import_diagram,(void))

Void ImportController_obj::do_import( Dynamic model){
{
		HX_STACK_PUSH("ImportController::do_import","retro/controller/ImportController.hx",109);
		HX_STACK_THIS(this);
		HX_STACK_ARG(model,"model");
		HX_STACK_LINE(110)
		::retro::model::Diagram diagram = ::retro::model::Diagram_obj::__new();		HX_STACK_VAR(diagram,"diagram");
		HX_STACK_LINE(111)
		this->project->setRootDiagram(diagram);
		HX_STACK_LINE(113)
		this->import_diagram(diagram,model->__Field(HX_CSTRING("model"),true)->__Field(HX_CSTRING("diagram"),true));
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC1(ImportController_obj,do_import,(void))

::retro::core::JobComponent ImportController_obj::getModule( ::String name){
	HX_STACK_PUSH("ImportController::getModule","retro/controller/ImportController.hx",100);
	HX_STACK_THIS(this);
	HX_STACK_ARG(name,"name");
	HX_STACK_LINE(101)
	{
		HX_STACK_LINE(101)
		int _g = (int)0;		HX_STACK_VAR(_g,"_g");
		Array< ::Dynamic > _g1 = this->modules;		HX_STACK_VAR(_g1,"_g1");
		HX_STACK_LINE(101)
		while(((_g < _g1->length))){
			HX_STACK_LINE(101)
			::retro::core::JobComponent m = _g1->__get(_g).StaticCast< ::retro::core::JobComponent >();		HX_STACK_VAR(m,"m");
			HX_STACK_LINE(101)
			++(_g);
			HX_STACK_LINE(102)
			if (((m->getModuleName() == name))){
				HX_STACK_LINE(102)
				return m;
			}
		}
	}
	HX_STACK_LINE(106)
	return null();
}


HX_DEFINE_DYNAMIC_FUNC1(ImportController_obj,getModule,return )

::retro::model::Project ImportController_obj::getProject( ){
	HX_STACK_PUSH("ImportController::getProject","retro/controller/ImportController.hx",96);
	HX_STACK_THIS(this);
	HX_STACK_LINE(96)
	return this->project;
}


HX_DEFINE_DYNAMIC_FUNC0(ImportController_obj,getProject,return )


ImportController_obj::ImportController_obj()
{
}

void ImportController_obj::__Mark(HX_MARK_PARAMS)
{
	HX_MARK_BEGIN_CLASS(ImportController);
	HX_MARK_MEMBER_NAME(modules,"modules");
	HX_MARK_MEMBER_NAME(project,"project");
	HX_MARK_END_CLASS();
}

void ImportController_obj::__Visit(HX_VISIT_PARAMS)
{
	HX_VISIT_MEMBER_NAME(modules,"modules");
	HX_VISIT_MEMBER_NAME(project,"project");
}

Dynamic ImportController_obj::__Field(const ::String &inName,bool inCallProp)
{
	switch(inName.length) {
	case 7:
		if (HX_FIELD_EQ(inName,"modules") ) { return modules; }
		if (HX_FIELD_EQ(inName,"project") ) { return project; }
		break;
	case 9:
		if (HX_FIELD_EQ(inName,"do_import") ) { return do_import_dyn(); }
		if (HX_FIELD_EQ(inName,"getModule") ) { return getModule_dyn(); }
		break;
	case 10:
		if (HX_FIELD_EQ(inName,"import_job") ) { return import_job_dyn(); }
		if (HX_FIELD_EQ(inName,"getProject") ) { return getProject_dyn(); }
		break;
	case 14:
		if (HX_FIELD_EQ(inName,"import_diagram") ) { return import_diagram_dyn(); }
	}
	return super::__Field(inName,inCallProp);
}

Dynamic ImportController_obj::__SetField(const ::String &inName,const Dynamic &inValue,bool inCallProp)
{
	switch(inName.length) {
	case 7:
		if (HX_FIELD_EQ(inName,"modules") ) { modules=inValue.Cast< Array< ::Dynamic > >(); return inValue; }
		if (HX_FIELD_EQ(inName,"project") ) { project=inValue.Cast< ::retro::model::Project >(); return inValue; }
	}
	return super::__SetField(inName,inValue,inCallProp);
}

void ImportController_obj::__GetFields(Array< ::String> &outFields)
{
	outFields->push(HX_CSTRING("modules"));
	outFields->push(HX_CSTRING("project"));
	super::__GetFields(outFields);
};

static ::String sStaticFields[] = {
	String(null()) };

static ::String sMemberFields[] = {
	HX_CSTRING("import_job"),
	HX_CSTRING("import_diagram"),
	HX_CSTRING("do_import"),
	HX_CSTRING("getModule"),
	HX_CSTRING("getProject"),
	HX_CSTRING("modules"),
	HX_CSTRING("project"),
	String(null()) };

static void sMarkStatics(HX_MARK_PARAMS) {
	HX_MARK_MEMBER_NAME(ImportController_obj::__mClass,"__mClass");
};

static void sVisitStatics(HX_VISIT_PARAMS) {
	HX_VISIT_MEMBER_NAME(ImportController_obj::__mClass,"__mClass");
};

Class ImportController_obj::__mClass;

void ImportController_obj::__register()
{
	hx::Static(__mClass) = hx::RegisterClass(HX_CSTRING("retro.controller.ImportController"), hx::TCanCast< ImportController_obj> ,sStaticFields,sMemberFields,
	&__CreateEmpty, &__Create,
	&super::__SGetClass(), 0, sMarkStatics, sVisitStatics);
}

void ImportController_obj::__boot()
{
}

} // end namespace retro
} // end namespace controller
