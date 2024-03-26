import { ReactElement } from "react";
import checkIcon from "../../assets/images/check-circle.svg";
import { TaskContainer, TaskParagrah } from "../../styles/styles";
import Image from 'next/image';


export default function Task(): ReactElement {
    return (
        <TaskContainer>
            <Image src={checkIcon} alt="check-circle" />
            <TaskParagrah>Task1</TaskParagrah>
        </TaskContainer>
    );
}
