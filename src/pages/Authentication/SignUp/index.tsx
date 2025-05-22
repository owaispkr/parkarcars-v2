import { useState } from "react";
import { useAuth } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { signUpNewUser } = useAuth();

  const handleSignUp = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await signUpNewUser(name, email, password); // Call context function
      if (result.success) {
        navigate("/dashboard"); // Navigate to dashboard on success
      } else {
        setError(result.error.message); // Show error message on failure
      }
    } catch (err) {
      setError("An unexpected error occurred."); // Catch unexpected errors
    } finally {
      setLoading(false); // End loading state
    }
  };

  console.log(error);
  console.log(loading);
  return (
    <>
      <div className="bg-gray-100 h-screen flex items-center justify-center">
        <div className="h-screen bg-gradient-to-br from-blue-900 to-blue-600 flex justify-center items-center w-full">
          <form method="POST" action="#">
            <div className="bg-white px-10 py-8 rounded-xl w-screen shadow-xl max-w-sm">
              <div className="space-y-4">
                <h1 className="text-center text-2xl font-semibold text-gray-600">
                  Sign up
                </h1>
                <hr />
                <div className="flex items-center border-2 py-2 px-3 rounded-md mb-4">
                  <svg
                    fill="#9ca3af"
                    height="16px"
                    className="h-5 w-5 text-gray-400"
                    width="16px"
                    version="1.1"
                    id="Capa_1"
                    viewBox="0 0 497.417 497.417"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <g>
                        <path d="M387.205,0H110.213C82.982,0,60.83,22.148,60.83,49.384v398.649c0,27.235,22.152,49.384,49.384,49.384h276.991 c27.225,0,49.383-22.148,49.383-49.384V49.384C436.587,22.148,414.429,0,387.205,0z M402.312,448.033 c0,8.329-6.785,15.106-15.107,15.106H110.213c-8.328,0-15.103-6.777-15.103-15.106V49.384c0-8.329,6.774-15.107,15.103-15.107 h276.991c8.322,0,15.107,6.778,15.107,15.107V448.033z"></path>{" "}
                        <path d="M175.877,146.138h111.403c9.457,0,17.129-7.671,17.129-17.14c0-9.469-7.672-17.141-17.129-17.141H175.877 c-9.461,0-17.14,7.672-17.14,17.141C158.738,138.466,166.416,146.138,175.877,146.138z"></path>{" "}
                        <path d="M321.55,197.548H175.877c-9.461,0-17.14,7.679-17.14,17.137c0,9.462,7.679,17.141,17.14,17.141H321.55 c9.469,0,17.147-7.679,17.147-17.141C338.697,205.227,331.019,197.548,321.55,197.548z"></path>{" "}
                        <path d="M321.55,283.245H175.877c-9.461,0-17.14,7.662-17.14,17.13c0,9.469,7.679,17.147,17.14,17.147H321.55 c9.469,0,17.147-7.679,17.147-17.147C338.697,290.907,331.019,283.245,321.55,283.245z"></path>{" "}
                        <path d="M321.55,368.933H175.877c-9.461,0-17.14,7.671-17.14,17.141c0,9.469,7.679,17.129,17.14,17.129H321.55 c9.469,0,17.147-7.66,17.147-17.129C338.697,376.603,331.019,368.933,321.55,368.933z"></path>{" "}
                      </g>
                    </g>
                  </svg>
                  <input
                    className="pl-2 outline-none border-none w-full"
                    type="name"
                    name="name"
                    placeholder="Full name"
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="flex items-center border-2 py-2 px-3 rounded-md mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                  </svg>
                  <input
                    className="pl-2 outline-none border-none w-full"
                    type="email"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                  />
                </div>
                <div className="flex items-center border-2 py-2 px-3 rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <input
                    className="pl-2 outline-none border-none w-full"
                    type="password"
                    name="password"
                    id="password"
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                  />
                </div>
                <div className="flex items-center border-2 py-2 px-3 rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <input
                    className="pl-2 outline-none border-none w-full"
                    type="password"
                    name="password"
                    id=""
                    placeholder="Confirm password"
                    required
                  />
                </div>
              </div>

              <button
                type="button"
                id="login"
                className="mt-6 w-full shadow-xl bg-gradient-to-tr from-blue-900 to-blue-400 hover:to-blue-700 text-blue-100 py-2 rounded-md text-lg tracking-wide transition duration-1000"
                onClick={handleSignUp}
              >
                Register
              </button>
              <hr />
              <div className="flex justify-center items-center mt-4">
                <p className="inline-flex items-center text-gray-700 font-medium text-xs text-center">
                  <span className="ml-2">
                    Already have an account?
                    <a
                      href="/login"
                      className="text-xs ml-2 text-blue-500 font-semibold"
                    >
                      Login &rarr;
                    </a>
                  </span>
                </p>
              </div>
            </div>
            <div className="pt-6 text-base font-semibold leading-7">
              <p className="font-sans text-white text-md">
                <a href="/" className="absolute">
                  &larr; Home
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
      ;
    </>
  );
};

export default SignUp;
