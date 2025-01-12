---
layout: ../../layouts/MarkdownPostLayout.astro
title: "AI Agents and Secrets Management"
pubDate: 01-10-2025
author: 'Sajid Pervez'
isDraft: false
cover:
  src: "/blog-images/agent-with-keys.png"
  alt: ""
tags: ["AI Agents", "Secrets Management", "AppSec"]
canonicalURL: "https://localhost:4321/blog/AI-Agents-and-Secrets-Management"
---

# AI Agents and Secrets Management

Agent-based systems are becoming the backbone of modern software architectures. These systems automate repetitive tasks that humans find tedious and are increasingly being designed to work with voice-based interfaces—the next wave of user interaction.

Take a look at this simple architecture diagram. Threat modeling such a system can uncover a wide range of issues, from **remote code execution** to **authentication, authorization, session management**, and beyond. While I plan to address many of these in future posts, this micro-blog will focus on one critical area: **secrets management**.
![A simple architecture diagram](/blog-images/agents-archi-1.png)

## Secrets Management: The Heart of Secure Agent Systems

Imagine you have a personal banking agent that tracks and analyzes your finances—income, expenses, savings, trends, and more. For it to work, you would need to entrust it with your sensitive credentials: username, password, and MFA tokens. Without proper safeguards, this could lead to devastating consequences, such as:

- **Leaking credentials to the LLM**: The agent might inadvertently pass your credentials to the language model, which could store them in memory or logs.
- **Leaking credentials to the Host OS**: Credentials might be exposed to the operating system where the agent runs, increasing the attack surface.
- **Leaking credentials to logs**: Secrets could unintentionally appear in application or debug logs.
- **Leaking credentials in output**: Poorly designed agents might include sensitive information in their responses.

## The Complexity of Multi-Agent Systems

Now, consider a more complex scenario: multiple agents from different teams within an organization, each requiring access to sensitive secrets (e.g., privileged API keys) to perform their tasks. To make things even trickier, imagine these agents are developed and deployed independently by different teams, each following their own practices. Add third-party agents into the mix, and you have a recipe for disaster if even one agent mishandles its secrets.

![A multi-agent system](/blog-images/agents-archi-2.png)

In such scenarios, risks include:

- **Inter-agent secrets leakage**: One agent unintentionally exposing secrets to another agent.
- **Secrets sprawl**: Secrets proliferating across teams and systems, increasing the attack surface.
- **Third-party vulnerabilities**: External agents may not follow your organization's security practices, introducing new risks.

## Best Practices for Secrets Management

To address these challenges, engineers and security teams must adopt robust security practices:

1. **Secure Storage**: 
   - Always use vaults (e.g., HashiCorp Vault, AWS Secrets Manager) to store secrets securely.
2. **Dependency Injection**:
   - Leverage built-in framework controls for injecting secrets at runtime instead of hardcoding them. Here is an example:

   ```python
    @user_proxy.register_for_execution()
    @assistant.register_for_llm(description="Get the balance of the account")
    def get_balance_1(
        # Account which will be injected to the function
        account: Annotated[Account, Depends(bob_account)],
        # It is also possible to use the following syntax to define the dependency
        # account: Account = Depends(bob_account),
    ) -> str:
        return _get_balance(account)
    ```
3. **Input and Output Validation**:
   - Rigorously validate inputs and outputs to and from the agent, especially when interacting with the LLM or Host OS.
4. **Scoped Secrets**:
   - Attach minimal privileges to all secrets (e.g., API tokens) and restrict their usage to specific tasks.
5. **Secrets in Logs**:
   - Avoid logging sensitive data, and use redaction tools to scrub logs if needed.
6. **Secrets Rotation**:
   - Establish automated processes to rotate secrets periodically or after a potential exposure.

## Raising the Bar with Security Agents

Implementing these practices is easier said than done. Security teams need to take proactive measures, such as:

- **Building Security Agents**: Develop agents designed to enforce guardrails for secret handling, monitor compliance, and prevent secrets sprawl.
- **Monitoring and Response**: Deploy robust monitoring tools to detect and respond to risky events, such as unauthorized access or potential secret leaks.


## Key Takeaway

In agent-based systems, secrets management is not just a technical necessity but a cornerstone of security. By implementing strong practices and leveraging tools for secure storage, validation, and monitoring, we can prevent disasters and build trust in these systems.

## References
1. [Security of AI Agents](https://arxiv.org/html/2406.08689v2)
2. [Dependency Injection](https://docs.ag2.ai/blog/2025-01-07-Tools-Dependency-Injection/index)
