import { ReactElement } from "react";
import {  Filter, Button } from "../../styles/styles";

export default function FilterParent(): ReactElement {
  return (
    <Filter>
        <Button>All</Button>
        <Button>Completed</Button>
        <Button>Incompleted</Button>
    </Filter>
    );
}
