import Banner from "@/components/Banner";
import PopularCourses from "@/components/PopularCourses";
import TrendingCourses from "@/components/TrendingCourses";
import Image from "next/image";

export default function Home() {
  return (
   <div>
  <Banner></Banner>
  <PopularCourses></PopularCourses>
  <TrendingCourses></TrendingCourses>
   </div>
  );
}
