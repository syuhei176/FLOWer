#ifndef INCLUDED_retro_model_Port
#define INCLUDED_retro_model_Port

#ifndef HXCPP_H
#include <hxcpp.h>
#endif

HX_DECLARE_CLASS2(retro,model,Job)
HX_DECLARE_CLASS2(retro,model,Port)
HX_DECLARE_CLASS2(retro,pub,RetroType)
namespace retro{
namespace model{


class HXCPP_CLASS_ATTRIBUTES  Port_obj : public hx::Object{
	public:
		typedef hx::Object super;
		typedef Port_obj OBJ_;
		Port_obj();
		Void __construct(::retro::model::Job parent,::retro::pub::RetroType type,::String name);

	public:
		static hx::ObjectPtr< Port_obj > __new(::retro::model::Job parent,::retro::pub::RetroType type,::String name);
		static Dynamic __CreateEmpty();
		static Dynamic __Create(hx::DynamicArray inArgs);
		~Port_obj();

		HX_DO_RTTI;
		static void __boot();
		static void __register();
		void __Mark(HX_MARK_PARAMS);
		void __Visit(HX_VISIT_PARAMS);
		::String __ToString() const { return HX_CSTRING("Port"); }

		virtual ::retro::model::Job getParentJob( );
		Dynamic getParentJob_dyn();

		virtual ::String getName( );
		Dynamic getName_dyn();

		virtual ::String getURI( );
		Dynamic getURI_dyn();

		::String name;
		::retro::pub::RetroType type;
		::retro::model::Job parent;
};

} // end namespace retro
} // end namespace model

#endif /* INCLUDED_retro_model_Port */ 
