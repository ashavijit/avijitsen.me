import {
  BsSpotify,
  MdEmail,
  AiOutlineGithub,
  AiOutlineTwitter,
  FaDiscord,
} from "../Icons";

import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

const Contact = () => {
  return (
    <div className="font-sen px-3" id="contact">
      <p className="text-3xl font-bold text-white">Get in touch</p>

      <div className="my-8 flex flex-row justify-center gap-x-4">
        <Link href="https://github.com/ashavijit/" passHref>
          <a
            target="_blank"
            rel="noopener noreferrer"
            aria-label="github"
            className="rounded-lg border-2 border-zinc-900 bg-zinc-800 p-2 text-2xl text-white hover:border-white"
          >
            <AiOutlineGithub />
          </a>
        </Link>

        <Link href="https://twitter.com/AvijitSen123" passHref>
          <a
            target="_blank"
            rel="noopener noreferrer"
            aria-label="twitter"
            className="rounded-lg border-2 border-zinc-900 bg-zinc-800 p-2 text-2xl text-white hover:border-white"
          >
            <AiOutlineTwitter />
          </a>
        </Link>

        <Link href="mailto:avijitsen.me@gmail.com" passHref>
          <a
            target="_blank"
            rel="noopener noreferrer"
            aria-label="mail"
            className="rounded-lg border-2 border-zinc-900 bg-zinc-800 p-2 text-2xl text-white hover:border-white"
          >
            <MdEmail />
          </a>
        </Link>

        <Link href="https://www.linkedin.com/in/avijit-sen-69a00b1b9/" passHref>
          <a
            target="_blank"
            rel="noopener noreferrer"
            aria-label="mail"
            className="rounded-lg border-2 border-zinc-900 bg-zinc-800 p-2 text-2xl text-white hover:border-white"
          >
            <FaLinkedin/>
          </a>
        </Link>

        <Link
          href="https://www.instagram.com/shane_____avijit/"
          passHref
        >
          <a
            target="_blank"
            rel="noopener noreferrer"
            aria-label="mail"
            className="rounded-lg border-2 border-zinc-900 bg-zinc-800 p-2 text-2xl text-white hover:border-white"
          >
            <BsInstagram />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Contact;
