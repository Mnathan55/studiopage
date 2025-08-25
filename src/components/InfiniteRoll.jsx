import BulletSpinner from "./BulletSpinner";

const services = [
  "BLOCKCHAIN DEVELOPMENT",
  "AI DEVELOPMENT SERVICES",
  "GAME DEVELOPMENT",
  "CRYPTO EXCHANGE DEVELOPMENT",
  "WEB3 DEVELOPMENT",
  "WEB DESIGN AND DEVELOPMENT",
  "IOS & ANDROID APP DEVELOPMENT",
];

function RollerRow() {
  return (
    <div className="flex items-center whitespace-nowrap mt-[5vh] md:mt-[25vh]">
      {services.map((service, i) => (
        <div key={i} className="flex items-center">
          <h2 className="text-black inline-block font-bold uppercase tracking-tight text-[clamp(1.5rem,8vw,4.5rem)] leading-none">
            {service}
          </h2>
          <BulletSpinner circleColor="bg-orange-600" />
        </div>
      ))}
    </div>
  );
}

export default function InfiniteRoll() {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Track: two identical halves for seamless loop */}
      <div className="animate-marquee-x inline-flex">
        <RollerRow />
        <RollerRow aria-hidden="true" />
      </div>
    </div>
  );
}
