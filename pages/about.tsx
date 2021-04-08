import Link from "next/link";
import Image from "next/image";
const About = () => {
  return (
    <div>
      <h1>About</h1>
      <Image
        src="/images/015ea3143e1c6d88defef802853c01dc.jpeg"
<<<<<<< HEAD
        alt="kingkong vs goliza"
        width={540}
        height={801}
        layout="intrinsic"
=======
        alt="Picture of the author"
        width={270}
        height={400}
>>>>>>> 6f8b6466a9da5ec41504264594491179331c2e01
      />
      <Link href="/">
        <button>back</button>
      </Link>
    </div>
  );
};

export default About;
