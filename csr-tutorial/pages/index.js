import Image from "next/image";
import styles from "@/styles/Home.module.css";

//
import codeImage from "../public/code.jpg"

export default function Home() {
  return (
    <div className={styles.container}>
      <Image src={codeImage} alt="code image" height={100} width={200}></Image>
    </div>
  );
}
