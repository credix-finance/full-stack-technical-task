# Credix Full-Stack Technical Task

## Context & goal

At the moment Credix reads from and to the Solana blockchain. Now we want to start building a backend service to capture information about our borrowers and show this info to the investors. To capture this information, we want to be able to create dynamic forms among other features.

For technical tasks, we always choose a challenge which is close to the ones that we face every day. We pick one, dummy it down and have a clear goal in mind:

The goal of this technical task is:

- create an API in which:
  1. Create Form Definitions
     - each field in the definition has a “question” and a data type that the answer should adhere to
  2. Submit + Validate Entries
     - form entries should be validated on data field types
  3. Filter on Entries (optional)
- create a frontend in which:
  1. A sigle form definition can be shown
  2. Entries can be submitted based on a form definition
  3. New form definitions can be created (optional)

---

## Backend

You're free to use whatever database solution that you prefer.
We provide two projects in this repo:

- one with a postgres setup
- one with a monogodb setup

If you're more comfortable with something else feel free to include it.

### Create Form Definitions

To test your implementation; we will create two forms (the service should be able to create an arbitrary number of forms):

- Borrower form
  - What is the name of your company? string
  - Where is your company located? tuple (lat/lon)
  - How long does your company exist? integer
- Investor form
  - How much capital do you want to invest? integer
  - Are you interested in investing in individual deals? boolean
  - What was the date your company was founded? date
  - How many people work at your firm? integer

### Submit + Validate Entries

We will submit the following entries (the entries marked as **invalid** should throw an error):

**Borrower - entry 1**

| question                          | answer       | validation |
| --------------------------------- | ------------ | ---------- |
| What is the name of your company? | “a 55”       | valid      |
| Where is your company located?    | (2838, 2837) | valid      |
| How long does your company exist  | 6            | valid      |

**Borrower - entry 2**

| question                          | answer      | validation |
| --------------------------------- | ----------- | ---------- |
| What is the name of your company? | “Tecredi”   | valid      |
| Where is your company located?    | (4726, 348) | valid      |
| How long does your company exist  | 2           | valid      |

**Borrower - entry 3**

| question                          | answer      | validation |
| --------------------------------- | ----------- | ---------- |
| What is the name of your company? | “Provi”     | valid      |
| Where is your company located?    | (482, 2833) | valid      |
| How long does your company exist  | 8           | valid      |

**Investor - entry 1**

| question                                            | answer     | validation |
| --------------------------------------------------- | ---------- | ---------- |
| How much capital do you want to invest              | 5000000    | valid      |
| Are you interested in investing in individual deals | True       | valid      |
| What was the date your company was founded          | 21/01/2002 | valid      |
| How many people work at your firm                   | 73         | valid      |

**Investor - entry 2**

| question                                            | answer     | validation |
| --------------------------------------------------- | ---------- | ---------- |
| How much capital do you want to invest              | 10000000   | valid      |
| Are you interested in investing in individual deals | F          | valid      |
| What was the date your company was founded          | 09/03/2006 | valid      |
| How many people work at your firm                   | 23         | valid      |

**Investor - entry 3**

| question                                            | answer     | validation  |
| --------------------------------------------------- | ---------- | ----------- |
| How much capital do you want to invest              | "10M"      | **invalid** |
| Are you interested in investing in individual deals | 1          | **invalid** |
| What was the date your company was founded          | 09/03/2006 | valid       |
| How many people work at your firm                   | 23         | valid       |

### Filter on Entries (optional)

- Get all borrowers whose company has existed longer than 3 years.

---

## Frontend

We've provided you with a skeleton nextjs project.
Feel free to add and use any library you want. We don't want you to reinvet the wheel.

For reference at Credix we use the following technologies:

- Tailwindcss
- Ant design
- Ant charts
- Storybook
- Cypress

### Show form definition

Create a page where you display a form definition.

### Submit form entry

It should be possible to submit new entries.

### Create new form definitions

Create a page where you can define and submit new form definitions.

---

## Practicalities

Time limit: 8-10 hours

Deliverables:

- Architectural diagram
- Github link with README
- Working demo

Getting started
Make sure we can call the service using the following [postman specs](https://www.postman.com/warped-desert-361522/workspace/be-technical-task/collection/19602918-4639a3da-70c6-4207-998d-75b2ee900b52?action=share&creator=19602950)
