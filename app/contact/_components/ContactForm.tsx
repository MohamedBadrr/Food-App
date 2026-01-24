"use client";

import { Button } from "@/components/ui/button";
import { ContactUsValidationSchema } from "@/validations";
import { Form, Formik } from "formik";
import InputField from "@/components/fields/InputField";

const ContactForm = () => {
  const initialValues = {
    email: "",
    name: "",
    subject: "",
    message: "",
  };
  const handleSubmit = (values: {
    email: string;
    name: string;
    subject: string;
    message: string;
  }) => {};
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ContactUsValidationSchema}
      validateOnMount={false}
      validateOnBlur={true}
    >
      {({ isValid }) => (
        <Form className="w-full items-center justify-center flex ">
          <div className="flex gap-7 items-center p-10 rounded-lg bg-white border border-neutral-200 justify-center max-w-179.25 w-full flex-col">
            <div className="flex gap-6 w-full item-center ">
              <InputField
                label="Name"
                name="name"
                placeholder="Enter your name"
              />
              <InputField
                label="Email"
                name="email"
                placeholder="Enter your email"
              />
            </div>
            <InputField
              label="Subject"
              name="subject"
              placeholder="Write a subject"
            />

            <InputField
              label="Message"
              name="message"
              placeholder="Write your message"
              type="textarea"
            />
            <Button
              type="submit"
              disabled={!isValid}
              className="w-full"
              variant={"default"}
            >
              Send
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
