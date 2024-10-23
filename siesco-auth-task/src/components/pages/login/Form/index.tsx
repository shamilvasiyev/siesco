import { ChangeEvent, FormEvent, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { setCookieHandler } from "../../../../helpers/cookieActions";
import { token } from "../../../../helpers/token";

const loginInitialValue = {
  email: "",
  password: "",
};

const Form = () => {
  const [login, setLogin] = useState(loginInitialValue);
  const navigate = useNavigate();

  const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLogin((prev) => ({ ...prev, [name]: value }));
  };

  const formSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!login.email || !login.password) {
      return toast.error("Email and password are mandatory fields.");
    }

    fetch(
      `http://localhost:5000/users?email=${login.email}&password=${login.password}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.length) {
          return toast.error(
            "Invalid credentials. Please check and try again."
          );
        }

        setCookieHandler("token", token);

        toast.success("You have logged in successfully.");

        setTimeout(() => {
          navigate("/");
        }, 1500);
      });
  };

  return (
    <form action="#" className="mt-8" onSubmit={formSubmitHandler}>
      <div className="my-4">
        <label
          htmlFor="Email"
          className="block text-sm font-medium text-gray-700"
        >
          Email
        </label>

        <input
          onChange={inputChangeHandler}
          type="email"
          id="Email"
          name="email"
          className="p-2 border mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
        />
      </div>

      <div className="my-4">
        <label
          htmlFor="Password"
          className="block text-sm font-medium text-gray-700"
        >
          Password
        </label>

        <input
          onChange={inputChangeHandler}
          type="password"
          id="Password"
          name="password"
          className="p-2 border mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
        />
      </div>

      <div className="my-4">
        <label htmlFor="MarketingAccept" className="flex gap-4">
          <input
            type="checkbox"
            id="MarketingAccept"
            name="marketing_accept"
            className="size-5 rounded-md border-gray-200 bg-white shadow-sm"
          />

          <span className="text-sm text-gray-700">
            I want to receive emails about events, product updates and company
            announcements.
          </span>
        </label>
      </div>

      <div className="my-4">
        <p className="text-sm text-gray-500">
          By creating an account, you agree to our
          <a href="#" className="text-gray-700 underline">
            terms and conditions
          </a>
          and
          <a href="#" className="text-gray-700 underline">
            privacy policy
          </a>
          .
        </p>
      </div>

      <div className="my-4 sm:flex sm:items-center sm:gap-4">
        <button className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500">
          Login
        </button>
      </div>
    </form>
  );
};

export default Form;
