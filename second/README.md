# CI/CD Pipeline with GitHub Actions & Codecov

## 👋 About

This project demonstrates setting up a CI/CD pipeline using GitHub Actions with automated testing and coverage reporting via Codecov.

---

## 🚀 Features

* Automated tests on every push & pull request
* Continuous Integration using GitHub Actions
* Code coverage reports using Codecov

---

## ⚙️ GitHub Actions Workflow

Located in:

```
.github/workflows/
```

Example workflow:

* Install dependencies
* Run tests
* Upload coverage

---

## 🧪 Run Locally

```bash
npm install
npm test
```

---

## 🔁 CI Flow

1. Push code to GitHub
2. GitHub Actions runs tests automatically
3. Coverage is uploaded to Codecov
4. Status is shown in PR

---

## 📊 Code Coverage

Integrated with Codecov to track:

* Test coverage %
* File-level insights

---

## 🔐 Setup Notes

* Add `CODECOV_TOKEN` in GitHub repo secrets
* Ensure coverage reports are generated (e.g., using Jest)

---

## 📌 Notes

* CI runs on every push to main branch
* Failing tests will block merging (if required)
