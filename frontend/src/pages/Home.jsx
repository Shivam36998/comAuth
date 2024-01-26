import React from 'react'
import styled from "styled-components"

const HomeDiv = styled.div`
    width: 70vw;
    margin: 2rem auto;
    font-size: 1.5rem;
    text-align: justify;
    position: relative;
    div{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        button{
            position: absolute;
            background-color: #0037fff7;
            width: 300px;
            height: 70px;
            top: 50vh;
            border: 0;
            color: white;
            border-radius: 5px;
            font-size: 2rem;
            cursor: pointer;
        }
    }
`

const Home = () => {
  return (
    <HomeDiv>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
      rerum ducimus porro delectus, a consectetur magnam eos quo fugit dolores
      aut quasi sed commodi hic minus labore odio dolorum in! Inventore
      voluptates hic, dolor eligendi odit recusandae reprehenderit enim
      perspiciatis non fuga delectus maxime distinctio saepe quaerat similique
      voluptas veniam doloribus. Facere, magnam tenetur excepturi perspiciatis
      doloremque voluptate rem at voluptatem, laborum inventore consequuntur
      reiciendis veniam quos temporibus quo. Saepe quidem atque sed quas dolor
      beatae, doloremque sunt consectetur voluptatibus perspiciatis aliquid
      aspernatur voluptatum voluptates quaerat maxime, repudiandae aut, at
      cumque. Minima sequi, modi nesciunt repudiandae perferendis distinctio
      aliquid at?
      <div>
        <button>
          Sign In {" "}
        </button>
      </div>
    </HomeDiv>
  );
}

export default Home