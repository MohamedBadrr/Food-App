"use client";
import InputField from "@/components/fields/InputField";
import { Button } from "@/components/ui/button";
import { useCustomMutation } from "@/hooks/useCustomMutation";
import { updateMyProfile } from "@/services/user/updateMyProfile";
import { UpdateProfileSchema } from "@/validations";
import { Form, Formik } from "formik";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { UserProfile } from "../../services/user/getMe";
const UpdateProfile = ({
  profile,
  selectedFile,
}: {
  profile: UserProfile;
  selectedFile: File | null;
}) => {
  const router = useRouter();
  const initialValues = {
    id: profile.id,
    name: profile.name ?? "",
    email: profile.email ?? "",
    phone: profile.phone ?? "",
    street_address: profile.street_address ?? "",
    image: profile.image ?? "",
    country: profile.country ?? "",
    city: profile.city ?? "",
  };
  const { mutate, isPending } = useCustomMutation({
    mutationFn: updateMyProfile,
    onError: (error) => {
      toast.error(
        error instanceof Error
          ? error.message
          : "Something went wrong, please try again"
      );
    },
    onSuccess: async () => {
      toast.success("Saved successfully");
      router.refresh();
    },
  });
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={UpdateProfileSchema}
      enableReinitialize
      onSubmit={(values) => {
        mutate({ ...values, file: selectedFile ?? null });
      }}
    >
      {({ isValid }) => (
        <Form className="space-y-5">
          <InputField
            label="Name"
            name="name"
            placeholder="Update your name"
            className="mb-0"
            labelClassName="mb-1!"
            type="input"
          />
          <InputField
            label="Email"
            name="email"
            placeholder="Update your email"
            className="mb-0 cursor-not-allowed!"
            labelClassName="mb-1!"
            type="email"
            disabled={true}
          />
          <InputField
            label="Phone Number"
            name={"phone"}
            placeholder="Update your phone number"
            className="mb-0"
            labelClassName="mb-1!"
            type="input"
          />
          <InputField
            label="Address"
            name={"street_address"}
            placeholder="Update your address"
            className="mb-0"
            labelClassName="mb-1!"
            type="input"
          />
          <InputField
            label="Country"
            name={"country"}
            placeholder="Update your country"
            className="mb-0"
            labelClassName="mb-1!"
            type="input"
          />
          <InputField
            label="City"
            name={"city"}
            placeholder="Update your city"
            className="mb-0"
            labelClassName="mb-1!"
            type="input"
          />
          <Button
            isLoading={isPending}
            disabled={!isValid}
            type="submit"
            className="w-full!"
          >
            Save
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default UpdateProfile;
