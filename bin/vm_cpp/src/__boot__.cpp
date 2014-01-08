#include <hxcpp.h>

#include <sys/io/FileInput.h>
#include <sys/io/File.h>
#include <retro/vm/Worker.h>
#include <retro/vm/Runtime.h>
#include <retro/vm/Compiler.h>
#include <retro/vm/Application.h>
#include <retro/pub/RetroTypeChecker.h>
#include <retro/pub/RetroType.h>
#include <retro/pub/Point2D.h>
#include <retro/pub/IDGenerator.h>
#include <retro/model/ValueCarrier.h>
#include <retro/model/Value.h>
#include <retro/model/SymbolicLink.h>
#include <retro/model/Project.h>
#include <retro/model/OutputPort.h>
#include <retro/model/Logic.h>
#include <retro/model/InputPort.h>
#include <retro/model/Port.h>
#include <retro/model/EntryJob.h>
#include <retro/model/Job.h>
#include <retro/model/Diagram.h>
#include <retro/library/system/Scan.h>
#include <retro/library/system/Print.h>
#include <retro/library/string/Substr.h>
#include <retro/library/string/Split.h>
#include <retro/library/string/Length.h>
#include <retro/library/string/LastIndexOf.h>
#include <retro/library/string/IndexOf.h>
#include <retro/library/string/ChatAt.h>
#include <retro/library/sphero/SetHeading.h>
#include <retro/library/sphero/SetBackLED.h>
#include <retro/library/sphero/Roll.h>
#include <retro/library/point2d/Sub.h>
#include <retro/library/point2d/Distance.h>
#include <retro/library/point2d/Create.h>
#include <retro/library/point2d/Add.h>
#include <retro/library/pigpio/Write.h>
#include <retro/library/math/Sqrt.h>
#include <retro/library/math/Sin.h>
#include <retro/library/math/Random.h>
#include <retro/library/math/Pow.h>
#include <retro/library/math/Min.h>
#include <retro/library/math/Max.h>
#include <retro/library/math/Log.h>
#include <retro/library/math/Floor.h>
#include <retro/library/math/Cos.h>
#include <retro/library/math/Atan2.h>
#include <retro/library/math/Atan.h>
#include <retro/library/math/Asin.h>
#include <retro/library/math/Acos.h>
#include <retro/library/math/Abs.h>
#include <retro/library/list/Remove.h>
#include <retro/library/list/Push.h>
#include <retro/library/list/Pop.h>
#include <retro/library/list/Length.h>
#include <retro/library/list/Last.h>
#include <retro/library/list/Join.h>
#include <retro/library/list/IsEmpty.h>
#include <retro/library/list/First.h>
#include <retro/library/list/Clear.h>
#include <retro/library/list/Add.h>
#include <retro/library/line2d/Distance.h>
#include <retro/library/line2d/Create.h>
#include <retro/library/http/Post.h>
#include <retro/library/http/Get.h>
#include <retro/library/data/Stack.h>
#include <retro/library/core/Transistor.h>
#include <retro/library/core/Times.h>
#include <retro/library/core/Through.h>
#include <retro/library/core/Remainder.h>
#include <retro/library/core/Or.h>
#include <retro/library/core/Not.h>
#include <retro/library/core/Filter.h>
#include <retro/library/core/Drop.h>
#include <retro/library/core/Compare.h>
#include <retro/library/core/And.h>
#include <retro/library/core/Add.h>
#include <retro/library/array/Push.h>
#include <retro/library/array/Pop.h>
#include <retro/library/array/Length.h>
#include <retro/library/array/Get.h>
#include <retro/library/array/Create.h>
#include <retro/core/VirtualDevice.h>
#include <retro/core/ScriptReturnValue.h>
#include <retro/core/Result.h>
#include <retro/core/Param.h>
#include <retro/core/Params.h>
#include <retro/core/Output.h>
#include <retro/core/Outputs.h>
#include <retro/core/JobComponent.h>
#include <retro/core/Inputs.h>
#include <retro/core/Input.h>
#include <retro/core/FlowerClass.h>
#include <retro/controller/ImportController.h>
#include <haxe/io/Input.h>
#include <haxe/io/Error.h>
#include <haxe/io/Eof.h>
#include <haxe/Timer.h>
#include <haxe/Log.h>
#include <haxe/Json.h>
#include <VMMain_cpp.h>
#include <Sys.h>
#include <cpp/Lib.h>
#include <StringBuf.h>
#include <Std.h>

