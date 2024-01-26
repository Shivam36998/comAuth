import React from 'react'
import styled from "styled-components"

const Navbar = styled.div`
    background-color: #3a3a3a;
    height: 100px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 1.5rem;
    div{
        display: flex;
        ul{
            display: flex;
            align-items: center;
            gap: 4rem;
            li{
                list-style-type: none;
                a{
                    text-decoration: none;
                    color: white;
                }
            }
        }
    }
`

const NavbarBeforeLogin = () => {
  return (
    <Navbar>
        <div>comAuth</div>
        <div>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Sign IN</a></li>
            </ul>
        </div>
    </Navbar>
  )
}

export default NavbarBeforeLogin
