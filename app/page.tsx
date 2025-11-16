"use client";
import Score from "@/components/Score";
import data from "@/public/assets/data.json";
// grid-cols-[minmax(150px,250px)_10px_minmax(150px,250px)]
export default function Home() {
  return (
    <div className="bg-Neutral-pale-blue flex min-h-screen items-center justify-center">
      <div className="grid h-screen w-full grid-cols-1 grid-rows-[1fr_10px_1.3fr] justify-center sm:h-[50vh] sm:grid-cols-[minmax(250px,300px)_12px_minmax(250px,300px)] sm:grid-rows-1 md:grid-cols-[minmax(150px,325px)_14px_minmax(150px,325px)] lg:grid-cols-[350px_15px_350px]">
        {/* card-left */}

        <div className="from-Gradient-light-slate-blue-background to-Gradient-Light-royal-blue-background box-left sm: z-10 col-start-1 col-end-2 row-start-1 row-end-3 flex flex-1 flex-col items-center justify-between rounded-3xl rounded-b-3xl bg-linear-to-b p-4 sm:col-start-1 sm:col-end-3 sm:row-start-1 sm:row-end-2 gap-3">
          <div className="text-Neutral-pale-blue/75 text-2xl font-medium sm:text-xl sm:mt-10">
            <h1>Your Result</h1>
          </div>
          {/* bog score */}
          <div className="from-Gradient-Light-royal-blue-background flex h-[35vw] min-h-36 w-[35vw] min-w-36 flex-col items-center justify-center rounded-full bg-linear-to-b sm:h-42 sm:w-42">
            <h1 className="text-Neutral-white text-[66px] font-bold sm:text-[62px]">
              76
            </h1>
            <span className="text-Neutral-pale-blue/45 text-sm font-bold">
              of 100
            </span>
          </div>
          {/* great */}
          <div>
            <h1 className="text-Neutral-white text-2xl font-semibold sm:text-3xl">
              Great
            </h1>
          </div>
          <div>
            <p className="text-Neutral-pale-blue/75 hidden pb-4 text-center text-sm sm:block sm:text-base">
              You scored higher than 65% of <br />
              the people who have taken <br />
              these tests.
            </p>

            <p className="text-Neutral-pale-blue/75 pb-4 text-center text-lg sm:hidden sm:text-base">
              You scored higher than 65% of the <br /> people who have taken
              these tests.
            </p>
          </div>
        </div>

        {/* Card-Right */}
        <div className="bg-Neutral-white box-right col-start-1 col-end-2 row-start-2 row-end-4 flex flex-col justify-between gap-2 px-4 pt-5 pb-4 sm:col-start-2 sm:col-end-4 sm:row-start-1 sm:row-end-2 sm:justify-center sm:gap-8 sm:rounded-r-3xl sm:pr-5 sm:pl-10">
          <div className="text-Neutral-dark-gray-blue p-3 text-xl font-bold sm:text-xl">
            <h1>Summary</h1>
          </div>
          {data.map((item, i) => (
            <div
              key={i}
              className={`grid grid-cols-2 rounded-xl p-3 sm:p-2 ${
                item.category === "Reaction" &&
                "bg-Primary-light-red/8 text-Primary-light-red"
              } ${
                item.category === "Memory" &&
                "bg-Primary-orangey-yellow/8 text-Primary-orangey-yellow"
              } ${
                item.category === "Verbal" &&
                "bg-Primary-green-teal/8 text-Primary-green-teal"
              } ${
                item.category === "Visual" &&
                "bg-Primary-cobalt-blue/8 text-Primary-cobalt-blue"
              }`}
            >
              <Score item={item} />
            </div>
          ))}

          <div>
            <button className="bg-Neutral-dark-gray-blue text-Neutral-white w-full rounded-full px-3 py-4 sm:py-3 text-lg font-medium sm:text-lg sm:font-bold">
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
