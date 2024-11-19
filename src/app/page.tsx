import Image from "next/image";
import Navbar from "@/components/Navbar";
import SampleProjects from "@/components/Sampleprojects";
import ReactSliders from "@/components/Reactsliders";
import CardList from "@/components/Cardlist";
import FeedbackSection from "@/components/FeedbackSection";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <SampleProjects/>
      <ReactSliders/>
      <CardList/>
      <FeedbackSection/>
    </div>
  );
}
