export default function Header() {
  return (
    <>
      <h1
        className="font-black text-5xl text-center md:w-2/3 mx-auto"
        data-testid="appHeader"
      >
        Seguimiento pacientes{" "}
        <span className="text-indigo-600">veterinaria</span>
      </h1>
    </>
  );
}
