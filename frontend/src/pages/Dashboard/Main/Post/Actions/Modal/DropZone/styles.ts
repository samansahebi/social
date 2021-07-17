import styled from 'styled-components';

export const thumbsContainer = styled.div`
display: "flex",
flexDirection: "row",
flexWrap: "wrap",
marginTop: 16,
padding: 20
`;

export const thumb = styled.div`
position: "relative",
display: "inline-flex",
borderRadius: 2,
border: "1px solid #eaeaea",
marginBottom: 8,
marginRight: 8,
width: 100,
height: 100,
padding: 4,
boxSizing: "border-box"
`;

export const thumbInner = styled.div`
display: "flex",
minWidth: 0,
overflow: "hidden"
`;

export const img = styled.img`
display: "block",
width: "auto",
height: "100%"
`;
export const thumbButton = styled.button`
position: "absolute",
right: 10,
bottom: 10,
background: "rgba(0,0,0,.8)",
color: "#fff",
border: 0,
borderRadius: ".325em",
cursor: "pointer"
`;

const getColor = (props) => {
  if (props.isDragAccept) {
      return '#00e676';
  }
  if (props.isDragReject) {
      return '#ff1744';
  }
  if (props.isDragActive) {
      return '#2196f3';
  }
  return '#eeeeee';
}

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin: 20px;
  border-width: 2px;
  border-radius: 2px;
  border-color: ${props => getColor(props)};
  border-style: dashed;
  background-color: #fafafa;
  color: #bdbdbd;
  outline: none;
  transition: border .24s ease-in-out;
`;

export const Input = styled.input`
`;
export const Text = styled.p`
`;

