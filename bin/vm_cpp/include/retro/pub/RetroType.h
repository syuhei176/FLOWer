#ifndef INCLUDED_retro_pub_RetroType
#define INCLUDED_retro_pub_RetroType

#ifndef HXCPP_H
#include <hxcpp.h>
#endif

HX_DECLARE_CLASS2(retro,core,FlowerClass)
HX_DECLARE_CLASS2(retro,pub,RetroType)
namespace retro{
namespace pub{


class RetroType_obj : public hx::EnumBase_obj
{
	typedef hx::EnumBase_obj super;
		typedef RetroType_obj OBJ_;

	public:
		RetroType_obj() {};
		HX_DO_ENUM_RTTI;
		static void __boot();
		static void __register();
		::String GetEnumName( ) const { return HX_CSTRING("retro.pub.RetroType"); }
		::String __ToString() const { return HX_CSTRING("RetroType.") + tag; }

		static ::retro::pub::RetroType RBool;
		static inline ::retro::pub::RetroType RBool_dyn() { return RBool; }
		static ::retro::pub::RetroType RClass(::retro::core::FlowerClass type);
		static Dynamic RClass_dyn();
		static ::retro::pub::RetroType REmpty;
		static inline ::retro::pub::RetroType REmpty_dyn() { return REmpty; }
		static ::retro::pub::RetroType RList(::retro::pub::RetroType type);
		static Dynamic RList_dyn();
		static ::retro::pub::RetroType RNumber;
		static inline ::retro::pub::RetroType RNumber_dyn() { return RNumber; }
		static ::retro::pub::RetroType RString;
		static inline ::retro::pub::RetroType RString_dyn() { return RString; }
		static ::retro::pub::RetroType RTuple(Array< ::Dynamic > types);
		static Dynamic RTuple_dyn();
		static ::retro::pub::RetroType RUnknown(int id);
		static Dynamic RUnknown_dyn();
};

} // end namespace retro
} // end namespace pub

#endif /* INCLUDED_retro_pub_RetroType */ 
