import Image from "next/image";
import SampleProjects from "@/components/Sampleprojects";
import ReactSliders from "@/components/Reactsliders";
import CardList from "@/components/Cardlist";
import FeedbackSection from "@/components/FeedbackSection";
import ProcessSection from "@/components/ProcessSection";
import TeamSection from "@/components/TeamSection";
import SoftwareServices from "@/components/SoftwareServices";
import UpcomingEvents from "@/components/UpcomingEvents";
import BlogSection from "@/components/BlogSection";

export default function Home() {
  return (
    <div>
      <SampleProjects/>
      <ReactSliders/>
      <CardList/>
      <FeedbackSection/>
      <ProcessSection/>
      <TeamSection/>
      <SoftwareServices/>
      <UpcomingEvents/>
      <BlogSection/>
    </div>
  );
}
