#include <hxcpp.h>

#ifndef INCLUDED_hxMath
#include <hxMath.h>
#endif
#ifndef INCLUDED_retro_pub_Point2D
#include <retro/pub/Point2D.h>
#endif
namespace retro{
namespace pub{

Void Point2D_obj::__construct(Float x,Float y)
{
HX_STACK_PUSH("Point2D::new","retro/pub/Point2D.hx",6);
{
	HX_STACK_LINE(7)
	this->x = x;
	HX_STACK_LINE(8)
	this->y = y;
}
;
	return null();
}

Point2D_obj::~Point2D_obj() { }

Dynamic Point2D_obj::__CreateEmpty() { return  new Point2D_obj; }
hx::ObjectPtr< Point2D_obj > Point2D_obj::__new(Float x,Float y)
{  hx::ObjectPtr< Point2D_obj > result = new Point2D_obj();
	result->__construct(x,y);
	return result;}

Dynamic Point2D_obj::__Create(hx::DynamicArray inArgs)
{  hx::ObjectPtr< Point2D_obj > result = new Point2D_obj();
	result->__construct(inArgs[0],inArgs[1]);
	return result;}

Float Point2D_obj::distanceSq( ){
	HX_STACK_PUSH("Point2D::distanceSq","retro/pub/Point2D.hx",48);
	HX_STACK_THIS(this);
	HX_STACK_LINE(48)
	return (this->getX() * this->getX());
}


HX_DEFINE_DYNAMIC_FUNC0(Point2D_obj,distanceSq,return )

Float Point2D_obj::distance( ){
	HX_STACK_PUSH("Point2D::distance","retro/pub/Point2D.hx",45);
	HX_STACK_THIS(this);
	HX_STACK_LINE(45)
	return ::Math_obj::sqrt(this->distanceSq());
}


HX_DEFINE_DYNAMIC_FUNC0(Point2D_obj,distance,return )

Void Point2D_obj::normalized( ){
{
		HX_STACK_PUSH("Point2D::normalized","retro/pub/Point2D.hx",22);
		HX_STACK_THIS(this);
		HX_STACK_LINE(23)
		Float len = ::Math_obj::sqrt(((this->x * this->x) + (this->y * this->y)));		HX_STACK_VAR(len,"len");
		HX_STACK_LINE(24)
		hx::DivEq(this->x,len);
		HX_STACK_LINE(25)
		hx::DivEq(this->y,len);
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC0(Point2D_obj,normalized,(void))

Void Point2D_obj::setY( Float y){
{
		HX_STACK_PUSH("Point2D::setY","retro/pub/Point2D.hx",19);
		HX_STACK_THIS(this);
		HX_STACK_ARG(y,"y");
		HX_STACK_LINE(19)
		this->y = y;
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC1(Point2D_obj,setY,(void))

Void Point2D_obj::setX( Float x){
{
		HX_STACK_PUSH("Point2D::setX","retro/pub/Point2D.hx",16);
		HX_STACK_THIS(this);
		HX_STACK_ARG(x,"x");
		HX_STACK_LINE(16)
		this->x = x;
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC1(Point2D_obj,setX,(void))

Float Point2D_obj::getY( ){
	HX_STACK_PUSH("Point2D::getY","retro/pub/Point2D.hx",13);
	HX_STACK_THIS(this);
	HX_STACK_LINE(13)
	return this->y;
}


HX_DEFINE_DYNAMIC_FUNC0(Point2D_obj,getY,return )

Float Point2D_obj::getX( ){
	HX_STACK_PUSH("Point2D::getX","retro/pub/Point2D.hx",10);
	HX_STACK_THIS(this);
	HX_STACK_LINE(10)
	return this->x;
}


HX_DEFINE_DYNAMIC_FUNC0(Point2D_obj,getX,return )

::retro::pub::Point2D Point2D_obj::add( ::retro::pub::Point2D p1,::retro::pub::Point2D p2){
	HX_STACK_PUSH("Point2D::add","retro/pub/Point2D.hx",27);
	HX_STACK_ARG(p1,"p1");
	HX_STACK_ARG(p2,"p2");
	HX_STACK_LINE(27)
	return ::retro::pub::Point2D_obj::__new((p1->x + p2->x),(p1->y + p2->y));
}


STATIC_HX_DEFINE_DYNAMIC_FUNC2(Point2D_obj,add,return )

::retro::pub::Point2D Point2D_obj::sub( ::retro::pub::Point2D p1,::retro::pub::Point2D p2){
	HX_STACK_PUSH("Point2D::sub","retro/pub/Point2D.hx",30);
	HX_STACK_ARG(p1,"p1");
	HX_STACK_ARG(p2,"p2");
	HX_STACK_LINE(30)
	return ::retro::pub::Point2D_obj::__new((p1->x - p2->x),(p1->y - p2->y));
}


STATIC_HX_DEFINE_DYNAMIC_FUNC2(Point2D_obj,sub,return )

Void Point2D_obj::addToSelf( ::retro::pub::Point2D p1,::retro::pub::Point2D p2){
{
		HX_STACK_PUSH("Point2D::addToSelf","retro/pub/Point2D.hx",33);
		HX_STACK_ARG(p1,"p1");
		HX_STACK_ARG(p2,"p2");
		HX_STACK_LINE(34)
		hx::AddEq(p1->x,p2->x);
		HX_STACK_LINE(35)
		hx::AddEq(p1->y,p2->y);
	}
return null();
}


STATIC_HX_DEFINE_DYNAMIC_FUNC2(Point2D_obj,addToSelf,(void))

Void Point2D_obj::subToSelf( ::retro::pub::Point2D p1,::retro::pub::Point2D p2){
{
		HX_STACK_PUSH("Point2D::subToSelf","retro/pub/Point2D.hx",37);
		HX_STACK_ARG(p1,"p1");
		HX_STACK_ARG(p2,"p2");
		HX_STACK_LINE(38)
		hx::SubEq(p1->x,p2->x);
		HX_STACK_LINE(39)
		hx::SubEq(p1->y,p2->y);
	}
return null();
}


STATIC_HX_DEFINE_DYNAMIC_FUNC2(Point2D_obj,subToSelf,(void))

Void Point2D_obj::timesToSelf( ::retro::pub::Point2D p1,Float t){
{
		HX_STACK_PUSH("Point2D::timesToSelf","retro/pub/Point2D.hx",41);
		HX_STACK_ARG(p1,"p1");
		HX_STACK_ARG(t,"t");
		HX_STACK_LINE(42)
		hx::MultEq(p1->x,t);
		HX_STACK_LINE(43)
		hx::MultEq(p1->y,t);
	}
return null();
}


STATIC_HX_DEFINE_DYNAMIC_FUNC2(Point2D_obj,timesToSelf,(void))


Point2D_obj::Point2D_obj()
{
}

void Point2D_obj::__Mark(HX_MARK_PARAMS)
{
	HX_MARK_BEGIN_CLASS(Point2D);
	HX_MARK_MEMBER_NAME(y,"y");
	HX_MARK_MEMBER_NAME(x,"x");
	HX_MARK_END_CLASS();
}

void Point2D_obj::__Visit(HX_VISIT_PARAMS)
{
	HX_VISIT_MEMBER_NAME(y,"y");
	HX_VISIT_MEMBER_NAME(x,"x");
}

Dynamic Point2D_obj::__Field(const ::String &inName,bool inCallProp)
{
	switch(inName.length) {
	case 1:
		if (HX_FIELD_EQ(inName,"y") ) { return y; }
		if (HX_FIELD_EQ(inName,"x") ) { return x; }
		break;
	case 3:
		if (HX_FIELD_EQ(inName,"add") ) { return add_dyn(); }
		if (HX_FIELD_EQ(inName,"sub") ) { return sub_dyn(); }
		break;
	case 4:
		if (HX_FIELD_EQ(inName,"setY") ) { return setY_dyn(); }
		if (HX_FIELD_EQ(inName,"setX") ) { return setX_dyn(); }
		if (HX_FIELD_EQ(inName,"getY") ) { return getY_dyn(); }
		if (HX_FIELD_EQ(inName,"getX") ) { return getX_dyn(); }
		break;
	case 8:
		if (HX_FIELD_EQ(inName,"distance") ) { return distance_dyn(); }
		break;
	case 9:
		if (HX_FIELD_EQ(inName,"addToSelf") ) { return addToSelf_dyn(); }
		if (HX_FIELD_EQ(inName,"subToSelf") ) { return subToSelf_dyn(); }
		break;
	case 10:
		if (HX_FIELD_EQ(inName,"distanceSq") ) { return distanceSq_dyn(); }
		if (HX_FIELD_EQ(inName,"normalized") ) { return normalized_dyn(); }
		break;
	case 11:
		if (HX_FIELD_EQ(inName,"timesToSelf") ) { return timesToSelf_dyn(); }
	}
	return super::__Field(inName,inCallProp);
}

Dynamic Point2D_obj::__SetField(const ::String &inName,const Dynamic &inValue,bool inCallProp)
{
	switch(inName.length) {
	case 1:
		if (HX_FIELD_EQ(inName,"y") ) { y=inValue.Cast< Float >(); return inValue; }
		if (HX_FIELD_EQ(inName,"x") ) { x=inValue.Cast< Float >(); return inValue; }
	}
	return super::__SetField(inName,inValue,inCallProp);
}

void Point2D_obj::__GetFields(Array< ::String> &outFields)
{
	outFields->push(HX_CSTRING("y"));
	outFields->push(HX_CSTRING("x"));
	super::__GetFields(outFields);
};

static ::String sStaticFields[] = {
	HX_CSTRING("add"),
	HX_CSTRING("sub"),
	HX_CSTRING("addToSelf"),
	HX_CSTRING("subToSelf"),
	HX_CSTRING("timesToSelf"),
	String(null()) };

static ::String sMemberFields[] = {
	HX_CSTRING("distanceSq"),
	HX_CSTRING("distance"),
	HX_CSTRING("normalized"),
	HX_CSTRING("setY"),
	HX_CSTRING("setX"),
	HX_CSTRING("getY"),
	HX_CSTRING("getX"),
	HX_CSTRING("y"),
	HX_CSTRING("x"),
	String(null()) };

static void sMarkStatics(HX_MARK_PARAMS) {
	HX_MARK_MEMBER_NAME(Point2D_obj::__mClass,"__mClass");
};

static void sVisitStatics(HX_VISIT_PARAMS) {
	HX_VISIT_MEMBER_NAME(Point2D_obj::__mClass,"__mClass");
};

Class Point2D_obj::__mClass;

void Point2D_obj::__register()
{
	hx::Static(__mClass) = hx::RegisterClass(HX_CSTRING("retro.pub.Point2D"), hx::TCanCast< Point2D_obj> ,sStaticFields,sMemberFields,
	&__CreateEmpty, &__Create,
	&super::__SGetClass(), 0, sMarkStatics, sVisitStatics);
}

void Point2D_obj::__boot()
{
}

} // end namespace retro
} // end namespace pub
