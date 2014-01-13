#ifndef INCLUDED_retro_model_Diagram
#define INCLUDED_retro_model_Diagram

#ifndef HXCPP_H
#include <hxcpp.h>
#endif

HX_DECLARE_CLASS2(retro,model,Diagram)
HX_DECLARE_CLASS2(retro,model,EntryJob)
HX_DECLARE_CLASS2(retro,model,InputPort)
HX_DECLARE_CLASS2(retro,model,Job)
HX_DECLARE_CLASS2(retro,model,OutputPort)
HX_DECLARE_CLASS2(retro,model,Port)
HX_DECLARE_CLASS2(retro,model,ValueCarrier)
namespace retro{
namespace model{


class HXCPP_CLASS_ATTRIBUTES  Diagram_obj : public hx::Object{
	public:
		typedef hx::Object super;
		typedef Diagram_obj OBJ_;
		Diagram_obj();
		Void __construct();

	public:
		static hx::ObjectPtr< Diagram_obj > __new();
		static Dynamic __CreateEmpty();
		static Dynamic __Create(hx::DynamicArray inArgs);
		~Diagram_obj();

		HX_DO_RTTI;
		static void __boot();
		static void __register();
		void __Mark(HX_MARK_PARAMS);
		void __Visit(HX_VISIT_PARAMS);
		::String __ToString() const { return HX_CSTRING("Diagram"); }

		virtual Void fireOnValueCarrierCleared( );
		Dynamic fireOnValueCarrierCleared_dyn();

		virtual Void fireOnValueCarrierRemoved( ::retro::model::ValueCarrier vc);
		Dynamic fireOnValueCarrierRemoved_dyn();

		virtual Void fireOnValueCarrierAdded( ::retro::model::ValueCarrier vc);
		Dynamic fireOnValueCarrierAdded_dyn();

		virtual Void fireOnJobRemoved( ::retro::model::Job j);
		Dynamic fireOnJobRemoved_dyn();

		virtual Void fireOnJobAdded( ::retro::model::Job j);
		Dynamic fireOnJobAdded_dyn();

		virtual Void onValueCarrierCleared( Dynamic listener);
		Dynamic onValueCarrierCleared_dyn();

		virtual Void onValueCarrierRemoved( Dynamic listener);
		Dynamic onValueCarrierRemoved_dyn();

		virtual Void onValueCarrierAdded( Dynamic listener);
		Dynamic onValueCarrierAdded_dyn();

		virtual Void onJobRemoved( Dynamic listener);
		Dynamic onJobRemoved_dyn();

		virtual Void onJobAdded( Dynamic listener);
		Dynamic onJobAdded_dyn();

		virtual Void clearValueCarriers( );
		Dynamic clearValueCarriers_dyn();

		virtual Array< ::Dynamic > getValueCarriers( );
		Dynamic getValueCarriers_dyn();

		virtual Void removeValueCarrier( ::retro::model::ValueCarrier valueCarrier);
		Dynamic removeValueCarrier_dyn();

		virtual Void addValueCarrier( ::retro::model::ValueCarrier valueCarrier);
		Dynamic addValueCarrier_dyn();

		virtual Array< ::Dynamic > getJobs( );
		Dynamic getJobs_dyn();

		virtual ::retro::model::InputPort getInputPort( ::String uri);
		Dynamic getInputPort_dyn();

		virtual ::retro::model::OutputPort getOutputPort( ::String uri);
		Dynamic getOutputPort_dyn();

		virtual ::retro::model::Job getJob( ::String id);
		Dynamic getJob_dyn();

		virtual Void removeJob( ::retro::model::Job job);
		Dynamic removeJob_dyn();

		virtual Void addJob( ::retro::model::Job job);
		Dynamic addJob_dyn();

		virtual ::retro::model::EntryJob getEntryPoint( );
		Dynamic getEntryPoint_dyn();

		virtual Void setEntryPoint( ::retro::model::EntryJob entry);
		Dynamic setEntryPoint_dyn();

		Dynamic onValueCarrierClearedListeners;
		Dynamic onValueCarrierRemovedListeners;
		Dynamic onValueCarrierAddedListeners;
		Dynamic onJobRemovedListeners;
		Dynamic onJobAddedListeners;
		Array< ::Dynamic > valueCarriers;
		Array< ::Dynamic > jobs;
		::retro::model::EntryJob entryPoint;
};

} // end namespace retro
} // end namespace model

#endif /* INCLUDED_retro_model_Diagram */ 
