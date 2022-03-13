export default function Footer() {
    return (
      <footer className="bg-blue-600">
        <ul className="flex items-center justify-between lg:container px-4 py-6 mx-auto text-sm text-white md:px-6">
          <li>
            Repository at{" "}
            <a
              href="https://github.com/hackerchai/frontend-learn"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold"
            >
              Github
            </a>
          </li>
  
          <li>
              Copyright (c) 2022 Hackerchai
          </li>
        </ul>
      </footer>
    );
  }
  