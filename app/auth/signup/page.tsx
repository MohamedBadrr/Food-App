"use client";

import { Formik, Form } from "formik";
import * as Yup from "yup";

import { Button, buttonVariants } from "@/components/ui/button";
import InputField from "@/components/fields/InputField";
import Image from "next/image";
import Link from "next/link";
import GoogleButtonSignup from "./_components/GoogleButtonSignup";

const SignUpSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email().required("Email is required"),
  password: Yup.string()
    .min(8, "at least 8 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm Password is required"),
});

const SignUp = () => {
  return (
    <div className="min-h-screen pt-20 flex items-center justify-center ">
      <main className="w-full px-4">
        <div className="mx-auto w-full max-w-md bg-white rounded-xl shadow-lg p-6 mt-5 mb-10">
          <div className="text-2xl flex items-center justify-center gap-2 font-semibold text-center text-black ">
            <Image
              alt="logo image"
              src={"/logo.svg"}
              width={100}
              height={100}
              className="w-10.75! h-10.75! text-primary md:w-13.75! md:h-13.75!"
            />
            <p className="mt-2 italic font-playfair">Bistro Bliss</p>
          </div>

          <div className="mt-6">
            <Formik
              initialValues={{
                name: "",
                email: "",
                password: "",
                confirmPassword: "",
              }}
              validationSchema={SignUpSchema}
              onSubmit={(values, { setSubmitting }) => {
                console.log("Submitting:", values);
                setTimeout(() => {
                  setSubmitting(false);
                }, 2000);
              }}
            >
              {({ isSubmitting, isValid }) => (
                <Form className="space-y-4">
                  <InputField
                    label="Name"
                    name="name"
                    type="input"
                    placeholder="Enter your name"
                    labelClassName="text-[16px] font-semibold"
                  />

                  <InputField
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    labelClassName="text-[16px] font-semibold"
                  />

                  <InputField
                    label="Password"
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                    labelClassName="text-[16px] font-semibold"
                  />

                  <InputField
                    label="Confirm Password"
                    name="confirmPassword"
                    type="password"
                    placeholder="Confirm your password"
                    labelClassName="text-[16px] font-semibold"
                  />

                  <Button
                    type="submit"
                    className="w-full"
                    disabled={isSubmitting || !isValid}
                  >
                    {isSubmitting ? "Signing up..." : "Sign up"}
                  </Button>

                  <div className="relative py-2">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-200" />
                    </div>
                    <div className="relative flex justify-center">
                      <span className="bg-white px-2 text-xs text-gray-500">
                        OR
                      </span>
                    </div>
                  </div>

                  <GoogleButtonSignup />
                </Form>
              )}
            </Formik>
            <p className="mt-2 flex items-center justify-center text-sm text-black">
              <span>Already have an account?</span>
              <Link
                href="/auth/login"
                className={buttonVariants({ variant: "link", size: "sm" })}
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SignUp;
