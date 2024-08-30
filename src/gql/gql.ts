/* eslint-disable */
import * as types from './graphql';



/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "mutation CartAddProduct($cartAddItemId: ID!, $input: MutationCartAddItemInput!) {\n  cartAddItem(id: $cartAddItemId, input: $input) {\n    ...CartListItem\n  }\n}": types.CartAddProductDocument,
    "mutation CartFindOrCreate($id: ID, $items: [CartItemInput!]!) {\n  cartFindOrCreate(id: $id, input: {items: $items}) {\n    id\n    items {\n      product {\n        id\n        name\n        price\n      }\n      quantity\n    }\n  }\n}": types.CartFindOrCreateDocument,
    "query CartGetById($id: ID!) {\n  cart(id: $id) {\n    ...CartListItem\n  }\n}": types.CartGetByIdDocument,
    "fragment CartListItem on Cart {\n  id\n  items {\n    product {\n      id\n      name\n      price\n    }\n    quantity\n  }\n}": types.CartListItemFragmentDoc,
    "mutation CartRemoveProduct($cartId: ID!, $productId: ID!) {\n  cartRemoveItem(id: $cartId, productId: $productId) {\n    id\n  }\n}": types.CartRemoveProductDocument,
    "mutation CartSetProductQuantity($cartId: ID!, $quantity: Int!, $productId: ID!) {\n  cartChangeItemQuantity(id: $cartId, quantity: $quantity, productId: $productId) {\n    id\n  }\n}": types.CartSetProductQuantityDocument,
    "query CategoriesGetList {\n  categories {\n    data {\n      ...CategoriesListItem\n    }\n  }\n}": types.CategoriesGetListDocument,
    "query CategoriesGetProducts($slug: String!) {\n  category(slug: $slug) {\n    products {\n      ...ProductListItem\n    }\n  }\n}": types.CategoriesGetProductsDocument,
    "fragment CategoriesListItem on Category {\n  name\n  slug\n}": types.CategoriesListItemFragmentDoc,
    "fragment CollectionListItem on Collection {\n  id\n  name\n  slug\n  description\n  products {\n    ...ProductListItem\n  }\n}": types.CollectionListItemFragmentDoc,
    "query CollectionsGetList {\n  collections {\n    data {\n      ...CollectionListItem\n    }\n  }\n}": types.CollectionsGetListDocument,
    "query CollectionsGetProducts($slug: String!) {\n  collection(slug: $slug) {\n    products {\n      ...ProductListItem\n    }\n  }\n}": types.CollectionsGetProductsDocument,
    "query OrdersGetByEmail($email: String!) {\n  orders(email: $email) {\n    data {\n      id\n      createdAt\n      lines\n    }\n    meta {\n      total\n    }\n  }\n}": types.OrdersGetByEmailDocument,
    "query ProductGetById($id: ID!) {\n  product(id: $id) {\n    ...ProductListItem\n  }\n}": types.ProductGetByIdDocument,
    "query ProductsGetList($take: Int, $skip: Int) {\n  products(take: $take, skip: $skip) {\n    data {\n      ...ProductListItem\n    }\n    meta {\n      total\n    }\n  }\n}": types.ProductsGetListDocument,
    "fragment ProductListItem on Product {\n  id\n  name\n  description\n  price\n  categories {\n    name\n    slug\n  }\n  collections {\n    name\n    slug\n  }\n  images {\n    url\n    alt\n    width\n    height\n  }\n}": types.ProductListItemFragmentDoc,
    "query ProductsGetSuggested($take: Int, $order: SortDirection, $orderBy: ProductSortBy) {\n  products(take: $take, order: $order, orderBy: $orderBy) {\n    data {\n      ...ProductListItem\n    }\n  }\n}": types.ProductsGetSuggestedDocument,
    "query ProductsSearchList($take: Int, $skip: Int, $searchTerm: String!) {\n  products(take: $take, skip: $skip, search: $searchTerm) {\n    data {\n      ...ProductListItem\n    }\n    meta {\n      total\n    }\n  }\n}": types.ProductsSearchListDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartAddProduct($cartAddItemId: ID!, $input: MutationCartAddItemInput!) {\n  cartAddItem(id: $cartAddItemId, input: $input) {\n    ...CartListItem\n  }\n}"): typeof import('./graphql').CartAddProductDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartFindOrCreate($id: ID, $items: [CartItemInput!]!) {\n  cartFindOrCreate(id: $id, input: {items: $items}) {\n    id\n    items {\n      product {\n        id\n        name\n        price\n      }\n      quantity\n    }\n  }\n}"): typeof import('./graphql').CartFindOrCreateDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CartGetById($id: ID!) {\n  cart(id: $id) {\n    ...CartListItem\n  }\n}"): typeof import('./graphql').CartGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment CartListItem on Cart {\n  id\n  items {\n    product {\n      id\n      name\n      price\n    }\n    quantity\n  }\n}"): typeof import('./graphql').CartListItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartRemoveProduct($cartId: ID!, $productId: ID!) {\n  cartRemoveItem(id: $cartId, productId: $productId) {\n    id\n  }\n}"): typeof import('./graphql').CartRemoveProductDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartSetProductQuantity($cartId: ID!, $quantity: Int!, $productId: ID!) {\n  cartChangeItemQuantity(id: $cartId, quantity: $quantity, productId: $productId) {\n    id\n  }\n}"): typeof import('./graphql').CartSetProductQuantityDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CategoriesGetList {\n  categories {\n    data {\n      ...CategoriesListItem\n    }\n  }\n}"): typeof import('./graphql').CategoriesGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CategoriesGetProducts($slug: String!) {\n  category(slug: $slug) {\n    products {\n      ...ProductListItem\n    }\n  }\n}"): typeof import('./graphql').CategoriesGetProductsDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment CategoriesListItem on Category {\n  name\n  slug\n}"): typeof import('./graphql').CategoriesListItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment CollectionListItem on Collection {\n  id\n  name\n  slug\n  description\n  products {\n    ...ProductListItem\n  }\n}"): typeof import('./graphql').CollectionListItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CollectionsGetList {\n  collections {\n    data {\n      ...CollectionListItem\n    }\n  }\n}"): typeof import('./graphql').CollectionsGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CollectionsGetProducts($slug: String!) {\n  collection(slug: $slug) {\n    products {\n      ...ProductListItem\n    }\n  }\n}"): typeof import('./graphql').CollectionsGetProductsDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query OrdersGetByEmail($email: String!) {\n  orders(email: $email) {\n    data {\n      id\n      createdAt\n      lines\n    }\n    meta {\n      total\n    }\n  }\n}"): typeof import('./graphql').OrdersGetByEmailDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetById($id: ID!) {\n  product(id: $id) {\n    ...ProductListItem\n  }\n}"): typeof import('./graphql').ProductGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetList($take: Int, $skip: Int) {\n  products(take: $take, skip: $skip) {\n    data {\n      ...ProductListItem\n    }\n    meta {\n      total\n    }\n  }\n}"): typeof import('./graphql').ProductsGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductListItem on Product {\n  id\n  name\n  description\n  price\n  categories {\n    name\n    slug\n  }\n  collections {\n    name\n    slug\n  }\n  images {\n    url\n    alt\n    width\n    height\n  }\n}"): typeof import('./graphql').ProductListItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetSuggested($take: Int, $order: SortDirection, $orderBy: ProductSortBy) {\n  products(take: $take, order: $order, orderBy: $orderBy) {\n    data {\n      ...ProductListItem\n    }\n  }\n}"): typeof import('./graphql').ProductsGetSuggestedDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsSearchList($take: Int, $skip: Int, $searchTerm: String!) {\n  products(take: $take, skip: $skip, search: $searchTerm) {\n    data {\n      ...ProductListItem\n    }\n    meta {\n      total\n    }\n  }\n}"): typeof import('./graphql').ProductsSearchListDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
