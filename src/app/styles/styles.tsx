"use client";
import styled from "styled-components";

export const ControlArea = styled.div`
position: fixed;
display: flex;
justify-content: center;
align-items: center;
top: 0;
left: 0;
width: 100%;
height: 250px;
gap: 20px;
`

export const Input = styled.input`
width: 60%;
height: 50px;
background: none;
padding: 5px 20px;
border-radius: 8px;
border: 1px solid #D0D5DD;
color: black;
font-size: 16px;
`
export const CreateButton = styled.button`
  width: 20%;
  height: 50px;
  background-color:#12B76A;
  outline: none;
  border: 1px solid #12B76A;
  border-radius: 8px;
  color: white;
  font-size: 16px;
`