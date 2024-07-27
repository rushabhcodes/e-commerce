import { auth } from "@/server/auth"; // Referring to the auth.ts we just created
import { UserButton } from "./user-button";
import { Logo } from "./logo";
import { Button } from "../ui/button";
import Link from "next/link";
import { LogIn } from "lucide-react";

export default async function Nav() {
  const session = await auth();
  return (
    <header className="py-8">
      <nav>
        <ul className="flex justify-between items-center">
          <li><Link href={"/"}>
            <Logo />
            </Link>
          </li>
          {!session ? (
            <li>
              <Button asChild>
                <Link className="flex gap-2" href="/auth/login"><LogIn size={16}/><span>LogIn</span></Link>
              </Button>
            </li>
          ) : (
            <li>
              <UserButton expires={session.expires} user={session?.user} />
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}