void __boot_all()
{
hx::RegisterResources( hx::GetResources() );
::sys::io::FileInput_obj::__register();
::sys::io::File_obj::__register();
::retro::vm::Worker_obj::__register();
::retro::vm::Runtime_obj::__register();
::retro::vm::Compiler_obj::__register();
::retro::vm::Application_obj::__register();
::retro::pub::RetroTypeChecker_obj::__register();
::retro::pub::RetroType_obj::__register();
::retro::pub::Point2D_obj::__register();
::retro::pub::IDGenerator_obj::__register();
::retro::model::ValueCarrier_obj::__register();
::retro::model::Value_obj::__register();
::retro::model::SymbolicLink_obj::__register();
::retro::model::Project_obj::__register();
::retro::model::OutputPort_obj::__register();
::retro::model::Logic_obj::__register();
::retro::model::InputPort_obj::__register();
::retro::model::Port_obj::__register();
::retro::model::EntryJob_obj::__register();
::retro::model::Job_obj::__register();
::retro::model::Diagram_obj::__register();
::retro::library::system::Scan_obj::__register();
::retro::library::system::Print_obj::__register();
::retro::library::string::Substr_obj::__register();
::retro::library::string::Split_obj::__register();
::retro::library::string::Length_obj::__register();
::retro::library::string::LastIndexOf_obj::__register();
::retro::library::string::IndexOf_obj::__register();
::retro::library::string::ChatAt_obj::__register();
::retro::library::sphero::SetHeading_obj::__register();
::retro::library::sphero::SetBackLED_obj::__register();
::retro::library::sphero::Roll_obj::__register();
::retro::library::point2d::Sub_obj::__register();
::retro::library::point2d::Distance_obj::__register();
::retro::library::point2d::Create_obj::__register();
::retro::library::point2d::Add_obj::__register();
::retro::library::pigpio::Write_obj::__register();
::retro::library::math::Sqrt_obj::__register();
::retro::library::math::Sin_obj::__register();
::retro::library::math::Random_obj::__register();
::retro::library::math::Pow_obj::__register();
::retro::library::math::Min_obj::__register();
::retro::library::math::Max_obj::__register();
::retro::library::math::Log_obj::__register();
::retro::library::math::Floor_obj::__register();
::retro::library::math::Cos_obj::__register();
::retro::library::math::Atan2_obj::__register();
::retro::library::math::Atan_obj::__register();
::retro::library::math::Asin_obj::__register();
::retro::library::math::Acos_obj::__register();
::retro::library::math::Abs_obj::__register();
::retro::library::list::Remove_obj::__register();
::retro::library::list::Push_obj::__register();
::retro::library::list::Pop_obj::__register();
::retro::library::list::Length_obj::__register();
::retro::library::list::Last_obj::__register();
::retro::library::list::Join_obj::__register();
::retro::library::list::IsEmpty_obj::__register();
::retro::library::list::First_obj::__register();
::retro::library::list::Clear_obj::__register();
::retro::library::list::Add_obj::__register();
::retro::library::line2d::Distance_obj::__register();
::retro::library::line2d::Create_obj::__register();
::retro::library::http::Post_obj::__register();
::retro::library::http::Get_obj::__register();
::retro::library::data::Stack_obj::__register();
::retro::library::core::Transistor_obj::__register();
::retro::library::core::Times_obj::__register();
::retro::library::core::Through_obj::__register();
::retro::library::core::Remainder_obj::__register();
::retro::library::core::Or_obj::__register();
::retro::library::core::Not_obj::__register();
::retro::library::core::Filter_obj::__register();
::retro::library::core::Drop_obj::__register();
::retro::library::core::Compare_obj::__register();
::retro::library::core::And_obj::__register();
::retro::library::core::Add_obj::__register();
::retro::library::array::Push_obj::__register();
::retro::library::array::Pop_obj::__register();
::retro::library::array::Length_obj::__register();
::retro::library::array::Get_obj::__register();
::retro::library::array::Create_obj::__register();
::retro::core::VirtualDevice_obj::__register();
::retro::core::ScriptReturnValue_obj::__register();
::retro::core::Result_obj::__register();
::retro::core::Param_obj::__register();
::retro::core::Params_obj::__register();
::retro::core::Output_obj::__register();
::retro::core::Outputs_obj::__register();
::retro::core::JobComponent_obj::__register();
::retro::core::Inputs_obj::__register();
::retro::core::Input_obj::__register();
::retro::core::FlowerClass_obj::__register();
::retro::controller::ImportController_obj::__register();
::haxe::io::Input_obj::__register();
::haxe::io::Error_obj::__register();
::haxe::io::Eof_obj::__register();
::haxe::Timer_obj::__register();
::haxe::Log_obj::__register();
::haxe::Json_obj::__register();
::VMMain_cpp_obj::__register();
::Sys_obj::__register();
::cpp::Lib_obj::__register();
::StringBuf_obj::__register();
::Std_obj::__register();
::cpp::Lib_obj::__boot();
::haxe::Log_obj::__boot();
::Std_obj::__boot();
::StringBuf_obj::__boot();
::Sys_obj::__boot();
::VMMain_cpp_obj::__boot();
::haxe::Json_obj::__boot();
::haxe::Timer_obj::__boot();
::haxe::io::Eof_obj::__boot();
::haxe::io::Error_obj::__boot();
::haxe::io::Input_obj::__boot();
::retro::controller::ImportController_obj::__boot();
::retro::core::FlowerClass_obj::__boot();
::retro::core::Input_obj::__boot();
::retro::core::Inputs_obj::__boot();
::retro::core::JobComponent_obj::__boot();
::retro::core::Outputs_obj::__boot();
::retro::core::Output_obj::__boot();
::retro::core::Params_obj::__boot();
::retro::core::Param_obj::__boot();
::retro::core::Result_obj::__boot();
::retro::core::ScriptReturnValue_obj::__boot();
::retro::core::VirtualDevice_obj::__boot();
::retro::library::array::Create_obj::__boot();
::retro::library::array::Get_obj::__boot();
::retro::library::array::Length_obj::__boot();
::retro::library::array::Pop_obj::__boot();
::retro::library::array::Push_obj::__boot();
::retro::library::core::Add_obj::__boot();
::retro::library::core::And_obj::__boot();
::retro::library::core::Compare_obj::__boot();
::retro::library::core::Drop_obj::__boot();
::retro::library::core::Filter_obj::__boot();
::retro::library::core::Not_obj::__boot();
::retro::library::core::Or_obj::__boot();
::retro::library::core::Remainder_obj::__boot();
::retro::library::core::Through_obj::__boot();
::retro::library::core::Times_obj::__boot();
::retro::library::core::Transistor_obj::__boot();
::retro::library::data::Stack_obj::__boot();
::retro::library::http::Get_obj::__boot();
::retro::library::http::Post_obj::__boot();
::retro::library::line2d::Create_obj::__boot();
::retro::library::line2d::Distance_obj::__boot();
::retro::library::list::Add_obj::__boot();
::retro::library::list::Clear_obj::__boot();
::retro::library::list::First_obj::__boot();
::retro::library::list::IsEmpty_obj::__boot();
::retro::library::list::Join_obj::__boot();
::retro::library::list::Last_obj::__boot();
::retro::library::list::Length_obj::__boot();
::retro::library::list::Pop_obj::__boot();
::retro::library::list::Push_obj::__boot();
::retro::library::list::Remove_obj::__boot();
::retro::library::math::Abs_obj::__boot();
::retro::library::math::Acos_obj::__boot();
::retro::library::math::Asin_obj::__boot();
::retro::library::math::Atan_obj::__boot();
::retro::library::math::Atan2_obj::__boot();
::retro::library::math::Cos_obj::__boot();
::retro::library::math::Floor_obj::__boot();
::retro::library::math::Log_obj::__boot();
::retro::library::math::Max_obj::__boot();
::retro::library::math::Min_obj::__boot();
::retro::library::math::Pow_obj::__boot();
::retro::library::math::Random_obj::__boot();
::retro::library::math::Sin_obj::__boot();
::retro::library::math::Sqrt_obj::__boot();
::retro::library::pigpio::Write_obj::__boot();
::retro::library::point2d::Add_obj::__boot();
::retro::library::point2d::Create_obj::__boot();
::retro::library::point2d::Distance_obj::__boot();
::retro::library::point2d::Sub_obj::__boot();
::retro::library::sphero::Roll_obj::__boot();
::retro::library::sphero::SetBackLED_obj::__boot();
::retro::library::sphero::SetHeading_obj::__boot();
::retro::library::string::ChatAt_obj::__boot();
::retro::library::string::IndexOf_obj::__boot();
::retro::library::string::LastIndexOf_obj::__boot();
::retro::library::string::Length_obj::__boot();
::retro::library::string::Split_obj::__boot();
::retro::library::string::Substr_obj::__boot();
::retro::library::system::Print_obj::__boot();
::retro::library::system::Scan_obj::__boot();
::retro::model::Diagram_obj::__boot();
::retro::model::Job_obj::__boot();
::retro::model::EntryJob_obj::__boot();
::retro::model::Port_obj::__boot();
::retro::model::InputPort_obj::__boot();
::retro::model::Logic_obj::__boot();
::retro::model::OutputPort_obj::__boot();
::retro::model::Project_obj::__boot();
::retro::model::SymbolicLink_obj::__boot();
::retro::model::Value_obj::__boot();
::retro::model::ValueCarrier_obj::__boot();
::retro::pub::IDGenerator_obj::__boot();
::retro::pub::Point2D_obj::__boot();
::retro::pub::RetroType_obj::__boot();
::retro::pub::RetroTypeChecker_obj::__boot();
::retro::vm::Application_obj::__boot();
::retro::vm::Compiler_obj::__boot();
::retro::vm::Runtime_obj::__boot();
::retro::vm::Worker_obj::__boot();
::sys::io::File_obj::__boot();
::sys::io::FileInput_obj::__boot();
}

