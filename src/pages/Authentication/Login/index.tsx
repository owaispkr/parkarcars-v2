import AntdThemeProvider from "../../../providers/themeProvider/AntdThemeProvider";
import type { FormProps } from "antd";
import { Button, Checkbox, Form, Input } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";

type FieldType = {
  email?: string;
  password?: string;
};

const Login = () => {
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { signInUser } = useAuth();

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    handleLogin(values);
    console.log("Success:", values);
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  const handleLogin = async (formData: FieldType) => {
    if (formData.email && formData.password) {
      try {
        const result = await signInUser(formData?.email, formData?.password); // Call context function
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
    }
  };

  return (
    <AntdThemeProvider>
      <div className="bg-gray-100 h-screen flex items-center justify-center">
        <div className="h-screen bg-gradient-to-br from-blue-900 to-blue-600 flex justify-center items-center w-full">
          <Form
            name="login"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <div className="bg-white px-10 py-8 rounded-xl w-screen shadow-xl max-w-sm">
              <div className="space-y-4">
                <h1 className="text-center text-2xl font-semibold text-gray-600">
                  Login
                </h1>
                <hr />
                <div className="flex items-center rounded-md mb-4">
                  <Form.Item<FieldType>
                    name="email"
                    style={{ width: "100%" }}
                    rules={[
                      {
                        required: true,
                        message: "Please input your username!",
                      },
                    ]}
                  >
                    <Input
                      size="large"
                      placeholder="Email"
                      prefix={
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
                      }
                    />
                  </Form.Item>
                </div>
                <div className="flex items-center  rounded-md">
                  <Form.Item<FieldType>
                    style={{ width: "100%" }}
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "Please input your password!",
                      },
                    ]}
                  >
                    <Input
                      size="large"
                      type="password"
                      placeholder="Password"
                      prefix={
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
                      }
                    />
                  </Form.Item>
                </div>
              </div>

              <button
                type="submit"
                value="login"
                id="login"
                className="mt-6 w-full shadow-xl bg-gradient-to-tr from-blue-900 to-blue-400 hover:to-blue-700 text-blue-100 py-2 rounded-md text-lg tracking-wide transition duration-1000"
              >
                Login
              </button>
              <hr />
              <div className="flex justify-center items-center mt-4">
                <p className="inline-flex items-center text-gray-700 font-medium text-xs text-center">
                  <span className="ml-2">
                    You don't have an account?
                    <a
                      href="/sign-up"
                      className="text-xs ml-2 text-blue-500 font-semibold"
                    >
                      Register now &rarr;
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
          </Form>
        </div>
      </div>
    </AntdThemeProvider>
  );
};

export default Login;
