import { ReactElement } from "react";
import { ControlArea, CreateButton, Input } from "../../styles/styles";

export default function Controls(): ReactElement {
  return (
    <ControlArea>
      <Input type='text' placeholder="Write your task here..." />
      <CreateButton>Create</CreateButton>
    </ControlArea>);
}
