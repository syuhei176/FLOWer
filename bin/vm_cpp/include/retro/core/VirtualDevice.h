#ifndef INCLUDED_retro_core_VirtualDevice
#define INCLUDED_retro_core_VirtualDevice

#ifndef HXCPP_H
#include <hxcpp.h>
#endif

HX_DECLARE_CLASS2(retro,core,VirtualDevice)
namespace retro{
namespace core{


class HXCPP_CLASS_ATTRIBUTES  VirtualDevice_obj : public hx::Object{
	public:
		typedef hx::Object super;
		typedef VirtualDevice_obj OBJ_;
		VirtualDevice_obj();
		Void __construct();

	public:
		static hx::ObjectPtr< VirtualDevice_obj > __new();
		static Dynamic __CreateEmpty();
		static Dynamic __Create(hx::DynamicArray inArgs);
		~VirtualDevice_obj();

		HX_DO_RTTI;
		static void __boot();
		static void __register();
		void __Mark(HX_MARK_PARAMS);
		void __Visit(HX_VISIT_PARAMS);
		::String __ToString() const { return HX_CSTRING("VirtualDevice"); }

};

} // end namespace retro
} // end namespace core

#endif /* INCLUDED_retro_core_VirtualDevice */ 
