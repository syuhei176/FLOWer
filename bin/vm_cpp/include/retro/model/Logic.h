#ifndef INCLUDED_retro_model_Logic
#define INCLUDED_retro_model_Logic

#ifndef HXCPP_H
#include <hxcpp.h>
#endif

#include <retro/model/Job.h>
HX_DECLARE_CLASS2(retro,model,Job)
HX_DECLARE_CLASS2(retro,model,Logic)
namespace retro{
namespace model{


class HXCPP_CLASS_ATTRIBUTES  Logic_obj : public ::retro::model::Job_obj{
	public:
		typedef ::retro::model::Job_obj super;
		typedef Logic_obj OBJ_;
		Logic_obj();
		Void __construct(::String id);

	public:
		static hx::ObjectPtr< Logic_obj > __new(::String id);
		static Dynamic __CreateEmpty();
		static Dynamic __Create(hx::DynamicArray inArgs);
		~Logic_obj();

		HX_DO_RTTI;
		static void __boot();
		static void __register();
		void __Mark(HX_MARK_PARAMS);
		void __Visit(HX_VISIT_PARAMS);
		::String __ToString() const { return HX_CSTRING("Logic"); }

};

} // end namespace retro
} // end namespace model

#endif /* INCLUDED_retro_model_Logic */ 
