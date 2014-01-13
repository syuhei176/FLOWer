#ifndef INCLUDED_retro_pub_Point2D
#define INCLUDED_retro_pub_Point2D

#ifndef HXCPP_H
#include <hxcpp.h>
#endif

HX_DECLARE_CLASS2(retro,pub,Point2D)
namespace retro{
namespace pub{


class HXCPP_CLASS_ATTRIBUTES  Point2D_obj : public hx::Object{
	public:
		typedef hx::Object super;
		typedef Point2D_obj OBJ_;
		Point2D_obj();
		Void __construct(Float x,Float y);

	public:
		static hx::ObjectPtr< Point2D_obj > __new(Float x,Float y);
		static Dynamic __CreateEmpty();
		static Dynamic __Create(hx::DynamicArray inArgs);
		~Point2D_obj();

		HX_DO_RTTI;
		static void __boot();
		static void __register();
		void __Mark(HX_MARK_PARAMS);
		void __Visit(HX_VISIT_PARAMS);
		::String __ToString() const { return HX_CSTRING("Point2D"); }

		virtual Float distanceSq( );
		Dynamic distanceSq_dyn();

		virtual Float distance( );
		Dynamic distance_dyn();

		virtual Void normalized( );
		Dynamic normalized_dyn();

		virtual Void setY( Float y);
		Dynamic setY_dyn();

		virtual Void setX( Float x);
		Dynamic setX_dyn();

		virtual Float getY( );
		Dynamic getY_dyn();

		virtual Float getX( );
		Dynamic getX_dyn();

		Float y;
		Float x;
		static ::retro::pub::Point2D add( ::retro::pub::Point2D p1,::retro::pub::Point2D p2);
		static Dynamic add_dyn();

		static ::retro::pub::Point2D sub( ::retro::pub::Point2D p1,::retro::pub::Point2D p2);
		static Dynamic sub_dyn();

		static Void addToSelf( ::retro::pub::Point2D p1,::retro::pub::Point2D p2);
		static Dynamic addToSelf_dyn();

		static Void subToSelf( ::retro::pub::Point2D p1,::retro::pub::Point2D p2);
		static Dynamic subToSelf_dyn();

		static Void timesToSelf( ::retro::pub::Point2D p1,Float t);
		static Dynamic timesToSelf_dyn();

};

} // end namespace retro
} // end namespace pub

#endif /* INCLUDED_retro_pub_Point2D */ 
