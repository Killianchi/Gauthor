export function Footer() {
  return (
    <footer className="w-full py-12 px-4 bg-white border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <h3 className="text-xl">Gauthor</h3>
            <p className="text-sm text-muted-foreground">
              Your AI-powered autobiography service
            </p>
          </div>
          
          <div className="flex gap-6 text-sm">
            <a
              href="#privacy"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#terms"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#contact"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            © 2025 Gauthor. We never store your number or use it for marketing.
          </p>
        </div>
      </div>
    </footer>
  );
}
