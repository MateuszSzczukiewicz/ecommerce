## Installation (continued)

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

Mateusz Szczukiewicz - [mateusz@example.com](mailto:mateusz@example.com)
