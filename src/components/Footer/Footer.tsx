import Link from "next/link";

export default function Footer() {
  return (
    <footer id="footer" className="w-full pb-0">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between py-6 md:py-8 lg:py-10 px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="flex flex-col items-start justify-start gap-y-2 max-w-xs mx-0">
          <Link className="flex items-center gap-2" href="/">
            <svg
              width="42"
              height="24"
              viewBox="0 0 42 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-[var(--secondary)] size-8"
            >
              <g clipPath="url(#clip0_322_9172)">
                <path
                  d="M22.3546 0.96832C22.9097 0.390834 23.6636 0.0664062 24.4487 0.0664062C27.9806 0.0664062 31.3091 0.066408 34.587 0.0664146C41.1797 0.0664284 44.481 8.35854 39.8193 13.2082L29.6649 23.7718C29.1987 24.2568 28.4016 23.9133 28.4016 23.2274V13.9234L29.5751 12.7025C30.5075 11.7326 29.8472 10.0742 28.5286 10.0742H13.6016L22.3546 0.96832Z"
                  fill="current"
                ></path>
                <path
                  d="M19.6469 23.0305C19.0919 23.608 18.338 23.9324 17.5529 23.9324C14.021 23.9324 10.6925 23.9324 7.41462 23.9324C0.821896 23.9324 -2.47942 15.6403 2.18232 10.7906L12.3367 0.227022C12.8029 -0.257945 13.6 0.0855283 13.6 0.771372L13.6 10.0754L12.4265 11.2963C11.4941 12.2662 12.1544 13.9246 13.473 13.9246L28.4001 13.9246L19.6469 23.0305Z"
                  fill="current"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_322_9172">
                  <rect width="42" height="24" fill="white"></rect>
                </clipPath>
              </defs>
            </svg>
            <p className="text-xl font-semibold text-primary">ActionLog</p>
          </Link>
          <p className="tracking-tight text-muted-foreground font-medium">
            AI assistant designed to streamline your digital workflows and
            handle mundane tasks, so you can focus on what truly matters
          </p>
          </div>
        <div className="pt-3 md:pt-0 md:w-1/2">
          <div className="flex flex-col items-start justify-start md:flex-row md:items-center md:justify-between gap-y-3 md:gap-y-0 md:gap-x-8 lg:pl-10">
            <ul className="flex flex-col gap-y-2">
              <li className="mb-2 text-sm font-semibold text-primary">
                Company
              </li>
              <li>
                <a href="#" className="text-[15px]/snug text-muted-foreground hover:text-primary transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-[15px]/snug text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-[15px]/snug text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </a>
              </li>
            </ul>
            <ul className="flex flex-col gap-y-2">
              <li className="mb-2 text-sm font-semibold text-primary">
                Product
              </li>
              <li>
                <a href="#" className="text-[15px]/snug text-muted-foreground hover:text-primary transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="text-[15px]/snug text-muted-foreground hover:text-primary transition-colors">
                  Pricing
                </a>
              </li>
            </ul>
            <ul className="flex flex-col gap-y-2">
              <li className="mb-2 text-sm font-semibold text-primary">
                Resources
              </li>
              <li>
                <a href="#" className="text-[15px]/snug text-muted-foreground hover:text-primary transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-[15px]/snug text-muted-foreground hover:text-primary transition-colors">
                  Press
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
