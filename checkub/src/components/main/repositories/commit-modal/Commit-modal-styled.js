import styled from "styled-components";

export const DivModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  

  .modal {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 70%;
    height: 70%;
    border: 1px solid black;
    border-radius: 3px;
    background-color: #fff;
    padding: 2rem 3rem;

    overflow: auto;

    h1 {
      font-size: 5rem;
    }

    table {
      width: 100%;
      /* height: 85%; */
      margin-top: 3rem;
      overflow: auto;
      /* display: inline-block; */

      thead {
        font-size: 3rem;
  
        tr {
          th:first-child {
            background-color: skyblue;
            width: 50%;
          }
          th:nth-child(n+2) {
            background-color: pink;
            width: 25%;
          }
        }
      }
  
      tbody {
        font-size: 2rem;

        tr {
          line-height: 2.5;

          td:first-child {
            background-color: tomato;
          }
          td:nth-child(n+2) {
            background-color: teal;
            text-align: center;
          }
        }
      }
    }
  }
`;