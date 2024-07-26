import { UserButton } from "@clerk/nextjs";

const DashboardPage = ( ) => {
  return (
    <div>
   <p>Dashboard Page(protected)</p>
   <UserButton />
   </div>
  )
}

export default DashboardPage;