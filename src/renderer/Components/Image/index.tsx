import styles from "./component.module.css";
import DisciplineLogoImg from "@/Assets/logo.png";

const Image = ({
    src,
    className,
    alt,
    ...props
}: React.ImgHTMLAttributes<HTMLImageElement>) => {
    const image = !src
        ? DisciplineLogoImg
        : `https://api.discipline.app.br${src}`;
    const css = [styles.image, className].join(" ");
    const cssClasses = !src ? [styles.placeholder, css].join(" ") : css;
    return <img src={image} className={cssClasses} alt={alt} {...props} />;
};

export default Image;
