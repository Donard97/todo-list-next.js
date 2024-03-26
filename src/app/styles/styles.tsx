"use client";
import styled from "styled-components";

export const ControlArea = styled.div`
position: fixed;
display: flex;
align-items: center;
top: 0;
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
font-family: 'Montserrat';
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
  font-family: 'Montserrat';
`

export const TasksSection = styled.div `
width: 100%;
position: fixed;
height: calc(100% - 250px);
bottom: 0;
`

export const Filter = styled.div `
width: 100%;
display: flex;
gap: 10px;
`

export const Button = styled.button `
width: 140px;
height: 45px;
background-color: transparent;
border: 1px solid #D0D5DD;
border-radius: 8px;
font-weight: 500;
font-size: 16px;
color: #344054;
box-shadow: 0px 1px 2px 0px #1018280D;
cursor: pointer;
font-family: 'Montserrat';
`