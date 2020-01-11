import * as React from "react";

interface Props {
  /**
   * Size of the button
   */
  size?: 'regular' | 'large'
  /**
   * Callback to the click event
   */
  onClick?: () => void | undefined
}

const MyComponent: React.FC<Props> = ({ size = 'regular', onClick }) => {
  const sizesStyle = {
    regular: "8px 12px",
    large: "12px 16px"
  };

  return (
    <button
      onClick={onClick}
      style={{
        border: "none",
        background: "hotpink",
        borderRadius: "4px",
        color: "white",
        padding: sizesStyle[size],
      }}
    >
      Hello World
    </button>
  );
};

export default MyComponent;
