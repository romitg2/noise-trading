import { redirect } from "next/navigation";

export default function Page() {
  redirect("/dashboard");

  return (
    <div>
      <h1>Stocks</h1>
    </div>
  );
}
