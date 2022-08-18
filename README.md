# Credix Full-Stack Technical Task

## Goal

The goal of this technical task is:

- create an API which supports:
  1. Create of Form Definitions
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

- Form 1

  - What is your name? string
  - Where do you live? tuple (lat/lon)
  - How long, in seconds, can you hold your breath? integer

- Form 2
  - Are you interested in crypto? boolean
  - How many different coins have you invested in? integer
  - What was the date you first bought crypto? date
  - How many times, per year, do you buy crypto? integer

### Submit + Validate Entries

We will submit the following entries (the entries marked as **invalid** should throw an error):

**Form 1 - entry 1**

| question                                        | answer       | validation |
| ----------------------------------------------- | ------------ | ---------- |
| What is your name?                              | "Mark"       | valid      |
| Where do you live?                              | (2838, 2837) | valid      |
| How long, in seconds, can you hold your breath? | 32           | valid      |

**Form 1 - entry 2**

| question                                        | answer      | validation |
| ----------------------------------------------- | ----------- | ---------- |
| What is your name?                              | "Andrew"    | valid      |
| Where do you live?                              | (4726, 348) | valid      |
| How long, in seconds, can you hold your breath? | 45          | valid      |

**Form 1 - entry 3**

| question                                        | answer      | validation |
| ----------------------------------------------- | ----------- | ---------- |
| What is your name?                              | "John"      | valid      |
| Where do you live?                              | (482, 2833) | valid      |
| How long, in seconds, can you hold your breath? | 20          | valid      |

**Form 2 - entry 1**

| question                                      | answer     | validation |
| --------------------------------------------- | ---------- | ---------- |
| Are you interested in crypto                  | True       | valid      |
| How many different coins have you invested in | 4          | valid      |
| What was the date you first bought crypto     | 21/01/2002 | valid      |
| How many times, per year, do you buy crypto   | 73         | valid      |

**Form 2 - entry 2**

| question                                      | answer     | validation |
| --------------------------------------------- | ---------- | ---------- |
| Are you interested in crypto                  | F          | valid      |
| How many different coins have you invested in | 3          | valid      |
| What was the date you first bought crypto     | 09/03/2006 | valid      |
| How many times, per year, do you buy crypto   | 23         | valid      |

**Form 2 - entry 3**

| question                                      | answer     | validation  |
| --------------------------------------------- | ---------- | ----------- |
| Are you interested in crypto                  | 0          | **invalid** |
| How many different coins have you invested in | "12"       | **invalid** |
| What was the date you first bought crypto     | 09/03/2006 | valid       |
| How many times, per year, do you buy crypto   | 23         | valid       |

### Filter on Entries (optional)

- Get all persons who can hold their breath for longer than 30 seconds.

---

## Frontend

We've provided you with a skeleton nextjs project.
Feel free to add and use any library you want. We don't want you to reinvent the wheel.

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

- Github link with README
- Working demo

Getting started
Make sure we can call the service using the following [postman specs](https://www.postman.com/warped-desert-361522/workspace/be-technical-task/collection/19602918-4639a3da-70c6-4207-998d-75b2ee900b52?action=share&creator=19602950)
