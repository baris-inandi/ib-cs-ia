import styled from "@emotion/styled";

// TODO: not working
// TODO: implement dark mode scrollbars here
export default styled.div(() => ({
  "::-webkit-scrollbar": {
    width: "10px",
  },

  "::-webkit-scrollbar-track": {
    background: "transparent",
    borderLeft: "1px solid #ced4da",
    borderRight: "1px solid #ced4da",
  },

  "::-webkit-scrollbar-thumb": {
    background: "#ced4da",
    borderRadius: "999px",
  },
}));
