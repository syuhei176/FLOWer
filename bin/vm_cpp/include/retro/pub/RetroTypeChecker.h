#ifndef INCLUDED_retro_pub_RetroTypeChecker
#define INCLUDED_retro_pub_RetroTypeChecker

#ifndef HXCPP_H
#include <hxcpp.h>
#endif

HX_DECLARE_CLASS2(retro,pub,RetroType)
HX_DECLARE_CLASS2(retro,pub,RetroTypeChecker)
namespace retro{
namespace pub{


class HXCPP_CLASS_ATTRIBUTES  RetroTypeChecker_obj : public hx::Object{
	public:
		typedef hx::Object super;
		typedef RetroTypeChecker_obj OBJ_;
		RetroTypeChecker_obj();
		Void __construct();

	public:
		static hx::ObjectPtr< RetroTypeChecker_obj > __new();
		static Dynamic __CreateEmpty();
		static Dynamic __Create(hx::DynamicArray inArgs);
		~RetroTypeChecker_obj();

		HX_DO_RTTI;
		static void __boot();
		static void __register();
		void __Mark(HX_MARK_PARAMS);
		void __Visit(HX_VISIT_PARAMS);
		::String __ToString() const { return HX_CSTRING("RetroTypeChecker"); }

		static bool check( ::retro::pub::RetroType type1,::retro::pub::RetroType type2);
		static Dynamic check_dyn();

};

} // end namespace retro
} // end namespace pub

#endif /* INCLUDED_retro_pub_RetroTypeChecker */ 
