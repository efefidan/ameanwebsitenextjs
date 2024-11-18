import Image from "next/image";
import Navbar from "@/components/Navbar";
import SampleProjects from "@/components/Sampleprojects";
import ReactSliders from "@/components/Reactsliders";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <SampleProjects/>
      <ReactSliders/>
    </div>
  );
}
