import {
  Instagram,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const SocialsMenu = () => {
  return (
    <nav aria-label="Social media links">
      <ul className="flex space-x-6 font-bold text-[20px]">

        {/* Instagram */}
        <li className="text-white/70 hover:text-white transition-colors">
          <Link
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5 md:w-6 md:h-6" />
          </Link>
        </li>

        {/* LinkedIn 
        <li className="text-white/70 hover:text-white transition-colors">
          <Link
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5 md:w-6 md:h-6" />
          </Link>
        </li> */}

        {/* GitHub 
        <li className="text-white/70 hover:text-white transition-colors">
          <Link
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5 md:w-6 md:h-6" />
          </Link>
        </li> */}

        {/* Facebook */}
        <li className="text-white/70 hover:text-white transition-colors">
          <Link
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <svg
              className="w-5 h-5 md:w-6 md:h-6"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.099 4.388 23.092 10.125 24v-8.437H7.078v-3.49h3.047V9.413c0-3.022 1.792-4.695 4.533-4.695 1.312 0 2.686.235 2.686.235v2.973h-1.514c-1.491 0-1.956.93-1.956 1.885v2.262h3.328l-.532 3.49h-2.796V24C19.612 23.092 24 18.099 24 12.073z" />
            </svg>
          </Link>
        </li>

        {/* YouTube */}
        <li className="text-white/70 hover:text-white transition-colors">
          <Link
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
          >
            <svg
              className="w-5 h-5 md:w-6 md:h-6"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M23.498 6.186a2.994 2.994 0 0 0-2.106-2.117C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.392.569A2.994 2.994 0 0 0 .502 6.186C0 8.078 0 12 0 12s0 3.922.502 5.814a2.994 2.994 0 0 0 2.106 2.117C4.495 20.5 12 20.5 12 20.5s7.505 0 9.392-.569a2.994 2.994 0 0 0 2.106-2.117C24 15.922 24 12 24 12s0-3.922-.502-5.814ZM9.545 15.568V8.432L15.818 12l-6.273 3.568Z" />
            </svg>
          </Link>
        </li>

        {/* WhatsApp */}
        <li className="text-white/70 hover:text-white transition-colors">
          <Link
            href="https://wa.me/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <svg
              className="w-5 h-5 md:w-6 md:h-6"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M20.52 3.48A11.86 11.86 0 0 0 12.05 0C5.5 0 .17 5.33.17 11.89c0 2.09.55 4.13 1.59 5.93L.06 24l6.33-1.66a11.9 11.9 0 0 0 5.66 1.44h.01c6.55 0 11.88-5.33 11.88-11.89 0-3.18-1.24-6.17-3.42-8.41ZM12.06 21.77h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.76.98 1-3.67-.23-.38a9.85 9.85 0 0 1-1.51-5.23c0-5.43 4.42-9.85 9.86-9.85 2.63 0 5.1 1.03 6.96 2.9a9.82 9.82 0 0 1 2.89 6.97c-.01 5.43-4.43 9.85-9.87 9.85Zm5.4-7.39c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.21 5.09 4.5.71.31 1.26.5 1.69.64.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
            </svg>
          </Link>
        </li>

      </ul>
    </nav>
  );
};

export default SocialsMenu;
