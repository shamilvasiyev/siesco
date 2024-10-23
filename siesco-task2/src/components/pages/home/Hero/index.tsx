import { Link, useLocation } from "react-router-dom";
import Button from "../../../UI/Button";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const Hero = () => {
  const { pages } = useSelector((state) => state);
  const { pathname } = useLocation();
  const [actions, setActions] = useState([]);
  useEffect(() => {
    const _actions = pages.find(
      ({ name }: { name: string; pages: string[] }) =>
        name === pathname.slice(1)
    );
    setActions(_actions);
  }, [pages, pathname]);

  console.log(actions);

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
          <Link
            to={"/"}
            className="inline-flex items-center justify-center border col-start-auto px-5 py-3 mr-3 text-base font-medium text-center text-white hover:bg-white hover:text-slate-700 bg-slate-700 rounded-lg bg-primary-700 hover:white focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            Get started
          </Link>

          <Link
            to={"/"}
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            Speak to Sales
          </Link>
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
