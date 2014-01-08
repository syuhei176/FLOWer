#ifndef INCLUDED_retro_model_Value
#define INCLUDED_retro_model_Value

#ifndef HXCPP_H
#include <hxcpp.h>
#endif

HX_DECLARE_CLASS2(retro,model,Value)
HX_DECLARE_CLASS2(retro,pub,RetroType)
namespace retro{
namespace model{


class HXCPP_CLASS_ATTRIBUTES  Value_obj : public hx::Object{
	public:
		typedef hx::Object super;
		typedef Value_obj OBJ_;
		Value_obj();
		Void __construct(::retro::pub::RetroType _type,Dynamic _value);

	public:
		static hx::ObjectPtr< Value_obj > __new(::retro::pub::RetroType _type,Dynamic _value);
		static Dynamic __CreateEmpty();
		static Dynamic __Create(hx::DynamicArray inArgs);
		~Value_obj();

		HX_DO_RTTI;
		static void __boot();
		static void __register();
		void __Mark(HX_MARK_PARAMS);
		void __Visit(HX_VISIT_PARAMS);
		::String __ToString() const { return HX_CSTRING("Value"); }

		Dynamic value;
		::retro::pub::RetroType type;
};

} // end namespace retro
} // end namespace model

#endif /* INCLUDED_retro_model_Value */ 
