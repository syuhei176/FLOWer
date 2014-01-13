#ifndef INCLUDED_retro_model_InputPort
#define INCLUDED_retro_model_InputPort

#ifndef HXCPP_H
#include <hxcpp.h>
#endif

#include <retro/model/Port.h>
HX_DECLARE_CLASS2(retro,model,InputPort)
HX_DECLARE_CLASS2(retro,model,Job)
HX_DECLARE_CLASS2(retro,model,OutputPort)
HX_DECLARE_CLASS2(retro,model,Port)
HX_DECLARE_CLASS2(retro,model,Value)
HX_DECLARE_CLASS2(retro,model,ValueCarrier)
HX_DECLARE_CLASS2(retro,pub,RetroType)
namespace retro{
namespace model{


class HXCPP_CLASS_ATTRIBUTES  InputPort_obj : public ::retro::model::Port_obj{
	public:
		typedef ::retro::model::Port_obj super;
		typedef InputPort_obj OBJ_;
		InputPort_obj();
		Void __construct(::retro::model::Job parent,::retro::pub::RetroType type,::String name);

	public:
		static hx::ObjectPtr< InputPort_obj > __new(::retro::model::Job parent,::retro::pub::RetroType type,::String name);
		static Dynamic __CreateEmpty();
		static Dynamic __Create(hx::DynamicArray inArgs);
		~InputPort_obj();

		HX_DO_RTTI;
		static void __boot();
		static void __register();
		void __Mark(HX_MARK_PARAMS);
		void __Visit(HX_VISIT_PARAMS);
		::String __ToString() const { return HX_CSTRING("InputPort"); }

		virtual Void fireOnRemoveConstantValueListeners( );
		Dynamic fireOnRemoveConstantValueListeners_dyn();

		virtual Void fireOnSetConstantValueListeners( ::retro::model::Value v);
		Dynamic fireOnSetConstantValueListeners_dyn();

		virtual Void fireOnUseValueListeners( );
		Dynamic fireOnUseValueListeners_dyn();

		virtual Void fireOnSetValueListeners( ::retro::model::ValueCarrier v);
		Dynamic fireOnSetValueListeners_dyn();

		virtual Void onRemoveConstantValue( Dynamic listener);
		Dynamic onRemoveConstantValue_dyn();

		virtual Void onSetConstantValue( Dynamic listener);
		Dynamic onSetConstantValue_dyn();

		virtual Void onUseValue( Dynamic listener);
		Dynamic onUseValue_dyn();

		virtual Void onSetValue( Dynamic listener);
		Dynamic onSetValue_dyn();

		virtual Void removeConstant( );
		Dynamic removeConstant_dyn();

		virtual Void setConstant( ::retro::model::Value value);
		Dynamic setConstant_dyn();

		virtual ::retro::model::ValueCarrier useValueCarrier( );
		Dynamic useValueCarrier_dyn();

		virtual ::retro::model::Value getValue( );
		Dynamic getValue_dyn();

		virtual ::retro::model::Value getConstantValue( );
		Dynamic getConstantValue_dyn();

		virtual ::retro::model::ValueCarrier getValueCarrier( );
		Dynamic getValueCarrier_dyn();

		virtual Void setValueCarrier( ::retro::model::ValueCarrier valueCarrier);
		Dynamic setValueCarrier_dyn();

		Dynamic onRemoveConstantValueListeners;
		Dynamic onSetConstantValueListeners;
		Dynamic onUseValueListeners;
		Dynamic onSetValueListeners;
		::retro::model::Value constantValue;
		::retro::model::ValueCarrier valueCarrier;
		Array< ::Dynamic > connection;
};

} // end namespace retro
} // end namespace model

#endif /* INCLUDED_retro_model_InputPort */ 
