#ifndef INCLUDED_retro_model_EntryJob
#define INCLUDED_retro_model_EntryJob

#ifndef HXCPP_H
#include <hxcpp.h>
#endif

#include <retro/model/Job.h>
HX_DECLARE_CLASS2(retro,model,EntryJob)
HX_DECLARE_CLASS2(retro,model,Job)
namespace retro{
namespace model{


class HXCPP_CLASS_ATTRIBUTES  EntryJob_obj : public ::retro::model::Job_obj{
	public:
		typedef ::retro::model::Job_obj super;
		typedef EntryJob_obj OBJ_;
		EntryJob_obj();
		Void __construct(::String id);

	public:
		static hx::ObjectPtr< EntryJob_obj > __new(::String id);
		static Dynamic __CreateEmpty();
		static Dynamic __Create(hx::DynamicArray inArgs);
		~EntryJob_obj();

		HX_DO_RTTI;
		static void __boot();
		static void __register();
		void __Mark(HX_MARK_PARAMS);
		void __Visit(HX_VISIT_PARAMS);
		::String __ToString() const { return HX_CSTRING("EntryJob"); }

		virtual ::String getName( );

};

} // end namespace retro
} // end namespace model

#endif /* INCLUDED_retro_model_EntryJob */ 
