import Banner from "@/components/Banner";
import VenueCard from "@/components/Card";

export default function Home() {
  return (
    <main>
      <Banner />

      <div style={{ padding: "50px" }}>
        <VenueCard />
      </div>
    </main>
  );
}