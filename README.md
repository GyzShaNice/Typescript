# Typescript
Understanding the concepts and basic through exercises and project

![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-20.x-339933?logo=nodedotjs&logoColor=white)
![tsx](https://img.shields.io/badge/tsx-Runner-000000?logo=javascript&logoColor=white)
![Strict Mode](https://img.shields.io/badge/strict-true-brightgreen)
![License](https://img.shields.io/badge/License-MIT-blue)

## 📋 Overview

**A small, self-contained TypeScript business layer for order management — built progressively across a structured TD covering types, interfaces, unions, narrowing, discriminated unions, utility types, and mapped types.**

## Table of Contents

1. [Project Structure](#1-project-structure)
2. [Typing Modules](#2-typing-modules)
3. [Interfaces](#3-interfaces)
4. [Unions and Discriminated Unions](#4-unions-and-discriminated-unions)
5. [Narrowing](#5-narrowing)
6. [Utility Types](#6-utility-types)
7. [Custom Mapped Type](#7-custom-mapped-type)
8. [OrderManager Class](#8-ordermanager-class)
9. [Configuration](#9-configuration)
10. [Installation and Setup](#10-installation-and-setup)
11. [Running the Project](#11-running-the-project)
12. [Author](#12-author)

---

### Key Principles

- **Derive, don't duplicate**: types like `CreateOrder`, `UpdateOrder`, `PublicUser`, and `OrderPreview` are all derived from an existing type via a utility type (`Omit`, `Partial`, `Pick`), instead of being hand-copied.
- **Discriminant-driven safety**: every order variant carries a literal `type` field, letting TypeScript narrow to the exact shape in each `switch` branch.
- **Strict mode throughout**: `tsconfig.json` runs with `"strict": true`
- **One business layer, incrementally assembled**: `Partie9.ts` is the integration point — it imports and reuses `User`, `Beneficiary`, `Address`, `City`, and `OrderStatus` from earlier parts rather than redefining them.

---

## 1. Project Structure

```text
typescriptExo/
├── src/
│   ├── Partie1.ts    ← Base types & primitives (User, Beneficiary, Money, Order)
│   ├── Partie2.ts    ← Interfaces (User, Address, Beneficiary, Identifiable, Contactable)
│   ├── Partie3.ts    ← OrderManager class (first version)
│   ├── Partie4.ts    ← Unions (City, OrderStatus)
│   ├── Partie5.ts    ← Narrowing (printValue, formatId, printBeneficiary, getContact)
│   ├── Partie6.ts    ← Discriminated unions (GroceryOrder, PharmacyOrder, GiftOrder, CakeOrder)
│   ├── Partie7.ts    ← Utility types (UpdateUser, PublicUser, UserPreview, CreateOrder, StatusLabels)
│   ├── Partie8.ts    ← Custom mapped types (Optional, ReadonlyCustom, FieldErrors, FieldStatus, Nullable)
│   ├── Partie9.ts    ← Integration exercise — assembles all previous concepts
│   └── Partie10.ts   ← Reflection exercises (union safety, Pick vs Omit)
├── dist/              ← Compiled output (tsc)
├── node_modules/
├── package.json
├── package-lock.json
├── tsconfig.json      ← Strict-mode TypeScript configuration
└── README.md
```

---

## 2. Typing Modules

| File | Focus | Key Exports |
| --- | --- | --- |
| `Partie1.ts` | Types & primitives | `User`, `Beneficiary`, `Money`, `Order` |
| `Partie2.ts` | Interfaces | `User`, `Address`, `Beneficiary`, `Identifiable`, `Contactable` |
| `Partie3.ts` | Classes | `OrderManager` |
| `Partie4.ts` | Unions | `City`, `OrderStatus` |
| `Partie5.ts` | Narrowing | `printValue`, `formatId`, `printBeneficiary`, `getContact` |
| `Partie6.ts` | Discriminated unions | `GroceryOrder`, `PharmacyOrder`, `GiftOrder`, `CakeOrder`, `describeOrder` |
| `Partie7.ts` | Utility types | `UpdateUser`, `PublicUser`, `UserPreview`, `ReadonlyUser`, `CreateOrder`, `UpdateOrder`, `StatusLabels` |
| `Partie8.ts` | Mapped types | `Optional<T>`, `ReadonlyCustom<T>`, `FieldErrors<T>`, `FieldStatus<T>`, `Nullable<T>` |
| `Partie9.ts` | Integration | Full business layer combining all of the above |
| `Partie10.ts` | Reflection | Written answers on typing trade-offs (unions vs `string`, `Pick` vs `Omit`) |

---

## 3. Interfaces

Interfaces describe the project's core business entities: **`User`** and **`Beneficiary`** (`Partie2.ts`), along with **`Address`** and **`Identifiable`**. Interfaces were chosen over `type` aliases because these entities represent **object contracts** meant to be extended (`extends Identifiable`) — a use case interfaces handle naturally, especially for inheritance and declaration merging.

```typescript
export interface Identifiable {
  id: number;
}

export interface User extends Identifiable {
  name: string;
  email: string;
  phone: number;
}
```

---

## 4. Unions and Discriminated Unions

Two simple unions restrict values to a finite, safe set:

| Type | Definition |
| --- | --- |
| `City` | `"Bafoussam" \| "Douala" \| "Yaounde"` |
| `OrderStatus` | `"pending" \| "in_progress" \| "completed" \| "cancelled"` |

A **discriminated union** models the different order types:

```typescript
type OrderDetails = GroceryOrder | PharmacyOrder | GiftOrder;
```

Each interface carries a discriminant field `type` with a fixed literal value (`"grocery"`, `"pharmacy"`, `"gift"`), letting TypeScript know exactly which variant it's dealing with at any point in the code.

---

## 5. Narrowing

Narrowing is required wherever a value can be one of several types and the code needs a property specific to just one of them:

| Location | Technique | Purpose |
| --- | --- | --- |
| `describeOrder` | `switch (order.type)` | Safely access `items`/`deliveryAddress` only in the `"grocery"` branch, `medicationName` only in `"pharmacy"`, etc. |
| `printValue`, `formatId` | `typeof value === "string"` | Distinguish `string` from `number` |
| `printBeneficiary`, `getContact` | Property-presence check | Distinguish `User` from `Beneficiary`, since neither shares an explicit discriminant |

---

## 6. Utility Types

| Utility type | Used for | Why |
| --- | --- | --- |
| `Partial<T>` | `UpdateUser`, `UpdateOrder` | Partial updates — only changed fields are required |
| `Omit<T, K>` | `PublicUser` (drops `email`), `CreateOrder` (drops `id`/`status`) | Derives a type excluding a few fields, without copying the rest |
| `Pick<T, K>` | `UserPreview`, `OrderPreview` | Derives a lightweight subset of fields |
| `Readonly<T>` | `ReadonlyUser` | Prevents modification after creation |
| `Record<K, V>` | `StatusLabels` | Guarantees a label for every `OrderStatus` value |
| `ReturnType<typeof fn>` | `UserFromFunction` | Derives a type from `getUser()`'s return value |

---

## 7. Custom Mapped Type

**`OrderFormErrors<T>`** represents validation errors for an order form:

```typescript
type OrderFormErrors<T> = {
  [K in keyof T]?: string;
};
```

Given a form type (e.g. `OrderFormInput { city, type }`), it produces an object where every key is optional and, if present, holds an error message. It's used by `validateOrderForm`, which returns a typed object containing only the fields that are actually invalid.

---

## 8. OrderManager Class

```text
OrderManager
├── private orders: OrderDetails[]
├── add(order)                     → store a new order
├── findById(id)                   → locate one order
└── getTotalAmount()               → sum every order's amount
```

---

## 9. Configuration

Strict mode is enabled in `tsconfig.json`:

```json
{
  "compilerOptions": {
    "strict": true,
    "target": "ES2020",
    "module": "ESNext",
    "moduleResolution": "Bundler",
    "outDir": "dist",
    "rootDir": "src"
  }
}
```

---

## 10. Installation and Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/GyzShaNice/typescriptExo.git
   cd typescriptExo
   ```
2. **Install dependencies**
   ```bash
   npm install
   ```

---

## 11. Running the Project

Run any part directly with `tsx`:

```bash
npx tsx src/Partie9.ts
```

Or compile the whole project according to `tsconfig.json`:

```bash
npx tsc
```

---

## 12. Author

**Jizz**

**GitHub:** https://github.com/GyzShaNice

**Email:** berenicewandji02@gmail.com