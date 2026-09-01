import { Breadcrumbs } from "./breadcrumbs";
export function DirectoryHero({ eyebrow, title, description, path }: { eyebrow: string; title: string; description: string; path: string }) { return <header className="directory-hero"><Breadcrumbs items={[{ name: "Home", path: "/" }, { name: title, path }]} /><span className="eyebrow">{eyebrow}</span><h1>{title}</h1><p>{description}</p></header>; }

