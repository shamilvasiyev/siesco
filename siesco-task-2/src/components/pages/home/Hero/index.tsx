import { useLocation } from "react-router-dom";
import Button from "../../../UI/Button";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { RootState } from "../../../../interfaces";

const Hero = () => {
  const { pages } = useSelector((state: RootState) => state);
  const { pathname } = useLocation();
  const [actions, setActions] = useState<string[] | null>(null);
  useEffect(() => {
    const _actions = pages.find(
      ({ name }) => name === pathname.slice(1)
    )?.actions;

    if (_actions) setActions(_actions);
  }, [pages, pathname]);

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            Payments tool for software companies
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            From checkout to global sales tax compliance, companies around the
            world use Flowbite to simplify their payment stack.
          </p>

          <div className="flex gap-2">
            {actions && actions.map((action) => <Button action={action} />)}
          </div>
        </div>

        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png"
            alt="mockup"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
