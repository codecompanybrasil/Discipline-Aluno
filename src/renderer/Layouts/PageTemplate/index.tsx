import React from "react";
import Header from "../Header";

import styles from "./layout.module.css";

const PageTemplate = ({ children }: React.PropsWithChildren) => (
  <div className={["container", styles.layout_container].join(" ")}>{children}</div>
);

PageTemplate.Header = (props: any) => <Header title={props.title} />;

PageTemplate.Panel = (props: any) => {
  const colSizes = "col-12 col-lg-10 offset-lg-1 col-xxl-8 offset-xxl-2";

  return (
    <div className="row">
      <div className={[styles.panel, colSizes].join(" ")}>
        <div className={styles.panel_inner}>{props.children}</div>
      </div>
    </div>
  );
};

PageTemplate.Footer = (props: any) => {
  return (
    <footer className="row align-items-center">
      <div className="d-flex col-12 justify-content-center">{props.children}</div>
    </footer>
  );
};

export default PageTemplate;
