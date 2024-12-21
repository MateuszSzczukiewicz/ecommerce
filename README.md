# Next.js Ecommerce

![Next.js](https://img.shields.io/badge/Next.js-13.4-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-4.5-blue)
![License](https://img.shields.io/badge/License-MIT-green)

## Project Description

Next.js Ecommerce is a modern and efficient e-commerce application built with Next.js 13.4, TypeScript, and Tailwind CSS. This project showcases an online store with features such as product management, shopping cart functionality, and integration with the Stripe payment gateway.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Demo

Check out the live application: [Next.js Ecommerce Demo](https://mateusz-szczukiewicz.pl)

## Features

- Browse products
- Add products to cart
- Checkout process with Stripe integration
- Admin panel for product management
- Responsive design

## Technologies

- [Next.js 13.4](https://nextjs.org/)
- [React 18](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Stripe API](https://stripe.com/docs/api)
- [Prisma ORM](https://www.prisma.io/)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/MateuszSzczukiewicz/Next.js-Ecommerce.git
   cd Next.js-Ecommerce
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Configure environment variables:

   Create a `.env` file based on `.env.example` and fill in the necessary values, including Stripe API keys.

4. Apply database migrations:

   ```bash
   npx prisma migrate deploy
   ```

## Usage

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Testing

To run unit tests:

```bash
npm run test
```

## Contributing

We welcome contributions from the community. To contribute:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature-name`.
3. Make your changes and commit them: `git commit -m 'Add new feature'`.
4. Push to the branch: `git push origin feature/your-feature-name`.
5. Open a Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

Mateusz Szczukiewicz - [szczmat6277@gmail.com](mailto:szczmat6277@gmail.com)

Visit my website: [mateusz-szczukiewicz.pl](https://mateusz-szczukiewicz.pl)
