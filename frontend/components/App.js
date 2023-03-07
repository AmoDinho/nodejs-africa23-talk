export default function App({ children }) {
  return (
    <main className="flex justify-center">
      {children}
      <style jsx global>{`
        @tailwind base;
        @tailwind components;
        @tailwind utilities;

        * {
          font-family: Menlo, Monaco, 'Lucida Console', 'Liberation Mono',
            'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', 'Courier New',
            monospace, serif;
        }
        body {
          margin: 0;
          padding: 25px 50px;
        }
      `}</style>
    </main>
  );
}
