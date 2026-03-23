# CLAUDE.MD

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Core Principles

- **Simplicity First**: Make every change as simple as possible. Minimal code impact.
- **No Laziness**: Find root causes. No temporary fixes. Senior developer standards.
- **Minimal Impact**: Only touch what's necessary. Avoid introducing side-effects.

## Skills

These skills are loaded automatically. Read the relevant SKILL.md before starting any task that matches a skill's domain — this is mandatory, not optional.

- **frontend-design**: [Skill Path](file:///C:/Users/vilan/claude-skills/frontend-design/SKILL.md)
- **brand-guidelines**: [Skill Path](file:///C:/Users/vilan/claude-skills/brand-guidelines/SKILL.md)
- **theme-factory**: [Skill Path](file:///C:/Users/vilan/claude-skills/theme-factory/SKILL.md)
- **design-an-interface**: [Skill Path](file:///C:/Users/vilan/claude-skills/design-an-interface/SKILL.md)
- **canvas-design**: [Skill Path](file:///C:/Users/vilan/claude-skills/canvas-design/SKILL.md)
- **web-artifacts-builder**: [Skill Path](file:///C:/Users/vilan/claude-skills/web-artifacts-builder/SKILL.md)
- **webapp-testing**: [Skill Path](file:///C:/Users/vilan/claude-skills/webapp-testing/SKILL.md)
- **skill-creator**: [Skill Path](file:///C:/Users/vilan/claude-skills/skill-creator/SKILL.md)
- **Other Skills**: `algorithmic-art`, `claude-api`, `doc-coauthoring`, `docx`, `internal-comms`, `mcp-builder`, `pdf`, `pptx`, `slack-gif-creator`, `xlsx`.

## Workflow

### Plan Before Acting

- Enter plan mode for any non-trivial task (3+ steps or architectural decisions).
- Write plan to `tasks/todo.md` with checkable items, then check in before starting implementation.
- If something goes sideways, stop and re-plan immediately — don't keep pushing.

### Subagent Strategy

- Offload research, exploration, and parallel analysis to subagents to keep the main context window clean.
- One focused task per subagent.

### Self-Improvement Loop

- After any correction from the user, update `tasks/lessons.md` with the pattern.
- Write rules that prevent the same mistake from recurring. Review lessons at session start.

### Verification Before Done

- Never mark a task complete without proving it works: run tests, check logs, demonstrate correctness.
- Mark items complete in `tasks/todo.md` as you go, and add a result summary when finished.
- Ask: "Would a staff engineer approve this?"

### Elegance Check

- For non-trivial changes, pause and ask: "Is there a more elegant way?"
- If a fix feels hacky: "Knowing everything I know now, implement the elegant solution."
- Skip for simple, obvious fixes.

### Autonomous Bug Fixing

- When given a bug report, just fix it. Point at logs/errors/failing tests, then resolve them.
- Go fix failing tests without being told how.
