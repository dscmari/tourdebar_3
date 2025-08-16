import { redirect } from 'next/navigation';
import Form from '../components/PageForm';
import Footer from './../components/Footer';
import { auth } from '@/auth';

export default async function Home() {
   const session = await auth()  
   if(session) redirect("/Dashboard") 

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Form />
      </main>
      <Footer />
    </div>
  );
}
