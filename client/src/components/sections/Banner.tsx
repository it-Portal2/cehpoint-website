import { StickyBanner } from "../ui/sticky-banner";

export function Banner() {
  return (
    <div className="fixed flex h-10 w-full flex-col overflow-y-auto">
      <StickyBanner className="bg-gradient-to-b from-blue-500 to-blue-600">
        <p className="mx-0 max-w-[90%] text-xs sm:text-base  text-white drop-shadow-md">
          Contact us:{" "}
          <a
            href="mailto:contact@cehpoint.co.in"
            className="transition duration-200 hover:underline"
          >
            contact@cehpoint.co.in
          </a>{" "}
          |{" "}
          <a
            href="tel:+913369029331"
            className="transition duration-200 hover:underline"
          >
            +91 33690 29331
          </a>
        </p>
      </StickyBanner>
    </div>
  );
}
