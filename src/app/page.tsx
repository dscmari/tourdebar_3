import { redirect } from 'next/navigation';
import PageForm from '../components/PageForm';
import { auth } from '@/auth';

export default async function Home() {
   const session = await auth()
   session ? redirect("/Dashboard") : redirect("/Login")
   

  return (
    <div className="bg-[url('/logo.png')] bg-cover bg-center grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start lg:w-2/3">
        Home
      </main>
    </div>
  );
}
