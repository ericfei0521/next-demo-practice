import Link from "next/link";
import Image from "next/image";
const About = () => {
  return (
    <div>
      <h1>About</h1>
      <Image
        src="/images/015ea3143e1c6d88defef802853c01dc.jpeg"
        alt="kingkong vs goliza"
        width={540}
        height={801}
        layout="intrinsic"
      />
      <Link href="/">
        <button>back</button>
      </Link>
    </div>
  );
};

export default About;
