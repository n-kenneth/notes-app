import styled from "styled-components";

const PopupContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  z-index: 99;
  max-width: 824px;
  width: 100%;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 4px;
  display: ${(props) => (props.show ? "block" : "none")};
`;

const PopupBody = styled.div`
  padding: 10px 30px 30px;
`;

const Title = styled.h3`
  font-size: 24px;
  font-weight: 500;
  color: #00000099;
  padding: 10px 30px;
  border-bottom: 1px solid #00000099;
`;

const Backdrop = styled.div`
  position: absolute;
  display: block;
  background: #00000099;
  opacity: 0.5;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  display: ${(props) => (props.show ? "block" : "none")};
`;

const Popup = ({ children, title, show }) => {
  return (
    <>
      <PopupContainer show={show}>
        <Title>{title}</Title>
        <PopupBody>{children}</PopupBody>
      </PopupContainer>
      <Backdrop show={show} />
    </>
  );
};

export default Popup;
