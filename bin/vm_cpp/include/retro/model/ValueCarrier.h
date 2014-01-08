#ifndef INCLUDED_retro_model_ValueCarrier
#define INCLUDED_retro_model_ValueCarrier

#ifndef HXCPP_H
#include <hxcpp.h>
#endif

HX_DECLARE_CLASS2(retro,model,InputPort)
HX_DECLARE_CLASS2(retro,model,OutputPort)
HX_DECLARE_CLASS2(retro,model,Port)
HX_DECLARE_CLASS2(retro,model,Value)
HX_DECLARE_CLASS2(retro,model,ValueCarrier)
namespace retro{
namespace model{


class HXCPP_CLASS_ATTRIBUTES  ValueCarrier_obj : public hx::Object{
	public:
		typedef hx::Object super;
		typedef ValueCarrier_obj OBJ_;
		ValueCarrier_obj();
		Void __construct(::retro::model::Value value,::retro::model::OutputPort src,::retro::model::InputPort dest);

	public:
		static hx::ObjectPtr< ValueCarrier_obj > __new(::retro::model::Value value,::retro::model::OutputPort src,::retro::model::InputPort dest);
		static Dynamic __CreateEmpty();
		static Dynamic __Create(hx::DynamicArray inArgs);
		~ValueCarrier_obj();

		HX_DO_RTTI;
		static void __boot();
		static void __register();
		void __Mark(HX_MARK_PARAMS);
		void __Visit(HX_VISIT_PARAMS);
		::String __ToString() const { return HX_CSTRING("ValueCarrier"); }

		virtual Void fireOnStepListeners( );
		Dynamic fireOnStepListeners_dyn();

		virtual Void onStep( Dynamic listener);
		Dynamic onStep_dyn();

		virtual ::retro::model::Value getValue( );
		Dynamic getValue_dyn();

		virtual ::retro::model::InputPort step( );
		Dynamic step_dyn();

		int count;
		Dynamic onStepListeners;
		::retro::model::InputPort destPort;
		::retro::model::OutputPort srcPort;
		::retro::model::Value value;
};

} // end namespace retro
} // end namespace model

#endif /* INCLUDED_retro_model_ValueCarrier */ 
