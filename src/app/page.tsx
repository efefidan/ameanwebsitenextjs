import Image from "next/image";
import Navbar from "@/components/Navbar";
import SampleProjects from "@/components/Sampleprojects";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <SampleProjects/>
    </div>
  );
}
