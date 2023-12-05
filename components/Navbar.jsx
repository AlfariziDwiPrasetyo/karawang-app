import { RxHamburgerMenu } from "react-icons/rx";
import Container from "@/components/Container";
export default function NavbarAdmin() {
  return (
    <nav className="md:hidden block">
      <Container className="flex items-center justify-between m-4 mx-auto">
        <button className="border p-2 rounded">
          <RxHamburgerMenu />
        </button>
        <span className="">ADMIN PAGE</span>
      </Container>
    </nav>
  );
}
