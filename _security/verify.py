"""Read-only checks for a built static site; no third-party dependencies.

Usage: python3 _security/verify.py /absolute/path/to/built/site
Does not build, deploy or modify the site. Never prints matched secret values.
"""

import argparse
from html.parser import HTMLParser
from pathlib import Path
import re
import sys


LINKEDIN = "https://www.linkedin.com/in/ahechedey/"
PRIVATE_CONTACT = ("ahechedey" + "@gmail.com").encode()
PUBLIC_ROOTS = {"index.html", "CNAME", "assets", "css", "fonts", "images", "partials", "scripts"}
SECRET_PATTERNS = [
    rb"-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----",
    rb"gh[pousr]_[A-Za-z0-9]{30,}",
    rb"AKIA[A-Z0-9]{16}",
]


class Contacts(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.linkedin = []
        self.mailto = []

    def handle_starttag(self, tag, attrs):
        if tag == "a":
            href = dict(attrs).get("href", "")
            if "linkedin.com" in href.lower():
                self.linkedin.append(href)
            if href.lower().startswith("mailto:"):
                self.mailto.append(href)


def verify(root):
    errors = []
    contacts = Contacts()
    count = 0
    for path in sorted(root.rglob("*")):
        relative = path.relative_to(root)
        if path.is_symlink():
            errors.append(f"Symlink in public output: {relative}")
            continue
        if not path.is_file():
            continue
        count += 1
        if relative.parts[0] not in PUBLIC_ROOTS:
            errors.append(f"Unexpected public artefact: {relative}")
        if (any(part.startswith((".", "_")) for part in relative.parts)
                or path.suffix.lower() in {".map", ".pem", ".key", ".p12", ".pfx", ".bak", ".backup", ".log", ".orig", ".swp", ".pyc"}
                or path.name.lower().startswith(("credentials", "secrets"))
                or path.name.endswith("~")):
            errors.append(f"Internal/sensitive file in public output: {relative}")
        data = path.read_bytes()
        if PRIVATE_CONTACT in data.lower():
            errors.append(f"Private contact in public output: {relative}")
        if any(re.search(pattern, data) for pattern in SECRET_PATTERNS):
            errors.append(f"Possible credential in public output: {relative} [value omitted]")
        if path.suffix.lower() == ".html":
            contacts.feed(data.decode("utf-8"))
    if not (root / "index.html").is_file():
        errors.append("Missing index.html")
    if contacts.linkedin != [LINKEDIN, LINKEDIN]:
        errors.append("The two existing public contact links must use the exact LinkedIn URL")
    if contacts.mailto:
        errors.append("Unexpected mailto contact in public output")
    for filename in ("bootstrap.js", "app.js", "content.js", "gsap-about.js"):
        if not (root / "scripts" / filename).is_file():
            errors.append(f"Missing application script: {filename}")
    if errors:
        print("\n".join(errors), file=sys.stderr)
        return 1
    print(f"PASS: {count} public files; private contact absent; both LinkedIn links correct; no detected internal artefacts or credential patterns.")
    return 0


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("site", type=Path)
    args = parser.parse_args()
    if not args.site.is_dir():
        parser.error("site must be an existing built directory")
    sys.exit(verify(args.site.resolve()))
