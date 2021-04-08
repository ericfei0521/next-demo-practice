import Link from "next/link";
import style from "../static/style/button.module.scss";
interface buttonProps {
  index: string;
  path: string;
}

const Button = ({ index, path }: buttonProps) => {
  return (
    <div>
      <Link href={path}>
        <button className={style.button}>{index}</button>
      </Link>
    </div>
  );
};

export default Button;
