export default function Footer() {
  return (
    <footer className="bg-zinc-900 py-12 text-center text-zinc-500">
      <div className="max-w-7xl mx-auto px-4">
        <img 
          src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgWlMkqQRXIPqcDri-Wd8GV8_A-wMvwonFUg9VvhGecfpC7CTS9aEeJG_FD8GKjbu90gbvg0i21BFAqceRLf80zPZuu4da3rP5ml6CmBfwuG-nRFrQ5IgdoGLirP5Gb7tq2e02pstcFKMhgD4ARUVARjD4tZZzH9ZctIPtlfxo6TVSasy5HzqbTOg8CfFw/s1600/LOGO%20-%20A%20casa%20do%20Ju%20-%20fundo%20transparente%20branco.png" 
          alt="A Casa do Ju"
          className="h-12 object-contain mx-auto mb-6"
        />
        <p className="text-sm">© {new Date().getFullYear()} Junior Launther. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
