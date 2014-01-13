#ifndef INCLUDED_retro_model_Job
#define INCLUDED_retro_model_Job

#ifndef HXCPP_H
#include <hxcpp.h>
#endif

HX_DECLARE_CLASS2(retro,core,Params)
HX_DECLARE_CLASS2(retro,model,InputPort)
HX_DECLARE_CLASS2(retro,model,Job)
HX_DECLARE_CLASS2(retro,model,OutputPort)
HX_DECLARE_CLASS2(retro,model,Port)
HX_DECLARE_CLASS2(retro,pub,Point2D)
HX_DECLARE_CLASS2(retro,vm,Worker)
namespace retro{
namespace model{


class HXCPP_CLASS_ATTRIBUTES  Job_obj : public hx::Object{
	public:
		typedef hx::Object super;
		typedef Job_obj OBJ_;
		Job_obj();
		Void __construct(::String id);

	public:
		static hx::ObjectPtr< Job_obj > __new(::String id);
		static Dynamic __CreateEmpty();
		static Dynamic __Create(hx::DynamicArray inArgs);
		~Job_obj();

		HX_DO_RTTI;
		static void __boot();
		static void __register();
		void __Mark(HX_MARK_PARAMS);
		void __Visit(HX_VISIT_PARAMS);
		::String __ToString() const { return HX_CSTRING("Job"); }

		virtual Dynamic getJSON( );
		Dynamic getJSON_dyn();

		virtual Void fireOnPosChangedListeners( Float x,Float y);
		Dynamic fireOnPosChangedListeners_dyn();

		virtual Void onPosChanged( Dynamic listener);
		Dynamic onPosChanged_dyn();

		virtual Void fireOnOutputPortRemovedListeners( ::retro::model::OutputPort j);
		Dynamic fireOnOutputPortRemovedListeners_dyn();

		virtual Void onOutputPortRemoved( Dynamic listener);
		Dynamic onOutputPortRemoved_dyn();

		virtual Void fireOnInputPortRemovedListeners( ::retro::model::InputPort j);
		Dynamic fireOnInputPortRemovedListeners_dyn();

		virtual Void onInputPortRemoved( Dynamic listener);
		Dynamic onInputPortRemoved_dyn();

		virtual Void fireOnOutputPortAddedListeners( ::retro::model::OutputPort j);
		Dynamic fireOnOutputPortAddedListeners_dyn();

		virtual Void onOutputPortAdded( Dynamic listener);
		Dynamic onOutputPortAdded_dyn();

		virtual Void fireOnInputPortAddedListeners( ::retro::model::InputPort j);
		Dynamic fireOnInputPortAddedListeners_dyn();

		virtual Void onInputPortAdded( Dynamic listener);
		Dynamic onInputPortAdded_dyn();

		virtual ::retro::model::OutputPort getOutputPort( ::String name);
		Dynamic getOutputPort_dyn();

		virtual ::retro::model::InputPort getInputPort( ::String name);
		Dynamic getInputPort_dyn();

		virtual ::retro::vm::Worker getWorker( );
		Dynamic getWorker_dyn();

		virtual ::retro::core::Params getParams( );
		Dynamic getParams_dyn();

		virtual Void removeOutputPort( ::retro::model::OutputPort port);
		Dynamic removeOutputPort_dyn();

		virtual Void removeInputPort( ::retro::model::InputPort port);
		Dynamic removeInputPort_dyn();

		virtual Void addOutputPort( ::retro::model::OutputPort port);
		Dynamic addOutputPort_dyn();

		virtual Void addInputPort( ::retro::model::InputPort port);
		Dynamic addInputPort_dyn();

		virtual Array< ::Dynamic > getOutputPorts( );
		Dynamic getOutputPorts_dyn();

		virtual Array< ::Dynamic > getInputPorts( );
		Dynamic getInputPorts_dyn();

		virtual ::retro::pub::Point2D getPos( );
		Dynamic getPos_dyn();

		virtual Void setPos( Float x,Float y);
		Dynamic setPos_dyn();

		virtual ::String getName( );
		Dynamic getName_dyn();

		virtual ::String getId( );
		Dynamic getId_dyn();

		::retro::vm::Worker worker;
		Dynamic onPosChangedListeners;
		Dynamic onOutputPortRemovedListeners;
		Dynamic onInputPortRemovedListeners;
		Dynamic onOutputPortAddedListeners;
		Dynamic onInputPortAddedListeners;
		::retro::pub::Point2D pos;
		Array< ::Dynamic > outputPorts;
		Array< ::Dynamic > inputPorts;
		::String id;
};

} // end namespace retro
} // end namespace model

#endif /* INCLUDED_retro_model_Job */ 
