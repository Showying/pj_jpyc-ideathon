---
description: Generate a GitHub commit message based on the current changes (git status/diff)
---
1. **Analyze Changes**:
   - Run `git status` to identify modified, new, and deleted files.
   - Run `git diff` (and `git diff --cached` if needed) to understand the *semantic* value of the changes.

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
