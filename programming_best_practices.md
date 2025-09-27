# Programming Best Practices

## Architecture and Design

- Write code with **low coupling and high cohesion**
- Each module, class, or function should have a clear and well-defined responsibility
- Dependencies between components should be minimal and explicit
- Favor composition over inheritance when appropriate

## Constants and Variables

- **NEVER** use hardcoded values in code
- Define constants with descriptive names for all literal values
- Use SCREAMING_SNAKE_CASE for global constants
- Group related constants in objects or configuration files
- Constants should be at the beginning of the file or in dedicated files

## Clean Code

- **Meaningful names**: Variables, functions, and classes should have names that clearly express their purpose
- **Small functions**: A function should do one thing and do it well
- **Useful comments**: Code should be self-documenting; use comments only to explain the "why," not the "what"
- **Consistent formatting**: Maintain uniform code style
- **Error handling**: Implement robust error handling, don't ignore errors

## Version Control and Git

- **PROHIBITED to execute automated Git commands**: Never execute the following commands:
  - `git pull`
  - `git push`
  - `git fetch`
  - `git merge`
  - `git rebase`
- These commands require human decision and can cause conflicts or data loss
- Suggest the user manually execute these commands when necessary
- You can use safe Git commands like `git status`, `git log`, `git diff`

## General Principles

- **DRY (Don't Repeat Yourself)**: Don't repeat code, extract common functionality
- **KISS (Keep It Simple, Stupid)**: Keep solutions simple and straightforward
- **YAGNI (You Aren't Gonna Need It)**: Don't implement functionality until you need it
- **Principle of least surprise**: Code should behave as expected
- **Separation of responsibilities**: Separate business logic from presentation and persistence

## Fundamental Design Principles

### Separation of Concerns (SoC)

- **Clear separation of responsibilities**: Each component should handle a single concern
- Divide functionality into distinct and independent modules
- Prevents changes in one part of the system from affecting other areas of the system
- Facilitates maintenance, testing, and code comprehension

### Law of Demeter (Principle of least knowledge)

- **"Don't talk to strangers"**: An object should only communicate with its direct collaborators
- Reduces coupling between classes and modules
- A method M of an object O should only invoke methods of:
  - The object O itself
  - Parameters passed to M
  - Objects created within M
  - Direct components of O

### Modularity

- **Design in cohesive modules**: Group related functionality
- Each module should have a clear and well-defined interface
- Modules should be interchangeable without affecting other modules
- Facilitates reuse, testing, and maintenance
- Enables parallel development by different teams

## Dependency Management

- Dependency injection to improve testability
- Use abstractions to decouple components
- Manage dependencies explicitly
- Avoid circular dependencies

## Testing and Quality

- Write testable code
- Use mocks and dependency injection to facilitate testing
- Maintain high code coverage
- Implement different types of tests (unit, integration, end-to-end)

## Performance and Optimization

- Optimize only when necessary and after measuring
- Use appropriate data structures for each case
- Avoid premature optimization
- Consider temporal and spatial complexity

## Security

- Validate and sanitize all inputs
- Use principle of least privilege
- Don't hardcode credentials or sensitive information
- Implement appropriate authentication and authorization

## Documentation

- Document public APIs
- Keep documentation up to date
- Use consistent nomenclature
- Include usage examples when relevant

These principles are applicable regardless of programming language and should be followed consistently throughout the project.
