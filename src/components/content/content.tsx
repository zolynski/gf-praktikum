import React from "react";
import './content.css';

/**
 * Wrapper for content. Provides padding and base layout.
 */
export const Content: React.FunctionComponent<React.PropsWithChildren> = props => {
  return (
    <div className="Content">
      {props.children}
    </div>
  )
};
