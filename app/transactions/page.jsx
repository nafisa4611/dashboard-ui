import TransactionsTable from "../Components/tables/TransactionsTable";


export default function TransactionsPage() {
  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-semibold">Transactions</h1>

      {/* Filters */}
      <div className="flex gap-3">
        <input
          placeholder="Search..."
          className="px-3 py-2 border rounded-lg bg-transparent"
        />
        <select className="px-3 py-2 border rounded-lg bg-transparent">
          <option>All</option>
          <option>Income</option>
          <option>Expense</option>
        </select>
      </div>

      <TransactionsTable />
    </div>
  );
}
