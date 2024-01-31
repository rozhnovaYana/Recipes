import { Input } from "@nextui-org/react";

interface IInput {
  label: string;
  isInvalid: boolean;
  errorMessage?: string;
  name: string;
}
export default function FormInput({
  label,
  isInvalid,
  errorMessage,
  name,
}: IInput) {
  return (
    <div className="mt-10 bg-transparent">
      <Input
        variant="bordered"
        label={label}
        labelPlacement="outside"
        isInvalid={isInvalid}
        type={name}
        id={name}
        name={name}
        isRequired
        errorMessage={errorMessage}
        color={isInvalid ? "danger" : "default"}
      />
    </div>
  );
}
