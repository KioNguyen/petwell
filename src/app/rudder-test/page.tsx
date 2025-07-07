"use client";

import { useEffect } from "react";
import useRudderStackAnalytics from "@/hooks/useRudderAnalytics";

export default function RudderTest() {
  const analytics = useRudderStackAnalytics();

  const page = () => {
    console.log("🚀 ~ page ~ analytics:", analytics);
    analytics?.page("Cart Viewed");
  };

  useEffect(() => {
    if (analytics) {
      analytics.page("Auto track");
    }
  }, [analytics]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <button
          onClick={page}
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>Page </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Clicking this tile will trigger a page event.
          </p>
        </button>
      </div>
    </main>
  );
}
