import Hero from "../components/herso";
import Introducing from "../components/introducing";
import Earnmoney from "../components/earnmoney";
import Vendors from "../components/vendorsignup";
import Trustedbyourpatner from "../components/trustedbyourpatner";
export default function Home() {
  return (
    <main>
      <Hero />
      <Introducing />
      <Earnmoney />
      <Vendors />
      <Trustedbyourpatner />

      {/* You can add other sections below */}
    </main>
  );
}
