import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <section className="flex justify-center items-center h-screen">
      <SignUp
        appearance={{
          layout: {
            logoPlacement: "none",
            socialButtonsVariant: "iconButton",
            socialButtonsPlacement: "bottom",
          },
        }}
      />
    </section>
  );
}
