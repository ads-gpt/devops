# student-info-app

A simple Student Information App used to demonstrate collaborative Git workflows
(branches, commits, Pull Requests, merging, and merge conflicts) in a lab setting.

## Team Members

| Name    | Role                |
|---------|---------------------|
| Adarsh  | Team Lead / Developer |
| Ahanya | UI Developer        |
| Nandini  | JavaScript Developer |

## Project Description

A simple Student Information Web App that displays a student's name, register
number, and programme, with a "Show Details" button that reveals the
information via JavaScript. The app has no database or backend — it exists
purely as a vehicle for practicing a collaborative Git workflow (branching,
commits, Pull Requests, merges, and conflict resolution).

## Technologies Used

- HTML
- CSS
- JavaScript
- Git
- GitHub

## Git Branching Strategy

- `main` — always holds the working, integration-ready version of the app.
  Nobody commits to it directly.
- Feature branches — each change is made on its own branch off `main` and
  brought back in via a Pull Request:
  - `feature/ui` — UI/CSS improvements (card layout, spacing, headings, button styling)
  - `feature/javascript` — "Show Details" click functionality
  - `feature/contact` — contact information section (email, phone)
  - `feature/student-name` — heading update ("Student Management System")
  - `feature/app-title` — heading update ("MCA Student Information Portal")
    — created from the same base as `feature/student-name` to deliberately
    produce a merge conflict once both try to merge into `main`

## Pull Requests Created

| PR | Source → Target | Purpose |
|----|------------------|---------|
| #1 | `feature/javascript` → `main` | Add "Show Details" functionality |
| #2 | `feature/app-title` → `main` | Update application title; deliberately conflicted with PR #5 and was resolved locally |
| #3 | `feature/ui` → `main` | Improve student information UI |
| #4 | `feature/contact` → `main` | Add contact information |
| #5 | `feature/student-name` → `main` | Update application heading |

## Merge Conflict

**What caused it:** `feature/student-name` and `feature/app-title` were both
branched from the same point on `main` and each changed the same line —
the `<h1>` heading in `index.html` — to a different value
(`Student Management System` vs. `MCA Student Information Portal`).
`feature/student-name` was merged into `main` first, so when
`feature/app-title` was merged afterward, Git could not automatically decide
which version of that line to keep.

**How it was resolved:** The conflict was resolved locally by merging
`main` into `feature/app-title`, opening `index.html`, and manually combining
both headings into a single line
(`<h1>Student Management System – MCA</h1>`), removing the
`<<<<<<<`, `=======`, and `>>>>>>>` conflict markers. The resolution was
committed (`Resolve merge conflict in application title`), pushed, and the
Pull Request was then merged into `main`.

## How to Run

Open `index.html` in any web browser. No build tools, servers, or dependencies
are required.
