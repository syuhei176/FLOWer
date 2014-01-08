#ifndef INCLUDED_retro_pub_IDGenerator
#define INCLUDED_retro_pub_IDGenerator

#ifndef HXCPP_H
#include <hxcpp.h>
#endif

HX_DECLARE_CLASS2(retro,pub,IDGenerator)
namespace retro{
namespace pub{


class HXCPP_CLASS_ATTRIBUTES  IDGenerator_obj : public hx::Object{
	public:
		typedef hx::Object super;
		typedef IDGenerator_obj OBJ_;
		IDGenerator_obj();
		Void __construct(::String uniqueEditorKey);

	public:
		static hx::ObjectPtr< IDGenerator_obj > __new(::String uniqueEditorKey);
		static Dynamic __CreateEmpty();
		static Dynamic __Create(hx::DynamicArray inArgs);
		~IDGenerator_obj();

		HX_DO_RTTI;
		static void __boot();
		static void __register();
		void __Mark(HX_MARK_PARAMS);
		void __Visit(HX_VISIT_PARAMS);
		::String __ToString() const { return HX_CSTRING("IDGenerator"); }

		virtual ::String genID( );
		Dynamic genID_dyn();

		int counter;
		::String uniqueEditorKey;
		static ::retro::pub::IDGenerator idGen;
		static ::retro::pub::IDGenerator getInstance( ::String uniqueEditorKey);
		static Dynamic getInstance_dyn();

};

} // end namespace retro
} // end namespace pub

#endif /* INCLUDED_retro_pub_IDGenerator */ 
