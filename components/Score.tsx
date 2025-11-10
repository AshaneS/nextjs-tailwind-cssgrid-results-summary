import Image from "next/image";

export default function Score({ item }) {
  // data.map((item, i) => {
  //   console.log(item.category, i);
  // });
  return (
    <>
      <div className="justify-self-start text-xl sm:text-base">
        <div className="grid grid-cols-[auto_auto] items-center justify-start gap-3">
          <div className="relative h-[18px] w-[18px]">
            <Image
              src={`${item.icon}`}
              alt="reaction-icon"
              fill={true}
              className="object-cover"
            ></Image>
          </div>
          <div className="font-bold">{item.category}</div>
        </div>
      </div>
      <div className="justify-self-end text-xl font-bold">
        <span className="text-Neutral-dark-gray-blue">{item.score}</span>{" "}
        <span className="text-Neutral-dark-gray-blue/50">/ 100</span>
      </div>
    </>
  );
}
