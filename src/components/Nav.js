import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link>Home</Link>
        </li>
        <li>
          <Link>Questions</Link>
        </li>
      </ul>
    </nav>
  );
}
