import Image from "next/image";

export default function Banner() {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "350px"
      }}
    >
      <Image
        src="/banner.png"
        alt="banner"
        fill
        style={{ objectFit: "cover" }}
      />

      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "white",
          textAlign: "center"
        }}
      >
        <h1 style={{ fontSize: "40px" }}>
          where every event finds its venue
        </h1>

        <p>
          Finding the perfect venue has never been easier. Whether it's a wedding , corporate event, or private party, we connecting people to the perfect place.
        </p>
      </div>
    </div>
  );
}