import Image from 'next/image'
import LoginForm from './components/loginform/commonlogin'
import { getServerSession } from "next-auth";

import { authOptions } from "./api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";


export default async function Home() {
  const session = await getServerSession(authOptions);

  if (!session) redirect("/");if (!session) redirect("/");

  return (
    <main >
      
      
     <LoginForm />
      
      
    </main>
  );
}