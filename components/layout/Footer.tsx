export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-white mt-12">
      <div className="container mx-auto px-6 py-8 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} ExereCorp. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
