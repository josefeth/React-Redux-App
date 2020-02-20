import React from "react";
import { connect } from "react-redux";
import { getJoke } from "../actions";
import styled from "styled-components";
import Img from './chuck-norris-sticker.png';
import gsap from "gsap";



const Chuck = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 50%;
margin: 0 auto;
margin-top: 10%;
border: 1px solid black;
border-radius:20px;
background-color:#ebf1f4;
`;
const JokeDiv = styled.div`
    width: 400px;
    
`
const Joke = styled.p`
  font-size: 20px;
  color: black;
  width: auto;
  
`;
const Header = styled.h1`
  color: black;
`;
const Button = styled.button`
  color: white;
  background-color: black;
  margin-bottom:2%;
  margin-top: 20px;
  border: 1px solid black;
  width: 150px;
  height: 40px;
  font-size: 15px;
  cursor:pointer;
  border-radius:20px;
`;

const JokeCard = state => {
  console.log("JOKE", state.joke);
  
  return (
     <Chuck>
       <img className='logo' src={Img} alt="Chucky baby"/>
      <Header>Chuck Norris</Header>
      {/* <h2>Joke of the day!</h2> */}

        <img src="chuck.jpg" alt="" />

      <JokeDiv>
      <Joke>{state.joke}</Joke>
    </JokeDiv>
      <Button onClick={state.getJoke}>Get Chuck Joke</Button>
    </Chuck>

  );
};

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    joke: state.joke,
    error: state.error
  };
};
export default connect(mapStateToProps, { getJoke })(JokeCard);