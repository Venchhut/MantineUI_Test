import { Stepper } from "@mantine/core";

const StepperTest = () => {
  return (
    <Stepper active={1} color="gray" size="md">
      <Stepper.Step label="First step" description="Create an account" />
      <Working />
      <Stepper.Step label="Second step" description="Verify email" />
      <Working />
      <Stepper.Step label="Final step" description="Got it!" />
    </Stepper>
  );
};
function Working() {
  return <div>it can continue</div>;
}

export default StepperTest;
