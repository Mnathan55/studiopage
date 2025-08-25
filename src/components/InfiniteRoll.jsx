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
    <div className="flex items-center whitespace-nowrap">
      {services.map((service, i) => (
        <div key={i} className="flex items-center mr-8">
          <h2 className="text-black font-bold uppercase tracking-tight text-[clamp(1.5rem,8vw,4.5rem)] leading-none">
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
    <div className="relative w-full py-10 flex justify-center items-center overflow-hidden">
      {/* Track: two identical halves for seamless loop */}
      <div className="inline-flex animate-marquee-x">
        <RollerRow />
        <RollerRow aria-hidden="true" />
      </div>
    </div>
  );
}
