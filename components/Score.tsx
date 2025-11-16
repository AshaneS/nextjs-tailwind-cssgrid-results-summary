"use client";
import Image from "next/image";

interface ScoreItem {
  category: "Reaction" | "Memory" | "Verbal" | "Visual";
  score: string;
  icon: string;
}

interface ScoreProp {
  item: ScoreItem;
}

export default function Score({ item }: ScoreProp) {
  return (
    <>
      <div className="justify-self-start text-xl sm:text-lg">
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
      <div className="font- justify-self-end text-xl sm:text-lg">
        <span className="text-Neutral-dark-gray-blue">{item.score}</span>{" "}
        <span className="text-Neutral-dark-gray-blue/50">/ 100</span>
      </div>
    </>
  );
}
