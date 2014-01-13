#ifndef INCLUDED_retro_model_OutputPort
#define INCLUDED_retro_model_OutputPort

#ifndef HXCPP_H
#include <hxcpp.h>
#endif

#include <retro/model/Port.h>
HX_DECLARE_CLASS2(retro,model,InputPort)
HX_DECLARE_CLASS2(retro,model,Job)
HX_DECLARE_CLASS2(retro,model,OutputPort)
HX_DECLARE_CLASS2(retro,model,Port)
HX_DECLARE_CLASS2(retro,pub,RetroType)
namespace retro{
namespace model{


class HXCPP_CLASS_ATTRIBUTES  OutputPort_obj : public ::retro::model::Port_obj{
	public:
		typedef ::retro::model::Port_obj super;
		typedef OutputPort_obj OBJ_;
		OutputPort_obj();
		Void __construct(::retro::model::Job parent,::retro::pub::RetroType type,::String name);

	public:
		static hx::ObjectPtr< OutputPort_obj > __new(::retro::model::Job parent,::retro::pub::RetroType type,::String name);
		static Dynamic __CreateEmpty();
		static Dynamic __Create(hx::DynamicArray inArgs);
		~OutputPort_obj();

		HX_DO_RTTI;
		static void __boot();
		static void __register();
		void __Mark(HX_MARK_PARAMS);
		void __Visit(HX_VISIT_PARAMS);
		::String __ToString() const { return HX_CSTRING("OutputPort"); }

		virtual Void fireOnDisconnectedListeners( ::retro::model::OutputPort o,::retro::model::InputPort i);
		Dynamic fireOnDisconnectedListeners_dyn();

		virtual Void fireOnConnectedListeners( ::retro::model::OutputPort o,::retro::model::InputPort i);
		Dynamic fireOnConnectedListeners_dyn();

		virtual Void onDisconnected( Dynamic listener);
		Dynamic onDisconnected_dyn();

		virtual Void onConnected( Dynamic listener);
		Dynamic onConnected_dyn();

		virtual Void disconnectToInputPort( ::retro::model::InputPort port);
		Dynamic disconnectToInputPort_dyn();

		virtual Void connectToInputPort( ::retro::model::InputPort port);
		Dynamic connectToInputPort_dyn();

		virtual Array< ::Dynamic > getConnections( );
		Dynamic getConnections_dyn();

		Dynamic onDisconnectedListeners;
		Dynamic onConnectedListeners;
		Array< ::Dynamic > connection;
};

} // end namespace retro
} // end namespace model

#endif /* INCLUDED_retro_model_OutputPort */ 
