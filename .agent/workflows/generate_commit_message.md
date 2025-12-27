---
description: Generate a GitHub commit message based on the current changes (git status/diff)
---
1. **Analyze Context**:
   - Recall the task you just completed and the files you modified.
   - If user explicitly provides diff context, use it.
   - *Do not run `git status` or `git diff` unless explicitly asked.*

2. **Formulate Commit Message**:
   - Follow the **Conventional Commits** format: `<type>(<scope>): <subject>`
     - Types: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `chore`.
   - **Subject**: Concise summary (Japanese).
   - **Body**: Bulleted list of specific changes (Japanese).

3. **Output Format (Markdown)**:
   ```markdown
   **件名:**
   type(scope): subject

   **内容:**
   *   change detail 1
   *   change detail 2
   ```

4. **Review**:
   - Present this to the user for use in their manual commit or PR.
