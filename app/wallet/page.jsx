"use client";


import { FiPlus, FiArrowUpRight, FiCreditCard } from "react-icons/fi";
import Button from "../Components/ui/Button";
import BalanceCard from "../Components/BalanceCard";

export default function WalletPage() {
  return (
    <div className="space-y-6">

      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Wallet</h1>
          <p className="text-sm text-muted">
            Manage your balance and payment methods
          </p>
        </div>

        <div className="flex gap-3">
          <Button icon={<FiPlus />}>Add Funds</Button>
          <Button variant="outline" icon={<FiArrowUpRight />}>
            Withdraw
          </Button>
        </div>
      </div>

      {/* Balance */}
      <BalanceCard />

      {/* Linked Cards */}
      <section className="bg-surface rounded-xl p-5">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-medium">Linked Cards</h2>
          <Button size="sm" variant="ghost">
            + Add Card
          </Button>
        </div>

        <div className="space-y-3">
          <CardItem brand="Visa" last4="4242" />
          <CardItem brand="Mastercard" last4="7821" />
        </div>
      </section>
    </div>
  );
}

function CardItem({ brand, last4 }) {
  return (
    <div className="flex items-center justify-between p-4 border border-border rounded-lg">
      <div className="flex items-center gap-3">
        <FiCreditCard className="text-muted" />
        <div>
          <p className="text-sm font-medium">{brand} **** {last4}</p>
          <p className="text-xs text-muted">Default payment method</p>
        </div>
      </div>

      <Button size="sm" variant="ghost">
        Remove
      </Button>
    </div>
  );
}
