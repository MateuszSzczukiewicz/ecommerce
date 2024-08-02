## 1. Zaimplementuj Widok Pojedynczego Produktu

- Stwórz komponent do wyświetlania szczegółów pojedynczego produktu.
- Pobieraj dane produktu za pomocą GraphQL.

## 2. Dodaj Podstrony Kategorii

- Stwórz podstrony dla kategorii.
- Zdefiniuj trasę jako `/categories/[nazwa-kategorii]/[numer-strony]`.

## 3. Popraw Komponent `ActiveLink`

- Upewnij się, że będąc na stronie `/categories/t-shirts/2`, link `/categories` w navbarze jest aktywny.

## 4. Dodaj Podstrony Kolekcji

- Stwórz podstrony dla kolekcji.
- Zdefiniuj trasę jako `/collections/[nazwa-kolekcji]`.
- Kolekcje znajdziesz w schemacie GraphQL.

## 5. Zaimplementuj Komponent z Sugerowanymi Produktami

- Stwórz komponent wyświetlający cztery sugerowane produkty na podstawie GraphQL.
- Kryteria wyboru produktów ustal samodzielnie.
- Dodaj do kontenera tego komponentu atrybut `data-testid="related-products"`.

## 6. Zaimplementuj Wybór Wariantu Produktu

- Dodaj możliwość wyboru wariantu produktu (kolor, rozmiar) na podstawie pól w schemacie produktów GraphQL.

## 7. Popraw Paginację

- Zaimplementuj paginację pobierającą dane z GraphQL.
- Dodaj prerenderowanie kilku pierwszych stron.

## 8. Zaimplementuj Prosta Wyszukiwarkę

- Stwórz wyszukiwarkę używając GraphQL.
- Wyszukiwarka powinna być widoczna w navbarze (input).
- Po wyszukaniu użytkownik powinien być przekierowany na stronę `/search?query=(WPISANE SŁOWA)`.
- Ręczna zmiana `?query=…` lub odświeżenie strony powinny również powodować wyszukanie i działać.
- Opcjonalnie, użyj do tego `@apollo/experimental-nextjs-app-support`.

## 9. Zaimplementuj Automatyczne Wyszukiwanie

- Dodaj funkcjonalność automatycznego wyszukiwania, które jest wyzwalane po 500 ms od momentu skończenia pisania treści zapytania przez użytkownika.
- Upewnij się, że nie wykonujesz niepotrzebnych zapytań gdy użytkownik jest w trakcie pisania.
