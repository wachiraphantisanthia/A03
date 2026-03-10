import Image from "next/image";

export default function VenueCard() {
  return (
    <div
      style={{
        width: "250px",
        borderRadius: "10px",
        overflow: "hidden",
        background: "white",
        boxShadow: "0 4px 10px rgba(0,0,0,0.2)"
      }}
    >
      <Image
        src="/venue.png"
        alt="venue"
        width={250}
        height={150}
      />

      <div style={{ padding: "10px" }}>
        <h3 style={{ color: "#2c6ed5" }}>The Bloom Pavilion</h3>

        <p style={{ fontSize: "12px", color: "#555" }}>
          A stunning bouquet where love blossoms and unforgettable memories are made.
        </p>
      </div>
    </div>
  );
}