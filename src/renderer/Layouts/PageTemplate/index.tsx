import React from "react";
import Header from "../Header";
import styles from "./layout.module.css";

const PageTemplate = ({ children }: React.PropsWithChildren) => (
    <div className={["container", styles.layout_container].join(" ")}>
        {children}
    </div>
);

PageTemplate.Header = (props: any) => <Header title={props.title} />;

PageTemplate.Panel = (props: any) => {
    const colSizes: string =
        "col-12 col-lg-10 offset-lg-1 col-xxl-8 offset-xxl-2 g-5 py-4";

    return (
        <div>
            {" "}
            {/* Div extra necessária para fixar alterações do display grid. TODO: Revisitar essa área para entender melhor e fazer possiveis melhorias */}
            <div className="row">
                <div className={[styles.panel, colSizes].join(" ")}>
                    <div className={styles.panel_inner}>{props.children}</div>
                </div>
            </div>
        </div>
    );
};

PageTemplate.Footer = (props: any) => {
    return (
        <footer className={[styles.page_footer, "row"].join(" ")}>
            <div className="col-12">{props.children}</div>
        </footer>
    );
};

PageTemplate.DevInfo = () => {
    return (
        <footer className={styles.dev_info}>
            <div className="row gx-1 justify-content-center">
                <div className="col-auto col-sm-auto">
                    <span className="copyright">
                        © 2023{" "}
                        <a href="https://codecompany.org/" target="_blank">
                            Code Company Brasil
                        </a>
                    </span>
                </div>
                <div className="col-auto col-sm-auto">
                    <span className="version">
                        (Versão 1.0.1)
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default PageTemplate;
