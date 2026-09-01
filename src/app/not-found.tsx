import Link from "next/link";
export default function NotFound() { return <main id="main-content" className="not-found"><span className="error-number">404</span><div><span className="eyebrow">Reference not found</span><h1>This page is not on the bench.</h1><p>The URL may be incomplete, or the guide may not exist because HVAC Bench does not publish empty or unsupported content records.</p><div className="hero-actions"><Link className="button primary" href="/search/">Search the index</Link><Link className="button secondary" href="/brands/">Browse brands</Link></div></div></main>; }

