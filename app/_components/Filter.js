"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

const filters = [
  { text: "All cabins", value: "all" },
  { text: "1-3 guests", value: "small" },
  { text: "4-7 guests", value: "medium" },
  { text: "8-12 guests", value: "large" }
];

export default function Filter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const activeFilter = searchParams.get("capacity") ?? "all";

  function handleFilter(filter) {
    const params = new URLSearchParams(searchParams);
    params.set("capacity", filter);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  return (
    <div className="border border-primary-800 flex">
      {filters.map(({ text, value }) => (
        <Button
          key={value}
          filter={value}
          handleFilter={handleFilter}
          activeFilter={activeFilter}
        >
          {text}
        </Button>
      ))}
    </div>
  );
}

function Button({ filter, handleFilter, activeFilter, children }) {
  return (
    <button
      className={`px-5 py-2 hover:bg-primary-700 ${activeFilter === filter ? "bg-primary-700" : ""}`}
      onClick={() => handleFilter(filter)}
    >
      {children}
    </button>
  );
}
