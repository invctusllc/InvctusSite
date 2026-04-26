import { Link } from "react-router";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-display tracking-wider mb-4" style={{ fontSize: '1.25rem', fontWeight: 700 }}>
              INVCTUS
            </h3>
            <p className="opacity-60 mb-4" style={{ fontSize: '0.875rem' }}>
              An innovation incubator building breakthrough products and transformative technology ventures that shape the future.
            </p>
            <p className="opacity-40" style={{ fontSize: '0.75rem' }}>
              Invctus, LLC<br />
              360 Meadow Ranch Rd<br />
              Snowmass Village, CO 81615
            </p>
          </div>

          <div>
            <h4 className="font-display tracking-wider mb-4 opacity-80" style={{ fontSize: '0.875rem', fontWeight: 600 }}>
              VENTURES
            </h4>
            <ul className="space-y-2" style={{ fontSize: '0.875rem' }}>
              <li>
                <Link to="/design" className="opacity-60 hover:opacity-100 hover:text-primary transition-all">
                  Design
                </Link>
              </li>
              <li>
                <Link to="/product" className="opacity-60 hover:opacity-100 hover:text-primary transition-all">
                  Product
                </Link>
              </li>
              <li>
                <Link to="/development" className="opacity-60 hover:opacity-100 hover:text-primary transition-all">
                  Development
                </Link>
              </li>
              <li>
                <Link to="/ai-research" className="opacity-60 hover:opacity-100 hover:text-primary transition-all">
                  AI R&D
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display tracking-wider mb-4 opacity-80" style={{ fontSize: '0.875rem', fontWeight: 600 }}>
              LEGAL
            </h4>
            <ul className="space-y-2" style={{ fontSize: '0.875rem' }}>
              <li>
                <Link to="/terms" className="opacity-60 hover:opacity-100 hover:text-primary transition-all">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="opacity-60 hover:opacity-100 hover:text-primary transition-all">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center opacity-40" style={{ fontSize: '0.75rem' }}>
          <p>&copy; {new Date().getFullYear()} Invctus, LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
