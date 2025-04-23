import PageHeader from "@/components/PageHeader";

export default function layout({ children }) {
  return (
    <>
      <PageHeader className="my-8" />
      <main className="space-y-8">{children}</main>
      <footer className="mt-auto text-center py-8">Footer</footer>
    </>
  );
}
