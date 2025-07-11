# Cookie Wizard

a small service for extracting cookies from a website

![JavaScript](https://img.shields.io/badge/language-JavaScript-yellow)
![License](https://img.shields.io/github/license/kc-clintone/cookie-wizard)
![Issues](https://img.shields.io/github/issues/kc-clintone/cookie-wizard)

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Reference](#api-reference)
- [Configuration](#configuration)
- [Examples](#examples)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## Overview

**Cookie Wizard** is a lightweight JavaScript service designed to extract cookies from websites efficiently. It is ideal for developers, testers, and automation engineers who need to programmatically access, analyze, or manage website cookies.

---

## Features

- Extract all cookies from a target website
- Supports custom headers and user agents
- CLI and programmatic API
- Lightweight and easy to integrate
- Configurable output (JSON, plain text, etc.)
- Error handling and validation

---

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) (version 12 or later)
- npm (comes with Node.js)

### Install

Clone the repository:

```bash
git clone https://github.com/kc-clintone/cookie-wizard.git
cd cookie-wizard
```

Install dependencies:

```bash
npm install
```

Or install globally (if published to npm):

```bash
npm install -g cookie-wizard
```

---

## Usage

### CLI

```bash
node index.js --url <target_website_url>
```

**Example:**

```bash
node index.js --url https://example.com
```

### Programmatic Usage

```js
const { extractCookies } = require('./cookie-wizard');

extractCookies('https://example.com')
  .then(cookies => {
    console.log(cookies);
  })
  .catch(err => {
    console.error(err);
  });
```

---

## API Reference

### `extractCookies(url, options)`

| Parameter | Type     | Description                        |
| --------- | -------- | ---------------------------------- |
| url       | string   | The website URL to extract cookies from. |
| options   | object   | (Optional) Additional request options (headers, user-agent, etc.). |

**Returns:** `Promise<Array>` — Resolves to an array of cookie objects.

---

## Configuration

You can customize request settings via the `options` parameter, such as:

- `headers`: Custom headers for the HTTP request
- `userAgent`: User-Agent string
- `timeout`: Request timeout in milliseconds

---

## Examples

**Extract cookies from a website and print as JSON:**

```js
extractCookies('https://github.com')
  .then(cookies => console.log(JSON.stringify(cookies, null, 2)));
```

---

## Contributing

Contributions are welcome! Please open issues or pull requests for improvements and bug fixes.

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/my-feature`)
3. Commit your changes
4. Push to your branch (`git push origin feature/my-feature`)
5. Open a Pull Request

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Contact

- GitHub: [kc-clintone](https://github.com/kc-clintone)
- Issues: [Submit here](https://github.com/kc-clintone/cookie-wizard/issues)

---
